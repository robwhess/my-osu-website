import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import TAInfoPage from '../../../components/TAInfoPage';

var taInfo = {
  officeHoursLocation: "KEC Atrium",
  gradingHoursLocation: "KEC Atrium",
  TAs: [
    {
      name: "TBA",
      email: "tba@oregonstate.edu",
      officeHours: [ "TBA" ],
      gradingHours: [
        "TBA"
      ],
      gradingHoursPollLink: "#"
    }
  ]
};

class CS290TAInfoPage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired
  }

  render() {
    var { match } = this.props;
    var matchURLWithoutSlash = match.url.replace(/\/$/, '');
    var parentPageInfo = {
      url: matchURLWithoutSlash.substring(0, matchURLWithoutSlash.lastIndexOf('/') + 1),
      name: 'CS 290'
    };
    return <TAInfoPage title="CS 290 TA Info" taInfo={taInfo} parentPageInfo={parentPageInfo} />
  }

}

CS290TAInfoPage = withRouter(CS290TAInfoPage);

export default CS290TAInfoPage;
