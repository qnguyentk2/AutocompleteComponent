import React, { useContext } from 'react';
import { isMobile } from 'react-device-detect';

import BurgerMenu from '@components/BurgerMenu/BurgerMenu';

import GlobalContext from '@contexts/GlobalContext';
import logo from '@assets/imgs/icons/logo.svg';
import lightMode from '@assets/imgs/icons/light-mode.svg';
import darkMode from '@assets/imgs/icons/dark-mode.svg';
import styles from './Header.scss';

const Header = () => {
  const { isLightMode, handleChangeThemeMode } = useContext(GlobalContext);
  const menuItemArr = ['Become a host', 'Help', 'Sign up', 'Log in'];

  console.log('isMobile: ', isMobile);

  const handleShowMenu = (e) => {
    e.preventDefault();
  }

  const renderMenuMobileMode = () => {
    return <BurgerMenu showMenu={handleShowMenu} />
  }

  const renderMenuDestopMode = () => (
    <div className={styles.leftSide}>
      <a
        onClick={handleChangeThemeMode}
        className={styles.themeMode}
      >
        <img alt="theme" src={isLightMode ? lightMode : darkMode} />
      </a>
      {menuItemArr.map(item => (
        <a key={item}>{item}</a>
      ))}
    </div>
  )

  return (
    <div className={styles.Header}>
      <div className={styles.rightSide}>
        <img className={styles.logo} alt="logo" src={logo} />
      </div>
      {
        isMobile ? renderMenuMobileMode() : renderMenuDestopMode()
      }
      {/* {renderMenuDestopMode()} */}
    </div>
  );
};

export default Header;
