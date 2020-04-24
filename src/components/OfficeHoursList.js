/*
 * This file contains a component to display a list of courses from a course
 * data object.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import AngleList from './AngleList';
import Event from './Event';

const OfficeHoursTitle = styled.span`
  font-weight: bold;
`;

function OfficeHoursList(props) {
  return (
    <AngleList singleAngle noOneElementList
      items={props.officeHours.map((officeHoursItem) => (
        <React.Fragment>
          <OfficeHoursTitle>{officeHoursItem.title}</OfficeHoursTitle>
          <AngleList
            items={officeHoursItem.hours.map((dtl) => <Event {...dtl} />)} />
        </React.Fragment>
      ))}/>
  );
}

OfficeHoursList.propTypes = {
  officeHours: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OfficeHoursList;
