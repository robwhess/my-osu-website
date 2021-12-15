/*
 * This file contains a component to render a page containing a Hall of Fame
 * for a given course 🏆
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled/macro';
import { useParams } from 'react-router-dom';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import VerticalTabPane from '../components/VerticalTabPane';

import { courseData } from '../data/courses';

function HoFPage () {
  const { courseNum } = useParams();

  const hofTabs = [];
  let courseName;
  Object.keys(courseData).forEach(term => {
    Object.keys(courseData[term].courses).forEach(course => {
      const courseItem = courseData[term].courses[course];
      if (course === courseNum && courseItem.hof) {
        courseName = courseItem.number;
        hofTabs.push({
          key: `${course}-${term}`,
          title: courseData[term].title,
          content: "This is where the HoF content will go... " + term
        });
      }
    })
  });

  const pageTitle = courseName ? `${courseName} Hall of Fame` : "Hall of Fame";
  return (
    <PageContent>
      <Helmet title={pageTitle} />
      <SectionBox>
        {courseName ? (
          <>
            <h1>{pageTitle}</h1>
            <VerticalTabPane tabs={hofTabs} />
          </>
        ) : (
          <h1>Hall of Fame</h1>
        )}
      </SectionBox>
    </PageContent>
  );
}

export default HoFPage;
