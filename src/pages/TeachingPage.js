/*
 * This file contains a component for displaying all courses taught across
 * all terms.
 */

import React from 'react';
import styled from '@emotion/styled/macro';
import Helmet from 'react-helmet';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import CourseList from '../components/CourseList';
import { courseData } from '../CourseData';

const TermInfoContainer = styled.div`
  h2 {
    margin: 20px 0 5px 0;
  }
`;

function TeachingPage() {
  return (
    <PageContent>
      <Helmet title="Teaching" />
      <SectionBox>
        {Object.keys(courseData).map((term, i) => (
          <TermInfoContainer key={i}>
            <h2>{courseData[term].title}</h2>
            <CourseList term={term} courses={courseData[term].courses} />
          </TermInfoContainer>
        ))}
      </SectionBox>
    </PageContent>
  )
}

export default TeachingPage;
