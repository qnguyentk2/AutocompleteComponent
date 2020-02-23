/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import toJSON from 'enzyme-to-json';
import AppContent from './AppContent';


const setup = () => {
  const wrapper = mount(
    <MemoryRouter>
      <AppContent />
    </MemoryRouter>
  );

  return { wrapper };
}

describe('Test AppContent', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})