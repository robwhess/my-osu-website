/*
 * This file contains a component to render a page containing the CS 290
 * Hall of Fame 🏆
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled/macro';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';

import { courseData } from '../data/courses';

function CS290HoFPage () {

  Object.values(courseData).forEach(termData => {
    Object.keys(termData.courses).forEach(course => {
      if (course === 'cs290' && termData.courses[course].hof) {
        console.log("==", termData.title, termData.courses[course]);
      }
    })
  });

  return (
    <PageContent>
      <Helmet title="CS 290 Hall of Fame" />
      <SectionBox></SectionBox>
    </PageContent>
  );
}

export default CS290HoFPage;
