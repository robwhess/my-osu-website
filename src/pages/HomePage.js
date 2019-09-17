/*
 * This file contains a component representing the home page of the site.
 */

import React from 'react';
import styled from '@emotion/styled/macro';

import PageContent from '../components/PageContent';
import SectionBox from '../components/SectionBox';
import CourseList from '../components/CourseList';

import breakpoints from '../lib/breakpoints';

import headshot from '../static/rob.jpg';

import { currentTerm, currentTermData } from '../data/courses';

const HomePageSectionBox = styled(SectionBox)`
  max-width: 100%;
  margin: 5px;
  flex: 1 1 50%;
  @media (max-width: ${breakpoints[0]}px) {
    padding-bottom: 30px;
  }
`

const TransprentFlexContainer = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrapping ? 'wrap' : 'initial'};
  @media (max-width: ${breakpoints[0]}px) {
    flex-direction: column;
  }
`

const HeadshotContainer = styled.div`
  margin-right: 30px;
  text-align: center;
`

const HeadshotImg = styled.img`
  border-radius: 3px;
`;

const Name = styled.h1`
  margin: 0;
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`;

const AddressContainer = styled(TransprentFlexContainer)`
  align-items: flex-start;
  p {
    margin: 0;
  }
`

const Address = styled.div`
margin-left: 10px;
`

const EmailContainer = styled.div`
  margin-top: 10px;
`

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
            <HeadshotContainer>
              <HeadshotImg src={headshot} alt="Rob Hess" />
            </HeadshotContainer>
            <div>
              <Name>Rob Hess</Name>
              <Title>Instructor</Title>
              <AddressContainer>
                <p>Address:</p>
                <Address>
                  <p><a href="https://goo.gl/maps/DoQVXpSxZrQ2" target="_blank" rel="noopener noreferrer">KEC 1109</a></p>
                  <p><a href="http://eecs.oregonstate.edu">School of EECS</a></p>
                  <p><a href="http://oregonstate.edu">Oregon State University</a></p>
                  <p>Corvallis, OR 97331</p>
                </Address>
              </AddressContainer>

              <EmailContainer>Email: <a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a></EmailContainer>

            </div>
          </TransprentFlexContainer>
        </HomePageSectionBox>

        <HomePageSectionBox>
          <h2>Teaching</h2>
          <p>These are the classes I'm teaching this term ({currentTermData.title}):</p>
          <CourseList term={currentTerm} courses={currentTermData.courses} />
        </HomePageSectionBox>
      </TransprentFlexContainer>

      <HomePageSectionBox>
        <AboutMeContainer>
          <h2>About Me</h2>
          <p>
            In my past life, I was an engineer on the Yahoo Machine Learning and Vision team, where I got to research, design, and deploy some <a href="http://code.flickr.net/2014/10/20/introducing-flickr-park-or-bird/" target="_blank" rel="noopener noreferrer">very cool technologies</a> at <a href="http://code.flickr.net/2014/05/20/computer-vision-at-scale-with-hadoop-and-storm/" target="_blank" rel="noopener noreferrer">massive scale</a>.  While I was at Yahoo, I also spent time working on Flickr's Front End team where I implemented and deployed <a href="https://www.flickr.com/search" target="_blank" rel="noopener noreferrer">web</a> <a href="https://www.flickr.com/explore" target="_blank" rel="noopener noreferrer">pages</a> that millions of people use every day.
          </p>
          <p>
            Before Yahoo, I worked at a small computer vision startup named IQ Engines, which <a href="https://techcrunch.com/2013/08/23/yahoo-acquires-image-recognition-startup-iq-engines/" target="_blank" rel="noopener noreferrer">Yahoo acquired</a>, and long, long ago, I earned <a href="http://ir.library.oregonstate.edu/xmlui/handle/1957/30348" target="_blank" rel="noopener noreferrer">my PhD</a> right here in the CS department of Oregon State.
          </p>
          <p>
            Through it all, I've been and remain an avid brewer of beer, baker of bread, taker of photos, player of games, and lover of cats.
          </p>
        </AboutMeContainer>
      </HomePageSectionBox>
    </PageContent>
  );
}

export default HomePage;
