/*
 * This file contains a small component for rendering a day/time/location
 * object.  The component supports markdown in all fields.
 */
/* eslint "jsx-a11y/anchor-is-valid": "off" */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

import Modal from './Modal';

const md = new MarkdownIt();

function DayTimeLocation({ day, time, location, link, details }) {
  const [ modalVisible, setModalVisible ] = useState(false);

  let dtlString = `${day}, *${time}*`;
  if (location) {
    dtlString += ` (${location})`;
  }
  const dtlSpan = <span dangerouslySetInnerHTML={{ __html: md.renderInline(dtlString) }} />;

  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{dtlSpan}</a>;
  } else if (details) {
    return (
      <>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          setModalVisible(true);
        }}>
          {dtlSpan}
        </a>
        {modalVisible && <Modal content={details} onClose={() => setModalVisible(false)} />}
      </>
    );
  } else {
    return dtlSpan;
  }
}

DayTimeLocation.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string,
  link: PropTypes.string,
  details: PropTypes.string
};

export default DayTimeLocation;
