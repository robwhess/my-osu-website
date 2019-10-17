/*
 * This file contains a component to display a course calendar.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import MarkdownIt from 'markdown-it';

import CollapsibleSection from './CollapsibleSection';
import AngleList from './AngleList';
import TitleLinkDescription from './TitleLinkDescription';

const md = new MarkdownIt();

const TopicsListContainer = styled.div`
  h2, h4 {
    margin: 0;
  }
`;

const Topic = styled.div`
  h4 {
    margin: 8px 0 0 0;
  }
`;

function generateWeeksString(weeks) {
  if (weeks.length > 1) {
    return <span>Weeks {weeks[0]} &ndash; {weeks[weeks.length - 1]}</span>;
  } else {
    return `Week ${weeks[0]}`;
  }
}

function CourseTopicsList({ title, topics }) {
  return (
    <TopicsListContainer>
      {title ? <h2>{title}</h2> : null}
      {topics && topics.length > 0 ?
        <React.Fragment>
          <h4>(click titles to expand/collapse)</h4>
          {topics.map((topic, i) => (
            <CollapsibleSection
              key={i}
              collapsed={!topic.isCurrent}
              title={topic.title}>
              <Topic>
                {topic.weeks ?
                  <h4>{generateWeeksString(topic.weeks)}</h4> :
                  null
                }
                {topic.resources ?
                  <div>
                    <h4>Lecture Materials</h4>
                    <AngleList singleAngle
                      items={topic.resources.map((resource, j) => (
                        <TitleLinkDescription key={j} {...resource} />
                      ))} />
                  </div> :
                  null
                }
                {topic.readings ?
                  <div>
                    <h4>Readings</h4>
                    <AngleList singleAngle
                      items={topic.readings.map((reading, j) => (
                        <TitleLinkDescription key={j} {...reading} />
                      ))} />
                  </div> :
                  null
                }
                {topic.notes ?
                  <div>
                    <h4>Notes</h4>
                    <AngleList singleAngle
                      items={topic.notes.map((note, j) => (
                        <span key={j} dangerouslySetInnerHTML={{ __html: md.renderInline(note) }} />
                      ))} />
                  </div> :
                  null
                }
              </Topic>
            </CollapsibleSection>
          ))}
        </React.Fragment> :
        <h3><FontAwesomeIcon icon={faAngleDoubleRight} /> No topics listed yet.</h3>
      }
    </TopicsListContainer>
  );
}

CourseTopicsList.propTypes = {
  title: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      description: PropTypes.string,
    })),
    readings: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      description: PropTypes.string,
    })),
    notes: PropTypes.arrayOf(PropTypes.string),
    isCurrent: PropTypes.bool,
    weeks: PropTypes.arrayOf(PropTypes.number)
  })).isRequired,
}

export default CourseTopicsList;
