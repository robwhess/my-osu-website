import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import TeachingPage from './pages/TeachingPage';
import CommunityPage from './pages/CommunityPage';
import CoursePage from './pages/CoursePage';
import NoMatchPage from './pages/NoMatchPage';

import breakpoints from './lib/breakpoints';

import { currentTermData, currentTerm } from './data/courses';
import personalData from './data/personal';

const navHeading = {
  title: personalData.name,
  path: '/'
};
const navLinks = [
  {
    path: '/teaching',
    title: 'Teaching'
  }
];

/*
 * Add GitHub link to navbar if present in personal data.
 */
if (personalData.gitHub) {
  navLinks.push({
    path: personalData.gitHub,
    faIcon: faGithub,
    isRight: true,
    isExternal: true
  });
}

/*
 * Attach menu containing links to current courses to the teaching link in the
 * navbar, if we have current course data.
 */
if (currentTerm && currentTermData) {
  const teachingNavlink = navLinks.find((navLink) => (navLink.title === 'Teaching'));
  teachingNavlink.menu = [];
  Object.keys(currentTermData.courses).forEach((course) => {
    teachingNavlink.menu.push({
      path: `/teaching/${course}-${currentTerm}`,
      title: currentTermData.courses[course].number
    });
  });
}

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 18px;
    background-color: #efefef;
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

  .noscroll {
    @media (max-width: ${breakpoints[0]}px) {
      overflow: hidden;
    }
  }

  @media (max-width: ${breakpoints[0]}px) {
    body {
      font-weight: 400;
    }
  }
`;

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <Helmet titleTemplate="%s - Rob Hess - Oregon State University" defaultTitle="Rob Hess - Oregon State University" />

      <Navbar heading={navHeading} links={navLinks} />

      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route exact path='/teaching' component={TeachingPage} />
        <Route exact path='/teaching/community' component={CommunityPage} />

        <Route path='/teaching/:courseNum-:term' component={CoursePage} />

        <Route component={NoMatchPage} />

      </Switch>

      <Footer />

    </div>
  );
}

export default App;
