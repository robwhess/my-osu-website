import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import deviceData from './DeviceData.json';
import PageContent from '../../../components/PageContent';
import './AssignmentPage.css';

class DeviceAssignmentPage extends Component {

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
          <h1>Journey of a Device</h1>

          <p>
            For this assignment, you'll explore what goes into an electronic device, from its design, to its manufacture, to the end of its life.  Along the way, you'll touch on things like intellectual property, labor practices, environmental impacts, user privacy, and security.
          </p>

          <p>
            To complete the assignment, select a device from the collection below.  Make a copy of the assignment outline template linked below, and follow the directions in the notes under each page.  To fill our each page, you'll have to research the different phases of the lifespan of a typical one of your devices.  Once you're done with your writing, export your work as a PDF, and submit it via Canvas.
          </p>

          <p>
            The assignment outline template is available here:
          </p>
          <ul>
            <li><a href="https://docs.google.com/a/oregonstate.edu/presentation/d/17evu6ho-UMEvubUTYJbaX9t30o5Ab_S-ucELU6O0hfo/edit?usp=sharing">Assignment outline template</a></li>
          </ul>

          <h2>Devices</h2>
          <div className="article-list">
            {deviceData.map((device, i) => (
              <div key={i} className="article">
                <div className="article-title">{device.name}</div>
                <div className="article-image-container">
                  <img src={device.img} alt={device.name} />
                </div>
                <div className="description">
                  {device.description}
                </div>
              </div>
            ))}
          </div>

        </section>
      </PageContent>
    );
  }
}

DeviceAssignmentPage = withRouter(DeviceAssignmentPage);

export default DeviceAssignmentPage;
