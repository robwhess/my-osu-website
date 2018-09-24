import { generateSitePath } from '../../../lib/SitePath';
import TAInfoPage from '../../../components/TAInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import finalProject from './finalProject';
import taInfo from './taInfo';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
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
      infoHTML: 'MWF 3:00&ndash;3:50pm, LINC 210'
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
      infoHTML: '<a href="https://docs.google.com/document/d/1gnE_1eSo8Ooz_Po-DbQeAyUOxJG7rm3bJU-PmMyNhwY/edit?usp=sharing">CS 290 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/fall2018/cs290">CS 290 on Piazza</a>'
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
