/*
 * This file contains a component to render essential information about a
 * specific course.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';

import DayTimeLocation from '../components/DayTimeLocation';
import AngleList from '../components/AngleList';
import OfficeHoursList from '../components/OfficeHoursList';
import TitleLinkDescription from './TitleLinkDescription';

import breakpoints from '../lib/breakpoints';

import personalData from '../data/personal';

const EssentialInfoContainer = styled.div`
  h1 {
    margin: 0;
  }
  h3 {
    margin: 0 0 10px 0;
  }
`;

const EssentialInfoItem = styled.div`
  display: table-row;
`

const EssentialInfoHeading = styled.div`
  display: table-cell;
  padding: 5px 15px 5px 0;
  text-align: right;
  font-weight: 400;
  @media (max-width: ${breakpoints[0]}px) {
    border-bottom: 1px solid #efefef;
    padding: 10px 15px 10px 0;
    font-weight: bold;
    ${EssentialInfoItem}:last-of-type & {
      border-bottom: 0;
    }
  }
`

const EssentialInfoData = styled.div`
  display: table-cell;
  padding: 5px 0;
  @media (max-width: ${breakpoints[0]}px) {
    border-bottom: 1px solid #efefef;
    padding: 10px 0;
    ${EssentialInfoItem}:last-of-type & {
      border-bottom: 0;
    }
  }
`

function CourseEssentialInfo(props) {
  const { number, title, term, lectures, finalExams, syllabusLink, textbooks, links } = props;
  return (
      <EssentialInfoContainer>
        <h1>{number} &ndash; {title}</h1>
        <h3>{term}</h3>

        <EssentialInfoItem>
          <EssentialInfoHeading>Instructor:</EssentialInfoHeading>
          <EssentialInfoData>
            {personalData.name}
            {
              personalData.email ?
              <React.Fragment>(<a href={`mailto:${personalData.email}`}>{personalData.email}</a>)</React.Fragment> :
              null
            }
          </EssentialInfoData>
        </EssentialInfoItem>


          {personalData.officeHours ?
            <EssentialInfoItem>
              <EssentialInfoHeading>Office hours:</EssentialInfoHeading>
              <EssentialInfoData>
                <OfficeHoursList officeHours={personalData.officeHours} />
              </EssentialInfoData>
            </EssentialInfoItem> :
            null
          }

        <EssentialInfoItem>
          <EssentialInfoHeading>Lectures:</EssentialInfoHeading>
          <EssentialInfoData>
            <AngleList noOneElementList
              items={Object.keys(lectures).map((section, i) => (
                <span>Section {section}: <DayTimeLocation {...lectures[section]} /></span>
              ))}/>
          </EssentialInfoData>
        </EssentialInfoItem>

        {finalExams ?
          <EssentialInfoItem>
            <EssentialInfoHeading>Final Exams:</EssentialInfoHeading>
            <EssentialInfoData><AngleList noOneElementList
              items={Object.keys(finalExams).map((section, i) => (
                <span>Section {section}: <DayTimeLocation {...finalExams[section]} /></span>
              ))}/>
            </EssentialInfoData>
          </EssentialInfoItem> :
          null
        }

        <EssentialInfoItem>
          <EssentialInfoHeading>Syllabus:</EssentialInfoHeading>
          <EssentialInfoData>
            <a href={syllabusLink} target="_blank" rel="noopener noreferrer">{number} syllabus</a>
          </EssentialInfoData>
        </EssentialInfoItem>

        {textbooks ?
          <EssentialInfoItem>
            <EssentialInfoHeading>Textbooks:</EssentialInfoHeading>
            <EssentialInfoData>
              <AngleList noOneElementList items={textbooks.map((textbook, i) => (
                <span><a href={textbook.link} target="_blank" rel="noopener noreferrer">{textbook.title}</a> by {textbook.author}</span>
              ))} />
            </EssentialInfoData>
          </EssentialInfoItem>:
          null
        }

        {links ?
          <EssentialInfoItem>
            <EssentialInfoHeading>Links:</EssentialInfoHeading>
            <EssentialInfoData>
              <AngleList items={links.map(link => <TitleLinkDescription {...link} />)} />
            </EssentialInfoData>
          </EssentialInfoItem>:
          null
        }

      </EssentialInfoContainer>
  );
}

CourseEssentialInfo.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  lectures: PropTypes.objectOf(PropTypes.shape(DayTimeLocation.propTypes)).isRequired,
  finalExams: PropTypes.objectOf(PropTypes.shape(DayTimeLocation.propTypes)),
  syllabusLink: PropTypes.string.isRequired,
  textbooks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })),
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }))
};

export default CourseEssentialInfo;
