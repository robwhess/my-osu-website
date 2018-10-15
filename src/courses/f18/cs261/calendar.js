import CS261CourseNotes from '../../../files/CS261CourseNotes.pdf';
// import GraphSearchPresentation from '../../../files/GraphAlgorithmsII_DFS_BFS.pdf';

var calendar = [
  {
    week: 0,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Course Intro' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1N9pyiZpiaQsVnle9xayVtjABpFIpFzXA6O_mFVyARdw/edit?usp=sharing' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapters 1-3', link: CS261CourseNotes + '#page=1' },
            { text: 'Budd\'s Course Notes' }
          ]
        ]
      }
    ]
  },

  {
    week: 1,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Git and GitHub' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1TnMfQfhkam3vOdVLWAaF3Y_V-Z8eX7IvKx0w2tPr0Pg/edit?usp=sharing' }
          ],
          [
            { text: 'C Review/Crash Course' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1w56HxnSUpmoJ8PZct4lhhR5_4WNg6NdlefpxmHe5LWQ/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/c-basics' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapters 1 and 2', link: 'https://git-scm.com/book/en/v2' },
            { text: 'Pro Git' }
          ],
          [
            { text: 'Lesson 1: Intro to C', link: 'http://www.cprogramming.com/tutorial/c/lesson1.html' },
            { text: 'C Programming' }
          ],
          [
            { text: 'Lesson 4: Functions in C', link: 'http://www.cprogramming.com/tutorial/c/lesson4.html' },
            { text: 'C Programming' }
          ],
          [
            { text: 'Lesson 7: Structures in C', link: 'http://www.cprogramming.com/tutorial/c/lesson7.html' },
            { text: 'C Programming' }
          ],
          [
            { text: 'Lesson 6: Pointers in C', link: 'http://www.cprogramming.com/tutorial/c/lesson6.html' },
            { text: 'C Programming' }
          ],
          [
            { text: 'Note that the above four readings assume an older C standard (C89) than we\'ll be using in this class (C99), but everything they describe will still work for us.  You can refer to the following link to understand the differences between C89 and C99.' },
            { text: 'C99: Design', link: 'https://en.wikipedia.org/wiki/C99#Design' }
          ]
        ]
      }
    ]
  },

  {
    week: 2,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Complexity Analysis (Big O)' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1aHgFRl9RkOE8bNf3Kdh-L69eSE-J0NQJybf_TJXGy3w/edit?usp=sharing' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapter 4-5', link: CS261CourseNotes + '#page=28' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Analysis of algorithms', link: 'https://en.wikipedia.org/wiki/Analysis_of_algorithms' },
            { text: 'Wikipedia' }
          ]
        ]
      }
    ]
  },

  {
    week: 3,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Dynamic Arrays' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1kz-1aTo3thyJBi0TIVYVPeb_UA9_-VCGo2ln6UZvXoY/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/dynarray' }
          ],
          [
            { text: 'Stacks, Queues, and Deques' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1YE5kQFFFPvu7R-tFU6P_hOFUxOlLlKZqkWagSVfMSVU/edit?usp=sharing' }
          ],
          [
            { text: 'Linked Lists' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1CY-1eXaAf6hPZWNXduejKIxHgra8Z8M1YYfxxyvaxYs/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/lldeque' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapter 6-7', link: CS261CourseNotes + '#page=58' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Stack', link: 'https://en.wikipedia.org/wiki/Stack_(abstract_data_type)' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Queue', link: 'https://en.wikipedia.org/wiki/Queue_(abstract_data_type)' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Double-ended queue', link: 'https://en.wikipedia.org/wiki/Double-ended_queue' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Linked list', link: 'https://en.wikipedia.org/wiki/Linked_list' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Linked list (with Stack, Queue, and Deque)', link: 'https://visualgo.net/en/list' },
            { text: 'VisuAlgo.net' }
          ]
        ]
      }
    ]
  },

  {
    week: 4,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Linked Lists' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1CY-1eXaAf6hPZWNXduejKIxHgra8Z8M1YYfxxyvaxYs/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/lldeque' }
          ],
          [
            { text: 'Iterators' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1h17U-0nDinnKPUJSehJbVB1Lx8Z73G-HsHl7RabMVjo/edit?usp=sharing' }
          ],
          [
            { text: 'Ordered Arrays and Binary Search' },
            { text: 'notes', link: 'https://docs.google.com/document/d/145ReP_mk2ATwW7aUCX_i0FoP_Xp1mzy9Aor4qWYIxHA/edit?usp=sharing' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapter 8 (pp. 4-5, "Introduction to the Iterator")', link: CS261CourseNotes + '#page=90' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Chapter 9', link: CS261CourseNotes + '#page=96' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Iterator', link: 'https://en.wikipedia.org/wiki/Iterator' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Binary search algorithm', link: 'https://en.wikipedia.org/wiki/Binary_search_algorithm' },
            { text: 'Wikipedia' }
          ]
        ]
      }
    ]
  },

  // {
  //   week: 5,
  //   sections: [
  //     {
  //       heading: 'Topics',
  //       entriesHTML: [
  //         'The midterm exam will be on Wednesday of this week in our normal lecture location at the normal lecture time',
  //         'Binary Search Trees &ndash; <a href="https://docs.google.com/document/d/1C5bj67r6SySgMgaPIrTltm0xA5nLQrNWz9ENe-KUKEU/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS261-F17/bst">example code</a>'
  //       ]
  //     },
  //     {
  //       heading: 'Readings',
  //       entriesHTML: [
  //         '<a href="' + CS261CourseNotes + '#page=104">Chapter 10 (pp. 1-6 on trees and pp. 13-15 on BSTs)</a> &ndash; Budd\'s Course Notes',
  //         '<a href="https://en.wikipedia.org/wiki/Binary_tree">Binary tree</a> &ndash; Wikipedia',
  //         '<a href="https://en.wikipedia.org/wiki/Binary_search_tree">Binary search tree</a> &ndash; Wikipedia'
  //       ]
  //     },
  //     {
  //       heading: 'Midterm solutions',
  //       entriesHTML: [
  //         '<a href="https://docs.google.com/document/d/1jlExFMgZ3wwHFYv2PMJdJS5GLBGPDtXm1jcRXVmvaDw/edit?usp=sharing">Midterm solutions</a>'
  //       ]
  //     }
  //   ]
  // },

  // {
  //   week: 6,
  //   sections: [
  //     {
  //       heading: 'Topics',
  //       entriesHTML: [
  //         'Binary Trees Traversals &ndash; <a href="https://docs.google.com/document/d/1yldvT0k8xcoE59yBzHwtIv7VSzh4iL9fQ1gC9fHnqDg/edit?usp=sharing">notes</a>',
  //         'AVL Trees &ndash; <a href="https://docs.google.com/document/d/1efClZUfxEWQ3Q6DYNdrg159sWuVRDUMSMC4Plxk8Txs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS261-F17/avl_tree">example code</a>'
  //       ]
  //     },
  //     {
  //       heading: 'Readings',
  //       entriesHTML: [
  //         '<a href="' + CS261CourseNotes + '#page=109">Chapter 10 (pp. 6-9 "Tree Traversals")</a> &ndash; Budd\'s Course Notes',
  //         '<a href="' + CS261CourseNotes + '#page=236">Worksheet 31 (AVL Trees)</a> &ndash; Budd\'s Course Notes',
  //         '<a href="https://en.wikipedia.org/wiki/Tree_traversal">Tree traversal</a> &ndash; Wikipedia',
  //         '<a href="https://en.wikipedia.org/wiki/AVL_tree">AVL tree</a> &ndash; Wikipedia'
  //       ]
  //     }
  //   ]
  // },

  // {
  //   week: 7,
  //   sections: [
  //     {
  //       heading: 'Topics',
  //       entriesHTML: [
  //         'Priority Queues and Heaps &ndash; <a href="https://docs.google.com/document/d/1Xix4g3N7JQlLuSmQigi3qTdXG6-0m-3rLxIHk2MJz58/edit?usp=sharing">notes</a>'
  //       ]
  //     },
  //     {
  //       heading: 'Readings',
  //       entriesHTML: [
  //         '<a href="' + CS261CourseNotes + '#page=123">Chapter 11</a> &ndash; Budd\'s Course Notes',
  //         '<a href="https://en.wikipedia.org/wiki/Priority_queue">Priority queue</a> &ndash; Wikipedia',
  //         '<a href="https://en.wikipedia.org/wiki/Heap_(data_structure)">Heap</a> &ndash; Wikipedia'
  //       ]
  //     }
  //   ]
  // },

  // {
  //   week: 8,
  //   sections: [
  //     {
  //       heading: 'Topics',
  //       entriesHTML: [
  //         'Maps and Hash Tables &ndash; <a href="https://docs.google.com/document/d/1lpT0pUfkMAcpKApS7Cjaufw6EhIm2UsGuAku0GjP-zE/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS261-F17/chained-hash">chained hash example code</a> &ndash; <a href="https://github.com/OSU-CS261-F17/open-addressed-hash">open-addressed hash example code</a>'
  //       ]
  //     },
  //     {
  //       heading: 'Readings',
  //       entriesHTML: [
  //         '<a href="' + CS261CourseNotes + '#page=137">Chapter 12</a> &ndash; Budd\'s Course Notes',
  //         '<a href="https://en.wikipedia.org/wiki/Associative_array">Associative array</a> &ndash; Wikipedia',
  //         '<a href="https://en.wikipedia.org/wiki/Hash_table">Hash table</a> &ndash; Wikipedia'
  //       ]
  //     }
  //   ]
  // },

  // {
  //   week: 9,
  //   sections: [
  //     {
  //       heading: 'Topics',
  //       entriesHTML: [
  //         'Graphs &ndash; <a href="https://docs.google.com/document/d/1nheyK6B9jV2PjxhY8y8WxCW4oh-ippMCBKkQOJXm7M0/edit?usp=sharing">notes</a>'
  //       ]
  //     },
  //     {
  //       heading: 'Readings',
  //       entriesHTML: [
  //         '<a href="' + CS261CourseNotes + '#page=152">Chapter 13</a> &ndash; Budd\'s Course Notes',
  //         '<a href="https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)">Graph (discrete mathematics)</a> &ndash; Wikipedia',
  //         '<a href="https://en.wikipedia.org/wiki/Graph_(abstract_data_type)">Graph (ADT)</a> &ndash; Wikipedia'
  //       ]
  //     }
  //   ]
  // },

  // {
  //   week: 10,
  //   sections: [
  //     {
  //       heading: 'Topics',
  //       entriesHTML: [
  //         'Graphs &ndash; <a href="https://docs.google.com/document/d/1nheyK6B9jV2PjxhY8y8WxCW4oh-ippMCBKkQOJXm7M0/edit?usp=sharing">notes</a>'
  //       ]
  //     },
  //     {
  //       heading: 'Readings',
  //       entriesHTML: [
  //         '<a href="' + GraphSearchPresentation + '">DFS and BFS</a> &ndash; Old CS 261 Presentation',
  //         '<a href="https://en.wikipedia.org/wiki/Depth-first_search">Depth-first search</a> &ndash; Wikipedia',
  //         '<a href="https://en.wikipedia.org/wiki/Breadth-first_search">Breadth-first search</a> &ndash; Wikipedia',
  //         '<a href="https://en.wikipedia.org/wiki/Dijkstra\'s_algorithm">Dijkstra\'s Algorithm</a> &ndash; Wikipedia'
  //       ]
  //     }
  //   ]
  // }
];

export default calendar;
