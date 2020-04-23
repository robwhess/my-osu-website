import topics from './topics';
import assignments from './assignments';
import tas from './tas';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Spring 2020',

  lectures: {
    '001': {
      day: 'MWF',
      time: '11:00&ndash;11:50am',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/988728449'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1idvtIHAgTM5GuNgO3tb0JSJCdeSF7MdpkDrv_RBXLCQ/edit?usp=sharing',

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
      link: 'https://oregonstate.instructure.com/courses/1764538'
    },
    {
      title: 'CS 480 on Zoom',
      link: 'https://oregonstate.zoom.us/j/988728449',
      description: 'this is where lectures will happen'
    },
    {
      title: 'CS 480 on Piazza',
      link: 'https://piazza.com/oregonstate/spring2020/cs480',
      description: 'course Q & A forum'
    },
    {
      title: 'CS 480 on GitHub',
      link: 'https://github.com/osu-cs480-sp20',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    },
    {
      title: 'Compiling a Functional Language Using C++',
      link: 'https://danilafe.com/blog/00_compiler_intro/',
      description: 'a series of blog posts by a former CS 480 student about a special project they did using the technologies we\'ll learn here'
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments ],

  tas: tas
};

export default courseDetails;
