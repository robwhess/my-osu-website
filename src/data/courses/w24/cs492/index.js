import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';
// import hof from './hof';

const courseDetails = {
  number: 'CS 492/599',
  title: 'Mobile Software Development',
  term: 'Winter 2024',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'LINC 128',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/99080185384?pwd=RUFJdHU4Vkc3bE5Vam1kRHJza3VtUT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1kdsA3c13WYKDNc1CI-7DfkcWDcyWePSStqFRMxU747U/edit?usp=sharing',

  links: [
    {
      title: 'CS 492/599 grading demo appointments',
      link: 'https://outlook.office365.com/owa/calendar/CS492@OregonStateUniversity.onmicrosoft.com/bookings/',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 492/599 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1970085'
    },
    {
      title: 'CS 492/599 on Zoom',
      link: 'https://oregonstate.zoom.us/j/99080185384?pwd=RUFJdHU4Vkc3bE5Vam1kRHJza3VtUT09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 492/599 on Ed',
      link: 'https://edstem.org/us/courses/51456',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 492/599 on GitHub',
      link: 'https://github.com/osu-cs492-599-w24',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'The CS 492/599 Hall of Fame',
      link: '/teaching/hof/cs492',
      description: 'this is a showcase of some of the very best final projects from past terms of CS 492/599'
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
