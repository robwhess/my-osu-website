/*
 * This file contains a small component for rendering a day/time/location
 * object.  The component supports markdown in all fields.
 */

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function DayTimeLocation({ day, time, location }) {
  let dayTimeLocString = `${day}, *${time}*`;
  if (location) {
    dayTimeLocString += ` (${location})`;
  }
  return <span dangerouslySetInnerHTML={{ __html: md.renderInline(dayTimeLocString) }} />;
}

DayTimeLocation.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string
};

export default DayTimeLocation;
