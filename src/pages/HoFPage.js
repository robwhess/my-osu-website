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
import HoFItem from '../components/HoFItem';

import breakpoints from '../lib/breakpoints';

import { courseData } from '../data/courses';

const HoFIntro = styled.h3`
  font-size: 28px;
  @media (max-width: ${breakpoints[0]}px) {
    font-size: 24px;
  }
`;

const HofItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

function generateHoFItemList(hofEntries) {
  return (
    <HofItemListContainer>
      {hofEntries.map(entry => <HoFItem key={entry.title} {...entry} />)}
    </HofItemListContainer>
  );
}

function HoFPage () {
  const { courseNum } = useParams();

  const hofTabs = [];
  let courseName = null;
  let courseTitle = null;
  Object.keys(courseData).forEach(term => {
    Object.keys(courseData[term].courses).forEach(course => {
      const courseItem = courseData[term].courses[course];
      if (course === courseNum && courseItem.hof) {
        courseName = courseName || courseItem.number;
        courseTitle = courseTitle || courseItem.title;
        hofTabs.push({
          key: `${term}`,
          title: courseData[term].title,
          content: generateHoFItemList(courseItem.hof)
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
            <HoFIntro>
              Every year, students write dozens of applications for the final project in my {courseTitle} course.  Below is a showcase of some of the most outstanding ones.
            </HoFIntro>
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
