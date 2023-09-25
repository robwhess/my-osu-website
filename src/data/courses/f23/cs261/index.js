import topics from './topics';
import assignments from './assignments';
// import finalExam from './finalExam';
import recitations from './recitations';
import tas from './tas';
import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'CS 261',
  title: 'Data Structures',
  term: 'Fall 2023',

  lectures: {
    '020': {
      day: 'MWF',
      time: '10:00 &ndash; 10:50am',
      location: 'GLSN 200/Zoom',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/92574554369?pwd=dUlmdEk2alROa1ZJVTJDN1lBSkJVUT09'
    },
  },

  syllabusLink: 'https://docs.google.com/document/d/10LNlbneVgLN7IqABW8KJkMbaiZAtKZOodU3KvkRdpQc/edit?usp=sharing',

  textbooks: [
    {
      title: 'CS 261 Course Notes',
      author: 'Tim Budd',
      link: CS261CourseNotes
    }
  ],

  links: [
    // {
    //   title: 'CS 261 grading demo appointments',
    //   link: '',
    //   description: 'use this page to sign up for grading demos for all assignments'
    // },
    {
      title: 'CS 261 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1933631',
    },
    {
      title: 'CS 261 on Zoom',
      link: 'https://oregonstate.zoom.us/j/92574554369?pwd=dUlmdEk2alROa1ZJVTJDN1lBSkJVUT09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 261 on Ed',
      link: 'https://edstem.org/us/courses/47902/',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 261 on GitHub',
      link: 'https://github.com/osu-cs261-f23',
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
