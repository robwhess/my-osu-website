import topics from './topics'
import assignments from './assignments'
// import finalProject from './finalProject'
import tas from './tas'

var courseDetails = {
  number: 'CS 362',
  title: 'Software Engineering II',
  term: 'Spring 2023',

  lectures: {
    '001': {
      day: 'MW',
      time: '4:00&ndash;5:50pm',
      timeZone: 'US/Pacific',
      location: 'WNGR 151',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/92957966637?pwd=SnhUU25velhkVTNnL2xsSGRpcnVSZz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1HVMdbzmNcKbJ71e6YYkJDeKixXvOp9-qHeAId-jtrFk/edit?usp=sharing',

  links: [
    {
      title: 'CS 362 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1914881'
    },
    {
      title: 'CS 362 on Zoom',
      link: 'https://oregonstate.zoom.us/j/92957966637?pwd=SnhUU25velhkVTNnL2xsSGRpcnVSZz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 362 on Ed',
      link: 'https://edstem.org/us/courses/38462',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 362 on GitHub',
      link: 'https://github.com/osu-cs362-sp23',
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
}

export default courseDetails
