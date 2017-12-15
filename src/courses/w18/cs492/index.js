import { generateSitePath } from '../../../lib/SitePath';

import calendar from './calendar';
import assignments from './assignments';
import finalProject from './finalProject';

var courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2018',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)'
    },
    {
      title: 'TAs',
      infoHTML: 'TBD'
    },
    {
      title: 'Lectures',
      infoHTML: 'TuTh 2:00&ndash;3:50pm, COVL 216'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: TBD (KEC 1109)'
    },
    {
      title: 'Grading Hours',
      infoHTML: 'TBD'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="#">CS 492 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/winter2018/cs492">CS 492 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: calendar,

  assignments: assignments,

  finalProject: finalProject,

  // subPages: {
  //   'final-project-proposal': FinalProjectProposalPage
  // }
};

export default courseDetails;
