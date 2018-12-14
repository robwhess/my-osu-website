/* eslint "jsx-a11y/anchor-is-valid": "off", "jsx-a11y/anchor-has-content": "off" */
import React, { Component } from 'react';

import PageContent from '../components/PageContent';
import '../styles/CommunityPage.css';

class CommunityPage extends Component {
  render() {
    return (
      <PageContent className="community-page">
        <section className="info-box">
          <h1>Establishing a positive classroom community</h1>

          <p>
            Every student should feel safe and welcome to contribute in all of my courses. As the instructor, I will try to establish this tone whenever possible, but ultimately the responsibility for cultivating a safe and welcoming community belongs to the students&mdash;that means you!
          </p>

          <p>
            Fortunately, being part of a safe and welcoming community is not too hard. A good place to start is to recognize (and continually remind yourself) of the following facts:
          </p>
          <ul>
            <li>Your classmates come from a variety of cultural, economic, and educational backgrounds. Something that is obvious to you may not be obvious to them.</li>
            <li>Your classmates are human beings with intelligence and emotions. This applies even when sending emails or posting messages on Piazza.</li>
            <li>Your classmates are here to learn. They have the right to pursue their education without being distracted by others\' disruptive behavior, or made uncomfortable by inappropriate jokes or unwanted sexual interest.</li>
          </ul>
          <p>
            If each of us remembers these facts and act with corresponding decency, respect, and professionalism, the course will certainly be better for everyone.
          </p>

          <p>
            Some students might be inclined to shrug this off and perhaps crack a joke about safe spaces or political correctness. If that’s you, please also know that if you make a fellow student uncomfortable by mocking them, making inappropriate jokes, or making unwanted advances, that is <em>harassment</em> and will be taken seriously. (If you are a victim of harassment, please see the brief <a href="#resources">list of resources</a> at the bottom of this page.)
          </p>

          <p>
            However, I hope that we can all approach this positively. Treat your classmates as respected colleagues, support each other when needed, have fun without spoiling it for anyone else, and everybody wins.
          </p>

          <h3>Zooming out: diversity and computer science</h3>

          <p>
            On a broader note, computer science suffers from a lack of diversity. Part of this complicated problem is that underrepresented groups leave computer science programs at a higher rate, and <a href="http://dl.acm.org/citation.cfm?id=374367">evidence shows</a> that this is a result of environmental conditions rather than innate abilities. I hope that our efforts in here can help to improve this situation, in some small way, rather than make it worse.
          </p>

          <p>
            Many open source projects and professional societies have recognized that the lack of diversity amongst contributors is a problem since they miss out on ideas, perspectives, and contributions from underrepresented groups. To address this, they have established community guidelines and codes of conduct to support communities that are more welcoming to new and diverse contributors. Here are a few examples that I recommend reading:
          </p>
          <ul>
            <li><a href="http://contributor-covenant.org/">Contributor Covenant</a> &ndash; a code of conduct shared by many open source projects, including Atom, Eclipse, Mono, Rails, Swift, and many more.</li>
            <li><a href="https://www.mozilla.org/en-US/about/governance/policies/participation/">Mozilla Community Participation Guidelines</a></li>
            <li><a href="https://www.python.org/community/diversity/">Python Diversity Statement</a></li>
            <li><a href="https://www.ubuntu.com/about/about-ubuntu/conduct">Ubuntu Code of Conduct</a></li>
            <li><a href="http://www.acm.org/sigs/volunteer_resources/officers_manual/code%20of%20conduct">ACM Code of Conduct</a></li>
          </ul>
          <p>
            Note that promoting diversity is also a <a href="http://leadership.oregonstate.edu/strategicplan">core value of Oregon State University</a> and a <a href="http://engineering.oregonstate.edu/coe-strategic-plan">goal of the College of Engineering</a>.
          </p>

          <a name="resources"></a>
          <h3>What to do about harassment</h3>
          <p>
            If you are the victim of harassment in one of my classes, there are several resources available to you:
          </p>
          <ul>
            <li>You may <a href="mailto:hessro@oregonstate.edu">schedule a private meeting</a> to talk to me.</li>
            <li>You may <a href="http://oregonstate.qualtrics.com/jfe/form/SV_2mdIdTRe2ObShwx"> submit a bias incident report</a> (anonymously if you wish) to OSU\'s Bias Response Team.</li>
            <li>You may <a href="https://oregonstate2-gme-advocate.symplicity.com/public_report/">submit a public incident report</a> to OSU\'s department of human resources.</li>
            <li>You may contact OSU\'s <a href="http://oregonstate.edu/ombuds/">University Ombuds Office</a> for confidential guidance and advice.</li>
            <li>You may contact OSU\'s <a href="http://eoa.oregonstate.edu/">Office of Equal Opportunity and Access</a> to file an informal or formal complaint.</li>
          </ul>

        </section>
      </PageContent>
    );
  }
}

export default CommunityPage;
