import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';

import PageContent from './PageContent';
import '../styles/CoursePage.css';

class CoursePage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired
  }

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

  generateAssignmentComponent(assignment, key) {
    var { match } = this.props;
    var matchURLWithSlash = match.url.replace(/\/$/, '') + '/';
    var assignmentLinkComponent = null;
    if (assignment.link) {
      assignmentLinkComponent = <a href={assignment.link}>{assignment.title}</a>;
    } else if (assignment.subPage) {
      assignmentLinkComponent = (
        <Link to={matchURLWithSlash + assignment.subPage}>{assignment.title}</Link>
      );
    } else {
      assignmentLinkComponent = assignment.title;
    }

    return (
      <li key={key}>
        {assignmentLinkComponent}
        <ul>
          {assignment.notesHTML.map((noteHTML, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: noteHTML }} />
          ))}
        </ul>
      </li>
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
            {assignments.assignments.map(this.generateAssignmentComponent.bind(this))}
          </ul>
        </section>
      </PageContent>
    );
  }
}

CoursePage = withRouter(CoursePage);

export default CoursePage;
