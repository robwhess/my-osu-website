import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';
import GraphSearchPresentation from '../../../../static/GraphAlgorithmsII_DFS_BFS.pdf';

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
    weeks: [ 0, 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1FU-jE-b3eDxmp5WTyhKeieKyeAO2FHyK-1iJqS2tef0/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Getting Started [with Git]',
        link: 'https://git-scm.com/book/en/v2/',
        description: 'Chapter 1 of Pro Git by Scott Chacon and Ben Straub'
      },
      {
          title: 'Git Basics',
          link: 'https://git-scm.com/book/en/v2/',
          description: 'Chapter 2 of Pro Git by Scott Chacon and Ben Straub'
      },
      {
          title: 'Git cheat sheet',
          link: 'https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet',
          description: 'Atlassian'
      },
      {
          title: 'Git cheat sheet',
          link: 'https://training.github.com/',
          description: 'GitHub'
      },
      {
        title: 'Git-it',
        link: 'https://github.com/jlord/git-it-electron#git-it-desktop-app',
        description: 'a desktop app that teaches you how to use Git and GitHub'
      }
    ]
  },

  {
    title: 'C Basics',
    weeks: [ 1, 2, 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1VvGaG5QQTdvIzm3Yus-GNNI6-Th8-AYYx3t8JxzvjKg/edit?usp=sharing',
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs261-f24/c-basics',
        description: 'code written in lecture'
      },
      // {
      //   title: 'Lecture doodles',
      //   link: 'https://drive.google.com/file/d/1kovqVjYzi7Xd4mmtUDXhanuvx-5T1SB2/view?usp=sharing',
      //   description: 'drawings from lecture'
      // }
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
      },
      {
        title: 'Void Pointers',
        link: 'https://www.learncpp.com/cpp-tutorial/613-void-pointers/',
        description: 'LearnCpp.com (link talks about C++, but it\'s basically the same as for C)'
      },
      {
        title: 'Function Pointers in C and C++',
        link: 'https://www.cprogramming.com/tutorial/function-pointers.html',
        description: 'C Programming'
      },
      {
        title: 'Function Pointers',
        link: 'https://www.learn-c.org/en/Function_Pointers',
        description: 'Learn-C.org'
      }
    ],
    notes: [
      'Note that the first four readings above assume an older C standard (C89) than we\'ll be using in this class (C99), but everything they describe will still work for us.  You can refer to the following link to understand the differences between C89 and C99: [C99: Design](https://en.wikipedia.org/wiki/C99#Design).'
    ]
  },

  {
    title: 'Dynamic Arrays and Linked Lists',
    weeks: [ 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1rv5N3MU833p0HrZSRNMy7SD8Q4jBDqmPzfsPRm1H0ls/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Worksheet 14: Introduction to the Dynamic Array',
        link: `${CS261CourseNotes}#page=174`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Worksheet 17: Linked List Introduction, List Stack',
        link: `${CS261CourseNotes}#page=185`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Dynamic Array',
        link: 'https://en.wikipedia.org/wiki/Dynamic_array',
        description: 'Wikipedia'
      },
      {
        title: 'Linked list',
        link: 'https://en.wikipedia.org/wiki/Linked_list',
        description: 'Wikipedia'
      },
      {
        title: 'Linked list',
        link: 'https://visualgo.net/en/list',
        description: 'VisuAlgo.net'
      }
    ]
  },

  {
    title: 'Complexity Analysis (Big O)',
    weeks: [ 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1aUobiojWEM-9Zne4FT0W1-iTUFK0B_07Hx51jCcDEtw/edit?usp=sharing',
        description: 'notes in progrees'
      },
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
      },
      {
        title: 'Big O notation',
        link: 'https://en.wikipedia.org/wiki/Big_O_notation',
        description: 'Wikipedia'
      },
      {
        title: 'Big-O Notation Explained with Examples',
        link: 'https://developerinsider.co/big-o-notation-explained-with-examples/',
        description: 'Vineet Choudhary on Developer Insider'
      }
    ]
  },

  {
    title: 'Stacks, Queues, and Deques',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1-ujrdx618YEaR7ouHl1v84THacVBy4GcIKcnFOmOBzc/edit?usp=sharing'
      },
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
      },
      {
        title: 'Linked list (with stack, queue, and deque)',
        link: 'https://visualgo.net/en/list',
        description: 'VisuAlgo.net'
      }
    ]
  },

  {
    title: 'Binary Search',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1q3pXT21qbqZ_KCW1XjSGUUZV5doZ0QyHJzolbM3hCbk/edit?usp=sharing'
      },
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

  // {
  //   title: 'Exam #1',
  //   weeks: [ 6 ],
  //   resources: [
  //     {
  //       title: 'Practice exam',
  //       link: 'https://docs.google.com/document/d/1Yf6Yci1qZkOOsgLic2Vfo4JXlnVW0c1Sbtzwo2le4YI/edit?usp=sharing',
  //       description: 'This exam is from 2016.  Note that our exam this year will not involve writing code like this old exam.  Also note that this exam also covers binary search trees, which we haven\'t gotten to yet.'
  //     },
  //     {
  //       title: 'Practice exam solutions',
  //       link: 'https://docs.google.com/document/d/1woQt6unmolsmlJR0MVNHJN3JGer3tNT8CY7tbvNolHE/edit?usp=sharing'
  //     }
  //   ],
  //   notes: [
  //     'Our first exam will be on Friday, 11/6, during our normal lecture time.  You can find more details under "Announcements" on Canvas.'
  //   ]
  // },

  {
    title: 'Binary Search Trees',
    weeks: [ 6, 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1hJPLu5HvMnpDpfraac4gQHFihOSmVeRZf3acghzPXE0/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Chapter 10',
        link: `${CS261CourseNotes}#page=104`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Binary tree',
        link: 'https://en.wikipedia.org/wiki/Binary_tree',
        description: 'Wikipedia'
      },
      {
        title: 'Binary search tree',
        link: 'https://en.wikipedia.org/wiki/Binary_search_tree',
        description: 'Wikipedia'
      },
      {
        title: 'Binary Search Tree',
        link: 'https://visualgo.net/en/bst',
        description: 'VisuAlgo.net'
      }
    ]
  },

  {
    title: 'Binary Tree Traversals',
    weeks: [ 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1d_5h_TzL8gMy2GyxDOYdAG8JJ3fkep7i3GWM_UnaqvM/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Tree traversal',
        link: 'https://en.wikipedia.org/wiki/Tree_traversal',
        description: 'Wikipedia'
      }
    ]
  },

  // {
  //   title: 'Encapsulation and Iterators',
  //   weeks: [ 7 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1woJcoYQ5w879ySiilpmFHCpALo59RVznHQhmVT5LJGE/edit?usp=sharing'
  //     },
  //     // {
  //     //   title: 'Example code',
  //     //   link: 'https://github.com/osu-cs261-f19/list-iterator',
  //     //   description: 'code written in lecture'
  //     // },
  //     // {
  //     //   title: 'Lecture doodles',
  //     //   link: 'https://drive.google.com/file/d/1gTFmJz4bvE32KVN2WiZByHFMJdXerQbN/view?usp=sharing',
  //     //   description: 'from section 001'
  //     // }
  //   ],
  //   readings: [
  //     {
  //       title: 'Chapter 8 (pp. 4-5, "Introduction to the Iterator")',
  //       link: `${CS261CourseNotes}#page=90`,
  //       description: 'Budd\'s Course Notes'
  //     },
  //     {
  //       title: 'Encapsulation (computer programming)',
  //       link: 'https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)',
  //       description: 'Wikipedia'
  //     },
  //     {
  //       title: 'Iterator',
  //       link: 'https://en.wikipedia.org/wiki/Iterator',
  //       description: 'Wikipedia'
  //     }
  //   ]
  // },

  {
    title: 'AVL Trees',
    weeks: [ 7, 8 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1z954mUuOKFdPImsg8cyPde7ycXYGFh5j3pDJgXpYDkY/edit?usp=sharing'
      },
      {
        title: 'AVL Trees "Quiz"',
        link: 'https://docs.google.com/document/d/12ZfZhlYodHqZr9y3y431gztxwy5_oZvJ8keGUGbb6io/edit?usp=sharing'
      },
      {
        title: 'AVL Trees "Quiz" Solutions',
        link: 'https://drive.google.com/file/d/0B8aZMq9VhvmrYm5KcjFWUmFpRFNGdy01djA3UjNBOXFvekxj/view?usp=sharing&resourcekey=0-ztkcVSNmRxw7cv7EF92U_w'
      }
    ],
    readings: [
      {
        title: 'Worksheet 31',
        link: `${CS261CourseNotes}#page=236`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'AVL tree',
        link: 'https://en.wikipedia.org/wiki/AVL_tree',
        description: 'Wikipedia'
      },
      {
        title: 'Binary Search Tree (with AVL Tree)',
        link: 'https://visualgo.net/en/bst',
        description: 'VisuAlgo.net'
      }
    ]
  },

  {
    title: 'Priority Queues and Heaps',
    weeks: [ 8, 9 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Xix4g3N7JQlLuSmQigi3qTdXG6-0m-3rLxIHk2MJz58/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Chapter 11',
        link: `${CS261CourseNotes}#page=123`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Heap',
        link: 'https://en.wikipedia.org/wiki/Heap_(data_structure)',
        description: 'Wikipedia'
      },
      {
        title: 'Binary Heap',
        link: 'https://visualgo.net/en/heap',
        description: 'VisuAlgo.net'
      }
    ]
  },

  {
    title: 'Maps and Hash Tables',
    weeks: [ 9, 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1lpT0pUfkMAcpKApS7Cjaufw6EhIm2UsGuAku0GjP-zE/edit?usp=sharing'
      },
      // {
      //   title: 'Example code (chained hash table)',
      //   link: 'https://github.com/osu-cs261-f18/chained-hash'
      // },
      // {
      //   title: 'Example code (open-addressed hash table)',
      //   link: 'https://github.com/osu-cs261-f18/open-addressed-hash'
      // }
    ],
    readings: [
      {
        title: 'Chapter 12',
        link: `${CS261CourseNotes}#page=137`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Associative array',
        link: 'https://en.wikipedia.org/wiki/Associative_array',
        description: 'Wikipedia'
      },
      {
        title: 'Hash table',
        link: 'https://en.wikipedia.org/wiki/Hash_table',
        description: 'Wikipedia'
      },
      {
        title: 'Hash Table',
        link: 'https://visualgo.net/en/hashtable',
        description: 'VisuAlgo.net'
      }
    ]
  },

  {
    title: 'Graphs',
    weeks: [ 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1nheyK6B9jV2PjxhY8y8WxCW4oh-ippMCBKkQOJXm7M0/edit?usp=sharing'
      },
      // {
      //   title: 'Lecture doodles',
      //   link: 'https://drive.google.com/file/d/1zuNyPROzWs1TNy6aE9euyVYFo52PrlBP/view?usp=sharing',
      //   description: 'from section 001'
      // }
    ],
    readings: [
      {
        title: 'Chapter 13',
        link: `${CS261CourseNotes}#page=152`,
        description: 'Budd\'s Course Notes'
      },
      {
        title: 'Graph (discrete mathematics)',
        link: 'https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)',
        description: 'Wikipedia'
      },
      {
        title: 'Graph (ADT)',
        link: 'https://en.wikipedia.org/wiki/Graph_(abstract_data_type)',
        description: 'Wikipedia'
      },
      {
        title: 'Graph Data Structures',
        link: 'https://visualgo.net/en/graphds',
        description: 'VisuAlgo.net'
      },
      {
        title: 'DFS and BFS',
        link: GraphSearchPresentation,
        description: 'Old CS 261 Presentation'
      },
      {
        title: 'Depth-first search',
        link: 'https://en.wikipedia.org/wiki/Depth-first_search',
        description: 'Wikipedia'
      },
      {
        title: 'Breadth-first search',
        link: 'https://en.wikipedia.org/wiki/Breadth-first_search',
        description: 'Wikipedia'
      },
      {
        title: 'Dijkstra\'s algorithm',
        link: 'https://en.wikipedia.org/wiki/Dijkstra\'s_algorithm',
        description: 'Wikipedia'
      },
      {
        title: 'Single-Source Shortest Paths (Dijkstra\'s Algorithm)',
        link: 'https://visualgo.net/en/sssp',
        description: 'VisuAlgo.net'
      }
    ]
  },
  //
  // {
  //   title: 'Final Exam',
  //   weeks: [ 11 ],
  //   resources: [
  //     {
  //       title: 'Practice exam',
  //       link: 'https://docs.google.com/document/d/1Ye6iIFtszKI_egmGiafepScDDBxW8EtfBhGrAs_Yr6Q/edit?usp=sharing',
  //       description: 'This exam is from 2016.  Note that our exam this year will not cover hash tables or graphs, which are included in this old exam.'
  //     },
  //     {
  //       title: 'Practice exam solutions',
  //       link: 'https://docs.google.com/document/d/1QLwMFN67ApiB4r754wSpvusHbTx5sRN2rG47C1C9czc/edit?usp=sharing'
  //     }
  //   ],
  //   notes: [
  //     'Our final exam will happen during finals week.',
  //     'The exam for section 001 (the afternoon lecture) will be on Tuesday, 12/8, from 9:30&ndash;11:20am (PST).',
  //     'The exam for section 002 (the morning lecture) will be on Wednesday, 12/9, from 6:00&ndash;7:50pm (PST).',
  //     'You can find more details under "Announcements" on Canvas.'
  //   ]
  // }
];

export default topics;
