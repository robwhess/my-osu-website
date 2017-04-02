import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import { courseData, coursesByTerm } from './CourseData';
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
    isLink: true
  },
  {
    path: 'https://github.com/robwhess',
    title: 'GitHub',
    isRight: true,
    isExternal: true
  }
];

class App extends Component {

  generateTeachingNavMenu() {
    var teachingNavlink = navLinks.find((navLink) => (navLink.title === 'Teaching'));
    var currentTerm = coursesByTerm[0];
    teachingNavlink.menu = []
    currentTerm.courses.forEach((course) => {
      teachingNavlink.menu.push({
        path: '/teaching/' + course,
        title: courseData[course].number
      });
    });
  }

  render() {
    this.generateTeachingNavMenu();
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
