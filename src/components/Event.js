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
import { faExternalLinkAlt, faInfoCircle, faVideo, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

const md = new MarkdownIt();

const ExternalLinkIcon = styled.span`
  font-size: 75%;
`;

const ActionItemLink = styled.a`
  padding: 2px 4px;
  border: 1px solid #d54f1e;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background-color: rgba(213, 79, 30, 0.2);
    text-decoration: none;
  }
`

function Event({ day, time, timeZone, location, link, details, videoConferenceLink, appointmentsLink }) {
  const [ detailsModalVisible, setDetailsModalVisible ] = useState(false);

  let eventString = '';
  if (day && time) {
    eventString = `${day}, *${time}*`;
  } else if (day) {
    eventString = day;
  }

  if (timeZone) {
    eventString += ` (${timeZone})`;
  }
  if (location) {
    eventString += ` &mdash; ${location}`;
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
        Join <FontAwesomeIcon icon={faVideo} />
      </ActionItemLink>
    )
  }

  if (appointmentsLink) {
    actionItemLinks.push(
      <ActionItemLink
        key="appointments"
        href={appointmentsLink}
        title="Click to make an appointment for this event."
        target="_blank" rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faCalendarPlus} />
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
  timeZone: PropTypes.string,
  location: PropTypes.string,
  link: PropTypes.string,
  details: PropTypes.string,
  videoConferenceLink: PropTypes.string,
  appointmentsLink: PropTypes.string
};

export default Event;
