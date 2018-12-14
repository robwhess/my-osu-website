import { generateSitePath } from '../../../lib/SitePath';

import TAInfoPage from '../../../pages/TAInfoPage';
import RecitationInfoPage from '../../../pages/RecitationInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import taInfo from './taInfo';
import recitationInfo from './recitationInfo';
import CS261CourseNotes from '../../../static/CS261CourseNotes.pdf';

var courseDetails = {
  number: 'CS 261',
  title: 'Data Structures',
  term: 'Fall 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: WF 9:30&ndash;10:30am, M 4:00&ndash;5:00pm (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'Section 001: MWF 1:00&ndash;1:50pm, GLFN AUD<br/>Section 002: MWF 11:00&ndash;11:50am, PHAR 305'
    },
    {
      title: 'Final Exam',
      infoHTML: 'Section 001: Wednesday 12/6/2017 12:00&ndash;1:50pm, GLFN AUD<br/>Section 002: Thursday 12/7/2017 9:30&ndash;11:20am, PHAR 305'
    },
    {
      title: 'Office Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA office hours'
    },
    {
      title: 'Grading Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA grading hours'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1xVm2wchqnxbEO-2Oy7eA0ZLa6GSKSXGZ7RaGMUJYabw/edit?usp=sharing">CS 261 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/fall2017/cs261">CS 261 on Piazza</a>'
    },
    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    },
    {
      title: 'Textbook',
      infoHTML: '<a href="' + CS261CourseNotes + '">CS 261 Course Notes</a> by Tim Budd'
    }
  ],

  calendar: calendar,

  assignments: {
    preambleHTML: "<p> Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a <code>README.md</code> file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.</p>",
    assignments: assignments
  },

  taInfo: taInfo,

  recitationInfo: recitationInfo,

  subPages: {
    'ta-info': TAInfoPage,
    'recitation-info': RecitationInfoPage
  },

  subnavItems: [
    {
      subPage: 'ta-info',
      title: 'TA Info'
    },
    {
      subPage: 'recitation-info',
      title: 'Recitations'
    }
  ]
};

export default courseDetails;
