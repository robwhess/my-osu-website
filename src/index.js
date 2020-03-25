import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import url from 'url';

import App from './App';
import pkg from '../package.json';

/*
 * Figure out base pathname based on "homepage" property in package.json.
 */
const siteURL = pkg.homepage;
const basename = siteURL ? url.parse(siteURL).pathname : '';

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
