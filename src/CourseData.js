import CS290F17 from './courses/f17/cs290/';

import CS290Sp17 from './courses/sp17/cs290/';
import CS391Sp17 from './courses/sp17/cs391/';
import CS496Sp17 from './courses/sp17/cs496/';

var courseData = {
  'cs290-f17': CS290F17,

  'cs290-sp17': CS290Sp17,
  'cs391-sp17': CS391Sp17,
  'cs496-sp17': CS496Sp17
};

var coursesByTerm = [
  {
    term: 'Fall 2017',
    courses: Object.keys(courseData).filter((course) => (/-f17$/.test(course))).sort()
  },
  {
    term: 'Spring 2017',
    courses: Object.keys(courseData).filter((course) => (/-sp17$/.test(course))).sort()
  }
];

export { courseData, coursesByTerm };
