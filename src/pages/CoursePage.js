/*
 * This file contains a component to render all pages related to a single
 * course.  The component uses React Router's nested routing feature to
 * render the appropriate course subpage, based on the URL.
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

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

  if (course) {
    /*
     * If the course exists, add route and navbar info for course info page.
     */
    routes.push(
      <Route
        path="/"
        key="/"
        element={<CourseInfoPage course={course} />}
      />
    );
    navHeading.title = course.number;
    navHeading.url = ".";
    navLinks.push({
      title: 'Course Info',
      url: "."
    });

    /*
     * If there is a calendar for the course, add route and navbar info for the
     * calendar page.
     */
    if (course.calendarUrl) {
      routes.push(
        <Route
          path="calendar"
          key="calendar"
          element={<CalendarPage title={`${course.number} Calendar`} calendarUrl={course.calendarUrl} />}
        />
      );
      navLinks.push({
        title: 'Calendar',
        url: "calendar"
      });
    }

    /*
     * If there is TA info for the course, add route and navbar info for the
     * TA page.
     */
    if (course.tas) {
      routes.push(
        <Route
          path="tas"
          key="tas"
          element={<TAInfoPage title={`${course.number} Teaching Assistants`} tas={course.tas} />}
        />
      );
      navLinks.push({
        title: 'TAs',
        url: "tas"
      });
    }

    /*
     * If there is recitation info for the course, add route and navbar info
     * for the recitations page.
     */
    if (course.recitations) {
      routes.push(
        <Route
          path="recitations"
          key="recitations"
          element={<RecitationLabInfoPage title={`${course.number} Recitations`} info={course.recitations} />}
        />
      );
      navLinks.push({
        title: 'Recitations',
        url: "recitations"
      });
    }

    /*
     * If there is lab info for the course, add route and navbar info for the
     * labs page.
     */
    if (course.labs) {
      routes.push(
        <Route
          path="labs"
          key="labs"
          element={<RecitationLabInfoPage title={`${course.number} Labs`} info={course.labs} />}
        />
      );
      navLinks.push({
        title: 'Labs',
        url: "labs"
      });
    }
  }

  /*
   * Add a route for the no match page to handle the case when the request URL
   * doesn't match a course page or course subpage.
   */
  routes.push(<Route path="*" element={<NoMatchPage />} key="404" />);

  return (
    <div>
      {course ? <Helmet title={course.number} /> : null}

      {navLinks.length > 1 ? <Navbar subnav heading={navHeading} links={navLinks} /> : null}

      <Routes>
        {routes}
      </Routes>
    </div>
  );

}

export default CoursePage;
