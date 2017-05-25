import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import companyData from './CompanyData.json';
import PageContent from '../../../components/PageContent';
import './AssignmentPage.css';

class DiversityAssignmentPage extends Component {

  static propTypes = {
    match: React.PropTypes.object.isRequired
  }

  render() {
    var { match } = this.props;
    var matchURLWithoutSlash = match.url.replace(/\/$/, '');
    var parentPageURL = matchURLWithoutSlash.substring(0, matchURLWithoutSlash.lastIndexOf('/') + 1);
    return (
      <PageContent>
        <section className="assignment-box">

          <Link to={parentPageURL}>&larr; Back to CS 391</Link>
          <h1>Examining a Company's Approach to Diversity</h1>

          <p>
            For this assignment, you'll explore what approach a specific company takes to issues related to diversity.  You'll research things like the company's hiring practices; the demographics of their customers, their employees, and their board of directors; their marketing strategies, and more.  At the end, you'll give the company a thumbs-up or a thumbs-down for their diversity practices.
          </p>

          <p>
            To complete the assignment, select a company from the collection below.  Make a copy of the assignment outline template linked below, and follow the directions in the notes under each page.  To fill our each page, you'll have to research information about the company you chose.  Once you're done with your writing, export your work as a PDF, and submit it via Canvas.
          </p>

          <p>
            The assignment outline template is available here:
          </p>
          <ul>
            <li><a href="https://docs.google.com/a/oregonstate.edu/presentation/d/1B4AzXCvjmUqvV8O1Al-QKocv35P7cNBN2QUYjFPBo2c/edit?usp=sharing" target="_blank">Assignment outline template</a></li>
          </ul>

          <h2>Companies</h2>
          <div className="article-list">
            {companyData.map((company, i) => (
              <div key={i} className="article">
                <div className="article-title"><a href={company.link}>{company.name}</a></div>
                <div className="article-image-container">
                  <img src={company.img} alt={company.name} />
                </div>
                <div className="description">
                  {company.description}
                </div>
              </div>
            ))}
          </div>

        </section>
      </PageContent>
    );
  }
}

DiversityAssignmentPage = withRouter(DiversityAssignmentPage);

export default DiversityAssignmentPage;
