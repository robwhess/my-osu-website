import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';
// import hof from './hof';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Fall 2025',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      location: 'WITH 155/Zoom',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96382460468?pwd=a5lNpL5Jp3jxb5LEUNQZjjdxnbJjyc.1'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1CE1mCmb-4CXKlB9BfOJlYNKBhsxcHFTFsY5zzFI56Ms/edit?usp=sharing',

  links: [
    {
      title: 'CS 290 grading demo appointments',
      link: 'https://outlook.office.com/book/CS290@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 290 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/2017536'
    },
    {
      title: 'CS 290 on Zoom',
      link: 'https://oregonstate.zoom.us/j/96382460468?pwd=a5lNpL5Jp3jxb5LEUNQZjjdxnbJjyc.1',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 290 on Ed',
      link: 'https://edstem.org/us/courses/87513/',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 290 on GitHub',
      link: 'https://github.com/osu-cs290-f25',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 290 Hall of Fame',
      link: '/teaching/hof/cs290',
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

  tas: tas

};

export default courseDetails;
