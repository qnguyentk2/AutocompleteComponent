/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Header from './Header';

const setup = () => {
  const wrapper = shallow(<Header />);

  return { wrapper };
}

describe('Test App', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});