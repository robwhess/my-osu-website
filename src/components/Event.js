/*
 * This file contains a small component for rendering a day/time/location
 * object.  The component supports markdown in all fields.
 */
/* eslint "jsx-a11y/anchor-is-valid": "off" */

import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

const md = new MarkdownIt();

const ExternalLinkIcon = styled.span`
  font-size: 75%;
`;

const ActionItemLink = styled.a`
  font-size: 90%;
  color: inherit;
  &:hover {
    color: #d54f1e;
    text-decoration: none;
  }
`

function Event({ day, time, location, link, details }) {
  const [ modalVisible, setModalVisible ] = useState(false);

  let eventString = '';
  if (day && time) {
    eventString = `${day}, *${time}*`;
  } else if (day) {
    eventString = day;
  }
  if (location) {
    eventString += ` (${location})`;
  }

  const eventStringSpan = <span dangerouslySetInnerHTML={{ __html: md.renderInline(eventString) }} />;
  let eventElem = eventStringSpan;

  if (link) {
    eventElem = (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {eventElem}
        &nbsp;
        <ExternalLinkIcon><FontAwesomeIcon icon={faExternalLinkAlt} /></ExternalLinkIcon>
      </a>
    );
  }

  const actionItemLinks = [];
  if (details) {
    actionItemLinks.push(
      <>
        &nbsp;
        <ActionItemLink
          key="details"
          href="#"
          title="Click to display more details"
          onClick={(e) => {
            e.preventDefault();
            setModalVisible(true);
          }}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </ActionItemLink>
        {modalVisible && <Modal content={details} onClose={() => setModalVisible(false)} />}
      </>
    );
  }

  if (actionItemLinks.length > 0) {
    eventElem = (
      <>
        {eventElem}
        &nbsp;
        {actionItemLinks}
      </>
    );
  }

  return eventElem;
}

Event.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string,
  link: PropTypes.string,
  details: PropTypes.string
};

export default Event;
