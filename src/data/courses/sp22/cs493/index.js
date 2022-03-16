import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2022',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'LINC 200',
      videoConferenceLink: ''
    }
  },

  syllabusLink: '',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_tupdm1vsv0h5b5hfuf48k3b69g@group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 493 on Canvas',
      link: '',
    },
    {
      title: 'CS 493 on Zoom',
      link: '',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 493 on Campuswire',
      link: '',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 493 on GitHub',
      link: '',
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
