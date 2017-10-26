import { generateSitePath } from '../../../lib/SitePath';
import TAInfoPage from '../../../components/TAInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import finalProject from './finalProject';
import taInfo from './taInfo';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Fall 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: M 9:30&ndash;10:30am, Tu 3:30&ndash;4:30pm (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 3:00&ndash;3:50pm, LINC 210'
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
      infoHTML: '<a href="https://docs.google.com/document/d/1OuK_yGR30G17C11aDgzdc6Pqt6-h2NYxh1AT-LShLb4/edit?usp=sharing">CS 290 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/fall2017/cs290">CS 290 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: calendar,

  assignments: {
    preambleHTML: "<p> Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a <code>README.md</code> file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.</p>",
    assignments: assignments
  },

  finalProject: {
    preambleHTML: "<p>For the final project in this course, you will work in teams to implement a complete web application that serves dynamic, interactive data that is stored in a database on the back end.  You can find more info below.</p>",
    assignments: finalProject
  },

  taInfo: taInfo,

  subPages: {
    'ta-info': TAInfoPage
  }
};

export default courseDetails;
