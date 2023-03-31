import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2023',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'GILB 124',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/97174878174?pwd=aURLakMwSkZIWUtwMTdTSjNvUkVPZz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/19HSWZmwIeztUASNFIzdkcy6B8VwOWyyE5RPmiNQv5Co/edit?usp=sharing',

  links: [
    {
      title: 'CS 493 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1915169',
    },
    {
      title: 'CS 493 on Zoom',
      link: 'https://oregonstate.zoom.us/j/97174878174?pwd=aURLakMwSkZIWUtwMTdTSjNvUkVPZz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 493 on Ed',
      link: 'https://edstem.org/us/courses/38461',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 493 on GitHub',
      link: 'https://github.com/osu-cs493-sp23',
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
