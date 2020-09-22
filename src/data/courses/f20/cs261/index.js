import topics from './topics';
import assignments from './assignments';
import recitations from './recitations';
import tas from './tas';
import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'CS 261',
  title: 'Data Structures',
  term: 'Fall 2020',

  lectures: {
    '001': {
      day: 'MWF',
      time: '1:00 &ndash; 1:50pm',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
    },
    '002': {
      day: 'MWF',
      time: '9:00 &ndash; 9:50am',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/92187618069?pwd=ai9FK3hoUkZGaEpjQTI2ZTRZZnQ1UT09'
    },
  },

  syllabusLink: 'https://docs.google.com/document/d/1oush2_14jLl9kwjMuyof-LKW0FzjyeevynbO5uuvNys/edit?usp=sharing',

  textbooks: [
    {
      title: 'CS 261 Course Notes',
      author: 'Tim Budd',
      link: CS261CourseNotes
    }
  ],

  links: [
    {
      title: 'CS 261 on Canvas',
      link: '#'
    },
    {
      title: 'CS 261-001 on Zoom',
      link: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09',
      description: 'this is where lectures will happen for section 001'
    },
    {
      title: 'CS 261-002 on Zoom',
      link: 'https://oregonstate.zoom.us/j/92187618069?pwd=ai9FK3hoUkZGaEpjQTI2ZTRZZnQ1UT09',
      description: 'this is where lectures will happen for section 002'
    },
    {
      title: 'CS 261 on Piazza',
      link: 'https://piazza.com/oregonstate/fall2020/cs261',
      description: 'course Q & A forum'
    },
    {
      title: 'CS 261 on GitHub',
      link: 'https://github.com/osu-cs261-f20',
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

  tas: tas,

  recitations: recitations
};

export default courseDetails;
