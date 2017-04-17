import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageContent from './PageContent';
import '../styles/TAInfoPage.css';

class TAInfoPage extends Component {

  generateHoursListComponent(hoursList) {
    if (hoursList) {
      return hoursList.map((hoursItem, i) => (
        <div key={i}>{hoursItem}</div>
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
    var { taInfo, parentPageInfo } = this.props;
    var parentPageLink = null;
    var officeHoursLocationComponent = null;
    var gradingHoursLocationComponent = null;
    if (parentPageInfo) {
      parentPageLink = <Link to={parentPageInfo.url}>&larr; Back to {parentPageInfo.name}</Link>
    }
    if (taInfo.officeHoursLocation) {
      officeHoursLocationComponent = (
        <span className="hours-location">({taInfo.officeHoursLocation})</span>
      );
    }
    if (taInfo.gradingHoursLocation) {
      gradingHoursLocationComponent = (
        <span className="hours-location">({taInfo.gradingHoursLocation})</span>
      );
    }
    return (
      <PageContent contentClassName="ta-info-page">
        <section className="info-table">
          {parentPageLink}

          <h1>{this.props.title}</h1>
          <table className="fixed-table alternating-table">
            <tbody>
              <tr>
                <th className="bottom-align">TA Name</th>
                <th className="bottom-align">Office Hours {officeHoursLocationComponent}</th>
                <th className="bottom-align">Grading Hours {gradingHoursLocationComponent}</th>
              </tr>

            {taInfo.TAs.map(this.generateTATableRowComponent.bind(this))}
            </tbody>
          </table>
        </section>
      </PageContent>
    );
  }
}

export default TAInfoPage;
