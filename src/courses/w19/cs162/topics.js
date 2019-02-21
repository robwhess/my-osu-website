const topics = [
  {
    title: 'Course Intro',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1dWX-4PeCH2DFqYUj_Rqj5MtIRfZMiG8tDLd3-ZIRtRw/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'What is Object-Oriented Programming?',
        link: 'https://medium.com/learn-how-to-program/chapter-3-what-is-object-oriented-programming-d0a6ec0a7615',
        description: 'Richard Kenneth Eng (Chapter 3 of "Learn How To Program" on Medium)'
      },
      {
        title: 'How to explain object-oriented programming concepts to a 6-year-old',
        link: 'https://medium.freecodecamp.org/object-oriented-programming-concepts-21bb035f7260',
        description: 'Alexander Petkov (on Medium\'s freeCodeCamp)'
      }
    ]
  },

  {
    title: 'Git and GitHub',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1lBaJnhL_lQZEFht7syMCOzpM-up6DWKrsNV7NwW5Cp8/edit?usp=sharing'
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
    title: 'Review: Pointers, Arrays, and Structs',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1rc4tvvVOSXMGjdVDBgNT0tlQ-KJFOoY5nZ6t1kd7r8I/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/cpp-review',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Chapter 6 (Arrays, Strings, Pointers, and References)',
        link: 'http://www.learncpp.com/#Chapter6',
        description: 'LearnCpp.com'
      }
    ]
  },

  {
    title: 'File I/O',
    weeks: [ 2, 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1hWYCUBf9NL80O6PK-oH7sA0zMFEd8A3F8SAODc_0f9U/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/file-io',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Input/output with files',
        link: 'http://www.cplusplus.com/doc/tutorial/files/',
        description: 'cplusplus.com'
      },
      {
        title: '18.6 - Basic file I/O',
        link: 'http://www.learncpp.com/cpp-tutorial/186-basic-file-io/',
        description: 'LearnCpp.com'
      }
    ]
  },

  {
    title: 'Classes',
    weeks: [ 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1pDGAfxSOaQd7-D0oC57t2-2M8a0q9aForxqDCzUbj8E/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/class-basics',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Chapter 8 (Basic object-oriented programming)',
        link: 'http://www.learncpp.com/#Chapter8',
        description: 'LearnCpp.com'
      },
      {
        title: 'Classes',
        link: 'http://www.cplusplus.com/doc/tutorial/classes/',
        description: 'cplusplus.com'
      }
    ]
  },

  {
    title: 'Separation of Files, Compilation, and Make',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/16rDDHrqcnR1O4ID7Ji9J8NAsZErkByxgg1QjVvsGLdA/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/class-basics',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: '1.9 - Header files',
        link: 'http://www.learncpp.com/cpp-tutorial/19-header-files/',
        description: 'LearnCpp.com'
      },
      {
        title: '1.10 - A first look at the preprocessor',
        link: 'http://www.learncpp.com/cpp-tutorial/110-a-first-look-at-the-preprocessor/',
        description: 'LearnCpp.com'
      },
      {
        title: '1.10a - Header guards',
        link: 'http://www.learncpp.com/cpp-tutorial/1-10a-header-guards/',
        description: 'LearnCpp.com'
      },
      {
        title: 'Makefiles: A tutorial by example',
        link: 'http://mrbook.org/blog/tutorials/make/',
        description: 'Mrbook'
      }
    ]
  },

  {
    title: 'First Exam',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Practice exam',
        link: 'https://docs.google.com/document/d/1W2AEhd6qxcvbjunHNY9ZlaXv-G1gBuJHzm8MQFZJoCE/edit?usp=sharing',
        description: 'from winter 2017'
      },
      {
        title: 'Practice exam solutions',
        link: 'https://docs.google.com/document/d/18eSpIaw3rbZniFP_xw5URs6Nm_i5JUTQhtayF2x0j-Q/edit?usp=sharing'
      },
      {
        title: 'Exam solutions',
        link: 'https://docs.google.com/document/d/1_LXO7wAPKwyTalT04qTw-WlapWnieUJySaJIKS6MXJ4/edit?usp=sharing'
      }
    ],
    notes: [
      'Our first exam will be this Wednesday at our normal lecture location and time.',
      'The exam will cover everything we\'ve talked about so far in lecture, through classes and compilation/makefiles.',
      'The exam will be all multiple choice and true/false questions.  I will provide Scantron forms.'
    ]
  },

  {
    title: 'Composition',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/composition',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: '10.2 - Composition',
        link: 'https://www.learncpp.com/cpp-tutorial/102-composition/',
        description: 'LearnCpp.com'
      }
    ]
  },

  {
    title: 'Inheritance',
    weeks: [ 5, 6 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1C22qC6mz_2m_2kB6xvoCFeVfsz8PPMBXIpQhmEvyYro/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/inheritance',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: '11.1 - Introduction to inheritance',
        link: 'http://www.learncpp.com/cpp-tutorial/111-introduction-to-inheritance/',
        description: 'LearnCpp.com'
      },
      {
        title: '11.2 - Basic inheritance in C++',
        link: 'http://www.learncpp.com/cpp-tutorial/112-basic-inheritance-in-c/',
        description: 'LearnCpp.com'
      }
    ]
  },

  {
    title: 'Polymorphism',
    weeks: [ 6, 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1GJaaVwUr20-PNZn5zCy-WcZfTWtHIk9f-9tUWVyLNkg/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/polymorphism',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: '12.1 - Pointers and references to the base class of derived objects',
        link: 'http://www.learncpp.com/cpp-tutorial/121-pointers-and-references-to-the-base-class-of-derived-objects/',
        description: 'LearnCpp.com'
      },
      {
        title: '12.2 - Virtual functions and polymorphism',
        link: 'http://www.learncpp.com/cpp-tutorial/122-virtual-functions/',
        description: 'LearnCpp.com'
      },
      {
        title: 'Polymorphism',
        link: 'http://www.cplusplus.com/doc/tutorial/polymorphism/',
        description: 'cplusplus.com'
      }
    ]
  },

  {
    title: 'Exceptions',
    weeks: [ 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1gFuNbMun8-9dQ5P2b0ZDUdDA5GarrRu1sNadtZRLGS0/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/exceptions',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Chapter 14 - Exceptions',
        link: 'http://www.learncpp.com/#Chapter14',
        description: 'LearnCpp.com'
      },
      {
        title: 'Exceptions',
        link: 'http://www.cplusplus.com/doc/tutorial/exceptions/',
        description: 'cplusplus.com'
      },
      {
        title: 'C++ Exceptions: Pros and Cons',
        link: 'https://www.codeproject.com/Articles/38449/C-Exceptions-Pros-and-Cons',
        description: 'Code Project'
      }
    ]
  },

  {
    title: 'Templates and the C++ Standard Template Library (STL)',
    weeks: [ 7, 8 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1TMz14Bx4TkCWME4qIEatONifl_JmVkiZXl1H7Y2V9Cw/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/templates',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Chapter 13 - Templates',
        link: 'http://www.learncpp.com/#Chapter13',
        description: 'LearnCpp.com'
      },
      {
        title: 'Templates',
        link: 'http://www.cplusplus.com/doc/oldtutorial/templates/',
        description: 'cplusplus.com'
      },
      {
        title: 'Chapter 16 - The Standard Template Library',
        link: 'http://www.learncpp.com/#Chapter16',
        description: 'LearnCpp.com'
      },
      {
        title: 'C++ STL Tutorial and Examples',
        link: 'http://www.yolinux.com/TUTORIALS/LinuxTutorialC++STL.html',
        description: 'yolinux.com'
      }
    ]
  },

  {
    title: 'Complexity Analysis (Big O)',
    weeks: [ 8 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1DeNgvvPxNR0DkrCSmwZFh01wTnstJABRQuS8vLpcQLA/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Analysis of algorithms',
        link: 'https://en.wikipedia.org/wiki/Analysis_of_algorithms',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Sorting Algorithms',
    weeks: [ 8, 9 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1KlpahJuzj_FCl-PernsVINRxWviS3NloQTjXjlI-Vfs/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Sorting algorithm',
        link: 'https://en.wikipedia.org/wiki/Sorting_algorithm',
        description: 'Wikipedia'
      },
      {
        title: 'Selection sort',
        link: 'https://en.wikipedia.org/wiki/Selection_sort',
        description: 'Wikipedia'
      },
      {
        title: 'Insertion sort',
        link: 'https://en.wikipedia.org/wiki/Insertion_sort',
        description: 'Wikipedia'
      },
      {
        title: 'Merge sort',
        link: 'https://en.wikipedia.org/wiki/Merge_sort',
        description: 'Wikipedia'
      }
    ]
  }
];

