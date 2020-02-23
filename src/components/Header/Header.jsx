import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RouteLinks from '@const/routes';
import { isMobileOnly } from 'react-device-detect';
import logo from '@assets/imgs/icons/logo.svg';
import styles from './Header.scss';
import HeaderCtrls from './HeaderCtrls';

const Header = props => {
  const { renderMenuMobileMode, renderMenuDestopMode } = HeaderCtrls(props);
  return (
    <div className={styles.Header}>
      <div className={styles.rightSide}>
        <Link to={`${RouteLinks.landingPage.path}`}>
          <img className={styles.logo} alt="logo" src={logo} />
        </Link>
      </div>
      {
        isMobileOnly ? renderMenuMobileMode() : renderMenuDestopMode()
      }
    </div>
  );
};

export default withRouter(Header);
