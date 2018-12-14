import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';

import { currentTerm, courseData } from './CourseData';
import { generateSitePath } from './lib/SitePath';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeachingPage from './pages/TeachingPage';
import CommunityPage from './pages/CommunityPage';
import CoursePage from './pages/CoursePage';
import NoMatchPage from './pages/NoMatchPage';

const navHeading = {
  title: 'Rob Hess',
  path: '/'
};
const navLinks = [
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

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 18px;
    background-color: #eee;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-weight: 400;
  }

  h1 {
    font-size: 44px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 30px;
    color: #666;
  }

  a {
    text-decoration: none;
    color: #d54f1e;

    &:hover {
      text-decoration: underline;
    }
  }

  .strike {
    text-decoration: line-through;
  }

  @media (max-width: 640px) {
    body {
      font-weight: 400;
    }
  }
`;

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
      <div>
        <Global styles={globalStyles} />
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

        <Footer />

      </div>
    );
  }
}

export default App;
