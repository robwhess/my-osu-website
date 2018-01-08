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
      title: 'TA',
      infoHTML: 'Ozgur Ozmen (<a href="mailto:ozmenmu@oregonstate.edu">ozmenmu@oregonstate.edu</a>)'
    },
    {
      title: 'Lectures',
      infoHTML: 'TuTh 2:00&ndash;3:50pm, COVL 216'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: Tu 10:00&ndash;11:00am, W 2:00&ndash;4:00pm (KEC 1109)<br>Ozgur: WF 1:30&ndash;2:30pm (KEC 2087)'
    },
    {
      title: 'Grading Hours',
      infoHTML: '<table><tbody><tr><td>Ozgur:</td><td><a href="#">M 3:00&ndash;4:30pm (KEC 2087)<br>Tu 12:00&ndash;1:30pm (KEC 2087)<br>W 2:30&ndash;4:30pm (KEC 2087)<br>F 2:30&ndash;4:30pm (KEC 2087)<br></a></td></tr></tbody></table>'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1_b4yYVgUtwT17wOiptlwHTwUwI8UM9xjuholV0y6cqk/edit?usp=sharing">CS 492 Syllabus</a>'
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
