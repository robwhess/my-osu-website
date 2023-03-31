import topics from './topics';
import assignments from './assignments';
import tas from './tas';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Spring 2023',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'JOHN 102',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/93183683383?pwd=cnRkZDVWQ0VJbzVETTllb2d4UjcrQT09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1pr_Rfd85Tjltw8_henYLCLY_N8S4niDIkhZLczHXiV8/edit?usp=sharing',

  textbooks: [
    {
      title: 'Engineering a Compiler, 2nd ed.',
      author: 'Cooper and Torczon',
      link: 'https://books.google.com/books/about/Engineering_a_Compiler.html?id=CGTOlAEACAAJ'
    }
  ],

  links: [
    {
      title: 'CS 480 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1915166'
    },
    {
      title: 'CS 480 on Zoom',
      link: 'https://oregonstate.zoom.us/j/93183683383?pwd=cnRkZDVWQ0VJbzVETTllb2d4UjcrQT09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'CS 480 on Ed',
      link: 'https://edstem.org/us/courses/38460/',
      description: 'we will use Ed for course Q & A &ndash; you should be automatically enrolled if you\'re enrolled for this course'
    },
    {
      title: 'CS 480 on GitHub',
      link: 'https://github.com/osu-cs480-sp23',
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
