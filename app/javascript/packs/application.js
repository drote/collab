/* eslint no-console:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore } from '../lib/Store.js';

import Application from '../components/Application';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore()}>
      <Router>
        <Application />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  );
});
