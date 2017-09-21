import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import PageContent from './PageContent';
import '../styles/CourseSubPage.css';

class CourseSubPage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired,
    courseData: React.PropTypes.object.isRequired,
  }

  getParentPageURL() {
    var { match } = this.props;
    var matchURLWithoutSlash = match.url.replace(/\/$/, '');
    return matchURLWithoutSlash.substring(0, matchURLWithoutSlash.lastIndexOf('/'));
  }

  generateSubnavComponent(subnavItems, courseNumber) {
    var parentPageURL = this.getParentPageURL();
    var links = subnavItems.map((subnavItem) => {
      var link = {
        title: subnavItem.title
      };
      if (subnavItem.subPage) {
        link.path = parentPageURL + '/' + subnavItem.subPage;
      }
      return link;
    });

    links.push({
      path: parentPageURL,
      title: courseNumber,
      isHeading: true
    });

    return <Navbar links={links} subnav />;
  }

  generateParentPageLinkComponent(courseNumber) {
    var parentPageURL = this.getParentPageURL();
    return (
      <section className='info-box'>
        <Link to={parentPageURL} >&larr; Back to {courseNumber}</Link>
      </section>
    );
  }

  render() {
    var { courseData } = this.props;
    var subnavComponent = null;
    var parentPageLinkComponent = null;

    if (courseData.subnavItems) {
      subnavComponent = this.generateSubnavComponent(courseData.subnavItems, courseData.number);
    } else {
      parentPageLinkComponent = this.generateParentPageLinkComponent(courseData.number);
    }

    return (
      <div>
        {subnavComponent}
        <PageContent contentClassName={this.props.contentClassName}>
          {parentPageLinkComponent}
          {this.props.children}
        </PageContent>
      </div>
    );
  }

}

export default CourseSubPage;
