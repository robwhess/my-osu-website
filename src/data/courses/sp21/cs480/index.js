import topics from './topics';
import assignments from './assignments';
import tas from './tas';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Spring 2021',

  lectures: {
    '001': {
      day: 'MW',
      time: '10:00&ndash;11:50am',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/92218652087?pwd=ZjJ1aFBXaTdpYmRscEEzWHhVREdjdz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/12clBuz_e4S-njOoB0zBd4qtQz1jmhNHJ7Zr7aAIv4Qw/edit?usp=sharing',

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
      link: 'https://canvas.oregonstate.edu/courses/1811097'
    },
    {
      title: 'CS 480 on Zoom',
      link: 'https://oregonstate.zoom.us/j/92218652087?pwd=ZjJ1aFBXaTdpYmRscEEzWHhVREdjdz09',
      description: 'this is where lectures for this course will happen'
    },
    {
      title: 'CS 480 on Campuswire',
      link: 'https://campuswire.com/c/G67CFAA9C',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 480 on GitHub',
      link: 'https://github.com/osu-cs480-sp21',
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
