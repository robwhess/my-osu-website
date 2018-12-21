/*
 * This file contains a component to display a list of courses from a course
 * data object.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import { generateSitePath } from '../lib/SitePath';

const CourseListList = styled.ul`
  margin: 0;
  padding-left: 10px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const CourseItem = styled.li`
  margin-right: 20px;
  font-weight: 400;
`;

function CourseList(props) {
  return (
    <CourseListList>
      {Object.keys(props.courses).map((course, i) => (
        <CourseItem key={i}>
          <FontAwesome name="angle-double-right" /> &nbsp;
          <Link to={generateSitePath(`/teaching/${course}-${props.term}`)}>
            {props.courses[course].number} &ndash; {props.courses[course].title}
          </Link>
        </CourseItem>
      ))}
    </CourseListList>
  )
}

CourseList.propTypes = {
  courses: PropTypes.object.isRequired,
  term: PropTypes.string.isRequired
};

export default CourseList;
