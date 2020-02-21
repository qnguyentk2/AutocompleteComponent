import React from 'react';
// import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import classNames from 'classnames';

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
    height: '100%',
    top: 0
  },
  bmMenu: {
    background: 'rgb(98, 101, 113)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  bmItem: {
    display: 'inline-block',
    padding: '10px',
    fontSize: '18px',
    color: 'aliceblue',
    textDecoration: 'unset',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    left: 0
  }
}

const menuItemArr = ['Become a host', 'Help', 'Sign up', 'Log in'];

const BurgerMenu = () => {
  return (
    <div>
      <Menu right styles={{...burgerStyles}} outerContainerId="app">
        {
          menuItemArr.reverse().map(item => (
            <a key={item} id={item} className={classNames("menu-item")}>
              {item}
            </a>
          ))
        }
      </Menu>
    </div>
  )
}

export default BurgerMenu;

BurgerMenu.propTypes = {
  // showMenu: PropTypes.func,
};

BurgerMenu.defaultProps = {
  showMenu: () => {},
};