import React, { useState } from 'react';
import logo from '@assets/imgs/icons/logo.svg';
import lightMode from '@assets/imgs/icons/light-mode.svg';
import darkMode from '@assets/imgs/icons/dark-mode.svg';
import styles from './Header.scss';

const Header = () => {
  const menuItemArr = ['Become a host', 'Help', 'Sign up', 'Log in'];
  const [isLightMode, setMode] = useState(true);
  const handleChangeThemeMode = () => {
    setMode(!isLightMode);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.rightSide}>
        <img alt="logo" src={logo} />
      </div>
      <div className={styles.leftSide}>
        <a
          onClick={handleChangeThemeMode}
          className={styles.themeMode}
        >
          <img alt="theme" src={isLightMode ? lightMode : darkMode} />
        </a>
        {menuItemArr.map(item => (
          <a>{item}</a>
        ))}
      </div>
    </div>
  );
};

export default Header;
