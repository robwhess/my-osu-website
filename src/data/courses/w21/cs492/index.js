import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

const courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2021',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/92801441901?pwd=SjZScXRyUUREVG11SGNZVEhCY0lnUT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1AOVGJkSt0PCCNTF7OG8aWMDT0gTaA1iZG2GLMWIetCg/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_dm591efk1u54ljlj33qi8l03is%40group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 492 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1799013'
    },
    {
      title: 'CS 492 on Zoom',
      link: 'https://oregonstate.zoom.us/j/92801441901?pwd=SjZScXRyUUREVG11SGNZVEhCY0lnUT09',
      description: 'this is where lectures for this course will happen'
    },
    {
      title: 'CS 492 on Campuswire',
      link: 'https://campuswire.com/c/GB0ACCF0C',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 492 on GitHub',
      link: 'https://github.com/osu-cs492-w21',
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
