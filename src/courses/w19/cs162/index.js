import { generateSitePath } from '../../../lib/SitePath';

import topics from './topics';
import assignments from './assignments';
import tas from './tas';

const courseDetails = {
  number: 'CS 162',
  title: 'Intro to Computer Science II',
  term: 'Winter 2019',
  instructor: {
    name: 'Rob Hess',
    email:'hessro@oregonstate.edu'
  },

  officeHours: [
    {
      day: 'TBD',
      time: 'TBD',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MWF',
      time: '12:00 &ndash; 12:50pm',
      location: 'LINC 200'
    }
  },

  syllabusLink: '#',

  links: [
    {
      text: 'CS 162 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2019/cs162'
    },
    {
      text: 'Establishing a positive classroom community',
      link: generateSitePath("/teaching/community")
    }
  ],

  topics: topics,

  assignments: assignments,

  tas: tas
};

export default courseDetails;
