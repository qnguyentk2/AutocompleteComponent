import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import  FontAwesome from 'react-fontawesome';
// import classNames from 'classnames';
import { MENU_ITEMS } from '@const/common';
import GlobalContext from '@contexts/GlobalContext';
import BurgerMenuStyles from './BurgerMenu.scss';

const burgerStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '26px',
    height: '20px',
    top: '5px'
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
    flexDirection: 'column'
  },
  bmItem: {
    display: 'inline-flex',
    padding: '10px',
    fontSize: '16px',
    color: 'aliceblue',
    textDecoration: 'unset',
  },
  bmOverlay: {
    background: 'rgba(14, 1, 1, 0.58)',
    top: 0,
    left: 0
  }
}

MENU_ITEMS.reverse();

const BurgerMenu = () => {
  const { handleDetectBurgerMenu } = useContext(GlobalContext);

  return (
    <div>
      <Menu onStateChange={handleDetectBurgerMenu} pageWrapId="app" right styles={{...burgerStyles}} outerContainerId="app">
        {
          MENU_ITEMS.map(item => (
            <div className={BurgerMenuStyles.itemWrapper}>
              {
                item.icon && (
                  <div className={BurgerMenuStyles.iconWrapper}>
                    <FontAwesome 
                      className="super-crazy-colors"
                      name={item.icon}
                      size="1.5x"
                      // spin
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', padding: '9px' }}
                    />
                  </div>
                )
              }
              <div className={BurgerMenuStyles.menuItem}>
                <a key={item.label} id={item.label}>
                  {item.label.toLocaleUpperCase()}
                </a>
              </div>
            </div>
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
  // showMenu: () => {},
};