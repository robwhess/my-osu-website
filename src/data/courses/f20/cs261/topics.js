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
        link: 'https://docs.google.com/document/d/1TnMfQfhkam3vOdVLWAaF3Y_V-Z8eX7IvKx0w2tPr0Pg/edit?usp=sharing'
      },
      {
        title: 'Morning lecture doodles',
        link: 'https://drive.google.com/file/d/11im6Dq1iLnFJ2U_RU8oo2oUwcpA-4F6H/view?usp=sharing',
        description: 'from section 002'
      },
      {
        title: 'Afternoon lecture doodles',
        link: 'https://drive.google.com/file/d/1FK5VhhaROobW3KMQBPVxK6-2nzBVYop6/view?usp=sharing',
        description: 'from section 001'
      }
    ],
    readings: [
      {
        title: 'Git Handbook',
        link: 'https://guides.github.com/introduction/git-handbook/',
        description: 'a simple introduction to Git from GitHub Guides'
      },
      {
        title: 'Git-it',
        link: 'https://github.com/jlord/git-it-electron#git-it-desktop-app',
        description: 'a desktop app that teaches you how to use Git and GitHub'
      },
      {
        title: 'Pro Git (Chapters 1 and 2)',
        link: 'https://git-scm.com/book/en/v2',
        description: 'a more in-depth exploration of how to use Git'
      }
    ]
  },

  {
    title: 'C Basics',
    weeks: [ 1, 2, 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1I-Rk45M0d6Yh4Zs9CHyjfi8VxOxg1fB-jiReNy6ajyw/edit?usp=sharing',
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs261-f20/c-basics',
        description: 'code written in lecture'
      },
      {
        title: 'Morning lecture doodles',
        link: 'https://drive.google.com/file/d/17xOt_0JDUM83KPg26b52azCH1BO4rxWK/view?usp=sharing',
        description: 'from section 002'
      },
      {
        title: 'Afternoon lecture doodles',
        link: 'https://drive.google.com/file/d/1ia7rWF3xXX5waJk0TqKZyV2JA5C3ell9/view?usp=sharing',
        description: 'from section 001'
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
      {
        title: 'Morning lecture doodles',
        link: 'https://drive.google.com/file/d/1fNVCYV7jEsWFQlhDArw8VDBNWa5L7MrJ/view?usp=sharing',
        description: 'from section 002'
      },
      {
        title: 'Afternoon lecture doodles',
        link: 'https://drive.google.com/file/d/1wvMQQnS3TyCDFbGJ2HM_7QqdQySyg9kS/view?usp=sharing',
        description: 'from section 001'
      }
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
    weeks: [ 4, 5 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1aUobiojWEM-9Zne4FT0W1-iTUFK0B_07Hx51jCcDEtw/edit?usp=sharing',
        description: 'notes in progrees'
      },
      {
        title: 'Morning lecture doodles',
        link: 'https://drive.google.com/file/d/1rIvvCFUKVlOHgWj8HiZz-L6s-A-5iuu-/view?usp=sharing',
        description: 'from section 002'
      },
      {
        title: 'Afternoon lecture doodles',
        link: 'https://drive.google.com/file/d/1kvbFBYS927j8K67cJUnfCF47qZtQ8HJ-/view?usp=sharing',
        description: 'from section 001'
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
      },
      {
        title: 'Big O notation',
        link: 'https://en.wikipedia.org/wiki/Big_O_notation',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Stacks, Queues, and Deques',
    weeks: [ 5 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1-ujrdx618YEaR7ouHl1v84THacVBy4GcIKcnFOmOBzc/edit?usp=sharing'
      },
      {
        title: 'Morning lecture doodles',
        link: 'https://drive.google.com/file/d/1re0pqcFvbDhHLycgyFHrMr1r2NQIWvzc/view?usp=sharing',
        description: 'from section 002'
      },
      {
        title: 'Afternoon lecture doodles',
        link: 'https://drive.google.com/file/d/1_gCVRTLSkFIfZTZaaaK3e7lyrEjj7cOs/view?usp=sharing',
        description: 'from section 001'
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
      },
      {
        title: 'Linked list (with stack, queue, and deque)',
        link: 'https://visualgo.net/en/list',
        description: 'VisuAlgo.net'
      }
    ]
  },

  // {
  //   title: 'Encapsulation and Iterators',
  //   weeks: [ 5 ],
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
    title: 'Binary Search',
    weeks: [ 6 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1q3pXT21qbqZ_KCW1XjSGUUZV5doZ0QyHJzolbM3hCbk/edit?usp=sharing'
      },
      // {
      //   title: 'Lecture doodles',
      //   link: 'https://drive.google.com/file/d/1K03duCzhAdU6d3M-DWQ4fljyax2sR_Q7/view?usp=sharing',
      //   description: 'from section 001'
      // }
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
    title: 'Exam #1',
    weeks: [ 6 ],
    isCurrent: true,
    resources: [
      {
        title: 'Practice exam',
        link: 'https://docs.google.com/document/d/1Yf6Yci1qZkOOsgLic2Vfo4JXlnVW0c1Sbtzwo2le4YI/edit?usp=sharing',
        description: 'This exam is from 2016.  Note that our exam this year will not involve writing code like this old exam.  Also note that this exam also covers binary search trees, which we haven\'t gotten to yet.'
      },
      {
        title: 'Practice exam solutions',
        link: 'https://docs.google.com/document/d/1woQt6unmolsmlJR0MVNHJN3JGer3tNT8CY7tbvNolHE/edit?usp=sharing'
      }
    ],
    notes: [
      'Our first exam will be on Friday, 11/6, during our normal lecture time.  You can find more details under "Announcements" on Canvas.'
    ]
  },

  {
    title: 'Binary Search Trees',
    weeks: [ 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1hJPLu5HvMnpDpfraac4gQHFihOSmVeRZf3acghzPXE0/edit?usp=sharing'
      },
      // {
      //   title: 'Lecture doodles',
      //   link: 'https://drive.google.com/file/d/1ZoLaO7dHpaPlhB1tKdjLHU50BreAf-6i/view?usp=sharing',
      //   description: 'from section 001'
      // }
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
      }
    ],
    readings: [
      {
        title: 'Tree traversal',
        link: 'https://en.wikipedia.org/wiki/Tree_traversal',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'AVL Trees',
    weeks: [ 8 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1z954mUuOKFdPImsg8cyPde7ycXYGFh5j3pDJgXpYDkY/edit?usp=sharing'
      },
      // {
      //   title: 'Lecture doodles',
      //   link: 'https://drive.google.com/file/d/0B8aZMq9VhvmrM3k2c0pDblJfVENzTlc0Z0VGX05oa3RDZy1j/view?usp=sharing',
      //   description: 'from section 001'
      // }
      // {
      //   title: 'AVL Trees "Quiz"',
      //   link: 'https://docs.google.com/document/d/12ZfZhlYodHqZr9y3y431gztxwy5_oZvJ8keGUGbb6io/edit?usp=sharing'
      // },
      // {
      //   title: 'AVL Trees "Quiz" Solutions',
      //   link: 'https://drive.google.com/open?id=0B8aZMq9VhvmrYm5KcjFWUmFpRFNGdy01djA3UjNBOXFvekxj'
      // }
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
      // {
      //   title: 'Lecture doodles',
      //   link: 'https://drive.google.com/file/d/1LXH3iQ9lpiQ-qN6zW6JnT4xeUKC1Xigp/view?usp=sharing',
      //   description: 'from section 001'
      // }
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
      //   title: 'Lecture doodles',
      //   link: 'https://drive.google.com/file/d/1zuNyPROzWs1TNy6aE9euyVYFo52PrlBP/view?usp=sharing',
      //   description: 'from section 001'
      // },
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
  }
];

export default topics;
