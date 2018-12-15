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
  padding-left: 10px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  a {
    margin: 2px;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
      text-decoration: none;
    }
  }
`;

const CourseItem = styled.li`
  font-weight: 400;
`;

const CourseNumber = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 5px 5px 5px 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #888;
  color: #fff;
  ${CourseItem}:hover & {
    background-color: #ccc;
    color: #333;
  }
`;

const CourseTitle = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 5px 10px 5px 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: rgba(213, 79, 30, 0.5);
  color: #333;
  ${CourseItem}:hover & {
    background-color: rgba(213, 79, 30, 0.2);
    color: #555;
  }
`;

function CourseList(props) {
  return (
    <CourseListList>
      {Object.keys(props.courses).map((course, i) => (
        <Link key={i} to={generateSitePath(`/teaching/${course}-${props.term}`)}>
          <CourseItem>
            <CourseNumber>{props.courses[course].number}</CourseNumber>
            <CourseTitle>{props.courses[course].title}</CourseTitle>
          </CourseItem>
        </Link>
      ))}
    </CourseListList>
  )
}

CourseList.propTypes = {
  courses: PropTypes.object.isRequired,
  term: PropTypes.string.isRequired
};

export default CourseList;
