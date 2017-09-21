import CS261CourseNotes from '../../../files/CS261CourseNotes.pdf';

var calendar = [
  {
    week: 0,
    sections: [
      {
        heading: 'Topics',
        entriesHTML: [
          'Course Intro &ndash; <a href="https://docs.google.com/document/d/1N9pyiZpiaQsVnle9xayVtjABpFIpFzXA6O_mFVyARdw/edit?usp=sharing">notes</a>',
          'Git and GitHub &ndash; <a href="https://docs.google.com/document/d/1TnMfQfhkam3vOdVLWAaF3Y_V-Z8eX7IvKx0w2tPr0Pg/edit?usp=sharing">notes</a>',
          'C Review/Crash Course &ndash; <a href="https://docs.google.com/document/d/1w56HxnSUpmoJ8PZct4lhhR5_4WNg6NdlefpxmHe5LWQ/edit?usp=sharing">notes</a>'
        ]
      },
      {
        heading: 'Readings',
        entriesHTML: [
          '<a href="' + CS261CourseNotes + '#page=1">Chapters 1&ndash;3</a> &ndash; Budd\'s Course Notes',
          '<a href="https://git-scm.com/book/en/v2">Chapters 1 and 2</a> &ndash; Pro Git',
          '<a href="http://www.cprogramming.com/tutorial/c/lesson1.html">Lesson 1: Intro to C</a> &ndash; C Programming',
          '<a href="http://www.cprogramming.com/tutorial/c/lesson4.html">Lesson 4: Functions in C</a> &ndash; C Programming',
          '<a href="http://www.cprogramming.com/tutorial/c/lesson7.html">Lesson 7: Structures in C</a> &ndash; C Programming',
          '<a href="http://www.cprogramming.com/tutorial/c/lesson6.html">Lesson 6: Pointers in C</a> &ndash; C Programming',
          'Note that the above readings assume an older C standard (C89) than we\'ll be using in this class (C99), but everything they describe will still work for us.  You can refer to <a href="https://en.wikipedia.org/wiki/C99#Design">Wikipedia</a> to understand the differences between C89 and C99.'
        ]
      }
    ]
  },
  {
    week: 1,
    sections: [
      {
        heading: 'Topics',
        entriesHTML: [
          'C Review/Crash Course &ndash; <a href="https://docs.google.com/document/d/1w56HxnSUpmoJ8PZct4lhhR5_4WNg6NdlefpxmHe5LWQ/edit?usp=sharing">notes</a>',
          'Complexity Analysis (Big O) &ndash; <a href="https://docs.google.com/document/d/1aHgFRl9RkOE8bNf3Kdh-L69eSE-J0NQJybf_TJXGy3w/edit?usp=sharing">notes</a>'
        ]
      },
      {
        heading: 'Readings',
        entriesHTML: [
          '<a href="' + CS261CourseNotes + '#page=28">Chapter 4</a> &ndash; Budd\'s Course Notes',
          '<a href="https://en.wikipedia.org/wiki/Analysis_of_algorithms">Analysis of algorithms</a> &ndash; Wikipedia'
        ]
      }
    ]
  }
];

export default calendar;
