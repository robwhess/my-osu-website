/*
 * This file contains a component representing the home page of the site.
 */

import React from 'react';
import styled from '@emotion/styled/macro';
import MarkdownIt from 'markdown-it';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import OptionalLink from '../components/OptionalLink';
import CourseList from '../components/CourseList';
import OfficeHoursList from '../components/OfficeHoursList';

import breakpoints from '../lib/breakpoints';

import { currentTerm, currentTermData } from '../data/courses';
import personalData from '../data/personal';

const md = new MarkdownIt({ breaks: true });

const HomePageSectionBox = styled(SectionBox)`
  max-width: 100%;
  margin: 5px;
  flex: 1 1 50%;
  h2 {
    margin: 5px 0;
  }
  @media (max-width: ${breakpoints[0]}px) {
    padding-bottom: 30px;
  }
`;

const TransprentFlexContainer = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrapping ? 'wrap' : 'initial'};
  @media (max-width: ${breakpoints[0]}px) {
    flex-direction: column;
  }
`;

const PhotoContainer = styled.div`
  margin-right: 30px;
  text-align: center;
`;

const PhotoImg = styled.img`
  border-radius: 3px;
`;

const Name = styled.h1`
  margin: 0;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`;

const AddressContainer = styled(TransprentFlexContainer)`
  align-items: flex-start;
  p {
    margin: 0;
  }
`;

const Address = styled.div`
  margin-left: 10px;
`;

const EmailContainer = styled.div`
  margin-top: 10px;
`;

const InfoContainer = styled.div`
  margin-top: 15px;
  &:first-of-type {
    margin-top: 5px;
  }
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const AboutMeContainer = styled.div`
  max-width: 75%;
  @media (max-width: ${breakpoints[0]}px) {
    max-width: 100%;
  }
`;

function HomePage() {
  return (
    <PageContent>
      <TransprentFlexContainer>
        <HomePageSectionBox>
          <TransprentFlexContainer wrapping>
            {personalData.photoUrl ?
              <PhotoContainer>
                <PhotoImg src={personalData.photoUrl} alt={personalData.name} />
              </PhotoContainer> : null
            }
            <div>
              <Name>{personalData.name}</Name>
              {personalData.title ? <Title>{personalData.title}</Title> : null}
              <AddressContainer>
                <p>Address:</p>
                <Address>
                  {personalData.office ?
                    <p><OptionalLink text={personalData.office.text} link={personalData.office.link} newTab /></p> :
                    null
                  }
                  {personalData.department ?
                    <p><OptionalLink text={personalData.department.text} link={personalData.department.link} newTab /></p> :
                    null
                  }
                  {personalData.institution ?
                    <p><OptionalLink text={personalData.institution.text} link={personalData.institution.link} newTab /></p> :
                    null
                  }
                  {personalData.city ?
                    <p><OptionalLink text={personalData.city.text} link={personalData.city.link} newTab /></p> :
                    null
                  }
                </Address>
              </AddressContainer>

              {personalData.email ?
                <EmailContainer>E-mail: <a href={`mailto:${personalData.email}`}>{personalData.email}</a></EmailContainer> :
                null
              }

            </div>
          </TransprentFlexContainer>
        </HomePageSectionBox>

        <HomePageSectionBox>
          {currentTerm && currentTermData ?
            <InfoContainer>
              <h2>Teaching</h2>
              <p>These are the classes I'm teaching this term ({currentTermData.title}):</p>
              <CourseList term={currentTerm} courses={currentTermData.courses} />
            </InfoContainer> :
            null
          }
          {personalData.officeHours ?
            <InfoContainer>
              <h2>Office Hours</h2>
              <p>These are my current office hours:</p>
              <OfficeHoursList officeHours={personalData.officeHours} />
            </InfoContainer> :
            null
          }
        </HomePageSectionBox>
      </TransprentFlexContainer>

      {personalData.aboutMeText ?
        <HomePageSectionBox>
          <AboutMeContainer>
            <h2>About Me</h2>
            <div dangerouslySetInnerHTML={{ __html: md.renderInline(personalData.aboutMeText)}} />
          </AboutMeContainer>
        </HomePageSectionBox> :
        null
      }

    </PageContent>
  );
}

export default HomePage;
