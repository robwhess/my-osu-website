/*
 * This file contains a component to render a page containing a Hall of Fame
 * for a given course 🏆
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled/macro';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';

import { courseData } from '../data/courses';

function HoFPage ({ match }) {
  const { courseNum } = match.params;

  const hofCourseTerms = [];
  Object.values(courseData).forEach(termData => {
    Object.keys(termData.courses).forEach(course => {
      if (course === courseNum && termData.courses[course].hof) {
        hofCourseTerms.push(termData.courses[course])
      }
    })
  });
  hofCourseTerms.reverse();

  const courseNumber = hofCourseTerms[0]?.number;
  const pageTitle = courseNumber ? `${courseNumber} Hall of Fame` : "Hall of Fame";

  return (
    <PageContent>
      <Helmet title={pageTitle} />
      <SectionBox>
        {courseNumber ? (
          <h1>{pageTitle}</h1>
        ) : (
          <h1>Hall of Fame</h1>
        )}
      </SectionBox>
    </PageContent>
  );
}

export default HoFPage;
