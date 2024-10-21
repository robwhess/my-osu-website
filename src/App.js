import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import TeachingPage from './pages/TeachingPage';
import CommunityPage from './pages/CommunityPage';
import CoursePage from './pages/CoursePage';
import CourseInfoPage from './pages/CourseInfoPage';
import CalendarPage from './pages/CalendarPage';
import TAInfoPage from './pages/TAInfoPage';
import RecitationLabInfoPage from './pages/RecitationLabInfoPage';
import HoFPage from './pages/HoFPage';
import NoMatchPage from './pages/NoMatchPage';

import breakpoints from './lib/breakpoints';

import { currentTermData, currentTerm } from './data/courses';
import personalData from './data/personal';

const navHeading = {
  title: personalData.name,
  url: '/'
};
const navLinks = [
  {
    url: '/teaching',
    title: 'Teaching'
  }
];

/*
 * Add GitHub link to navbar if present in personal data.
 */
if (personalData.gitHub) {
  navLinks.push({
    url: personalData.gitHub,
    faIcon: faGithub,
    isRight: true
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
      url: `/teaching/${course}-${currentTerm}`,
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
    color: #222;

    @media (prefers-color-scheme: dark) {
      background-color: #222222;
      color: #fff;
    }
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

    @media (prefers-color-scheme: dark) {
      color: #ddd;
    }
  }

  a {
    text-decoration: none;
    color: #e54f1d;

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

      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='teaching' element={<Outlet />}>
          <Route index element={<TeachingPage />} />
          <Route path='community' element={<CommunityPage />} />
          <Route path='hof/:courseNum' element={<HoFPage />} />
          <Route path=':courseNum-:term' element={<CoursePage />}>
            <Route index element={<CourseInfoPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="tas" element={<TAInfoPage />} />
            <Route path="recitations" element={<RecitationLabInfoPage type="recitations" />} />
            <Route path="labs" element={<RecitationLabInfoPage type="labs" />} />
            <Route path="*" element={<NoMatchPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NoMatchPage />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
