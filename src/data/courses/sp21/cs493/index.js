import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2021',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/97680941647?pwd=QkI1eXVPOWdJVnRlRVFQY1V6WEJldz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1J3yQ0iSQMdpp8y9uD8MnRRiSUb0d0TBWDOlg-XRpF7w/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_tupdm1vsv0h5b5hfuf48k3b69g@group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 493 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1811101',
    },
    {
      title: 'CS 493 on Zoom',
      link: 'https://oregonstate.zoom.us/j/97680941647?pwd=QkI1eXVPOWdJVnRlRVFQY1V6WEJldz09',
      description: 'this is where lectures for this course will happen'
    },
    {
      title: 'CS 493 on Campuswire',
      link: 'https://campuswire.com/c/GB7B71CFC',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 493 on GitHub',
      link: 'https://github.com/osu-cs493-sp21',
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
