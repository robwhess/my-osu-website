import w18 from './w18/';
import sp18 from './sp18/';
import f18 from './f18/';
import w19 from './w19/';
import sp19 from './sp19/';

const currentTerm = 'sp19';

const courseData = {
  sp19: sp19,
  w19: w19,
  f18: f18,
  sp18: sp18,
  w18: w18
};

const currentTermData = courseData[currentTerm];

export { currentTerm, courseData, currentTermData };
