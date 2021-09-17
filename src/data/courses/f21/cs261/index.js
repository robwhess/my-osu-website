import topics from './topics';
import assignments from './assignments';
import recitations from './recitations';
import tas from './tas';
import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'CS 261',
  title: 'Data Structures',
  term: 'Fall 2021',

  lectures: {
    '020': {
      day: 'MWF',
      time: '10:00 &ndash; 10:50am',
      timeZone: 'US/Pacific',
      location: 'WITH 109',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/99188984882?pwd=U2Z3NjZwaDlNTGNkRDRwSTlyTHNmUT09'
    },
  },

  // finalExams: {
  //   '001': {
  //     day: 'Tues. 12/8/2020',
  //     time: '9:30 &ndash; 11:20am',
  //     timeZone: 'US/Pacific',
  //     videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
  //   },
  //   '002': {
  //     day: 'Wed. 12/9/2020',
  //     time: '6:00 &ndash; 7:50pm',
  //     timeZone: 'US/Pacific',
  //     videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
  //   },
  // },

  syllabusLink: 'https://docs.google.com/document/d/1pKRw-beIvlx4jAFEq16Fh_ElWUo5B_crkwPms7_KqoE/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_vifoa7tchkgmd9f60ug7hlejs4@group.calendar.google.com&ctz=America%2FLos_Angeles',

  textbooks: [
    {
      title: 'CS 261 Course Notes',
      author: 'Tim Budd',
      link: CS261CourseNotes
    }
  ],

  links: [
    {
      title: 'CS 261 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1861797'
    },
    {
      title: 'CS 261 on Zoom',
      link: 'https://oregonstate.zoom.us/j/99188984882?pwd=U2Z3NjZwaDlNTGNkRDRwSTlyTHNmUT09',
      description: 'all in-person lectures and recitations will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 261 on Campuswire',
      link: 'https://campuswire.com/c/GF70B73EC/',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 261 on GitHub',
      link: 'https://github.com/osu-cs261-f21',
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

  tas: tas,

  recitations: recitations
};

export default courseDetails;
