import { generateSitePath } from '../../../lib/SitePath';
import TAInfoPage from '../../../components/TAInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import finalProject from './finalProject';
import taInfo from './taInfo';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Spring 2018',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: Tu 10:00am&ndash;12:00pm, W 10:00&ndash;11:00am (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 9:00&ndash;9:50am, LINC 210'
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
      infoHTML: '<a href="https://docs.google.com/document/d/1B0y-Fd2nkEAVCiQbMOZkJeut_1MubaVOaabGr-sN3YE/edit?usp=sharing">CS 290 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2018/cs290">CS 290 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: calendar,

  assignments: assignments,

  finalProject: finalProject,

  taInfo: taInfo,

  subPages: {
    'ta-info': TAInfoPage
  }
};

export default courseDetails;
