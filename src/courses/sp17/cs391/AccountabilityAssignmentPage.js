import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import articleData from './AccountabilityArticleData.json';
import PageContent from '../../../components/PageContent';
import './AssignmentPage.css';

class AccountabilityAssignmentPage extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    var { match } = this.props;
    var matchURLWithoutSlash = match.url.replace(/\/$/, '');
    var parentPageURL = matchURLWithoutSlash.substring(0, matchURLWithoutSlash.lastIndexOf('/') + 1);
    return (
      <PageContent contentClassName="assignment-page">
        <section className="assignment-box">

          <Link to={parentPageURL}>&larr; Back to CS 391</Link>
          <h1>Case Studies in Accountability</h1>
          <p>
            In this assignment, you'll explore how various parties should be held accountable for their actions in IT-related case studies from the news.
          </p>

          <h2>Aspects of accountability</h2>
          <p>
            As you're reading your case study and writing your report, make sure to think about the following things.
          </p>

          <h3>Use of Power</h3>
          <p>
            Governments, employers, utility companies, and financial companies wield their weight over people and companies in many ways.  Their use of power can affect the privacy, safety, quality of life, and property rights of others and can influence how we assign accountability for negative outcomes. Here are some references for further reading on this topic:
          </p>
					<ul>
						<li><a href="https://www.fcc.gov/consumers/guides/open-internet" target="_blank" rel="noopener noreferrer">The Open Internet</a> &ndash; Federal Trade Commission (FCC)</li>
						<li><a href="http://www.adairbuckner.com/uploads/1/8/8/7/18877234/top-ten-mistakes-whitepaper.pdf" target="_blank" rel="noopener noreferrer">Top 10 Things Employers do Wrong</a> &ndash; Adair M. Buckner</li>
						<li><a href="http://www.businessinsider.com/google-employees-confess-the-worst-things-about-working-at-google-2013-11" target="_blank" rel="noopener noreferrer">Google Employees Confess The Worst Things About Working At Google</a> &ndash; Jim Edwards</li>
						<li><a href="http://listverse.com/2013/06/27/10-people-who-blew-the-whistle-on-the-us-government/" target="_blank" rel="noopener noreferrer">10 People Who Exposed US Government Secrets And Lies</a> &ndash; S. Grant</li>
					</ul>

          <h3>Quality of Life</h3>
          <p>
            The Quality of life in an ethical discussion of technology refers to the improvement of its users, the company that ordered it, and the individual workers who made it.  Quality of life is often measured by looking at a person's physical wellbeing, material wellbeing, social wellbeing, emotional wellbeing, and development and activity.  Changes to quality of life can factor into our assessment of accountability in some situations.  <a href="http://www.sciencedirect.com/science/article/pii/0891422294000288" target="_blank" rel="noopener noreferrer">Learn more from Felce and Perry</a>
          </p>

          <h3>Safety</h3>
          <p>
            Safety means people are protected from (or are unlikely to cause) danger, risk, or injury (<a href="https://www.google.com/search?q=define+safety&rlz=1CATAAB_enUS651US652&oq=define+safety&aqs=chrome..69i57j0l5.2515j0j4&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Google</a> 2016).  People and organizations can be held accountable for putting other people's safety in jeopardy.
          </p>
					<p>Learn more about safety problems:</p>
					<ul>
						<li><a href="https://www.osha.gov/pls/oshaweb/owasrch.search_form?p_doc_type=NEWS_RELEASES&p_toc_level=0" target="_blank" rel="noopener noreferrer">Occupational Safety and Health Administration (OSHA)</a></li>
						<li><a href="http://greatist.com/health/19-worst-tech-related-health-risks" target="_blank" rel="noopener noreferrer">The 19 Worst Tech-Related Health Risks</a></li>
					</ul>

          <h3>Property Rights</h3>
          <p>
            Property rights include real/physical and intellectual private ownership, public open access, public closed access, and state ownership.  Many country's laws include guidelines for these areas. In the USA, they include, but are not limited to:
          </p>
					<ul>
						<li>Real/physical property, such as land, homes, and physical items (<a href="http://www.archives.gov/exhibits/charters/bill_of_rights.html" target="_blank" rel="noopener noreferrer">Article 7, Bill of Rights</a>)</li>
						<li>
              Intellectual property (i.e. creations of the mind), such as inventions, works of art and writing, and commercial symbols and imagery. US laws that cover intellectual property include:
    					<ul>
    						<li><a href="http://www.uspto.gov/patent" target="_blank" rel="noopener noreferrer">Patents</a></li>
    						<li><a href="http://www.copyright.gov/" target="_blank" rel="noopener noreferrer">Copyright</a></li>
    						<li><a href="http://www.uspto.gov/trademark" target="_blank" rel="noopener noreferrer">Trademarks</a></li>
    					</ul>
						</li>
          </ul>


          <h3>Privacy</h3>
          <p>
            Privacy is freedom from observation by other people, tracked by computers, or monitored by companies and governments.  Many country's laws, such as the US laws below, include guidelines for maintaining, allowing, and prosecuting breaches of personal privacy, especially in specific settings.  These laws help hold people and organizations accountable for violations of privacy.
          </p>
					<ul>
						<li>Educational (<a href="https://www.fbi.gov/file-repository/ferpa-guide.pdf" target="_blank" rel="noopener noreferrer">FERPA</a>)</li>
						<li>Medical (<a href="http://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html" target="_blank" rel="noopener noreferrer">HIPPA</a>) </li>
						<li>Business (<a href="https://www.justice.gov/jmd/electronic-communications-privacy-act-1986-pl-99-508" target="_blank" rel="noopener noreferrer">ECPA</a>)</li>
						<li>Finance (<a href="https://www.fdic.gov/consumers/consumer/alerts/glba.html" target="_blank" rel="noopener noreferrer">Gramm-Leach-Bliley Act</a>) </li>
						<li>Government (<a href="https://www.justice.gov/opcl/privacy-act-1974" target="_blank" rel="noopener noreferrer">The Privacy Act of 1974</a>)</li>
						<li>Communications (<a href="https://www.justice.gov/archive/ll/highlights.htm" target="_blank" rel="noopener noreferrer">PATRIOT Act</a>)</li>
					</ul>

          <h2>Assignment description</h2>
          <p>
            For this assignment, select an issue from the collection of issues below.  Make a copy of the assignment outline template linked below, and follow the directions in the notes under each page.  You'll have to research your case and related related ones and then assess the actions of various involved parties and how they should be held accountable for the situation's outcomes.  Note that the template includes several parties to assess.  If any of these parties aren't relevant to your chosen case, you may substitute relevant ones.  Once you're done with your writing, export your work as a PDF, and submit it via Canvas.
          </p>

          <p>
            The assignment outline template is available here:
          </p>
          <ul>
            <li><a href="https://docs.google.com/a/oregonstate.edu/presentation/d/1AJvtI41McD8zYqGIyeaPIxI1u9VxhoxO18wPa0C7G9E/edit?usp=sharing">Assignment outline template</a></li>
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

AccountabilityAssignmentPage = withRouter(AccountabilityAssignmentPage);

export default AccountabilityAssignmentPage;
