/*
 * This file contains a component to render all pages related to a single
 * course.  The component uses React Router's nested routing feature to
 * render the appropriate course subpage, based on the URL.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import CourseInfoPage from './CourseInfoPage';
import TAInfoPage from './TAInfoPage';
import RecitationLabInfoPage from './RecitationLabInfoPage';
import NoMatchPage from './NoMatchPage';

import Navbar from '../components/Navbar';

import { courseData } from '../data/courses';

/*
 * This page, when rendered, will receive a React Router `match` prop, which
 * will contain, among other things, the browser URL, and the course number
 * and term parsed from that URL (stored in the `match.params`).
 */
function CoursePage({ match }) {
  const { courseNum, term } = match.params;
  const course = courseData[term] && courseData[term].courses[courseNum];
  const routes = [];
  const navLinks = [];
  const navHeading = {};

  /*
   * Make sure the match URL has no slash at the end.
   */
  const matchUrl = match.url.replace(/\/$/, '');

  if (course) {
    /*
     * If the course exists, add route and navbar info for course info page.
     */
    routes.push(
      <Route
        exact
        path={`${matchUrl}`}
        render={() => <CourseInfoPage course={course} />}
        key={`${matchUrl}`}
      />
    );
    navHeading.title = course.number;
    navHeading.path = `${matchUrl}/`;
    navLinks.push({
      title: 'Course Info',
      path: `${matchUrl}/`
    });

    /*
     * If there is TA info for the course, add route and navbar info for the
     * TA page.
     */
    if (course.tas) {
      const taPageUrl = `${matchUrl}/tas`;
      routes.push(
        <Route
          exact
          path={taPageUrl}
          render={() => <TAInfoPage title={`${course.number} Teaching Assistants`} tas={course.tas} />}
          key={taPageUrl}
        />
      );
      navLinks.push({
        title: 'TAs',
        path: taPageUrl
      });
    }

    /*
     * If there is recitation info for the course, add route and navbar info
     * for the recitations page.
     */
    if (course.recitations) {
      const recitationPageUrl = `${matchUrl}/recitations`;
      routes.push(
        <Route
          exact
          path={recitationPageUrl}
          render={() => <RecitationLabInfoPage title={`${course.number} Recitations`} info={course.recitations} />}
          key={recitationPageUrl}
        />
      );
      navLinks.push({
        title: 'Recitations',
        path: recitationPageUrl
      });
    }

    /*
     * If there is lab info for the course, add route and navbar info for the
     * labs page.
     */
    if (course.labs) {
      const labPageUrl = `${matchUrl}/labs`;
      routes.push(
        <Route
          exact
          path={labPageUrl}
          render={() => <RecitationLabInfoPage title={`${course.number} Labs`} info={course.labs} />}
          key={labPageUrl}
        />
      );
      navLinks.push({
        title: 'Labs',
        path: labPageUrl
      });
    }
  }

  /*
   * Add a route for the no match page to handle the case when the request URL
   * doesn't match a course page or course subpage.
   */
  routes.push(<Route component={NoMatchPage} key={"404"} />);

  return (
    <div>
      {course ? <Helmet title={course.number} /> : null}

      {navLinks.length > 1 ? <Navbar subnav heading={navHeading} links={navLinks} /> : null}

      <Switch>
        {routes}
      </Switch>
    </div>
  );

}

export default CoursePage;
