/*
 * This file contains a component for rendering a page to display info about
 * a course's TAs.
 */

import React from 'react';
import styled from '@emotion/styled/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faVideo, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import Button from '../components/Button';
import Event from '../components/Event';
import AngleList from '../components/AngleList';

import NoMatchPage from './NoMatchPage';

import breakpoints from '../lib/breakpoints';

import { courseData } from '../data/courses';

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

const TAName = styled.h2`
  padding-left: 36px;
  text-indent: -36px;
`;

const TAContact = styled.div`
  margin: 3px 0;
  padding-left: 36px;
`;

const ButtonContainer = styled.div`
  margin: 8px 0;
`;

function taHasVideoConference(ta) {
  return (ta.officeHours && ta.officeHours.some(hours => hours.videoConferenceLink))
    || (ta.gradingHours && ta.gradingHours.some(hours => hours.videoConferenceLink));
}

function taHasAppointments(ta) {
  return (ta.officeHours && ta.officeHours.some(hours => hours.appointmentsLink))
    || (ta.gradingHours && ta.gradingHours.some(hours => hours.appointmentsLink));
}

function TAInfoPage() {
  const { courseNum, term } = useParams();
  const course = courseData[term]?.courses[courseNum];
  const tas = course?.tas;
  const title = `${course?.number} Teaching Assistants`;

  return tas ? (
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
                  When this icon appears below, click it to join the video conference for the TA's office or grading hours.
                </IconLegendItem>
              </IconLegendRow>
            )}
            {tas.some(taHasAppointments) && (
              <IconLegendRow>
                <IconLegendItem><FontAwesomeIcon icon={faCalendarPlus} /></IconLegendItem>
                <IconLegendItem>&ndash;</IconLegendItem>
                <IconLegendItem>
                  When this icon appears below, click it to make an appointment for the TA's office or grading hours.
                </IconLegendItem>
              </IconLegendRow>
            )}
          </IconLegend>
        </HeaderFlexContainer>
        <TAInfoContainer>
          {tas.map(ta => (
            <TAInfoItem key={ta.name}>
              <TAInfoData>
                <TAName><FontAwesomeIcon icon={faAngleDoubleRight} /> {ta.name}</TAName>
                <TAContact><a href={`mailto:${ta.email}`}><h4>{ta.email}</h4></a></TAContact>
                  {ta.appointmentsLink && (
                    <TAContact>
                      <ButtonContainer>
                        <Button secondary small href={ta.appointmentsLink} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faCalendarPlus} /> &nbsp; Grading Appointments
                        </Button>
                    </ButtonContainer>
                    </TAContact>
                  )}
                  {ta.videoConferenceLink && (
                    <TAContact>
                      <ButtonContainer>
                        <Button secondary small href={ta.videoConferenceLink} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faVideo} /> &nbsp; Join Videoconference
                        </Button>
                    </ButtonContainer>
                    </TAContact>
                  )}
              </TAInfoData>

              <TAInfoData>
                {ta.officeHours ?
                  <>
                    <h4>Office Hours</h4>
                    <AngleList
                      singleAngle
                      items={ta.officeHours.map((hours, j) => (
                        <Event key={j} {...hours} />
                      ))}
                    />
                  </> :
                  null
                }
              </TAInfoData>

              <TAInfoData>
                {ta.gradingHours ?
                  <>
                    <h4>Grading Hours</h4>
                    <AngleList
                      singleAngle
                      items={ta.gradingHours.map((hours, j) => (
                        <Event key={j} {...hours} />
                      ))}
                    />
                  </> :
                  null
                }
              </TAInfoData>
            </TAInfoItem>
          ))}
        </TAInfoContainer>
      </TAInfoSectionBox>
    </PageContent>
  ) : (
    <NoMatchPage />
  );
}

export default TAInfoPage;
