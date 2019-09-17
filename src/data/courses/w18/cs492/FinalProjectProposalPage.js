import React, { Component } from 'react';
import PropTypes from 'prop-types';

import APIListData from './APIList.json';
import CourseSubPage from '../../../pages/CourseSubPage';
import './AssignmentPage.css';

class FinalProjectProposalPage extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    courseData: PropTypes.object.isRequired
  }

  render() {
    return (
      <CourseSubPage {...this.props}>
        <section className="assignment-box">

          <h1>Final Project Proposal</h1>

          <p>
            For the final project in this course, you will work in teams to implement a complete Android app that gets data from a third-party API.  Your app will use most or all of the Android tools and techniques we'll talk about in class this term.  Here are some requirements your app will have to satisfy:
          </p>

          <ul>
            <li>It should have multiple activities the user can navigate between.</li>
            <li>It should use at least one implicit intent to launch another app.</li>
            <li>It should communicate via HTTP(s) with a third-party API to provide data for the app and optionally to send data back to the API.  Some possibile APIs you might use are listed below.</li>
            <li>It must implement activity lifecycle methods to ensure that activity-related data is handled elegantly through lifecycle events.</li>
            <li>It should either store user preferences (via <code>SharedPreferences</code>) or store data in device storage (using SQLite).  You may do both of these things if you want.</li>
            <li>It should have a polished, well-styled user interface.</li>
          </ul>

          <p>
            Within these boundaries, there are limitless possibilities for apps you could write.  I encourage you to be creative and to implement an app you find interesting or that solves a real problem for its potential users.  However, you should also be realistic about what you can accomplish with a small team in a few weeks.  In particular, feel free to treat the final project as an opportinuty to deliver a prototype of an idea, not a complete marketable product.  If you're having trouble thinking of an idea for an app to implement, please reach out to me.
          </p>

          <h2>Proposal requirements</h2>
          <p>
            Before you implement your app, however, you must write a proposal that outlines what you plan to implement.  Specifically, you should work with your team to produce a brief report that includes the following things:
          </p>

          <ul>
            <li>A list of all of the members of your team.  You should aim to have 3 or 4 people on your team.</li>
            <li>A high-level description of what your app will do.</li>
            <li>A description of the third-party API you will use.</li>
            <li>An explanation of the specific API methods you will use in your app and a description of how that data from those methods will be used in your app or what data will be sent from your app to the API.</li>
            <li>A description of how the UI for your app will be organized, including a list of the activities your app will include, a description of how the user will navigate between those activities, a description of any major non-navigation interactions the user make use, and a description of any notifications the app will display.</li>
            <li>Mocks (i.e. visual prototypes) for each of your app's major activities.  These can be as simple as paper-and-pencil sketches that you scan and include into the report, or you can use a prototyping tool such as <a href="https://www.invisionapp.com/">InVision</a> or <a href="https://balsamiq.com/">Balsamiq</a> (both of which cost money but have either a free version or a free trial).</li>
          </ul>

          <h2>Submitting your proposal</h2>
          <p>
            Before submitting your proposal, you need to put the members of your team into a Canvas group.  There is already a set of groups created on Canvas for this purpose.  You just need to add your team members to the same group.  To do this, you can go to the "People" section of our Canvas course and navigate to the "Groups" tab.  You should see several groups starting with "Final Project Team".  You should choose one of these groups to use for your team.  If you're the first person to sign up for a group, you should be able to manage the membership of that group and add your teammates.
          </p>
          <p>
            To submit your proposal, you should save it as a PDF and upload it to Canvas under the appropriate assignment before the due date.  Please submit only one copy of your proposal for your entire team.  Note that you may receive feedback on your submission asking you to change or clarify particular pieces of the proposal.  You should be prepared for this.
          </p>

          <h2>Some APIs you could use</h2>
          <p>
            Below is a list of third-party APIs you could consider using for your app.
          </p>

          <ul>
            {APIListData.map((api, i) => (
              <li key={i}><a href={api.url}>{api.name}</a></li>
            ))}
          </ul>

          <p>
            There are lots of other APIs available on the web, too.  If none of the APIs above tickle your fancy, you can use a different one.  The <a href="https://www.programmableweb.com/apis/directory">ProgrammableWeb API Directory</a> could be helpful for finding something interesting.  If you choose an API that's not on the list above, please make sure you discuss it with me first, to make sure it's suitable for use in our class.
          </p>

        </section>
      </CourseSubPage>
    );
  }
}

export default FinalProjectProposalPage;