// var calendar = [
//
//   {
//     week: 9,
//     sections: [
//       {
//         heading: 'Second Exam',
//         entriesHTML: [
//           'Our second exam will be this Wednesday at our normal lecture location and time.',
//           'The exam will cover everything we talked about in lecture after the first exam, from inheritance through sorting algorithms.',
//           'Below is a link to an old exam (and its soluitions) that you can use for practice:<ul><li><a href="https://docs.google.com/document/d/1OvL-Z8hvgLnVl3VaMv2URzjKkBSEqrz1Rl9JWU1DwPA/edit?usp=sharing">Practice exam</a></li><li><a href="https://docs.google.com/document/d/19qd56TBphz2xTjTOOJ3XDoz_k-rJYranriHrfSehwKY/edit?usp=sharing">Practice exam solutions</a></li></ul>'
//         ]
//       },
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Sorting Algorithms &ndash; <a href="https://docs.google.com/document/d/1KlpahJuzj_FCl-PernsVINRxWviS3NloQTjXjlI-Vfs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/sorting">example code</a>'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 10,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Recursion and Quicksort &ndash; <a href="https://docs.google.com/document/d/1HOfRbc2lOC5i5ncDEjRu_lPRm4ruwJvPGLCAT-y_SIM/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/sorting">example code</a>',
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://www.learncpp.com/cpp-tutorial/7-11-recursion/">7.11 &ndash; Recursion</a> &ndash; LearnCpp.com',
//           '<a href="https://en.wikipedia.org/wiki/Quicksort">Quicksort</a> &ndash; Wikipedia'
//         ]
//       }
//     ]
//   }
// ];

export default topics;
