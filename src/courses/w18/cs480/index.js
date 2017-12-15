import { generateSitePath } from '../../../lib/SitePath';

import calendar from './calendar';
import assignments from './assignments';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
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
      infoHTML: 'MWF 10:00&ndash;10:50am, KIDD 350'
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
      infoHTML: '<a href="#">CS 480 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/winter2018/cs480">CS 480 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: calendar,

  assignments: assignments
};

export default courseDetails;
