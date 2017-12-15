import React, { Component } from 'react';
import Helmet from 'react-helmet';

import CourseSubPage from './CourseSubPage';
import '../styles/RecitationLabInfoPage.css';

class RecitationLabInfoPage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired,
    courseData: React.PropTypes.object.isRequired,
    type: React.PropTypes.oneOf(['lab', 'recitation']).isRequired
  }

  generatePoliciesComponent(policiesHTML) {
    var titleType = this.props.type === 'lab' ? 'Lab' : "Recitation";
    var policiesComponent = null;
    if (policiesHTML && policiesHTML.length > 0) {
      policiesComponent = (
        <section className="info-box">
          <h2>{titleType} Policies</h2>
          <ul>
            {policiesHTML.map((policyHTML, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: policyHTML }} />
            ))}
          </ul>
        </section>
      );
    }
    return policiesComponent;
  }

  generateSectionsComponent(sections) {
    var titleType = this.props.type === 'lab' ? 'Lab' : "Recitation";
    return (
      <section className='info-table'>
        <h2>{titleType} Sections</h2>
        <table className='full-width-table alternating-table'>
          <tbody>
            <tr>
              <th className='bottom-align'>Section</th>
              <th className='bottom-align'>Day and Time</th>
              <th className='bottom-align'>Location</th>
              <th className='bottom-align'>TA(s)</th>
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

  generateCalendarComponent(calendar) {
    var titleType = this.props.type === 'lab' ? 'Lab' : "Recitation";
    var calendarComponent = null;
    if (calendar) {
      calendarComponent =<section className="calendar">
        <h2>{titleType} Calendar</h2>
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
    var { match, courseData, type } = this.props;
    var titleType = type === 'lab' ? 'Lab' : "Recitation";
    var info = type === 'lab' ? courseData.labInfo : courseData.recitationInfo;

    return (
      <CourseSubPage contentClassName="recitation-lab-info-page" match={match} courseData={courseData}>
        <Helmet title={`${titleType}s - ${courseData.number}`} />
        <h1>{courseData.number} &ndash; {titleType} Info</h1>
        <h3>{courseData.term}</h3>

        {this.generatePoliciesComponent(info.policiesHTML)}

        {this.generateSectionsComponent(info.sections)}

        {this.generateCalendarComponent(info.calendar)}
      </CourseSubPage>
    );
  }

}

export default RecitationLabInfoPage;
