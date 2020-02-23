/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// import { MemoryRouter } from 'react-router';
import toJSON from 'enzyme-to-json';
import BecomeAHost from './BecomeAHost';

const propsData = {
}

const setup = props => {
  const wrapper = shallow(
    <BecomeAHost {...props} />
  );

  return { wrapper };
}

describe('Test PageLayout', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup(propsData);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})