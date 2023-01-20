import topics from './topics'
// import assignments from './assignments'
// import finalProject from './finalProject'
// import tas from './tas'

var courseDetails = {
  number: 'CS 362',
  title: 'Software Engineering II',
  term: 'Spring 2023',

  lectures: {
    '001': {
      day: 'MW',
      time: '4:00&ndash;5:50pm',
      timeZone: 'US/Pacific',
      location: '',
      videoConferenceLink: ''
    }
  },

  syllabusLink: '',

  calendarUrl: '',

  links: [
    {
      title: 'CS 362 on Canvas',
      link: ''
    },
    {
      title: 'CS 362 on Zoom',
      link: '',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 362 on Ed',
      link: '',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 362 on GitHub',
      link: '',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

//   assignmentGroups: [ assignments ],

//   tas: tas
}

export default courseDetails
