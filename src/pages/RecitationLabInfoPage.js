/*
 * This file contains a component for rendering a page with info about
 * labs/recitations for a course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { Helmet } from 'react-helmet';
import MarkdownIt from 'markdown-it';
import { useParams } from 'react-router-dom';

import TwoColumnPageContent from '../components/TwoColumnPageContent';
import SectionBox from '../components/SectionBox';
import CourseTopicsList from '../components/CourseTopicsList';
import Event from '../components/Event';
import AngleList from '../components/AngleList';
import AlternatingTable from '../components/AlternatingTable';

import NoMatchPage from './NoMatchPage';

import { courseData } from '../data/courses';

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

function RecitationLabInfoPage({ type }) {
  const { courseNum, term } = useParams();
  const course = courseData[term]?.courses[courseNum];
  const data = course?.[type];
  const title = `${course?.number} ${type === 'labs' ? 'Labs' : 'Recitations'}`;

  return data ? (
    <>
      <Helmet title={title} />
      <TwoColumnPageContent
        left={
          <>
            <InfoPageSectionBox>
              <h1>{title}</h1>
              <h2>Sections</h2>
              <AlternatingTable
                headings={[ 'Section', 'Weekly Meeting', 'TA(s)' ]}
                rows={Object.keys(data.sections).map((section) => [
                  section,
                  <Event {...data.sections[section].meeting} />,
                  <AngleList singleAngle noOneElementList items={data.sections[section].tas} />
                ])}
              />
            </InfoPageSectionBox>
            <InfoPageSectionBox>
              <h2>Policies</h2>
              <AngleList
                items={data.policies.map((policy) => (
                  <span dangerouslySetInnerHTML={{ __html: md.renderInline(policy) }} />
                ))}
              />
            </InfoPageSectionBox>
          </>
        }
        right={
          <InfoPageSectionBox>
            <CourseTopicsList
              title="Calendar"
              topics={data.calendar}
            />
          </InfoPageSectionBox>
        }
      />
    </>
  ) : (
    <NoMatchPage />
  )
}

RecitationLabInfoPage.propTypes = {
  type: PropTypes.oneOf([ 'recitations', 'labs' ]).isRequired
};

export default RecitationLabInfoPage;
