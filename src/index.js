/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../assets/styles/main.scss';

const title = 'React with Webpack and Babel';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app'),
);

module.hot.accept();
