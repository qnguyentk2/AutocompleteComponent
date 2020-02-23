/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Autocomplete from './Autocomplete';

const props1 = {
  suggestions: ['Hồ Chí Minh', 'Hội An', 'Hà Nội'],
  isLightMode: true
}

const props2 = {
  suggestions: ['Hồ Chí Minh', 'Hội An', 'Hà Nội'],
  isLightMode: false
}


const setup = (props) => {
  const wrapper = mount(<Autocomplete {...props} />);

  return { wrapper };
}

describe('Test Autocomplete', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup(props1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders without crashing with dark mode', () => {
    const { wrapper } = setup(props2);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('should have an input field', () => {
    const { wrapper } = setup(props1);
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  test('should render suggestion list', () => {
    const { wrapper } = setup(props1);
    const event = { target: { value: "h" } };
    const elInput = wrapper.find('input');
    elInput.simulate('change', event)
    expect(wrapper.find('ul').length).toEqual(1);
  });

  test('should not render suggestion list', () => {
    const { wrapper } = setup(props1);
    const event = { target: { value: "j" } };
    const elInput = wrapper.find('input');
    elInput.simulate('change', event)
    expect(wrapper.find('ul').length).not.toEqual(1);
    expect(wrapper.find('em').length).toEqual(1);
  });

  test('should have enter key', () => {
    const { wrapper } = setup(props1);
    const event = { currentTarget: { innerText: "h" } };
    const elInput = wrapper.find('input');
    elInput.simulate('change', event);
    elInput.simulate('keyDown', {keyCode: 13});
    expect(wrapper.find('ul').length).not.toEqual(1);
  });

  test('should have key up', () => {
    const { wrapper } = setup(props1);
    const event = { currentTarget: { innerText: "h" } };
    const elInput = wrapper.find('input');
    elInput.simulate('change', event);
    elInput.simulate('keyDown', {keyCode: 38});
    expect(wrapper.find('ul').length).not.toEqual(1);
  });

  test('should have key down', () => {
    const { wrapper } = setup(props1);
    const event = { currentTarget: { innerText: "h" } };
    const elInput = wrapper.find('input');
    elInput.simulate('change', event);
    elInput.simulate('keyDown', {keyCode: 40});
    expect(wrapper.find('ul').length).not.toEqual(1);
  });

  test('should have no key', () => {
    const { wrapper } = setup(props1);
    const event = { currentTarget: { innerText: "h" } };
    const elInput = wrapper.find('input');
    elInput.simulate('change', event);
    elInput.simulate('keyDown', {keyCode: 1});
    expect(wrapper.find('ul').length).not.toEqual(1);
  });
});
