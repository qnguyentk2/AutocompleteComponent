/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { GlobalProvider } from './GlobalContext';

const setup = () => {
  const wrapper = shallow(<GlobalProvider />);

  return { wrapper };
}

describe('Test GlobalProvider', () => {
  test('renders GlobalProvider without crashing', () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})