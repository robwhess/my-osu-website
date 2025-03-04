/*
 * This file contains a component representing a lightweight box in which to
 * place the contents of a section of a given page.
 */

import styled from '@emotion/styled/macro';

const SectionBox = styled.section`
  padding: 10px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    border: 1px solid #333;
    background-color: #434343;
  }
`;

export default SectionBox;
