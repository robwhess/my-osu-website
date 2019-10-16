import { generateSitePath } from '../../../../lib/SitePath';

import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Fall 2019',

  lectures: {
    '001': {
      day: 'MWF',
      time: '3:00&ndash;3:50pm',
      location: 'LINC 210'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/19pxuiRhKTI4KN_Gt8zy48rj72zhFGbAhKgJLBeuOwn8/edit?usp=sharing',

  links: [
    {
      text: 'CS 290 on Piazza',
      link: 'https://piazza.com/oregonstate/fall2019/cs290'
    },
    {
      text: 'CS 290 on GitHub',
      link: 'https://github.com/osu-cs290-f19'
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
