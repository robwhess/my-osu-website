import { generateSitePath } from '../../../lib/SitePath';

import TAInfoPage from '../../../pages/TAInfoPage';
import RecitationInfoPage from '../../../pages/RecitationInfoPage';

import calendar from './calendar';
import { assignments, preamble as assignmentsPreamble } from './assignments';
import taInfo from './taInfo';
import recitationInfo from './recitationInfo';
import CS261CourseNotes from '../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'CS 261',
  title: 'Data Structures',
  term: 'Fall 2018',
  instructor: {
    name: 'Rob Hess',
    email:'hessro@oregonstate.edu'
  },

  officeHours: [
    {
      day: 'Tues.',
      time: '9:30&ndash;11:30am',
      location: 'KEC 1109'
    },
    {
      day: 'Wed.',
      time: '10:00&ndash;11:00am',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MWF',
      time: '1:00&ndash;1:50pm',
      location: 'GLFN AUD'
    },
    '002': {
      day: 'MWF',
      time: '9:00&ndash;9:50am',
      location: 'DEAR 118'
    },
  },

  finalExams: {
    '001': {
      day: 'Thurs. 12/6/2018',
      time: '12:00&ndash;1:50pm',
      location: '~~GLFN AUD~~ **LINC 128**'
    },
    '002': {
      day: 'Mon. 12/3/2018',
      time: '2:00&ndash;3:50pm',
      location: 'DEAR 118'
    },
  },

  syllabusLink: 'https://docs.google.com/document/d/1j69eTj_l2fE6ChbvpjWz-xqBGN-OaZdbGQnnRgzFMME/edit?usp=sharing',

  textbooks: [
    {
      title: 'CS 261 Course Notes',
      author: 'Tim Budd',
      link: CS261CourseNotes
    }
  ],

  links: [
    {
      text: 'CS 261 on Piazza',
      link: 'https://piazza.com/oregonstate/fall2018/cs261'
    },
    {
      text: 'Establishing a positive classroom community',
      link: generateSitePath("/teaching/community")
    }
  ],

  calendar: calendar,

  assignments: assignments,
  assignmentsPreamble: assignmentsPreamble,

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
