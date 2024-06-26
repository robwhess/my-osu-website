import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';
import hof from './hof';

const courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2022',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'WGND 115',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/99552628793?pwd=Z0N0YWlycFlxSmNVUXZiUjZGTTFpQT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1n6JW35sZ_8uI9w99QRsrrlsbpQgseTUiwK3LOu1EswQ/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_dm591efk1u54ljlj33qi8l03is%40group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 492 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1850121'
    },
    {
      title: 'CS 492 on Zoom',
      link: 'https://oregonstate.zoom.us/j/99552628793?pwd=Z0N0YWlycFlxSmNVUXZiUjZGTTFpQT09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 492 on Campuswire',
      link: 'https://campuswire.com/c/GEE47EDCF',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 492 on GitHub',
      link: 'https://github.com/osu-cs492-w22',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 492 Hall of Fame',
      link: '/teaching/hof/cs492#w22',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 492'
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
