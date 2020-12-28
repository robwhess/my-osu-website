import topics from './topics';
import assignments from './assignments';
// import finalProject from './finalProject';
import tas from './tas';

const courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2021',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/92801441901?pwd=SjZScXRyUUREVG11SGNZVEhCY0lnUT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1AOVGJkSt0PCCNTF7OG8aWMDT0gTaA1iZG2GLMWIetCg/edit?usp=sharing',

  links: [
    // {
    //   title: 'CS 492 on Canvas',
    //   link: ''
    // },
    {
      title: 'CS 492 on Zoom',
      link: 'https://oregonstate.zoom.us/j/92801441901?pwd=SjZScXRyUUREVG11SGNZVEhCY0lnUT09',
      description: 'this is where lectures for this course will happen'
    },
    {
      title: 'CS 492 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2021/cs492',
      description: 'course Q & A forum'
    },
    {
      title: 'CS 492 on GitHub',
      link: 'https://github.com/osu-cs492-w21',
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
