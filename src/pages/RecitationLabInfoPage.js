/*
 * This file contains a component for rendering a page with info about
 * labs/recitations for a course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';
import MarkdownIt from 'markdown-it';

import TwoColumnPageContent from '../components/TwoColumnPageContent';
import SectionBox from '../components/SectionBox';
import CourseTopicsList from '../components/CourseTopicsList';
import DayTimeLocation from '../components/DayTimeLocation';
import AngleList from '../components/AngleList';

const md = new MarkdownIt();

const InfoPageSectionBox = styled(SectionBox)`
  margin: 5px;
  h1 {
    margin: 10px 0;
  }
  h2 {
    margin: 0;
  }
`;

const SectionInfoItem = styled.div`
  margin-bottom: 15px;
  h3 {
    margin: 0;
  }
`;

const SectionInfoData = styled.div`
  padding-left: 24px;
  h4 {
    margin: 4px 0 0 0;
  }
`;

function RecitationLabInfoPage({ title, info }) {
  return (
    <TwoColumnPageContent
      left={
        <React.Fragment>
          <InfoPageSectionBox>
            <h1>{title}</h1>
            <h2>Policies</h2>
            <AngleList
              items={info.policies.map((policy) => (
                <span dangerouslySetInnerHTML={{ __html: md.renderInline(policy) }} />
              ))}
            />
          </InfoPageSectionBox>
          <InfoPageSectionBox>
            <h2>Sections</h2>
            {Object.keys(info.sections).map((section, i) => (
              <SectionInfoItem key={i}>
                <h3><FontAwesome name="angle-double-right" /> Section {section}</h3>
                <SectionInfoData>
                  <h4><DayTimeLocation {...info.sections[section].meeting} /></h4>
                  <h4>TA: {info.sections[section].ta}</h4>
                </SectionInfoData>
              </SectionInfoItem>
            ))}
          </InfoPageSectionBox>
        </React.Fragment>
      }
      right={
        <InfoPageSectionBox>
          <CourseTopicsList
            title="Calendar"
            topics={info.calendar}
          />
        </InfoPageSectionBox>
      }
    />
  )
}

RecitationLabInfoPage.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.shape({
    calendar: CourseTopicsList.propTypes.topics,
    sections: PropTypes.objectOf(PropTypes.shape({
      meeting: PropTypes.shape(DayTimeLocation.propTypes).isRequired,
      ta: PropTypes.string.isRequired
    })).isRequired,
    policies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default RecitationLabInfoPage;
