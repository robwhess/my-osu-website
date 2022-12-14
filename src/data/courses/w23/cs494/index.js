import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';
// import hof from './hof';

var courseDetails = {
  number: 'CS 494',
  title: 'Advanced Web Development',
  term: 'Winter 2023',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'WNGR 149',
      videoConferenceLink: ''
    }
  },

  syllabusLink: '',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_3m5m940qqphhblam8s1om1ggi8%40group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 494 on Canvas',
      link: ''
    },
    {
      title: 'CS 494 on Zoom',
      link: '',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 494 on Campuswire',
      link: '',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 494 on GitHub',
      link: '',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 494 Hall of Fame',
      link: '/teaching/hof/cs494',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 494'
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
