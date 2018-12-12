/* eslint "jsx-a11y/anchor-is-valid": "off", "jsx-a11y/anchor-has-content": "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';

import Navbar from './Navbar2';
import PageContent from './PageContent';
import '../styles/CoursePage.css';

class CoursePage extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
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

      const heading = {
        path: matchURLWithoutSlash,
        title: courseNumber
      };

      subnavComponent = <Navbar heading={heading} links={links} subnav />;

    }

    return subnavComponent;
  }

  generateSectionEntryListComponent(entryList, key) {
    var entryListItemComponents = [];
    var entryItemKey = 0;
    entryList.forEach((entryListItem, i) => {
      if (i > 0) {
        entryListItemComponents.push(<span key={entryItemKey++} dangerouslySetInnerHTML={{ __html: " &ndash; " }}></span>);
      }
      if (entryListItem.link) {
        entryListItemComponents.push(<a key={entryItemKey++} href={entryListItem.link} target="_blank" rel="noopener noreferrer">{entryListItem.text}</a>);
      } else {
        entryListItemComponents.push(<span key={entryItemKey++}>{entryListItem.text}</span>);
      }
    });
    return <li key={key}>{entryListItemComponents}</li>;
  }

  generateCalendarSectionEntriesComponent(section) {
    var entriesListComponent = null;
    if (section.entriesHTML) {
      entriesListComponent = (
        <ul>
          {section.entriesHTML.map((entryHTML, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: entryHTML }} />
          ))}
        </ul>
      );
    } else if (section.entriesLists) {
      entriesListComponent = (
        <ul>
          {section.entriesLists.map(this.generateSectionEntryListComponent.bind(this))}
        </ul>
      );
    }
    return entriesListComponent;
  }

  generateCalendarWeekComponent(week, key) {
    return (
      <div className="week" key={key}>
        <h3>Week {week.week}</h3>

        {week.sections.map((section, i) => (
          <div key={i}>
            <h4>{section.heading}</h4>
            {this.generateCalendarSectionEntriesComponent(section)}
          </div>
        ))}

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

  generateEssentialsComponent(number, title, term, essentials) {
    var essentialsComponent = null;
    if (essentials) {
      essentialsComponent = (
        <section className="info-table">
          <div className="course-title-block">
            <h1>{number} &ndash; {title}</h1>
            <h3>{term}</h3>
          </div>
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
    var essentialsComponent = this.generateEssentialsComponent(number, title, term, essentials);
    var calendarComponent = this.generateCalendarComponent(calendar);
    var assignmentsComponent = this.generateAssignmentsComponent(assignments, "Assignments", "assignments");
    var finalProjectComponent = this.generateAssignmentsComponent(finalProject, "Final Project", "final-project");

    return (
      <div>
        {subnavComponent}

        <PageContent contentClassName="course-page">

          <Helmet title={number} />

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
