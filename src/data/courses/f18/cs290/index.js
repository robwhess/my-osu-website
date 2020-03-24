import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
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
      time: '3:00&ndash;3:50pm',
      location: 'LINC 210'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1gnE_1eSo8Ooz_Po-DbQeAyUOxJG7rm3bJU-PmMyNhwY/edit?usp=sharing',

  links: [
    {
      title: 'CS 290 on Piazza',
      link: 'https://piazza.com/oregonstate/fall2018/cs290'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments, finalProject ],

  tas: tas
};

export default courseDetails;
