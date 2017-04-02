import React, { Component } from 'react';
import '../styles/PageContent.css';

class PageContent extends Component {
  render() {
    return (
      <main className={"content" + (this.props.contentClassName ? " " + this.props.contentClassName : "")}>
        {this.props.children}
      </main>
    );
  }
}

export default PageContent;
