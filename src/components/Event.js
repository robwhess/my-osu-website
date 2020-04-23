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
import { faExternalLinkAlt, faInfoCircle, faVideo } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

const md = new MarkdownIt();

const ExternalLinkIcon = styled.span`
  font-size: 75%;
`;

const ActionItemLink = styled.a`
  padding: 0 3px;
  font-size: 16px;
  &:hover {
    padding: 0 2px;
    font-size: 18px;
  }
`

function Event({ day, time, location, link, details, videoConferenceLink }) {
  const [ detailsModalVisible, setDetailsModalVisible ] = useState(false);

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
      <ActionItemLink
        key="details"
        href="#"
        title="Click to display more details about this event."
        onClick={(e) => {
          e.preventDefault();
          setDetailsModalVisible(true);
        }}
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </ActionItemLink>

    );
    if (detailsModalVisible) {
      actionItemLinks.push(
        <Modal content={details} onClose={() => setDetailsModalVisible(false)} />
      )
    }
  }

  if (videoConferenceLink) {
    actionItemLinks.push(
      <ActionItemLink
        key="videoConference"
        href={videoConferenceLink}
        title="Click to join the video conference for this event."
        target="_blank" rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faVideo} />
      </ActionItemLink>
    )
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
