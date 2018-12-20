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
import CourseAssignmentList from '../components/CourseAssignmentList';
import CourseTopicsList from '../components/CourseTopicsList';

const CourseInfoPageContent = styled(PageContent)`
  display: flex;
`;

const CourseInfoPageSectionBox = styled(SectionBox)`
  max-width: 100%;
  margin: 5px;
`

const PageColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1 1 50%;
`

function CourseInfoPage({ course }) {
  return (
    <CourseInfoPageContent fullWidth>
      <PageColumn>
        <CourseInfoPageSectionBox>
          <CourseEssentialInfo {...course} />
        </CourseInfoPageSectionBox>
        <CourseInfoPageSectionBox>
          <CourseAssignmentList
            title="Assignments"
            preamble={course.assignmentsPreamble}
            assignments={course.assignments}
          />
        </CourseInfoPageSectionBox>
        {course.finalProjectAssignments ?
          <CourseInfoPageSectionBox>
            <CourseAssignmentList
              title="Final Project"
              preamble={course.finalProjectPreamble}
              assignments={course.finalProjectAssignments}
            />
          </CourseInfoPageSectionBox> :
          null
        }
      </PageColumn>

      <PageColumn>
        <CourseInfoPageSectionBox>
          <CourseTopicsList
            title="Course Topics"
            topics={course.topics} />
        </CourseInfoPageSectionBox>
      </PageColumn>
    </CourseInfoPageContent>
  );
}

CourseInfoPage.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseInfoPage;
