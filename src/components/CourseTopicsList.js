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

function CourseTopicsList({ title, topics }) {

  function generateWeeksString(weeks) {
    if (weeks.length > 1) {
      return <span>Weeks {weeks[0]} &ndash; {weeks[weeks.length - 1]}</span>;
    } else {
      return `Week ${weeks[0]}`;
    }
  }

  function generateResourcesList(title, items) {
    return (
      <div>
        <h4>{title}</h4>
        <AngleList singleAngle
          items={items.map((item) => (
            <TitleLinkDescription key={item.link} {...item} />
          ))} />
      </div>
    );
  }

  function generateTopicElem(topic) {
    return (
      <CollapsibleSection
        key={topic.title}
        collapsed={!topic.isCurrent}
        title={topic.title}
        setSlug={true}>
        <Topic>
          {topic.weeks && <h4>{generateWeeksString(topic.weeks)}</h4>}
          {topic.resources && generateResourcesList("Lecture Materials", topic.resources)}
          {topic.readings && generateResourcesList("Readings", topic.readings)}
          {topic.notes &&
            <div>
              <h4>Notes</h4>
              <AngleList singleAngle
                items={topic.notes.map((note) => (
                  <span key={note} dangerouslySetInnerHTML={{ __html: md.renderInline(note) }} />
                ))} />
            </div>
          }
        </Topic>
      </CollapsibleSection>
    );
  }

  return (
    <TopicsListContainer>
      {title && <h2>{title}</h2>}
      {topics && topics.length > 0 ? (
        <>
          <h4>(click titles to expand/collapse)</h4>
          {topics.map(generateTopicElem)}
        </>
      ) : (
        <h3><FontAwesomeIcon icon={faAngleDoubleRight} /> No topics listed yet.</h3>
      )}
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
