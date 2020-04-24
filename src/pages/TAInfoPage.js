/*
 * This file contains a component for rendering a page to display info about
 * a course's TAs.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faVideo, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import Helmet from 'react-helmet';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import Event from '../components/Event';
import AngleList from '../components/AngleList';
import breakpoints from '../lib/breakpoints';

const TAInfoSectionBox = styled(SectionBox)`
  h1 {
    margin: 10px 0;
  }
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  align-items: space-between;
  @media (max-width: ${breakpoints[0]}px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  flex: 5 75%;
`;

const IconLegend = styled.div`
  flex 1 25%;
`;

const IconLegendRow = styled.div`
  font-size: 14px;
  margin: 5px;
  display: table-row;
`;

const IconLegendItem = styled.div`
  display: table-cell;
  ${'' /* max-width: 200px; */}
  padding: 3px;
`;

const TAInfoContainer = styled.div`
  margin-bottom: 20px;
`;

const TAInfoItem = styled.div`
  display: table-row;
  h2 {
    margin: 0;
  }
  @media (max-width: ${breakpoints[0]}px) {
    display: flex;
    flex-wrap: wrap;
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const TAInfoData = styled.div`
  display: table-cell;
  padding: 25px;
  border-bottom: 1px solid #eee;
  h4 {
    margin: 0;
  }
  &:first-of-type {
    padding-left: 0;
  }
  ${TAInfoItem}:last-of-type & {
    border-bottom: none;
  }
  @media (max-width: ${breakpoints[0]}px) {
    display: initial;
    flex: 1 1 100%;
    padding: 10px;
    border-bottom: none;
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`;

const TAEmail = styled.div`
  padding-left: 36px;
  h4 {
    margin: 4px 0 0 0;
  }
`;

function taHasVideoConference(ta) {
  return (ta.officeHours && ta.officeHours.some(hours => hours.videoConferenceLink))
    || (ta.gradingHours && ta.gradingHours.some(hours => hours.videoConferenceLink));
}

function taHasAppointments(ta) {
  return (ta.officeHours && ta.officeHours.some(hours => hours.appointmentsLink))
    || (ta.gradingHours && ta.gradingHours.some(hours => hours.appointmentsLink));
}

function TAInfoPage({ title, tas }) {
  return (
    <PageContent>
      <Helmet title={title} />
      <TAInfoSectionBox>
        <HeaderFlexContainer>
          <Title>{title}</Title>
          <IconLegend>
            {tas.some(taHasVideoConference) && (
              <IconLegendRow>
                <IconLegendItem><FontAwesomeIcon icon={faVideo} /></IconLegendItem>
                <IconLegendItem>&ndash;</IconLegendItem>
                <IconLegendItem>
                  When this icon appears for a TA below, click it to join the video conference for their office or grading hours.
                </IconLegendItem>
              </IconLegendRow>
            )}
            {tas.some(taHasAppointments) && (
              <IconLegendRow>
                <IconLegendItem><FontAwesomeIcon icon={faCalendarPlus} /></IconLegendItem>
                <IconLegendItem>&ndash;</IconLegendItem>
                <IconLegendItem>
                  When this icon appears for a TA below, click it to make an appointment for their office or grading hours.
                </IconLegendItem>
              </IconLegendRow>
            )}
          </IconLegend>
        </HeaderFlexContainer>
        <TAInfoContainer>
          {tas.map(ta => (
            <TAInfoItem key={ta.name}>
              <TAInfoData>
                <h2><FontAwesomeIcon icon={faAngleDoubleRight} /> {ta.name}</h2>
                <TAEmail><a href={`mailto:${ta.email}`}><h4>{ta.email}</h4></a></TAEmail>
              </TAInfoData>

              <TAInfoData>
                {ta.officeHours ?
                  <React.Fragment>
                    <h4>Office Hours</h4>
                    <AngleList
                      singleAngle
                      items={ta.officeHours.map((hours, j) => (
                        <Event key={j} {...hours} />
                      ))}
                    />
                  </React.Fragment> :
                  null
                }
              </TAInfoData>

              <TAInfoData>
                {ta.gradingHours ?
                  <React.Fragment>
                    <h4>Grading Hours</h4>
                    <AngleList
                      singleAngle
                      items={ta.gradingHours.map((hours, j) => (
                        <Event key={j} {...hours} />
                      ))}
                    />
                  </React.Fragment> :
                  null
                }
              </TAInfoData>
            </TAInfoItem>
          ))}
        </TAInfoContainer>
      </TAInfoSectionBox>
    </PageContent>
  );
}

TAInfoPage.propTypes = {
  title: PropTypes.string.isRequired,
  tas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    officeHours: PropTypes.arrayOf(PropTypes.shape(Event.propTypes)),
    gradingHours: PropTypes.arrayOf(PropTypes.shape(Event.propTypes))
  })).isRequired
};

export default TAInfoPage;
