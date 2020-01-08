import { generateSitePath } from '../../../../lib/SitePath';

import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 419',
  title: 'Advanced Web Development',
  term: 'Winter 2020',

  lectures: {
    '005': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      location: 'KEC 1001'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1nuWFfAHy6kAbMOyUX0nwPsPHN6B2MWDybafHF7heg2c/edit?usp=sharing',

  links: [
    {
      title: 'CS 419 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2020/cs419005',
      description: 'course Q & A forum'
    },
    {
      title: 'CS 419 on GitHub',
      link: 'https://github.com/osu-cs419-w20',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'CS 419 on Codepen',
      link: 'https://codepen.io/collection/DRjwRL',
      description: 'find the React pens from lecture here'
    },
    {
      title: 'Statement on establishing a positive classroom community',
      link: generateSitePath("/teaching/community"),
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments ],

  tas: tas
};

export default courseDetails;
