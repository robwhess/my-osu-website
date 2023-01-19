import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';
import hof from './hof';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Fall 2022',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'WNGR 151',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/94405374099?pwd=N2RYcklqMllSbG1kYWZzQU5SME85dz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1RT6Wf0h1BhyCDflCR-lAjteaab2bXUS43J0aCjhCAGk/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_sm7kad0c0as96818rp3ts50rhk@group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 290 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1890440'
    },
    {
      title: 'CS 290 on Zoom',
      link: 'https://oregonstate.zoom.us/j/94405374099?pwd=N2RYcklqMllSbG1kYWZzQU5SME85dz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 290 on Campuswire',
      link: 'https://campuswire.com/c/G77E52544/',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 290 on GitHub',
      link: 'https://github.com/osu-cs290-f22',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 290 Hall of Fame',
      link: '/teaching/hof/cs290#f22',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 290'
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
