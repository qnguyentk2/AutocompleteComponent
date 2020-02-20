import React from 'react';
import PropTypes from 'prop-types';

import phoneIcoon from '../assets/imgs/icons/phone.svg';

const App = ({ title }) => (
  <div>
    <div>{title}</div>
    <img alt="phone" src={phoneIcoon} />
  </div>
);

export default App;

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: '',
};
