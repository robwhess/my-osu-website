import { generateSitePath } from '../../../lib/SitePath';

import TAInfoPage from '../../../components/TAInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import taInfo from './taInfo';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Winter 2018',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: Tu 10:00&ndash;11:00am, W 2:00&ndash;4:00pm (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 10:00&ndash;10:50am, KIDD 350'
    },
    {
      title: 'Office Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA office hours'
    },
    {
      title: 'Grading Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA grading hours'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/17w7-eVsDlchGQ9yGWhrvvBinb3eRSSNgAX57I1z2mhI/edit?usp=sharing">CS 480 Syllabus</a>'
    },
    {
      title: 'Textbook',
      infoHTML: 'Cooper and Torczon. <a href="https://books.google.com/books/about/Engineering_a_Compiler.html?id=CGTOlAEACAAJ">Engineering a Compiler</a>. 2nd ed.'
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

  assignments: assignments,

  taInfo: taInfo,

  subPages: {
    'ta-info': TAInfoPage
  }
};

export default courseDetails;
