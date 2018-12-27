import w18 from './w18/';
import sp18 from './sp18/';
import f18 from './f18/';
import w19 from './w19/';

const currentTerm = 'f18';

const courseData = {
  w19: w19,
  f18: f18,
  sp18: sp18,
  w18: w18
};

const currentTermData = courseData[currentTerm];

export { currentTerm, courseData, currentTermData };
