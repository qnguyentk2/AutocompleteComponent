/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import '../assets/styles/main.scss';

// export default ReactDOM.render(<App />, document.getElementById('app'));

function renderToDOM() {
  const root = document.getElementById('app');
  if (root !== null) {
      ReactDOM.render(<App />, root)
  }
}

function moduleHotAccept(mod) {
  if (mod && mod.hot) {
    mod.hot.accept();
  }
}

renderToDOM();
moduleHotAccept(module)

export { renderToDOM, moduleHotAccept };
