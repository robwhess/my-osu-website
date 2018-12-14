import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import articleData from './EthicalTheoriesArticleData.json';
import PageContent from '../../../components/PageContent';
import './AssignmentPage.css';

class EthicalTheoriesAssignmentPage extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    var { match } = this.props;
    var matchURLWithoutSlash = match.url.replace(/\/$/, '');
    var parentPageURL = matchURLWithoutSlash.substring(0, matchURLWithoutSlash.lastIndexOf('/') + 1);
    return (
      <PageContent className="assignment-page">
        <section className="assignment-box">

          <Link to={parentPageURL}>&larr; Back to CS 391</Link>
          <h1>Applying an Ethical Framework</h1>
          <p>
            In this assignment, you'll apply some of the ethical theories we're learning about in class to a specific IT-related situation in the news.
          </p>

          <h2>Ethical theory explainers</h2>
          <p>
            In case you missed it in lecture, here are some videos to catch you up on the ethical theories we're using in the course:
          </p>

          <div className="video-list">

            <div className="video">
              <iframe width="356" height="200" title="Kantianism video embed" src="https://www.youtube.com/embed/8bIys6JoEDw" frameBorder="0" allowFullScreen></iframe>
              <h3 className="video-caption">
                Kantianism
              </h3>
            </div>

            <div className="video">
              <iframe width="356" height="200" title="Utilitarianism video embed" src="https://www.youtube.com/embed/-a739VjqdSI" frameBorder="0" allowFullScreen></iframe>
              <h3 className="video-caption">
                Utilitarianism (Act and Rule)
              </h3>
            </div>

            <div className="video">
              <iframe width="356" height="200" title="Social contract theory video embed" src="https://www.youtube.com/embed/2Co6pNvd9mc" frameBorder="0" allowFullScreen></iframe>
              <h3 className="video-caption">
                Social Contract Theory
              </h3>
            </div>

            <div className="video">
              <iframe width="356" height="200" title="Virtue theory video embed" src="https://www.youtube.com/embed/PrvtOWEXDIQ" frameBorder="0" allowFullScreen></iframe>
              <h3 className="video-caption">
                Virtue Theory
              </h3>
            </div>

          </div>

          <h2>Assignment description</h2>
          <p>
            For this assignment, select an issue from the collection of issues below.  Make a copy of the assignment outline template linked below, and follow the directions in the notes under each page.  You'll have to research your situation and related laws and then use two different ethical theories to construct an argument about which elements of the situation are ethical and which are unethical.  Once you're done with your writing, export your work as a PDF, and submit it via Canvas.
          </p>

          <p>
            The assignment outline template is available here:
          </p>
          <ul>
            <li><a href="https://docs.google.com/a/oregonstate.edu/presentation/d/1DzgVIAC6-wPrm5KPYiGTmPZnK9tcrjZScFJVJ-jfyD8/edit?usp=sharing">Assignment outline template</a></li>
          </ul>

          <h2>Issues</h2>
          <div className="article-list">
            {articleData.map((article, i) => (
              <div key={i} className="article">
                <div className="article-title"><a href={article.link}>{article.title}</a></div>
                <div className="description">
                  {article.description}
                </div>
              </div>
            ))}
          </div>

        </section>
      </PageContent>
    );
  }
}

EthicalTheoriesAssignmentPage = withRouter(EthicalTheoriesAssignmentPage);

export default EthicalTheoriesAssignmentPage;
