import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2020',

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00&ndash;3:50pm',
      location: 'online via Zoom &ndash; click for details',
      details: 'Join Zoom Meeting\nhttps://oregonstate.zoom.us/j/962055651\n\nPhone Dial-In Information\n+1 971 247 1195 US (Portland)\n+1 301 715 8592 US\n+1 253 215 8782 US\n\nMeeting ID: 962 055 651\n\nJoin by Polycom/Cisco/Other Room System\n962055651@zoomcrc.com'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1Xbnqvz7Wj-Wl6nSuMKvDeAtFKwTJJ1njAqKlm8cjI8k/edit?usp=sharing',

  links: [
    {
      title: 'CS 493 on Canvas',
      link: 'https://oregonstate.instructure.com/courses/1764541'
    },
    {
      title: 'CS 493 on Zoom',
      link: 'https://oregonstate.zoom.us/j/962055651',
      description: 'this is where lectures will happen'
    },
    {
      title: 'CS 493 on Piazza',
      link: 'https://piazza.com/oregonstate/spring2020/cs493',
      description: 'course Q & A forum'
    },
    {
      title: 'CS 493 on GitHub',
      link: 'https://github.com/osu-cs493-sp20',
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
