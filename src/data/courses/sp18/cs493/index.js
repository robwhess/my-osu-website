import { generateSitePath } from '../../../../lib/SitePath';

import topics from './topics';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2018',
  instructor: {
    name: 'Rob Hess',
    email:'hessro@oregonstate.edu'
  },

  officeHours: [
    {
      day: 'Wed.',
      time: '11:00am &ndash; 12:00pm',
      location: 'KEC 1109'
    },
    {
      day: 'Thurs.',
      time: '10:00am &ndash; 12:00pm',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00 &ndash; 3:50pm',
      location: 'DEAR 118'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1t1wo_Y9OeYKDW9pmWjKCClPHWc31OUezMixYdalwfTs/edit?usp=sharing',

  links: [
    {
      title: 'CS 493 on Piazza',
      link: 'https://piazza.com/oregonstate/spring2018/cs493'
    },
    {
      title: 'Establishing a positive classroom community',
      link: generateSitePath("/teaching/community")
    }
  ],

  topics: topics
};

export default courseDetails;
