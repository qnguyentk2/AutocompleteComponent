/* eslint-disable no-undef */
import ReactDOM from "react-dom";
import { renderToDOM, moduleHotAccept } from './index';


describe('Test Index', () => {
  const originalRender = ReactDOM.render;
  const originalGetElement = global.document.getElementById;

  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });

  afterAll(() => {
    global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
  });

  it("should call ReactDOM.render", () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });

  it("should call moduleHotAccept", () => {
    const accept = jest.fn();
    const mockModule = { hot: { accept } };
    moduleHotAccept(mockModule);
    expect(accept).toHaveBeenCalled();
  });

  it('should not throw if module is undefined', () => {
      expect(moduleHotAccept).not.toThrow();
    }
  );

  it('should not throw if module.hot is undefined', () => {
      expect(
        () => moduleHotAccept({notHot: -273})
      ).not.toThrow();
    }
  );
});
