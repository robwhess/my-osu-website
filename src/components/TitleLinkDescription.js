/*
 * This file contains a lightweight component for rendering an item with a
 * title, a link, and a description.
 */

import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function TitleLinkDescription({ title, link, description }) {
  return (
    <span>
      {link ?
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a> :
        <span>{title}</span>
      }
      {description ?
        <span dangerouslySetInnerHTML={{ __html: md.renderInline(` &ndash; ${description}`) }} /> : null
      }
    </span>
  )
}

TitleLinkDescription.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string
};

export default TitleLinkDescription;
