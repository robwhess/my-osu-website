import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';
// import hof from './hof';

var courseDetails = {
  number: 'CS 494',
  title: 'Advanced Web Development',
  term: 'Winter 2024',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'PFSC 117',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/92519008947?pwd=VUxFT05qbml1V25Bb3ppcC9mRjduQT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1xEjMuR8WxyENrjYUpttA9k2R49JQGjrAl82mV8S9wOE/edit?usp=sharing',

  links: [
    {
      title: 'CS 494 grading demo appointments',
      link: 'https://outlook.office365.com/owa/calendar/CS494@OregonStateUniversity.onmicrosoft.com/bookings/',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 494 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1946384'
    },
    {
      title: 'CS 494 on Zoom',
      link: 'https://oregonstate.zoom.us/j/92519008947?pwd=VUxFT05qbml1V25Bb3ppcC9mRjduQT09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 494 on Ed',
      link: 'https://edstem.org/us/courses/51458',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 494 on GitHub',
      link: 'https://github.com/osu-cs494-w24',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 494 Hall of Fame',
      link: '/teaching/hof/cs494',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 494'
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
