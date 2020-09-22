import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Fall 2020',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96154282965?pwd=MGhKb2lGV3JQdEtKeW5mR25CbjY4Zz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1DRPKUG8OXnoPccAwQjbhhoU9bOSc2VebjdTkmb5zX3I/edit?usp=sharing',

  links: [
    {
      title: 'CS 290 on Canvas',
      link: '#'
    },
    {
      title: 'CS 290 on Zoom',
      link: 'https://oregonstate.zoom.us/j/96154282965?pwd=MGhKb2lGV3JQdEtKeW5mR25CbjY4Zz09',
      description: 'this is where lectures will happen'
    },
    {
      title: 'CS 290 on Piazza',
      link: 'https://piazza.com/oregonstate/fall2020/cs290',
      description: 'course Q & A forum'
    },
    {
      title: 'CS 290 on GitHub',
      link: 'https://github.com/osu-cs290-f20',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments ],

  tas: tas
};

export default courseDetails;
