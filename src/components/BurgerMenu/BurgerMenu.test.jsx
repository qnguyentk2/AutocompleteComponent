/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import BurgerMenu from './BurgerMenu';

const setup = () => {
  const wrapper = shallow(<BurgerMenu />);

  return { wrapper };
}

describe('Test BurgerMenu', () => {
  test('renders BurgerMenu without crashing', () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})