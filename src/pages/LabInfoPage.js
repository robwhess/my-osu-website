import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RecitationLabInfoPage from './RecitationLabInfoPage';
import '../styles/RecitationLabInfoPage.css';

class LabInfoPage extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    courseData: PropTypes.object.isRequired,
  }

  render() {
    var { match, courseData } = this.props;

    return (
      <RecitationLabInfoPage match={match} courseData={courseData} type="lab" />
    );
  }

}

export default LabInfoPage;
