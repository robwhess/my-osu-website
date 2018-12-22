import { generateSitePath } from '../../../lib/SitePath';

var courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2018',
  instructor: {
    name: 'Rob Hess',
    email:'hessro@oregonstate.edu'
  },

  officeHours: [
    {
      day: 'Tues.',
      time: '10:00 &ndash; 11:00am',
      location: 'KEC 1109'
    },
    {
      day: 'Wed.',
      time: '2:00 &ndash; 4:00pm',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00 &ndash; 3:50pm',
      location: 'COVL 216'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1_b4yYVgUtwT17wOiptlwHTwUwI8UM9xjuholV0y6cqk/edit?usp=sharing',

  links: [
    {
      text: 'CS 492 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2018/cs492'
    },
    {
      text: 'Establishing a positive classroom community',
      link: generateSitePath("/teaching/community")
    }
  ]
};

export default courseDetails;
