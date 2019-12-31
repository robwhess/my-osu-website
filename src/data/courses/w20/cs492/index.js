import { generateSitePath } from '../../../../lib/SitePath';

import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

const courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2020',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00 &ndash; 3:50pm',
      location: 'Weniger 151'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1JrfzBJO4bg_l90qruh5hnPRt8U3txBtsF0C__Sf9UUk/edit?usp=sharing',

  links: [
    {
      text: 'CS 492 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2020/cs492'
    },
    {
      text: 'CS 492 on GitHub',
      link: 'https://github.com/osu-cs492-w20'
    },
    {
      text: 'Establishing a positive classroom community',
      link: generateSitePath("/teaching/community")
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments, finalProject ],

  tas: tas
};

export default courseDetails;
