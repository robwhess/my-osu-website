/*
 * This page contains a component for rendering a 404 page.
 */

import React from 'react';
import styled from '@emotion/styled/macro';

import PageContent from '../components/PageContent';

const ErrorCodeContainer = styled.div`
  width: 100%;
  margin-top: 75px;
  text-align: center;
  font-size: 150px;
  font-weight: 100;
`;

const ExplanationContainer = styled(ErrorCodeContainer)`
  margin-top: 50px;
  margin-bottom: 200px;
  font-size: 40px;
`

function NoMatchPage() {
  return (
    <PageContent>
      <ErrorCodeContainer>
        ¯\_(ツ)_/¯
      </ErrorCodeContainer>
      <ExplanationContainer>
        Woops! We couldn't find that page.
      </ExplanationContainer>
    </PageContent>
  );
}

export default NoMatchPage;
