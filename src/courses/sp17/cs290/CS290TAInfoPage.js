import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import TAInfoPage from '../../../components/TAInfoPage';

var taInfo = {
  officeHoursLocation: "KEC Atrium",
  gradingHoursLocation: "KEC Atrium",
  TAs: [
    {
      name: "Purbasha Chatterjee",
      email: "chattepu@oregonstate.edu",
      officeHours: [ "W 2:00–3:00pm" ],
      gradingHours: [
        "M 1:50–2:50pm",
        "W 3:00–4:00pm",
        "F 12:00–1:30pm"
      ],
      gradingHoursPollLink: "https://doodle.com/poll/n7a4gxtk37mvmp5g"
    },
    {
      name: "Sudhanshu Shobhakant Pathak",
      email: "pathaks@oregonstate.edu",
      officeHours: [ "Th 9:00–11:00am" ],
      gradingHours: [
        "WF 8:00–9:00am",
        "MWF 10:00–11:00am",
        "Tu 9:00–11:00am"
      ]
    },
    {
      name: "Naimisha Reddy Saireddy",
      email: "saireddn@oregonstate.edu",
      officeHours: [ "Tu 8:15–9:45am" ],
      gradingHours: [
        "Tu 9:45am–2:00pm",
        "Th 8:00am–10:50am"
      ]
    },
    {
      name: "Meghamala Sinha",
      email: "sinham@oregonstate.edu",
      officeHours: [ "W 2:30–4:30pm" ],
      gradingHours: [
        "M 2:30–3:30pm",
        "TuThF 2:30–4:30pm"
      ]
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
