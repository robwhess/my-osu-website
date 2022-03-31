import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';
import hof from './hof';

var courseDetails = {
  number: 'CS 499',
  title: 'Advanced Web Development',
  term: 'Winter 2022',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'WNGR 149',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/94683092550?pwd=OTRSUDdXejhxNXhEb0lLalBqYS9Wdz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1Yc7RK7zLnJqxFO4yPNTcdVGMjghL06gjO6bZWiBz9bw/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_3m5m940qqphhblam8s1om1ggi8%40group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 499 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1850161'
    },
    {
      title: 'CS 499 on Zoom',
      link: 'https://oregonstate.zoom.us/j/94683092550?pwd=OTRSUDdXejhxNXhEb0lLalBqYS9Wdz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 499 on Campuswire',
      link: 'https://campuswire.com/c/G1786A9DA',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 499 on GitHub',
      link: 'https://github.com/osu-cs499-w22',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 499 Hall of Fame',
      link: '/teaching/hof/cs499#w22',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 499'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments, finalProject ],

  tas: tas,

  hof: hof
};

export default courseDetails;
