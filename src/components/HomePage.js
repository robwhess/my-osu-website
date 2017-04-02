import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { courseData, coursesByTerm } from '../CourseData';
import { generateSitePath } from '../lib/SitePath';
import PageContent from './PageContent';
import headshot from '../images/rob.jpg';
import '../styles/HomePage.css';

class HomePage extends Component {

  generateCurrentCoursesComponent() {
    var currentTerm = coursesByTerm[0];
    return (
      <section className="teaching">
        <h2>Teaching</h2>
        <p>These are the classes I'm teaching this term ({currentTerm.term}):</p>
        <ul>
          {currentTerm.courses.map((course, i) => (
            <li key={i}><Link to={generateSitePath('/teaching/' + course)}>{courseData[course].number} &ndash; {courseData[course].title}</Link></li>
          ))}
        </ul>
      </section>
    );
  }

  render() {
    return (
      <PageContent>
        <section className="essentials">
          <img src={headshot} alt="Me" className="headshot" />
          <div className="digits">
            <h1>Rob Hess</h1>
            <p className="title">Instructor</p>
            <p className="school"><a href="http://eecs.oregonstate.edu">School of EECS</a></p>
            <p className="university"><a href="http://oregonstate.edu">Oregon State University</a></p>
            <p className="town">Corvallis, OR 97331</p>
            <p className="email">Email: <a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a></p>
            <p className="office">Office: <a href="https://goo.gl/maps/DoQVXpSxZrQ2" target="_blank">KEC 1109</a></p>
          </div>
        </section>

        {this.generateCurrentCoursesComponent()}

        <section className="about">
          <h2>About Me</h2>
          <p>
            In my past life, I was an engineer on the Yahoo Machine Learning and
            Vision team, where I got to work on researching, designing, and
            deploying some <a
            href="http://code.flickr.net/2014/10/20/introducing-flickr-park-or-bird/"
            target="_blank">very cool technologies</a> at <a
            href="http://code.flickr.net/2014/05/20/computer-vision-at-scale-with-hadoop-and-storm/"
            target="_blank">massive scale</a>.  While I was at Yahoo, I also spent
            time working on Flickr's Front End team where I implemented and
            deployed <a href="https://www.flickr.com/search"
            target="_blank">web</a> <a href="https://www.flickr.com/explore"
            target="_blank">pages</a> that millions of people use every day.
          </p>
          <p>
            Before Yahoo, I worked at a small computer vision startup named IQ
            Engines, which <a
            href="https://techcrunch.com/2013/08/23/yahoo-acquires-image-recognition-startup-iq-engines/"
            target="_blank">Yahoo acquired</a>, and long, long ago, I earned <a
            href="http://ir.library.oregonstate.edu/xmlui/handle/1957/30348"
            target="_blank">my PhD</a> right here in the CS department of Oregon
            State.
          </p>
          <p>
            Through it all, I've been and remain an avid brewer of beer, baker of
            bread, taker of photos, player of games, and lover of cats.
          </p>
        </section>
      </PageContent>
    );
  }
}

export default HomePage;
