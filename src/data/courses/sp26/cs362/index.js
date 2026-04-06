import topics from './topics'
import assignments from './assignments'
// import finalProject from './finalProject'
import tas from './tas'

var courseDetails = {
  number: 'CS 362',
  title: 'Software Engineering II',
  term: 'Spring 2026',

  lectures: {
    '001': {
      day: 'MW',
      time: '4:00&ndash;5:50pm',
      timeZone: 'US/Pacific',
      location: 'LPSC 125',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/99350551124?pwd=dHqez0vKdPnABmJ7aMl4dNawhgtf7f.1'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1nkWLkodrhF12tP190K6vqAp7Q0AxPncxcy2IQpEm_Zk/edit?usp=sharing',

  links: [
    {
      title: 'CS 362 grading demo appointments',
      link: 'https://outlook.office.com/book/CS362@OregonStateUniversity.onmicrosoft.com/?ismsaljsauthenabled',
      description: 'use this page to sign up for grading demos for all assignments'
    },
    {
      title: 'CS 362 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/2039368'
    },
    {
      title: 'CS 362 on Zoom',
      link: 'https://oregonstate.zoom.us/j/99350551124?pwd=dHqez0vKdPnABmJ7aMl4dNawhgtf7f.1',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 362 on Ed',
      link: 'https://edstem.org/us/courses/96641',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 362 on GitHub',
      link: 'https://github.com/osu-cs362-sp26',
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
}

export default courseDetails
