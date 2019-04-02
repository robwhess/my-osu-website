/*
 * This file contains a component for rendering a page to display info about
 * a course's TAs.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';
import Helmet from 'react-helmet';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import DayTimeLocation from '../components/DayTimeLocation';
import AngleList from '../components/AngleList';
import breakpoints from '../lib/breakpoints';

const TAInfoSectionBox = styled(SectionBox)`
  h1 {
    margin: 10px 0;
  }
`

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
  padding-left: 28px;
  h4 {
    margin: 4px 0 0 0;
  }
`;

function TAInfoPage({ title, tas }) {
  return (
    <PageContent>
      <Helmet title={title} />
      <TAInfoSectionBox>
        <h1>{title}</h1>
        <TAInfoContainer>
          {tas.map((ta, i) => (
            <TAInfoItem key={i}>
              <TAInfoData>
                <h2><FontAwesome name="angle-double-right" /> {ta.name}</h2>
                <TAEmail><a href={`mailto:${ta.email}`}><h4>{ta.email}</h4></a></TAEmail>
              </TAInfoData>

              <TAInfoData>
                {ta.officeHours ?
                  <React.Fragment>
                    <h4>Office Hours</h4>
                    <AngleList
                      singleAngle
                      items={ta.officeHours.map((hours, j) => (
                        <DayTimeLocation key={j} {...hours} />
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
                        <DayTimeLocation key={j} {...hours} />
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
    officeHours: PropTypes.arrayOf(PropTypes.shape(DayTimeLocation.propTypes)),
    gradingHours: PropTypes.arrayOf(PropTypes.shape(DayTimeLocation.propTypes))
  })).isRequired
};

export default TAInfoPage;
