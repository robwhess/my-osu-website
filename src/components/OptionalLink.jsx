/*
 * This file contains a lightweight component for rendering a piece of text
 * which could optionally be a link.
 */

import React from 'react';
import PropTypes from 'prop-types';

function OptionalLink({ text, link, newTab }) {
  return (
    link ?
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        href={link}
        target={newTab ? '_blank' : null}
        rel={newTab ? 'noopener noreferrer' : null}>
        {text}
      </a> :
      text
  );
}

OptionalLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  newTab: PropTypes.bool
};

export default OptionalLink;
