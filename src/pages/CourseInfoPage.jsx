/*
 * This file contains a component for rendering a page to display info about
 * a specific course.
 */

import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router';

import TwoColumnPageContent from '../components/TwoColumnPageContent';
import SectionBox from '../components/SectionBox';
import CourseEssentialInfo from '../components/CourseEssentialInfo';
import CourseAssignmentList from '../components/CourseAssignmentList';
import CourseTopicsList from '../components/CourseTopicsList';

import { courseData } from '../data/courses';

const CourseInfoPageSectionBox = styled(SectionBox)`
  margin: 5px;
`;

function CourseInfoPage() {
  const { courseSlug } = useParams();
  const [ courseNum, term ] = courseSlug.split('-');
  const course = courseData[term]?.courses[courseNum];

  return (
    <>
      <title>{course.number}</title>
      <TwoColumnPageContent
        left={
          <>
            <CourseInfoPageSectionBox>
              <CourseEssentialInfo {...course} />
            </CourseInfoPageSectionBox>
            {(course.assignmentGroups || []).map((assignmentGroup) => (
              <CourseInfoPageSectionBox key={assignmentGroup.title}>
                <CourseAssignmentList {...assignmentGroup} />
              </CourseInfoPageSectionBox>
            ))}
          </>
        }
        right={
          <CourseInfoPageSectionBox>
            <CourseTopicsList
              title="Course Topics"
              topics={course.topics} />
          </CourseInfoPageSectionBox>
        }
      />
    </>
  );
}

export default CourseInfoPage;
