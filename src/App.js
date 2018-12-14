import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';

import { currentTerm, courseData } from './CourseData';
import { generateSitePath } from './lib/SitePath';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TeachingPage from './pages/TeachingPage';
import CommunityPage from './pages/CommunityPage';
import CoursePage from './pages/CoursePage';
import NoMatchPage from './pages/NoMatchPage';
import reactLogo from './static/ReactLogo.svg';
import './styles/App.css';

var navHeading = {
  title: 'Rob Hess',
  path: '/'
};
var navLinks = [
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
    teachingNavlink.menu = [];
    Object.keys(courseData[currentTerm].courses).forEach((course) => {
      teachingNavlink.menu.push({
        path: `/teaching/${course}-${currentTerm}`,
        title: courseData[currentTerm].courses[course].number
      });
    });
  }

  render() {
    this.generateTeachingNavMenu();
    return (
      <Router>
        <div>

          <Helmet titleTemplate="%s - Rob Hess" defaultTitle="Rob Hess" />

          <Navbar heading={navHeading} links={navLinks} />

          <Switch>

            <Route exact path={generateSitePath('/')} component={HomePage} />
            <Route exact path={generateSitePath('/teaching')} component={TeachingPage} />
            <Route exact path={generateSitePath('/teaching/community')} component={CommunityPage} />

            <Route exact path={generateSitePath('/teaching') + '/:course-:term'} children={({ match }) => {
              var data = courseData[match.params.term] && courseData[match.params.term].courses[match.params.course];
              if (data) {
                return <CoursePage courseData={data} />;
              } else {
                return <NoMatchPage />;
              }
            }} />

            <Route exact path={generateSitePath('/teaching') + '/:course-:term/:subpage'} children={({ match }) => {
                var data = courseData[match.params.term] && courseData[match.params.term].courses[match.params.course];
                if (data && data.subPages && data.subPages[match.params.subpage]) {
                  var SubPageComponent = data.subPages[match.params.subpage];
                  return <SubPageComponent match={match} courseData={data} />;
                } else {
                  return <NoMatchPage />;
                }
              }}
            />

            <Route component={NoMatchPage} />

          </Switch>

          <footer>
            <img src={reactLogo} className="react-logo" alt="React logo" />
            This site is powered by <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React</a>.  It was bootstrapped with <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>.
            The source code is <a href="https://github.com/robwhess/my-osu-website" target="_blank" rel="noopener noreferrer">on GitHub <FontAwesome name="github" /></a>.
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
