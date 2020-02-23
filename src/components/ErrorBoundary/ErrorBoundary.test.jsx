/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// import { MemoryRouter } from 'react-router';
import toJSON from 'enzyme-to-json';
import ErrorBoundary from './ErrorBoundary';

const propsData = {
  children: {}
}

const setup = props => {
  const wrapper = shallow(
    <ErrorBoundary {...props} />
  );

  return { wrapper };
}

describe('Test PageLayout', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup(propsData);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})