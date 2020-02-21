import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [isLightMode, setMode] = useState(true);
  const [isBurgerMenuOpen, setBurgerMenu] = useState(false);

  const handleChangeThemeMode = () => {
    setMode(!isLightMode);
  }

  const handleDetectBurgerMenu = (state) => {
    setBurgerMenu(state.isOpen);
  }

  const dataStore = {
    isLightMode,
    handleChangeThemeMode,
    isBurgerMenuOpen,
    handleDetectBurgerMenu
  }

  return (
    <GlobalContext.Provider value={dataStore}>
      {children}
    </GlobalContext.Provider>
  )
}

export const GlobalConsumer = GlobalContext.Consumer
export default GlobalContext;

GlobalProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

GlobalProvider.defaultProps = {
  children: {},
};