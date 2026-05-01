import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';
import pkg from '../package.json';

/*
 * Figure out base pathname based on "homepage" property in package.json.
 */
const siteURL = pkg.homepage;
const basename = siteURL ? new URL(siteURL).pathname : '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
