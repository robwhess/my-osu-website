import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { courseData, coursesByTerm } from '../CourseData';
import { generateSitePath } from '../lib/SitePath';
import PageContent from './PageContent';
import '../styles/TeachingPage.css';

class TeachingPage extends Component {
  render() {
    return (
      <PageContent contentClassName="teaching-page">
        {coursesByTerm.map((term, i) => (
          <div className="teaching-term" key={i}>
            <h2>{term.term}</h2>
            {term.courses.map((course, j) => (
              <p key={j}>
                <Link to={generateSitePath('/teaching/' + course)}>{courseData[course].number} &ndash; {courseData[course].title}</Link>
              </p>
            ))}
          </div>
        ))}
      </PageContent>
    );
  }
}

export default TeachingPage;
