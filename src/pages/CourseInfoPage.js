/*
 * This file contains a component for rendering a page to display info about
 * a specific course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import TwoColumnPageContent from '../components/TwoColumnPageContent';
import SectionBox from '../components/SectionBox';
import CourseEssentialInfo from '../components/CourseEssentialInfo';
import CourseAssignmentList from '../components/CourseAssignmentList';
import CourseTopicsList from '../components/CourseTopicsList';

const CourseInfoPageSectionBox = styled(SectionBox)`
  margin: 5px;
`;

function CourseInfoPage({ course }) {
  return (
    <TwoColumnPageContent
      left={
        <React.Fragment>
          <CourseInfoPageSectionBox>
            <CourseEssentialInfo {...course} />
          </CourseInfoPageSectionBox>
          <CourseInfoPageSectionBox>
            <CourseAssignmentList
              title="Assignments"
              assignments={course.assignments}
            />
          </CourseInfoPageSectionBox>
          {course.finalProject ?
            <CourseInfoPageSectionBox>
              <CourseAssignmentList
                title="Final Project"
                assignments={course.finalProject}
              />
            </CourseInfoPageSectionBox> :
            null
          }
        </React.Fragment>
      }
      right={
        <CourseInfoPageSectionBox>
          <CourseTopicsList
            title="Course Topics"
            topics={course.topics} />
        </CourseInfoPageSectionBox>
      }
    />
  );
}

CourseInfoPage.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseInfoPage;
