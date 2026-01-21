/*
 * This file contains a component for rendering a table with alternating rows.
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

const AlternatingTableTable = styled.table`
  width: 100%;
`;

const AlternatingTableHeading = styled.th`
  background-color: #fff;
  color: #333;
  font-size: 20px;
  font-weight: 400;

  @media (prefers-color-scheme: dark) {
    background-color: #434343;
    color: #fff;
  }
`;

const AlternatingTableRow = styled.tr`
  background-color: ${props => props.even ? '#fff' : '#eee'};
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.even ? '#434343' : '#323232'};
  }
`;

const AlternatingTableData = styled.td`
  padding: 6px 12px;
  vertical-align: middle;
`;

function AlternatingTable({ headings, rows }) {
  return (
    <AlternatingTableTable>
      <tbody>
        {headings ?
          <AlternatingTableRow even>
            {headings.map((heading, i) => (
              <AlternatingTableHeading key={i}>
                {heading}
              </AlternatingTableHeading>
            ))}
          </AlternatingTableRow> :
          null
        }
        {rows.map((row, i) => (
          <AlternatingTableRow key={i} even={!!(i % 2)}>
            {row.map((column, j) => (
              <AlternatingTableData key={j}>
                {column}
              </AlternatingTableData>
            ))}
          </AlternatingTableRow>
        ))}
      </tbody>
    </AlternatingTableTable>
  );
}

AlternatingTable.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.node),
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired
};

export default AlternatingTable;
