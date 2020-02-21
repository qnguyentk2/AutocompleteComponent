/* eslint-disable no-undef */
import React from 'react';
// import { renderHook } from '@testing-library/react-hooks';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Header from './Header';

const setup = () => {
  const wrapper = mount(<Header />);

  return { wrapper };
}

describe('Test App', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});