import CS261CourseNotes from '../../../files/CS261CourseNotes.pdf';
import GraphSearchPresentation from '../../../files/GraphAlgorithmsII_DFS_BFS.pdf';

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
            { text: 'notes', link: 'https://docs.google.com/document/d/1h17U-0nDinnKPUJSehJbVB1Lx8Z73G-HsHl7RabMVjo/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/lldeque' }
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

  {
    week: 5,
    sections: [
      {
        heading: 'Midterm exam',
        entriesLists: [
          [
            { text: 'The midterm exam will be on Friday of this week in our normal lecture location at the normal lecture time.' },
          ],
          [
            { text: 'The exam will cover everything from the first half of the course, up to and including binary search.  Trees and binary search trees will not be covered on the exam.'},
          ],
          [
            { text: 'On Wednesday of this week, I will hold an "ask me anything" session, where you can ask me questions about material for the exam you want to review.'}
          ]
        ]
      },
      {
        heading: 'Midterm exam solutions',
        entriesLists: [
          [
            { text: 'Section 001 midterm solutions', link: 'https://docs.google.com/document/d/1Xp3NQxk6rVCtvQXm_5dZQmFaoXDmqJzOaZXT8ubYawE/edit?usp=sharing' }
          ],
          [
            { text: 'Section 002 midterm solutions', link: 'https://docs.google.com/document/d/1CXWp11Zc6-WeOOlPJE2nX_mmyuQfiuRexSAOLCN1aww/edit?usp=sharing' }
          ]
        ]
      }
    ]
  },

  {
    week: 6,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Binary Search Trees' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1C5bj67r6SySgMgaPIrTltm0xA5nLQrNWz9ENe-KUKEU/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/bst' }
          ],
          [
            { text: 'Binary Trees Traversals' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1yldvT0k8xcoE59yBzHwtIv7VSzh4iL9fQ1gC9fHnqDg/edit?usp=sharing' }
          ],
          [
            { text: 'AVL Trees' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1efClZUfxEWQ3Q6DYNdrg159sWuVRDUMSMC4Plxk8Txs/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/avl_tree' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapter 10', link: CS261CourseNotes + '#page=104' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Worksheet 31 (AVL Trees)', link: CS261CourseNotes + '#page=236' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Binary tree', link: 'https://en.wikipedia.org/wiki/Binary_tree' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Binary search tree', link: 'https://en.wikipedia.org/wiki/Binary_search_tree' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Tree traversal', link: 'https://en.wikipedia.org/wiki/Tree_traversal' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'AVL tree', link: 'https://en.wikipedia.org/wiki/AVL_tree' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Binary Search Tree (and AVL Tree)', link: 'https://visualgo.net/en/bst' },
            { text: 'VisuAlgo.net' }
          ]
        ]
      }
    ]
  },

  {
    week: 7,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'AVL Trees' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1efClZUfxEWQ3Q6DYNdrg159sWuVRDUMSMC4Plxk8Txs/edit?usp=sharing' },
            { text: 'example code', link: 'https://github.com/OSU-CS261-F18/avl_tree' },
            { text: 'AVL Trees "Quiz"', link: 'https://docs.google.com/document/d/12ZfZhlYodHqZr9y3y431gztxwy5_oZvJ8keGUGbb6io/edit?usp=sharing' },
            { text: 'AVL Trees "Quiz" Solutions', link: 'https://drive.google.com/open?id=0B8aZMq9VhvmrYm5KcjFWUmFpRFNGdy01djA3UjNBOXFvekxj' }
          ],
          [
            { text: 'Priority Queues and Heaps' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1Xix4g3N7JQlLuSmQigi3qTdXG6-0m-3rLxIHk2MJz58/edit?usp=sharing' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapter 11', link: CS261CourseNotes + '#page=123' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Priority queue', link: 'https://en.wikipedia.org/wiki/Priority_queue' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Heap', link: 'https://en.wikipedia.org/wiki/Heap_(data_structure)' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Binary Heap', link: 'https://visualgo.net/en/heap' },
            { text: 'VisuAlgo.net' }
          ]
        ]
      }
    ]
  },

  {
    week: 8,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Maps and Hash Tables' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1lpT0pUfkMAcpKApS7Cjaufw6EhIm2UsGuAku0GjP-zE/edit?usp=sharing' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapter 12', link: CS261CourseNotes + '#page=137' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Associative array', link: 'https://en.wikipedia.org/wiki/Associative_array' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Hash Table', link: 'https://en.wikipedia.org/wiki/Hash_table' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Hash Table', link: 'https://visualgo.net/en/hashtable' },
            { text: 'VisuAlgo.net' }
          ]
        ]
      }
    ]
  },

  {
    week: 9,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Graphs' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1nheyK6B9jV2PjxhY8y8WxCW4oh-ippMCBKkQOJXm7M0/edit?usp=sharing' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'Chapter 13', link: CS261CourseNotes + '#page=152' },
            { text: 'Budd\'s Course Notes' }
          ],
          [
            { text: 'Graph (discrete mathematics)', link: 'https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Graph (ADT)', link: 'https://en.wikipedia.org/wiki/Graph_(abstract_data_type)' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Graph Data Structures', link: 'https://visualgo.net/en/graphds' },
            { text: 'VisuAlgo.net' }
          ]
        ]
      }
    ]
  },

  {
    week: 10,
    sections: [
      {
        heading: 'Topics',
        entriesLists: [
          [
            { text: 'Graphs' },
            { text: 'notes', link: 'https://docs.google.com/document/d/1nheyK6B9jV2PjxhY8y8WxCW4oh-ippMCBKkQOJXm7M0/edit?usp=sharing' }
          ]
        ]
      },
      {
        heading: 'Readings',
        entriesLists: [
          [
            { text: 'DFS and BFS', link: GraphSearchPresentation },
            { text: 'Old CS 261 Presentation' }
          ],
          [
            { text: 'Depth-first search', link: 'https://en.wikipedia.org/wiki/Depth-first_search' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Breadth-first search', link: 'https://en.wikipedia.org/wiki/Breadth-first_search' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Dijkstra\'s Algorithm', link: 'https://en.wikipedia.org/wiki/Dijkstra\'s_algorithm' },
            { text: 'Wikipedia' }
          ],
          [
            { text: 'Graph Traversal (DFS/BFS)', link: 'https://visualgo.net/en/dfsbfs' },
            { text: 'VisuAlgo.net' }
          ],
          [
            { text: 'Single-Source Shortest Paths (Dijkstra\'s Algorithm)', link: 'https://visualgo.net/en/sssp' },
            { text: 'VisuAlgo.net' }
          ]
        ]
      }
    ]
  }
];

export default calendar;
