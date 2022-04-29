import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
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
      videoConferenceLink: 'https://oregonstate.zoom.us/j/97198805065?pwd=cGxtNnpXbnJDU0lpOW9wejdVM3Zsdz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1Lycpd40eyMf3abNKzEmzwPtb_rKc49bpHAVHh66JJv8/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_tupdm1vsv0h5b5hfuf48k3b69g@group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 493 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1870354',
    },
    {
      title: 'CS 493 on Zoom',
      link: 'https://oregonstate.zoom.us/j/97198805065?pwd=cGxtNnpXbnJDU0lpOW9wejdVM3Zsdz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 493 on Campuswire',
      link: 'https://campuswire.com/c/G34B786E3/',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 493 on GitHub',
      link: 'https://github.com/osu-cs493-sp22',
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
