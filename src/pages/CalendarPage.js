/*
 * This file contains a component for displaying all courses taught across
 * all terms.
 */

import React from 'react';
import styled from '@emotion/styled/macro';
import { Helmet } from 'react-helmet';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';

const Title = styled.h1`
  margin: 10px 0;
`;

function CalendarPage({ title, calendarUrl }) {
  return (
    <PageContent>
      <Helmet title={title} />
      <SectionBox>
      <Title>{title}</Title>
        <iframe
          title={title}
          src={`${calendarUrl}&wkst=1&bgcolor=%23ffffff&color=%23EF6C00&showTitle=0&showPrint=0&showTabs=0&showCalendars=0`}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no">
        </iframe>
      </SectionBox>
    </PageContent>
  )
}

export default CalendarPage;
