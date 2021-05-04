import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Spring 2021',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/97271231608?pwd=K055UFhRcUlqVVhpY3AzUVRoeFJUUT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1xj8vxdHwsMpYvz-naKS9sFxbbJykpkLgbPPoFBukyP0/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_sm7kad0c0as96818rp3ts50rhk@group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 290 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1810869'
    },
    {
      title: 'CS 290 on Zoom',
      link: 'https://oregonstate.zoom.us/j/97271231608?pwd=K055UFhRcUlqVVhpY3AzUVRoeFJUUT09',
      description: 'this is where lectures for this course will happen'
    },
    {
      title: 'CS 290 on Campuswire',
      link: 'https://campuswire.com/c/GAAB41534/',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 290 on GitHub',
      link: 'https://github.com/osu-cs290-sp21',
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
