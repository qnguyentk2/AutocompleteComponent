import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '@contexts/GlobalContext';
import RouteLinks from '@const/routes';
import BurgerMenu from '@components/BurgerMenu/BurgerMenu';
import lightMode from '@assets/imgs/icons/light-mode.svg';
import darkMode from '@assets/imgs/icons/dark-mode.svg';
import styles from './Header.scss';

const HeaderControls = () => {
  const { isLightMode, handleChangeThemeMode } = useContext(GlobalContext);
  const menuItemArr = ['Become a host', 'Help', 'Sign up', 'Log in'];

  const renderChangeMode = () => {
    return (
      <a
        onClick={handleChangeThemeMode}
        className={styles.themeMode}
      >
        <img alt="theme" src={isLightMode ? lightMode : darkMode} />
      </a>
    )
  }

  const renderMenuMobileMode = () => {
    return (
      <>
        {renderChangeMode()}
        <BurgerMenu />
      </>
    )
  }

  const renderMenuDestopMode = () => (
    <div className={styles.leftSide}>
      {renderChangeMode()}
      {menuItemArr.map(item => (
        <Link key={item} to={`${RouteLinks.becomeAHost.path}`}>{item}</Link>
      ))}
    </div>
  )

  return {
    renderMenuMobileMode,
    renderMenuDestopMode
  }
}

export default HeaderControls;