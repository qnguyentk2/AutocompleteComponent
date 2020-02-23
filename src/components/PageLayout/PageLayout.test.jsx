/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import toJSON from 'enzyme-to-json';
import PageLayout from './PageLayout';

const propsData = {
  isLightMode: true,
  isBurgerMenuOpen: true
}

const propsData1 = {
  isLightMode: false,
  isBurgerMenuOpen: false
}


const setup = props => {
  const wrapper = mount(
    <MemoryRouter>
      <PageLayout {...props} />
    </MemoryRouter>
  );

  return { wrapper };
}

describe('Test PageLayout', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup(propsData);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('renders without crashing with dark mode', () => {
    const { wrapper } = setup(propsData1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})