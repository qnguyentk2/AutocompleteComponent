/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import '../assets/styles/main.scss';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
