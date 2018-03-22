import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';

import Navbar from './Navbar';
import PageContent from './PageContent';
import '../styles/CoursePage.css';

class CoursePage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired
  }

  generateSubnavComponent(subnavItems, courseNumber) {
    var subnavComponent = null;

    if (subnavItems) {

      var { match } = this.props;
      var matchURLWithoutSlash = match.url.replace(/\/$/, '');
      var links = subnavItems.map((subnavItem) => {
        var link = {
          title: subnavItem.title,
          isLink: true
        };
        if (subnavItem.subPage) {
          link.path = matchURLWithoutSlash + '/' + subnavItem.subPage;
        }
        return link;
      });

      links.unshift({
        path: matchURLWithoutSlash,
        title: "Course Info",
        isLink: true
      });

      links.push({
        path: matchURLWithoutSlash,
        title: courseNumber,
        isHeading: true
      });

      subnavComponent = <Navbar links={links} subnav />;

    }

    return subnavComponent;
  }

  generateCalendarWeekComponent(week, key) {
    return (
      <div className="week" key={key}>
        <h3>Week {week.week}</h3>

        /*
         * Generate each section for the week.
         */
        {week.sections.map((section, i) => {
          /*
           * First generate the list of entries for the section.  This can be
           * specified either in entriesHTML or in entries.
           */
          var entriesListComponent = null;
          if (section.entriesHTML) {
            entriesListComponent = (
              <ul>
                {section.entriesHTML.map((entryHTML, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: entryHTML }} />
                ))}
              </ul>
            );
          } else if (section.entries) {
            // Coming soon...
          }

          return (
            <div key={i}>
              <h4>{section.heading}</h4>
              {entriesListComponent}
            </div>
          );
        })}

      </div>
    );
  }

  generateCalendarComponent(calendar) {
    var calendarComponent = null;
    if (calendar) {
      calendarComponent = (
        <section className="calendar">
          <h2>Course Calendar</h2>
          <div className="calendar-weeks">
            {calendar.map(this.generateCalendarWeekComponent.bind(this))}
          </div>
        </section>
      );
    }
    return calendarComponent;
  }

  generateSingleAssignmentComponent(assignment, key) {
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

    var assignmentNotesComponent = null;
    if (assignment.notesHTML) {
      assignmentNotesComponent = (
        <ul>
          {assignment.notesHTML.map((noteHTML, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: noteHTML }} />
          ))}
        </ul>
      );
    }

    return (
      <li key={key}>
        {assignmentLinkComponent}
        {assignmentNotesComponent}
      </li>
    );
  }

  generateAssignmentsComponent(assignments, title, anchorName) {
    var assignmentsComponent = null;
    if (assignments) {
      var anchorComponent = anchorName ? <a name={anchorName} /> : null;
      var preambleComponent = null;
      if (assignments.preambleHTML) {
        preambleComponent = <div dangerouslySetInnerHTML={{ __html: assignments.preambleHTML }} />;
      }
      var assignmentsListComponent = null;
      if (assignments.assignments) {
        assignmentsListComponent = (
          <ul>
            {assignments.assignments.map(this.generateSingleAssignmentComponent.bind(this))}
          </ul>
        );
      }
      assignmentsComponent = (
        <section className="assignments">
          {anchorComponent}
          <h2>{title}</h2>
          {preambleComponent}
          {assignmentsListComponent}
        </section>
      );
    }
    return assignmentsComponent;
  }

  generateEssentialsRowComponent(item, key) {
    var { match } = this.props;
    var matchURLWithSlash = match.url.replace(/\/$/, '') + '/';
    var valueTDComponent;
    if (item.infoHTML) {
      valueTDComponent = <td dangerouslySetInnerHTML={{ __html: item.infoHTML }} />;
    } else if (item.infoSubPage && item.infoText) {
      valueTDComponent = (
        <td><Link to={matchURLWithSlash + item.infoSubPage}>{item.infoText}</Link></td>
      );
    } else {
      valueTDComponent = <td></td>;
    }
    return (
      <tr key={key}>
        <td className="category">{item.title}</td>
        {valueTDComponent}
      </tr>
    );
  }

  generateEssentialsComponent(essentials) {
    var essentialsComponent = null;
    if (essentials) {
      essentialsComponent = (
        <section className="info-table">
          <table>
            <tbody>
              {essentials.map(this.generateEssentialsRowComponent.bind(this))}
            </tbody>
          </table>
        </section>
      );
    }
    return essentialsComponent;
  }

  render() {

    var { number, title, term, essentials, calendar, assignments, finalProject, subnavItems } = this.props.courseData;

    var subnavComponent = this.generateSubnavComponent(subnavItems, number);
    var essentialsComponent = this.generateEssentialsComponent(essentials);
    var calendarComponent = this.generateCalendarComponent(calendar);
    var assignmentsComponent = this.generateAssignmentsComponent(assignments, "Assignments", "assignments");
    var finalProjectComponent = this.generateAssignmentsComponent(finalProject, "Final Project", "final-project");

    return (
      <div>
        {subnavComponent}

        <PageContent contentClassName="course-page">

          <Helmet title={number} />
          <h1>{number} &ndash; {title}</h1>
          <h3>{term}</h3>

          {essentialsComponent}
          {calendarComponent}
          {assignmentsComponent}
          {finalProjectComponent}

        </PageContent>
      </div>
    );

  }
}

CoursePage = withRouter(CoursePage);

export default CoursePage;
