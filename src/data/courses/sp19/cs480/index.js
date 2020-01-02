import { generateSitePath } from '../../../../lib/SitePath';

import topics from './topics';
import assignments from './assignments';
import tas from './tas';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Spring 2019',
  instructor: {
    name: 'Rob Hess',
    email: 'hessro@oregonstate.edu'
  },

  officeHours: [
    {
      day: 'Thurs.',
      time: '9:30&ndash;11:30am',
      location: 'KEC 1109'
    },
    {
      day: 'Fri.',
      time: '2:00&ndash;3:00pm',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MWF',
      time: '11:00 &ndash; 11:50am',
      location: 'WNGR 153'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/149owrZ3rSCfQ3QmCTXzuxLsBxlncDAEp4Dri-yHI0Ew/edit?usp=sharing',

  textbooks: [
    {
      title: 'Engineering a Compiler, 2nd ed.',
      author: 'Cooper and Torczon',
      link: 'https://books.google.com/books/about/Engineering_a_Compiler.html?id=CGTOlAEACAAJ'
    }
  ],

  links: [
    {
      title: 'CS 480 on Piazza',
      link: 'https://piazza.com/oregonstate/spring2019/cs480'
    },
    {
      title: 'Establishing a positive classroom community',
      link: generateSitePath("/teaching/community")
    }
  ],

  topics: topics,

  assignmentGroups: [ assignments ],

  tas: tas
};

export default courseDetails;
