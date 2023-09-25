import w18 from './w18/';
import sp18 from './sp18/';
import f18 from './f18/';
import w19 from './w19/';
import sp19 from './sp19/';
import f19 from './f19/';
import w20 from './w20/';
import sp20 from './sp20/';
import f20 from './f20/';
import w21 from './w21/';
import sp21 from './sp21/';
import f21 from './f21/';
import w22 from './w22/';
import sp22 from './sp22/';
import f22 from './f22/';
import w23 from './w23/';
import sp23 from './sp23/';
import f23 from './f23/';

const currentTerm = 'f23';

const courseData = {
  f23: f23,
  sp23: sp23,
  w23: w23,
  f22: f22,
  sp22: sp22,
  w22: w22,
  f21: f21,
  sp21: sp21,
  w21: w21,
  f20: f20,
  sp20: sp20,
  w20: w20,
  f19: f19,
  sp19: sp19,
  w19: w19,
  f18: f18,
  sp18: sp18,
  w18: w18
};

const currentTermData = courseData[currentTerm];

export { currentTerm, courseData, currentTermData };
