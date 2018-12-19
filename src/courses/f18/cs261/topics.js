import CS261CourseNotes from '../../../static/CS261CourseNotes.pdf';

const topics = [
  {
    title: 'Course Intro',
    weeks: [ 0 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1N9pyiZpiaQsVnle9xayVtjABpFIpFzXA6O_mFVyARdw/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapters 1-3',
        link: `${CS261CourseNotes}#page=1`,
        description: 'Budd\'s Course Notes'
      }
    ]
  },

  {
    title: 'Git and GitHub',
    weeks: [ 0 ],
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
    weeks: [ 1 ],
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
  },

  {
    title: 'Complexity Analysis (Big O)',
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1aHgFRl9RkOE8bNf3Kdh-L69eSE-J0NQJybf_TJXGy3w/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapters 4-5',
        link: `${CS261CourseNotes}#page=28`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Analysis of algorithms',
        link: 'https://en.wikipedia.org/wiki/Analysis_of_algorithms',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Dynamic Arrays',
    weeks: [ 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1kz-1aTo3thyJBi0TIVYVPeb_UA9_-VCGo2ln6UZvXoY/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS261-F18/dynarray'
      },
    ]
  },

  {
    title: 'Stacks, Queues, and Deques',
    weeks: [ 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1YE5kQFFFPvu7R-tFU6P_hOFUxOlLlKZqkWagSVfMSVU/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapters 6-7',
        link: `${CS261CourseNotes}#page=58`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Stack',
        link: 'https://en.wikipedia.org/wiki/Stack_(abstract_data_type)',
        description: 'Wikipedia'
      },
      {
        title: 'Queue',
        link: 'https://en.wikipedia.org/wiki/Queue_(abstract_data_type)',
        description: 'Wikipedia'
      },
      {
        title: 'Double-ended queue',
        link: 'https://en.wikipedia.org/wiki/Double-ended_queue',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Linked Lists',
    weeks: [ 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1CY-1eXaAf6hPZWNXduejKIxHgra8Z8M1YYfxxyvaxYs/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS261-F18/lldeque'
      }
    ],
    readings: [
      {
        title: 'Linked list',
        link: 'https://en.wikipedia.org/wiki/Linked_list',
        description: 'Wikipedia'
      },
      {
        title: 'Linked list (with Stack, Queue, and Deque)',
        link: 'https://visualgo.net/en/list',
        description: 'VisuAlgo.net'
      }
    ]
  },

  {
    title: 'Iterators',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1h17U-0nDinnKPUJSehJbVB1Lx8Z73G-HsHl7RabMVjo/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS261-F18/lldeque'
      }
    ],
    readings: [
      {
        title: 'Chapter 8 (pp. 4-5, "Introduction to the Iterator")',
        link: `${CS261CourseNotes}#page=90`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Iterator',
        link: 'https://en.wikipedia.org/wiki/Iterator',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Ordered Arrays and Binary Search',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/145ReP_mk2ATwW7aUCX_i0FoP_Xp1mzy9Aor4qWYIxHA/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS261-F18/lldeque'
      }
    ],
    readings: [
      {
        title: 'Chapter 9',
        link: `${CS261CourseNotes}#page=96`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Binary search algorithm',
        link: 'https://en.wikipedia.org/wiki/Binary_search_algorithm',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Midterm exam',
    weeks: [ 5 ],
    notes: [
      'The midterm exam will be on Friday of week 5 in our normal lecture location at the normal lecture time.',
      'The exam will cover everything from the first half of the course, up to and including binary search.  Trees and binary search trees will not be covered on the exam.',
      'On Wednesday of week 5, I will hold an "ask me anything" session, where you can ask me questions about material for the exam you want to review.'
    ]
  },
];

export default topics;
