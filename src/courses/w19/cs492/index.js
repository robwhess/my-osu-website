import { generateSitePath } from '../../../lib/SitePath';

import topics from './topics';
import assignments from './assignments';
import tas from './tas';

const courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
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
      day: 'TuTh',
      time: '2:00 &ndash; 3:50pm',
      location: 'DEAR 118'
    }
  },

  syllabusLink: '#',

  links: [
    {
      text: 'CS 492 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2019/cs492'
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
