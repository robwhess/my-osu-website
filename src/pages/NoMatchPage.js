import React, { Component } from 'react';

import PageContent from '../components/PageContent';
import '../styles/NoMatchPage.css';

class NoMatchPage extends Component {
  render() {
    return (
      <PageContent>
        <div className="error-code">
          404
        </div>
        <div className="explanation">
          Woops! We couldn't find that page.
        </div>
      </PageContent>
    );
  }
}

export default NoMatchPage;
