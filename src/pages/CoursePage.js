/*
 * This file contains a component to render all pages related to a single
 * course.  The component uses React Router's nested routing feature to
 * render the appropriate course subpage, based on the URL.
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';

import { courseData } from '../data/courses';

function CoursePage() {
  const { courseNum, term } = useParams();
  const course = courseData[term]?.courses[courseNum];
  const navLinks = [];
  const navHeading = {};

  if (course) {
    /*
     * If the course exists, add navbar info for course info page.
     */
    navHeading.title = course.number;
    navHeading.url = '.';
    navLinks.push({ title: 'Course Info', url: '.' });

    /*
     * If there is a calendar for the course, add navbar info for the
     * calendar page.
     */
    if (course.calendarUrl) {
      navLinks.push({ title: 'Calendar', url: 'calendar' });
    }

    /*
     * If there is TA info for the course, add navbar info for the TA page.
     */
    if (course.tas) {
      navLinks.push({ title: 'TAs', url: 'tas' });
    }

    /*
     * If there is recitation info for the course, add  navbar info for the
     * recitations page.
     */
    if (course.recitations) {
      navLinks.push({ title: 'Recitations', url: 'recitations' });
    }

    /*
     * If there is lab info for the course, add navbar info for the labs page.
     */
    if (course.labs) {
      navLinks.push({ title: 'Labs', url: 'labs' });
    }
  }

  return (
    <>
      {course && <Helmet title={course.number} />}
      {navLinks.length > 1 && <Navbar subnav heading={navHeading} links={navLinks} />}
      <Outlet />
    </>
  );

}

export default CoursePage;
