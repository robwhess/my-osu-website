import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';
import hof from './hof';

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
      videoConferenceLink: 'https://oregonstate.zoom.us/j/99110295239?pwd=RmJNMmwyYVY5NHVRZGl5SjBJUE00Zz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1o9oYGS3B6EhN9avEoofS8ugYks-R52ISqu1_yhoR0q0/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_3m5m940qqphhblam8s1om1ggi8%40group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 494 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1909912'
    },
    {
      title: 'CS 494 on Zoom',
      link: 'https://oregonstate.zoom.us/j/99110295239?pwd=RmJNMmwyYVY5NHVRZGl5SjBJUE00Zz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 494 on Ed',
      link: 'https://edstem.org/us/courses/31611',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 494 on GitHub',
      link: 'https://github.com/osu-cs494-w23',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 494 Hall of Fame',
      link: '/teaching/hof/cs494#w23',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 494'
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
