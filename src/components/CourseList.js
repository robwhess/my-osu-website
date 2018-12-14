/*
 * This file contains a component to display a list of courses from a course
 * data object.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

import { generateSitePath } from '../lib/SitePath';

const CourseListList = styled.ul`
  margin: 0;
`;

function CourseList(props) {
  return (
    <CourseListList>
      {Object.keys(props.courses).map((course, i) => (
      <li key={i}><Link to={generateSitePath(`/teaching/${course}-${props.term}`)}>{props.courses[course].number} &ndash; {props.courses[course].title}</Link></li>
      ))}
    </CourseListList>
  )
}

CourseList.propTypes = {
  courses: PropTypes.object.isRequired,
  term: PropTypes.string.isRequired
};

export default CourseList;
