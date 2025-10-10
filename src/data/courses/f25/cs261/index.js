import topics from './topics';
import assignments from './assignments';
// import finalExam from './finalExam';
import recitations from './recitations';
import tas from './tas';
import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'CS 261/261H',
  title: 'Data Structures',
  term: 'Fall 2025',

  lectures: {
    '020/001H': {
      day: 'MWF',
      time: '10:00 &ndash; 10:50am',
      location: 'WNGR 116/Zoom',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/94277588833?pwd=DGQGRngFsvPn2CM1QqYxGRuEoxrpas.1'
    },
  },

  syllabusLink: 'https://docs.google.com/document/d/1CnsjtvvknNKLuAqZ6bkBeEUrh4zH0nl7U8o7lt_ymDc/edit?usp=sharing',

  textbooks: [
    {
      title: 'CS 261 Course Notes',
      author: 'Tim Budd',
      link: CS261CourseNotes
    }
  ],

  links: [
    {
      title: 'CS 261 grading demo appointments',
      link: 'https://outlook.office.com/book/CS261@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 261 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/2017497',
    },
    {
      title: 'CS 261 on Zoom',
      link: 'https://oregonstate.zoom.us/j/94277588833?pwd=DGQGRngFsvPn2CM1QqYxGRuEoxrpas.1',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 261 on Ed',
      link: 'https://edstem.org/us/courses/87333',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 261 on GitHub',
      link: 'https://github.com/osu-cs261-f25',
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
