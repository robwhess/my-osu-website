import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import { courseData } from '../CourseData';
import { generateSitePath } from '../lib/SitePath';
import PageContent from '../components/PageContent';
import '../styles/TeachingPage.css';

class TeachingPage extends Component {
  render() {
    return (
      <PageContent className="teaching-page">
        <Helmet title="Teaching" />
        {Object.keys(courseData).map((term, i) => (
          <div className="teaching-term" key={i}>
            <h2>{courseData[term].title}</h2>
            {Object.keys(courseData[term].courses).map((course, j) => (
              <p key={j}>
                <Link to={generateSitePath(`/teaching/${course}-${term}`)}>{courseData[term].courses[course].number} &ndash; {courseData[term].courses[course].title}</Link>
              </p>
            ))}
          </div>
        ))}
      </PageContent>
    );
  }
}

export default TeachingPage;
