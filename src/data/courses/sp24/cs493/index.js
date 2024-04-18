import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 493/599',
  title: 'Cloud Application Development',
  term: 'Spring 2024',

  lectures: {
    '001': {
      day: 'MW',
      time: '10:00&ndash;11:50am',
      timeZone: 'US/Pacific',
      location: 'GILB 124',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/97784000101?pwd=ZndQeGdid0pTV1ZwUDhjdEZHRnNaQT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/14zhsiPRhj5aS_2N7kZDstYiCCnmAVjH8mRy0yKjZf8k/edit?usp=sharing',

  links: [
    {
      title: 'CS 493 grading demo appointments',
      link: 'https://outlook.office365.com/owa/calendar/CS493@OregonStateUniversity.onmicrosoft.com/bookings/',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 493 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1970824',
    },
    {
      title: 'CS 493 on Zoom',
      link: 'https://oregonstate.zoom.us/j/97784000101?pwd=ZndQeGdid0pTV1ZwUDhjdEZHRnNaQT09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 493 on Ed',
      link: 'https://edstem.org/us/courses/57639/discussion/',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 493 on GitHub',
      link: 'https://github.com/osu-cs493-599-sp24',
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
