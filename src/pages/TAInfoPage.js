/*
 * This file contains a component for rendering a page to display info about
 * a course's TAs.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import FontAwesome from 'react-fontawesome';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import DayTimeLocation from '../components/DayTimeLocation';
import AngleList from '../components/AngleList';

const TAInfoSectionBox = styled(SectionBox)`
  h1 {
    margin: 10px 0;
  }
`

const TAInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const TAInfoItem = styled.div`
  margin: 10px 20px;
  h2 {
    margin: 0;
  }
`;

const TAInfoData = styled.div`
  padding-left: 28px;
  h4 {
    margin: 8px 0 0 0;
  }
`;

function TAInfoPage({ title, taInfo }) {
  return (
    <PageContent fullWidth>
      <TAInfoSectionBox>
        <h1>{title}</h1>
        <TAInfoContainer>
          {taInfo.map((ta, i) => (
            <TAInfoItem key={i}>
              <h2><FontAwesome name="angle-double-right" /> {ta.name}</h2>
              <TAInfoData>
                <a href={`mailto:${ta.email}`}><h4>{ta.email}</h4></a>

                <h4>Office Hours</h4>
                <AngleList singleAngle
                  items={ta.officeHours.map((hours, j) => (
                    <DayTimeLocation key={j} {...hours} />
                  ))}
                />

                <h4>Grading Hours</h4>
                <AngleList singleAngle
                  items={ta.gradingHours.map((hours, j) => (
                    <DayTimeLocation key={j} {...hours} />
                  ))}
                />
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
  taInfo: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    officeHours: PropTypes.arrayOf(PropTypes.shape(DayTimeLocation.propTypes)),
    gradingHours: PropTypes.arrayOf(PropTypes.shape(DayTimeLocation.propTypes))
  })).isRequired
};

export default TAInfoPage;
