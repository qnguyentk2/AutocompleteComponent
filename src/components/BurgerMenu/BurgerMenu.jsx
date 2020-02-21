import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

const burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    right: '26px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const BurgerMenu = ({ showMenu }) => {
  return (
    <div>
      <Menu styles={{...burgerStyles}} outerContainerId="app" disableAutoFocus>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={showMenu} className="menu-item--small" href="">Settings</a>
      </Menu>
    </div>
  )
}

export default BurgerMenu;

BurgerMenu.propTypes = {
  showMenu: PropTypes.func,
};

BurgerMenu.defaultProps = {
  showMenu: () => {},
};