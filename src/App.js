import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import { courseData } from './CourseData';
import { generateSitePath } from './lib/SitePath';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TeachingPage from './components/TeachingPage';
import CoursePage from './components/CoursePage';
import NoMatchPage from './components/NoMatchPage';
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
        path: '/teaching/cs290-sp17/',
        title: 'CS 290'
      },
      {
        path: '/teaching/cs391-sp17/',
        title: 'CS 391'
      },
      {
        path: '/teaching/cs496-sp17/',
        title: 'CS 496'
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
          <Helmet titleTemplate="%s - Rob Hess" defaultTitle="Rob Hess" />
          <Navbar links={navLinks} />
          <Switch>
            <Route exact path={generateSitePath('/')} component={HomePage} />
            <Route exact path={generateSitePath('/teaching')} component={TeachingPage} />
            <Route exact path={generateSitePath('/teaching') + '/:course'} children={({ match }) => {
              var data = courseData[match.params.course];
              if (data) {
                return <CoursePage courseData={data} />;
              } else {
                return <NoMatchPage />;
              }
            }} />
          <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
