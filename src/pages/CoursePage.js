/*
 * This file contains a component to render all pages related to a single
 * course.  The component uses React Router's nested routing feature to
 * render the appropriate course subpage, based on the URL.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useParams, useRouteMatch } from 'react-router-dom';

import CourseInfoPage from './CourseInfoPage';
import CalendarPage from './CalendarPage';
import TAInfoPage from './TAInfoPage';
import RecitationLabInfoPage from './RecitationLabInfoPage';
import NoMatchPage from './NoMatchPage';

import Navbar from '../components/Navbar';

import { courseData } from '../data/courses';

function CoursePage() {
  const { courseNum, term } = useParams();
  const course = courseData[term] && courseData[term].courses[courseNum];
  const routes = [];
  const navLinks = [];
  const navHeading = {};

  /*
   * Make sure the current URL has no slash at the end.
   */
  const { url } = useRouteMatch();
  const routeUrl = url.replace(/\/$/, '');

  if (course) {
    /*
     * If the course exists, add route and navbar info for course info page.
     */
    routes.push(
      <Route
        exact
        path={`${routeUrl}`}
        children={<CourseInfoPage course={course} />}
        key={`${routeUrl}`}
      />
    );
    navHeading.title = course.number;
    navHeading.url = `${routeUrl}/`;
    navLinks.push({
      title: 'Course Info',
      url: `${routeUrl}/`
    });

    /*
     * If there is a calendar for the course, add route and navbar info for the
     * calendar page.
     */
    if (course.calendarUrl) {
      const calendarPageUrl = `${routeUrl}/calendar`;
      routes.push(
        <Route
          exact
          path={calendarPageUrl}
          children={<CalendarPage title={`${course.number} Calendar`} calendarUrl={course.calendarUrl} />}
          key={calendarPageUrl}
        />
      );
      navLinks.push({
        title: 'Calendar',
        url: calendarPageUrl
      });
    }

    /*
     * If there is TA info for the course, add route and navbar info for the
     * TA page.
     */
    if (course.tas) {
      const taPageUrl = `${routeUrl}/tas`;
      routes.push(
        <Route
          exact
          path={taPageUrl}
          children={<TAInfoPage title={`${course.number} Teaching Assistants`} tas={course.tas} />}
          key={taPageUrl}
        />
      );
      navLinks.push({
        title: 'TAs',
        url: taPageUrl
      });
    }

    /*
     * If there is recitation info for the course, add route and navbar info
     * for the recitations page.
     */
    if (course.recitations) {
      const recitationPageUrl = `${routeUrl}/recitations`;
      routes.push(
        <Route
          exact
          path={recitationPageUrl}
          children={<RecitationLabInfoPage title={`${course.number} Recitations`} info={course.recitations} />}
          key={recitationPageUrl}
        />
      );
      navLinks.push({
        title: 'Recitations',
        url: recitationPageUrl
      });
    }

    /*
     * If there is lab info for the course, add route and navbar info for the
     * labs page.
     */
    if (course.labs) {
      const labPageUrl = `${routeUrl}/labs`;
      routes.push(
        <Route
          exact
          path={labPageUrl}
          children={<RecitationLabInfoPage title={`${course.number} Labs`} info={course.labs} />}
          key={labPageUrl}
        />
      );
      navLinks.push({
        title: 'Labs',
        url: labPageUrl
      });
    }
  }

  /*
   * Add a route for the no match page to handle the case when the request URL
   * doesn't match a course page or course subpage.
   */
  routes.push(<Route children={<NoMatchPage />} key={"404"} />);

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
