import topics from './topics';
import assignments from './assignments';
import tas from './tas';
import recitations from './recitations';
import labs from './labs';

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
      day: 'MWF',
      time: '12:00 &ndash; 12:50pm',
      location: 'LINC 200'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1H6UZ8fEsKbjSLVE_142NAO-9tC5yQ9LST7tjGjyD-Vc/edit?usp=sharing',

  links: [
    {
      title: 'CS 162 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2019/cs162'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments ],

  tas: tas,

  recitations: recitations,

  labs: labs
};

export default courseDetails;
