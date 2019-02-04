/*
 * This file contains a component for displaying page content in two columns.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import PageContent from '../components/PageContent';
import breakpoints from '../lib/breakpoints';

const TwoColumnContainer = styled(PageContent)`
  display: flex;
  @media (max-width: ${breakpoints[0]}px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1 1 50%;
`

function TwoColumnPageContent({ left, right }) {
  return (
    <TwoColumnContainer>
      <Column>{left}</Column>
      <Column>{right}</Column>
    </TwoColumnContainer>
  )
}

TwoColumnPageContent.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired
};

export default TwoColumnPageContent;
