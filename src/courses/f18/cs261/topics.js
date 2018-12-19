import CS261CourseNotes from '../../../static/CS261CourseNotes.pdf';

const topics = [
  {
    title: 'Course Intro',
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1N9pyiZpiaQsVnle9xayVtjABpFIpFzXA6O_mFVyARdw/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapters 1-3',
        link: CS261CourseNotes + '#page=1',
        description: 'Budd\'s Course Notes'
      }
    ]
  },

  {
    title: 'Git and GitHub',
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1TnMfQfhkam3vOdVLWAaF3Y_V-Z8eX7IvKx0w2tPr0Pg/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapters 1 and 2',
        link: 'https://git-scm.com/book/en/v2',
        description: 'Pro Git'
      }
    ]
  },

  {
    title: 'C Review/Crash Course',
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1w56HxnSUpmoJ8PZct4lhhR5_4WNg6NdlefpxmHe5LWQ/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS261-F18/c-basics'
      }
    ],
    readings: [
      {
        title: 'Lesson 1: Intro to C',
        link: 'http://www.cprogramming.com/tutorial/c/lesson1.html',
        description: 'C Programming'
      },
      {
        title: 'Lesson 4: Functions in C',
        link: 'http://www.cprogramming.com/tutorial/c/lesson4.html',
        description: 'C Programming'
      },
      {
        title: 'Lesson 7: Structures in C',
        link: 'http://www.cprogramming.com/tutorial/c/lesson7.html',
        description: 'C Programming'
      },
      {
        title: 'Lesson 6: Pointers in C',
        link: 'http://www.cprogramming.com/tutorial/c/lesson6.html',
        description: 'C Programming'
      }
    ],
    notes: [
      'Note that the above four readings assume an older C standard (C89) than we\'ll be using in this class (C99), but everything they describe will still work for us.  You can refer to the following link to understand the differences between C89 and C99: [C99: Design](https://en.wikipedia.org/wiki/C99#Design).'
    ]
  }
];

export default topics;
