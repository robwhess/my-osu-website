/*
 * This file contains a small component for rendering a day/time/location
 * object.  The component supports markdown in all fields.
 */

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function DayTimeLocation({ day, time, location }) {
  return <span dangerouslySetInnerHTML={{ __html: md.renderInline(`${day}, *${time}* (${location})`) }} />;
}

DayTimeLocation.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default DayTimeLocation;
