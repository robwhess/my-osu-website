/*
 * This file contains a small component for rendering a day/time/location
 * object.  The component supports markdown in all fields.
 */
/* eslint "jsx-a11y/anchor-is-valid": "off" */

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

import Modal from './Modal';

const md = new MarkdownIt();

function DayTimeLocation({ day, time, location, link, details }) {
  let DTLString = `${day}, *${time}*`;
  if (location) {
    DTLString += ` (${location})`;
  }
  const DTLSpan = <span dangerouslySetInnerHTML={{ __html: md.renderInline(DTLString) }} />;
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{DTLSpan}</a>;
  } else if (details) {
    const modal = React.createRef();
    return (
      <React.Fragment>
        <a href="#" onClick={(e) => { modal.current.show(); e.preventDefault(); }}>{DTLSpan}</a>
        <Modal content={details} ref={modal} />
      </React.Fragment>
    );
  } else {
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
