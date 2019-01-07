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
      day: 'Tues.',
      time: '10:00am &ndash; 12:00pm',
      location: 'KEC 1109'
    },
    {
      day: 'Wed.',
      time: '10:00 &ndash; 11:00am',
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

  syllabusLink: 'https://docs.google.com/document/d/1zyMlmHTVcn3Tr7oqp0i2jiXOqyVSYPPgap69dJR63Bs/edit?usp=sharing',

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

  assignmentGroups: [ assignments ],

  tas: tas
};

export default courseDetails;
