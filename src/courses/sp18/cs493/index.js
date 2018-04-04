import { generateSitePath } from '../../../lib/SitePath';
import TAInfoPage from '../../../components/TAInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import finalProject from './finalProject';
import taInfo from './taInfo';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2018',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: W 11:00am&ndash;12:00pm, Th 10:00am&ndash;12:00pm (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'MW 2:00&ndash;3:50pm, DEAR 118'
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
      infoHTML: '<a href="https://docs.google.com/document/d/1t1wo_Y9OeYKDW9pmWjKCClPHWc31OUezMixYdalwfTs/edit?usp=sharing">CS 493 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2018/cs493">CS 493 on Piazza</a>'
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
