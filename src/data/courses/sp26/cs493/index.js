import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2026',

  lectures: {
    '001': {
      day: 'MW',
      time: '12:00&ndash;1:50pm',
      timeZone: 'US/Pacific',
      location: 'ROG 230',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96017875949?pwd=RPj7neChAcucSbjAvp1wGdquaynQUk.1'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1cD5M_xo5xeHxuvEA7svyvT2xuERErAQ5oPAADah5Tlw/edit?usp=sharing',

  links: [
    {
      title: 'CS 493 grading demo appointments',
      link: 'https://outlook.office.com/book/CS493@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 493 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/2066268',
    },
    {
      title: 'CS 493 on Zoom',
      link: 'https://oregonstate.zoom.us/j/96017875949?pwd=RPj7neChAcucSbjAvp1wGdquaynQUk.1',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 493 on Ed',
      link: 'https://edstem.org/us/courses/96642',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 493 on GitHub',
      link: 'https://github.com/osu-cs493-sp26',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments, /* finalProject */ ],

  tas: tas
};

export default courseDetails;
