/*
 * This file contains a component for rendering a page to display info about
 * a specific course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import CourseEssentialInfo from '../components/CourseEssentialInfo';

const CourseInfoPageContent = styled(PageContent)`
  display: flex;
  flex-wrap: wrap;
`;

const CourseInfoPageSectionBox = styled(SectionBox)`
  max-width: 100%;
  margin: 5px;
  flex: 1 1 auto;
`

const TransprentFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.column? 'column' : 'row'};
`

function CourseInfoPage({ course }) {
  return (
    <CourseInfoPageContent fullWidth>
      <TransprentFlexContainer column>
        <CourseInfoPageSectionBox>
          <CourseEssentialInfo {...course} />
        </CourseInfoPageSectionBox>
      </TransprentFlexContainer>
    </CourseInfoPageContent>
  );
}

CourseInfoPage.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseInfoPage;
