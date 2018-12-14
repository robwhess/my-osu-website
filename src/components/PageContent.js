/*
 * This file contains a component representing a lightweight wrapper for the
 * main contents of a page.
 */

import styled from '@emotion/styled/macro';

import breakpoints from '../lib/breakpoints';

const PageContent = styled.main`
  width: ${props => props.fullWidth ? '95%' : '67%'};
  margin: 50px auto;

  @media (max-width: ${breakpoints[0]}px) {
    width: 95%;
  }
`;

export default PageContent;
