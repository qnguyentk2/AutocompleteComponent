import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [isLightMode, setMode] = useState(true)
  const handleChangeThemeMode = () => {
    setMode(!isLightMode);
  }

  const dataStore = {
    isLightMode,
    handleChangeThemeMode
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