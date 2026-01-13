import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';
// import hof from './hof';

const courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2026',

  lectures: {
    '001': {
      day: 'MW',
      time: '12:00&ndash;1:50pm',
      timeZone: 'US/Pacific',
      location: 'COVL 216',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/93585716779?pwd=i69MuAmAen9abWuaCbFFMKhyAQNa33.1'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1OMA0ibB5uM4DhPL9KSQ6yPNg89zpO77CyPuk-X8Qv1I/edit?usp=sharing',

  links: [
    {
      title: 'CS 492 grading demo appointments',
      link: 'https://outlook.office.com/book/CS492@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 492 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/2036497'
    },
    {
      title: 'CS 492 on Zoom',
      link: 'https://oregonstate.zoom.us/j/93585716779?pwd=i69MuAmAen9abWuaCbFFMKhyAQNa33.1',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 492 on Ed',
      link: 'https://edstem.org/us/courses/90406',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 492 on GitHub',
      link: 'https://github.com/osu-cs492-w26',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 492 Hall of Fame',
      link: '/teaching/hof/cs492',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 492'
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

  // hof: hof
};

export default courseDetails;
