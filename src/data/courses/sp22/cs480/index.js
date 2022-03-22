import topics from './topics';
import assignments from './assignments';
import tas from './tas';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Spring 2022',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'JOHN 102',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/93636796171?pwd=ODBLSlhRM0dsMEltWC8yREJ1QmJzZz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1RFoY7ibr8LoQkPIpeiruBWXwOBhMzVSY5ljxrsMeQSY/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_1eoh4qvqu3tlagueut7r5ej964@group.calendar.google.com&ctz=America%2FLos_Angeles',

  textbooks: [
    {
      title: 'Engineering a Compiler, 2nd ed.',
      author: 'Cooper and Torczon',
      link: 'https://books.google.com/books/about/Engineering_a_Compiler.html?id=CGTOlAEACAAJ'
    }
  ],

  links: [
    {
      title: 'CS 480 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1870349'
    },
    {
      title: 'CS 480 on Zoom',
      link: 'https://oregonstate.zoom.us/j/93636796171?pwd=ODBLSlhRM0dsMEltWC8yREJ1QmJzZz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 480 on Campuswire',
      link: 'https://campuswire.com/c/G7730EFC3/',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 480 on GitHub',
      link: 'https://github.com/osu-cs480-sp22',
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
