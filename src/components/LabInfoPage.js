import React, { Component } from 'react';

import RecitationLabInfoPage from './RecitationLabInfoPage';
import '../styles/RecitationLabInfoPage.css';

class LabInfoPage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired,
    courseData: React.PropTypes.object.isRequired,
  }

  render() {
    var { match, courseData } = this.props;

    return (
      <RecitationLabInfoPage match={match} courseData={courseData} type="lab" />
    );
  }

}

export default LabInfoPage;
