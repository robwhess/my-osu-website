import React, { Component } from 'react';
import Helmet from 'react-helmet';

import CourseSubPage from './CourseSubPage';
import '../styles/TAInfoPage.css';

class TAInfoPage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired,
    courseData: React.PropTypes.object.isRequired,
  }

  generateHoursItemComponent(hoursItem) {
    if (hoursItem.time && hoursItem.location) {
      if (hoursItem.locationLink) {
        return <span>{hoursItem.time} (<a href={hoursItem.locationLink}>{hoursItem.location}</a>)</span>
      } else {
        return <span>{hoursItem.time} ({hoursItem.location})</span>
      }
    } else {
      return hoursItem;
    }
  }

  generateHoursListComponent(hoursList) {
    if (hoursList) {
      return hoursList.map((hoursItem, i) => (
        <div key={i}>{this.generateHoursItemComponent(hoursItem)}</div>
      ));
    } else {
      return null;
    }
  }

  generateTATableRowComponent(ta, key) {
    var taGradingHoursComponent = null;
    if (ta.gradingHoursPollLink) {
      taGradingHoursComponent = <a href={ta.gradingHoursPollLink}>{this.generateHoursListComponent(ta.gradingHours)}</a>
    } else if (ta.gradingHours) {
      taGradingHoursComponent = this.generateHoursListComponent(ta.gradingHours);
    }
    return (
      <tr key={key}>
        <td><a href={"mailto:" + ta.email}>{ta.name}</a></td>
        <td className="hours-list">{this.generateHoursListComponent(ta.officeHours)}</td>
        <td className="hours-list">{taGradingHoursComponent}</td>
      </tr>
    );
  }

  render() {
    var { match, courseData } = this.props;
    var taInfo = courseData.taInfo;

    var officeHoursLocationComponent = null;
    if (taInfo.officeHoursLocation) {
      officeHoursLocationComponent = (
        <span className="hours-location">({taInfo.officeHoursLocation})</span>
      );
    }

    var gradingHoursLocationComponent = null;
    if (taInfo.gradingHoursLocation) {
      gradingHoursLocationComponent = (
        <span className="hours-location">({taInfo.gradingHoursLocation})</span>
      );
    }
    return (
      <CourseSubPage contentClassName="ta-info-page" match={match} courseData={courseData}>
        <Helmet title={"TA Info - " + courseData.number} />
        <section className="info-table">
          <h1>{courseData.number} TA Info</h1>
          <table className="full-width-table alternating-table">
            <tbody>
              <tr>
                <th className="bottom-align">TA Name</th>
                <th className="bottom-align">Office Hours{officeHoursLocationComponent}</th>
                <th className="bottom-align">Grading Hours{gradingHoursLocationComponent}</th>
              </tr>

            {taInfo.TAs.map(this.generateTATableRowComponent.bind(this))}
            </tbody>
          </table>
        </section>
      </CourseSubPage>
    );
  }
}

export default TAInfoPage;
