import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 499',
  title: 'Advanced Web Development',
  term: 'Winter 2021',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/98393113925?pwd=bTBsY3hJU0c4anpydzUwOXNhQzFndz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1INiIkNX6tdWtZDYRQYUDsAWN7pHlEYIitb0PiDwz2rc/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_3m5m940qqphhblam8s1om1ggi8%40group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'CS 499 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1807574'
    },
    {
      title: 'CS 499 on Zoom',
      link: 'https://oregonstate.zoom.us/j/98393113925?pwd=bTBsY3hJU0c4anpydzUwOXNhQzFndz09',
      description: 'this is where lectures for this course will happen'
    },
    {
      title: 'CS 499 on Campuswire',
      link: 'https://campuswire.com/c/G7E8456FE',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'CS 499 on GitHub',
      link: 'https://github.com/osu-cs499-w21',
      description: 'find all lecture code repos and your own private assignment repos here'
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
