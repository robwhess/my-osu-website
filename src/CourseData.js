import w18 from './courses/w18/';
import sp18 from './courses/sp18/';
import f18 from './courses/f18/';

const currentTerm = 'f18';

const courseData = {
  f18: f18,
  sp18: sp18,
  w18: w18
};

const currentTermData = courseData[currentTerm];

export { currentTerm, courseData, currentTermData };
