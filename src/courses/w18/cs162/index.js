import { generateSitePath } from '../../../lib/SitePath';

import TAInfoPage from '../../../components/TAInfoPage';
import RecitationInfoPage from '../../../components/RecitationInfoPage';
import LabInfoPage from '../../../components/LabInfoPage';

import calendar from './calendar';
import assignments from './assignments';
import taInfo from './taInfo';
import recitationInfo from './recitationInfo';
import labInfo from './labInfo';

var courseDetails = {
  number: 'CS 162',
  title: 'Intro to CS II',
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
      infoHTML: 'MWF 12:00&ndash;12:50am, WNGR 151'
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
      infoHTML: '<a href="https://docs.google.com/document/d/1W0imnas27fZ-E2ttDyFuqmiHPutazFFKYZHdDlV0zRI/edit?usp=sharing">CS 162 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/winter2018/cs162">CS 162 on Piazza</a>'
    },
    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: calendar,

  assignments: assignments,

  taInfo: taInfo,

  recitationInfo: recitationInfo,

  labInfo: labInfo,

  subPages: {
    'ta-info': TAInfoPage,
    'recitation-info': RecitationInfoPage,
    'lab-info': LabInfoPage
  },

  subnavItems: [
    {
      subPage: 'ta-info',
      title: 'TA Info'
    },
    {
      subPage: 'recitation-info',
      title: 'Recitations'
    },
    {
      subPage: 'lab-info',
      title: 'Labs'
    }
  ]
};

export default courseDetails;
