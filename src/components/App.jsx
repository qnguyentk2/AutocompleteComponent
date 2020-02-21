import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Header from '@components/Header/Header';
import Autocomplete from '@components/Autocomplete/Autocomplete';
import { GlobalProvider, GlobalConsumer } from '@contexts/GlobalContext';
import styles from './styles.scss';

const suggestions = ['Hồ Chí Minh', 'Hội An', 'Hà Nội'];

const App = () => (
  <GlobalProvider>
    <GlobalConsumer>
      {props => {
        const { isLightMode, isBurgerMenuOpen } = props;
        return (
          <div className={classnames(styles.container, isLightMode || isBurgerMenuOpen ? '' : styles.darkMode)}>
            <Header {...props} />
            <Autocomplete {...props} suggestions={suggestions} />
          </div>
        )
      }}
    </GlobalConsumer>
  </GlobalProvider>
);

export default App;

App.propTypes = {
  isLightMode: PropTypes.bool,
  isBurgerMenuOpen: PropTypes.bool
};

App.defaultProps = {
  isLightMode: true,
  isBurgerMenuOpen: false
};