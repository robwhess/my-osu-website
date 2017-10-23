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
          'C Review/Crash Course &ndash; <a href="https://docs.google.com/document/d/1w56HxnSUpmoJ8PZct4lhhR5_4WNg6NdlefpxmHe5LWQ/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS261-F17/c-basics">example code</a>',
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
  },

  {
    week: 2,
    sections: [
      {
        heading: 'Topics',
        entriesHTML: [
          'Complexity Analysis (Big O) &ndash; <a href="https://docs.google.com/document/d/1aHgFRl9RkOE8bNf3Kdh-L69eSE-J0NQJybf_TJXGy3w/edit?usp=sharing">notes</a>',
          'Dynamic Arrays &ndash; <a href="https://docs.google.com/document/d/1kz-1aTo3thyJBi0TIVYVPeb_UA9_-VCGo2ln6UZvXoY/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS261-F17/dynarray">example code</a>'
        ]
      },
      {
        heading: 'Readings',
        entriesHTML: [
          '<a href="' + CS261CourseNotes + '#page=48">Chapter 5</a> &ndash; Budd\'s Course Notes'
        ]
      }
    ]
  },

  {
    week: 3,
    sections: [
      {
        heading: 'Topics',
        entriesHTML: [
          'Stacks, Queues, and Deques &ndash; <a href="https://docs.google.com/document/d/1YE5kQFFFPvu7R-tFU6P_hOFUxOlLlKZqkWagSVfMSVU/edit?usp=sharing">notes</a>',
          'Linked Lists &ndash; <a href="https://docs.google.com/document/d/1CY-1eXaAf6hPZWNXduejKIxHgra8Z8M1YYfxxyvaxYs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS261-F17/lldeque">example code</a>'
        ]
      },
      {
        heading: 'Readings',
        entriesHTML: [
          '<a href="' + CS261CourseNotes + '#page=58">Chapters 6-7</a> &ndash; Budd\'s Course Notes',
          '<a href="https://en.wikipedia.org/wiki/Stack_(abstract_data_type)">Stack</a> &ndash; Wikipedia',
          '<a href="https://en.wikipedia.org/wiki/Queue_(abstract_data_type)">Queue</a> &ndash; Wikipedia',
          '<a href="https://en.wikipedia.org/wiki/Double-ended_queue">Double-ended queue</a> &ndash; Wikipedia',
          '<a href="https://en.wikipedia.org/wiki/Linked_list">Linked list</a> &ndash; Wikipedia'
        ]
      }
    ]
  },

  {
    week: 4,
    sections: [
      {
        heading: 'Topics',
        entriesHTML: [
          'Linked Lists &ndash; <a href="https://docs.google.com/document/d/1CY-1eXaAf6hPZWNXduejKIxHgra8Z8M1YYfxxyvaxYs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS261-F17/lldeque">example code</a>',
          'Iterators &ndash; <a href="https://docs.google.com/document/d/1h17U-0nDinnKPUJSehJbVB1Lx8Z73G-HsHl7RabMVjo/edit?usp=sharing">notes</a>',
          'Ordered Arrays and Binary Search &ndash; <a href="https://docs.google.com/document/d/145ReP_mk2ATwW7aUCX_i0FoP_Xp1mzy9Aor4qWYIxHA/edit?usp=sharing">notes</a>'
        ]
      },
      {
        heading: 'Readings',
        entriesHTML: [
          '<a href="' + CS261CourseNotes + '#page=90">Chapter 8 (pp. 4-5, "Introduction to the Iterator")</a> &ndash; Budd\'s Course Notes',
          '<a href="' + CS261CourseNotes + '#page=96">Chapter 9</a> &ndash; Budd\'s Course Notes',
          '<a href="https://en.wikipedia.org/wiki/Iterator">Iterator</a> &ndash; Wikipedia',
          '<a href="https://en.wikipedia.org/wiki/Binary_search_algorithm">Binary search algorithm</a> &ndash; Wikipedia'
        ]
      }
    ]
  },

  {
    week: 5,
    sections: [
      {
        heading: 'Topics',
        entriesHTML: [
          'The midterm exam will be on Wednesday of this week in our normal lecture location at the normal lecture time',
          'Binary Search Trees &ndash; <a href="https://docs.google.com/document/d/1C5bj67r6SySgMgaPIrTltm0xA5nLQrNWz9ENe-KUKEU/edit?usp=sharing">notes</a>'
        ]
      },
      {
        heading: 'Readings',
        entriesHTML: [
          '<a href="' + CS261CourseNotes + '#page=104">Chapter 10 (pp. 1-6 on trees and pp. 13-15 on BSTs)</a> &ndash; Budd\'s Course Notes',
          '<a href="https://en.wikipedia.org/wiki/Binary_tree">Binary tree</a> &ndash; Wikipedia',
          '<a href="https://en.wikipedia.org/wiki/Binary_search_tree">Binary search tree</a> &ndash; Wikipedia'
        ]
      }
    ]
  }
];

export default calendar;
