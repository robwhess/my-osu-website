/*
 * This file contains a component for listing out assignments for a course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';
import MarkdownIt from 'markdown-it';

import DayTimeLocation from './DayTimeLocation';

const md = new MarkdownIt();

const AssignmentListContainer = styled.div`
  h2 {
    margin: 0;
  }
`;

const Assignment = styled.div`
  margin-bottom: 15px;
  h3 {
    margin: 0;
    margin-left: 15px;
    text-indent: -0.67ch;
    padding-left: 0.67ch;
  }
`;

const AssignmentInfo = styled.div`
  margin-left: 28px;
  p {
    margin: 0;
  }
  ul {
    margin: 0;
    list-style-type: circle;
  }
`;

const DueDate = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #666;
`

function CourseAssignmentList({ title, preamble, assignments }) {
  return (
    <AssignmentListContainer>
      {title ? <h2>{title}</h2> : null}
      {preamble ? <p dangerouslySetInnerHTML={{ __html: md.renderInline(preamble) }} /> : null}
      {assignments.map((assignment, i) => (
        <Assignment key={i}>
          <h3><FontAwesome name="angle-double-right" /> <a href={assignment.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: md.renderInline(assignment.title) }} /></h3>
          <AssignmentInfo>
            <DueDate>Due: <DayTimeLocation {...assignment.due} /></DueDate>
            {assignment.notes ?
              <ul>
                {assignment.notes.map((note, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: md.renderInline(note) }} />
                ))}
              </ul> :
              null
            }
          </AssignmentInfo>
        </Assignment>
      ))}
    </AssignmentListContainer>
  );
}

CourseAssignmentList.propTypes = {
  title: PropTypes.string,
  preamble: PropTypes.string,
  assignments: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired
};

export default CourseAssignmentList;
