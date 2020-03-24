/*
 * This file contains a lightweight component for rendering an item with a
 * title, a link, and a description.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function generateTitleLinkElem(title, link) {
  if (link) {
    /*
     * For relative links, use a React Router <Link>.
     */
    if (link.startsWith('/')) {
      return <Link to={link}>{title}</Link>;
    } else {
      return <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>;
    }
  } else {
    return <span>{title}</span>;
  }
}

function TitleLinkDescription({ title, link, description }) {
  return (
    <span>
      {generateTitleLinkElem(title, link)}
      {description &&
        <span dangerouslySetInnerHTML={{ __html: md.renderInline(` &ndash; ${description}`) }} />
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
