import React, { Component } from 'react';
import Helmet from 'react-helmet';

import PageContent from './PageContent';
import '../styles/CoursePage.css';

class CoursePage extends Component {

  generateCalendarWeekComponent(week, key) {
    return (
      <div className="week" key={key}>
        <h3>Week {week.week}</h3>
        {week.sections.map((section, i) => (
          <div key={i}>
            <h4>{section.heading}:</h4>
            <ul>
              {section.entriesHTML.map((entryHTML, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: entryHTML }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  render() {
    var { number, title, term, essentials, calendar, assignments } = this.props.courseData;
    return (
      <PageContent contentClassName="course-page">
        <Helmet title={number} />
        <h1>{number} &ndash; {title}</h1>
        <h3>{term}</h3>

        <section className="info-table">
          <table>
            <tbody>
              {essentials.map((item, i) => (
                <tr key={i}><td className="category">{item.title}</td><td dangerouslySetInnerHTML={{ __html: item.infoHTML }} /></tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="calendar">
          <h2>Course Calendar</h2>
          <div className="calendar-weeks">
            {calendar.map(this.generateCalendarWeekComponent)}
          </div>
        </section>

        <a name="assignments" />
        <section className="assignments">
          <h2>Assignments</h2>
          <div dangerouslySetInnerHTML={{ __html: assignments.preamble }} />
          <ul>
            {assignments.assignments.map((assignment, i) => (
              <li key={i}>
                <a href={assignment.link}>{assignment.title}</a>
                <ul>
                  {assignment.notesHTML.map((noteHTML, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: noteHTML }} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </PageContent>
    );
  }
}

export default CoursePage;
