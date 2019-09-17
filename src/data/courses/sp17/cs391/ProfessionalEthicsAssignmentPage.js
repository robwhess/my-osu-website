import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import PageContent from '../../../components/PageContent';
import './AssignmentPage.css';

class ProfessionalEthicsAssignmentPage extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    var { match } = this.props;
    var matchURLWithoutSlash = match.url.replace(/\/$/, '');
    var parentPageURL = matchURLWithoutSlash.substring(0, matchURLWithoutSlash.lastIndexOf('/') + 1);
    return (
      <PageContent>
        <section className="assignment-box">

          <Link to={parentPageURL}>&larr; Back to CS 391</Link>
          <h1>Professional Ethics</h1>

          <p>
            For this assignment, you'll think about some different ethical dilemmas you might encounter in your future career, and you'll talk about how you would approach each of those dilemmas.  You should refer to the <a href="http://ethics.acm.org/code-of-ethics/" target="_blank" rel="noopener noreferrer">ACM's Code of Ethics and Professional Conduct</a> when applicable.
          </p>

          <p>
            To complete the assignment, make a copy of the assignment outline template linked below, and follow the directions in the notes under each page.  Make sure to reference the relevant part of the ACM Code when you can.  Once you're done with your writing, export your work as a PDF, and submit it via Canvas.
          </p>

          <p>
            The assignment outline template is available here:
          </p>
          <ul>
            <li><a href="https://docs.google.com/a/oregonstate.edu/presentation/d/1HiHcH_C80Oatx_kUgLLXbR_KGPbW3FM2hV1ha4acbwA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Assignment outline template</a></li>
          </ul>

        </section>
      </PageContent>
    );
  }
}

ProfessionalEthicsAssignmentPage = withRouter(ProfessionalEthicsAssignmentPage);

export default ProfessionalEthicsAssignmentPage;
