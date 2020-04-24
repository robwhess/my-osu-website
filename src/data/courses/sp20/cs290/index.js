import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Spring 2020',

  lectures: {
    '001': {
      day: 'MWF',
      time: '9:00&ndash;9:50am',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/782335631'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1rG30x9BKSf3Pkoq076t_xNwd4tCAN8hFMDMMay1VZZs/edit?usp=sharing',

  links: [
    {
      title: 'CS 290 on Canvas',
      link: 'https://oregonstate.instructure.com/courses/1764390'
    },
    {
      title: 'CS 290 on Zoom',
      link: 'https://oregonstate.zoom.us/j/782335631',
      description: 'this is where lectures will happen'
    },
    {
      title: 'CS 290 on Piazza',
      link: 'https://piazza.com/oregonstate/spring2020/cs290',
      description: 'course Q & A forum'
    },
    {
      title: 'CS 290 on GitHub',
      link: 'https://github.com/osu-cs290-sp20',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments, finalProject ],

  tas: tas
};

export default courseDetails;
