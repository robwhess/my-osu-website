/*
 * This file contains a component for displaying a page containing a Google
 * Calendar embed.
 */

import React from 'react';
import styled from '@emotion/styled/macro';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';

import NoMatchPage from './NoMatchPage';

import { courseData } from '../data/courses';

const Title = styled.h1`
  margin: 10px 0;
`;

function CalendarPage() {
  const { courseNum, term } = useParams();
  const course = courseData[term]?.courses[courseNum];
  const title = `${course?.number} Calendar`;
  const calendarUrl = course?.calendarUrl;

  return calendarUrl ? (
    <PageContent>
      <Helmet title={title} />
      <SectionBox>
      <Title>{title}</Title>
        <iframe
          title={title}
          src={`${calendarUrl}&wkst=1&bgcolor=%23ffffff&color=%23EF6C00&showTitle=0&showPrint=0&showTabs=1&showCalendars=0`}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no">
        </iframe>
      </SectionBox>
    </PageContent>
  ) : (
    <NoMatchPage />
  );
}


export default CalendarPage;
