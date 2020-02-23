/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */

// fireEvent, screenimport 
import React from 'react';
import { shallow } from 'enzyme';
import GlobalContext from '@contexts/GlobalContext';
import HeaderCtrls from './HeaderCtrls';

describe('Test HeaderCtrls', () => {
  test('it should mock the context', () => {
    const dataContext = {
      isLightMode: false,
      handleChangeThemeMode: jest.fn()
    }
    const wrapper = shallow(
      <GlobalContext.Provider value={dataContext}>
        <HeaderCtrls />
      </GlobalContext.Provider>
    ).dive();
    expect(wrapper.text()).toEqual("");
  });
});