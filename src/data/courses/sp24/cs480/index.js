import topics from './topics';
import assignments from './assignments';
import tas from './tas';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Spring 2024',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'WNGR 116',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96019734774?pwd=Q05TN0tLWGdublVvMEtuRXRaRTQxdz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1l72KrSGDvK7L5G_dvnGyNzS17x4Z5ZvPcv34d4NGfzI/edit?usp=sharing',

  textbooks: [
    {
      title: 'Basics of Compiler Design',
      author: 'Torben Mogensen',
      link: 'http://hjemmesider.diku.dk/~torbenm/Basics/'
    }
  ],

  links: [
    {
      title: 'CS 480 grading demo appointments',
      link: 'https://outlook.office365.com/owa/calendar/CS480@OregonStateUniversity.onmicrosoft.com/bookings/',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 480 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1958148'
    },
    {
      title: 'CS 480 on Zoom',
      link: 'https://oregonstate.zoom.us/j/96019734774?pwd=Q05TN0tLWGdublVvMEtuRXRaRTQxdz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 480 on Ed',
      link: 'https://edstem.org/us/courses/57638/discussion/',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 480 on GitHub',
      link: 'https://github.com/osu-cs480-sp24',
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
