import React, { Component } from 'react';
import Helmet from 'react-helmet';

import CourseSubPage from './CourseSubPage';
import '../styles/RecitationInfoPage.css';

class RecitationInfoPage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired,
    courseData: React.PropTypes.object.isRequired,
  }

  generateRecitationPoliciesComponent(policiesHTML) {
    var recitationPoliciesComponent = null;
    if (policiesHTML && policiesHTML.length > 0) {
      recitationPoliciesComponent = (
        <section className="info-box">
          <h2>Recitation Policies</h2>
          <ul>
            {policiesHTML.map((policyHTML, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: policyHTML }} />
            ))}
          </ul>
        </section>
      );
    }
    return recitationPoliciesComponent;
  }

  generateRecitationSectionsComponent(sections) {
    return (
      <section className='info-table'>
        <h2>Recitation Sections</h2>
        <table className='full-width-table alternating-table'>
          <tbody>
            <tr>
              <th className='bottom-align'>Section</th>
              <th className='bottom-align'>Day and Time</th>
              <th className='bottom-align'>Location</th>
              <th className='bottom-align'>Recitation TA</th>
            </tr>
            {sections.map((section, i) => (
              <tr key={i}>
                <td>{section.number}</td>
                <td>{section.dayTime}</td>
                <td>{section.location}</td>
                <td>{section.ta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  generateRecitationCalendarComponent(calendar) {
    var calendarComponent = null;
    if (calendar) {
      calendarComponent =<section className="calendar">
        <h2>Recitation Calendar</h2>
        <div className="calendar-weeks">
          {calendar.map(this.generateCalendarWeekComponent)}
        </div>
      </section>;
    }
    return calendarComponent;
  }

  generateCalendarWeekComponent(week, key) {
    return (
      <div className="week" key={key}>
        <h3>Week {week.week}</h3>
        {week.sections.map((section, i) => (
          <div key={i}>
            <h4>{section.heading}</h4>
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
    var { match, courseData } = this.props;
    var recitationInfo = courseData.recitationInfo;

    return (
      <CourseSubPage contentClassName="recitation-info-page" match={match} courseData={courseData}>
        <Helmet title={"Recitations - " + courseData.number} />
        <h1>{courseData.number} &ndash; Recitation Info</h1>
        <h3>{courseData.term}</h3>

        {this.generateRecitationPoliciesComponent(recitationInfo.policiesHTML)}

        {this.generateRecitationSectionsComponent(recitationInfo.sections)}

        {this.generateRecitationCalendarComponent(recitationInfo.calendar)}
      </CourseSubPage>
    );
  }

}

export default RecitationInfoPage;
