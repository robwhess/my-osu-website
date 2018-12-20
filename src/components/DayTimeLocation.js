/*
 * This file contains a small component for rendering a day/time/location
 * object.  The component supports markdown in all fields.
 */

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function DayTimeLocation({ day, time, location, link }) {
  let DTLString = `${day}, *${time}*`;
  if (location) {
    DTLString += ` (${location})`;
  }
  const DTLSpan = <span dangerouslySetInnerHTML={{ __html: md.renderInline(DTLString) }} />;
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{DTLSpan}</a>;
  } else{
    return DTLSpan;
  }
}

DayTimeLocation.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string,
  link: PropTypes.string
};

export default DayTimeLocation;
