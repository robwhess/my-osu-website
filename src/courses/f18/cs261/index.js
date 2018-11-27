import { generateSitePath } from '../../../lib/SitePath';

import TAInfoPage from '../../../components/TAInfoPage';
import RecitationInfoPage from '../../../components/RecitationInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import taInfo from './taInfo';
import recitationInfo from './recitationInfo';
import CS261CourseNotes from '../../../static/CS261CourseNotes.pdf';

var courseDetails = {
  number: 'CS 261',
  title: 'Data Structures',
  term: 'Fall 2018',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: Tu 9:30&ndash;11:30am, W 10:00&ndash;11:00am (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'Section 001: MWF 1:00&ndash;1:50pm, GLFN AUD<br/>Section 002: MWF 9:00&ndash;9:50am, DEAR 118'
    },
    {
      title: 'Final Exams',
      infoHTML: 'Section 001: Thursday 12/6/2018, 12:00&ndash;1:50pm, GLFN AUD<br/>Section 002: Monday 12/3/2018, 2:00&ndash;3:50pm, DEAR 118'
    },
    {
      title: 'TA Office Hours',
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
      infoHTML: '<a href="https://docs.google.com/document/d/1j69eTj_l2fE6ChbvpjWz-xqBGN-OaZdbGQnnRgzFMME/edit?usp=sharing">CS 261 Syllabus</a>'
    },
    {
      title: 'Textbook',
      infoHTML: '<a href="' + CS261CourseNotes + '">CS 261 Course Notes</a> by Tim Budd'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/fall2018/cs261">CS 261 on Piazza</a>'
    },
    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: calendar,

  assignments: assignments,

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
