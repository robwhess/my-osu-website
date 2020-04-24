/*
 * This file contains a component for listing out assignments for a course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faLink } from '@fortawesome/free-solid-svg-icons';
import MarkdownIt from 'markdown-it';
import slugify from 'slugify';

import Event from './Event';

const md = new MarkdownIt({ breaks: true });

const AssignmentListTitle = styled.h2`
  display: inline-block;
  margin: 0 0 0 5px;
`;

const SlugLink = styled.a`
  color: inherit;
  font-size: 20px;
`;

const Assignment = styled.div`
  margin-bottom: 15px;
`;

const AssignmentTitle = styled.h3`
  margin: 0;
  margin-left: 15px;
  text-indent: -1.75ch;
  padding-left: 1.75ch;
  color: #333;
`;

const AssignmentInfo = styled.div`
  margin-left: 46px;
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
`;

function CourseAssignmentList({ title, assignments, preamble }) {
  const slug = slugify(title, { strict: true });
  return (
    <div>
      <SlugLink href={`#${slug}`}>
        <FontAwesomeIcon icon={faLink} />
      </SlugLink>
      <AssignmentListTitle id={slug}>{title}</AssignmentListTitle>
      {preamble ? <p dangerouslySetInnerHTML={{ __html: md.renderInline(preamble) }} /> : null}
      {assignments && assignments.length > 0 ?
        assignments.map((assignment, i) => (
          <Assignment key={i}>
            <AssignmentTitle>
              <FontAwesomeIcon icon={faAngleDoubleRight} />&nbsp;
              {assignment.link ?
                <a href={assignment.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: md.renderInline(assignment.title) }} /> :
                <span dangerouslySetInnerHTML={{ __html: md.renderInline(assignment.title) }} />
              }
            </AssignmentTitle>
            <AssignmentInfo>
              {assignment.due ?
                <DueDate>Due: <Event {...assignment.due} /></DueDate> :
                null
              }

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
        )) :
        <h3><FontAwesomeIcon icon={faAngleDoubleRight} /> No assignments listed yet.</h3>
        }
    </div>
  );
}

CourseAssignmentList.propTypes = {
  title: PropTypes.string.isRequired,
  assignments: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    due: PropTypes.shape(Event.propTypes),
    notes: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
  preamble: PropTypes.string,
};

export default CourseAssignmentList;
