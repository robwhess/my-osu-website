import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { generateSitePath } from './lib/SitePath';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import './styles/App.css';

var navLinks = [
  {
    path: '/',
    title: 'Rob Hess',
    isHeading: true
  },
  {
    path: '/teaching',
    title: 'Teaching',
    isLink: true,
    menu: [
      {
        path: '/teaching/cs162-w17/',
        title: 'CS 162'
      }
    ]
  },
  {
    path: 'https://github.com/robwhess',
    title: 'GitHub',
    isRight: true,
    isExternal: true
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar links={navLinks} />
          <Switch>
            <Route path={generateSitePath('/')} exact={true} component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
