import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Header from '@components/Header/Header';

import AppContent from '@components/AppContent/AppContent';
import styles from './styles.scss';

const PageLayout = props => {
  const {
    isLightMode,
    isBurgerMenuOpen,
  } = props;

  return (
    <div className={classnames(styles.container, isLightMode || isBurgerMenuOpen ? '' : styles.darkMode)}>
      <Header {...props} />
      <AppContent />
    </div>
  )
}

export default PageLayout;

PageLayout.propTypes = {
  isLightMode: PropTypes.bool,
  isBurgerMenuOpen: PropTypes.bool,
  // children: PropTypes.objectOf(PropTypes.any)
};

PageLayout.defaultProps = {
  isLightMode: true,
  isBurgerMenuOpen: false,
  // children: {}
};