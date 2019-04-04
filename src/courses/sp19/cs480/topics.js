const topics = [
  {
    title: 'Course Intro/Overview of Compilers',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1TVQFQlMrP0RpSTYAI9P-xnM_5iA45rswqCuI0yADEfw/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapter 1',
        description: 'Cooper and Torczon'
      },
      {
        title: 'Chapters 1 and 2',
        link: 'https://git-scm.com/book/en/v2',
        description: 'Pro Git'
      }
    ]
  },

  {
    title: 'Finite Automata and Regular Expressions',
    isCurrent: true,
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1FODBAP83e_JCkJBTxzfa5672vKLdCRDLw4c4UEjMerE/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapter 2 (2.1 - 2.3)',
        description: 'Cooper and Torczon'
      }
    ]
  },

  {
    title: 'Regular Expression-Based Scanners',
    isCurrent: true,
    weeks: [ 1, 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Q3Qj3pZVixeeD6bQ7oDeBze3csKF58-k0E6r5XJ7Ssk/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapter 2 (2.4 - 2.5)',
        description: 'Cooper and Torczon'
      }
    ]
  },
  //
  // {
  //   title: 'The Flex Scanner Generator',
  //   weeks: [ 3 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1yda-qsmCSYMxkSABpsA9SZ-8vKyR-ozjEfd1LiZGdbk/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS480-W18/flex'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Flex In a Nutshell',
  //       link: 'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/handouts/050%20Flex%20In%20A%20Nutshell.pdf',
  //       description: 'Julie Zelenski (Stanford)'
  //     },
  //     {
  //       title: 'Flex - A fast scanner generator',
  //       link: 'ftp://ftp.gnu.org/old-gnu/Manuals/flex-2.5.4/html_mono/flex.html',
  //       description: 'The Flex user manual'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Context-Free Grammars',
  //   weeks: [ 4 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1panYEuyBXFSY1bRe3Ywa-7ozRAfSwQl6e4GFyLNjKwo/edit?usp=sharing'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Chapter 3 (3.1)',
  //       description: 'Cooper and Torczon'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Top-Down Parsing and LL(1) Grammars',
  //   weeks: [ 4, 5 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1lcRl0KIgMNy-vAByU3kCsNymwxgi1I59gMjhc8dTZ2A/edit?usp=sharing'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Chapter 3 (3.2 - 3.3)',
  //       description: 'Cooper and Torczon'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'First Exam',
  //   weeks: [ 5 ],
  //   resources: [
  //     {
  //       title: 'Exam warmup problems',
  //       link: 'https://docs.google.com/document/d/1Sq-7RGNfWZmsxOu_RZne0llZs7yveAoqSz4WRmP4WZs/edit?usp=sharing',
  //       description: 'These are similar to the kinds of questions you\'ll see on the exam.'
  //     },
  //     {
  //       title: 'Exam warmup problem solutions',
  //       link: 'https://docs.google.com/document/d/1AWG8zQOucLnR-KczxtYIXEnYK-9fzlqpRF0J_8SsCyI/edit?usp=sharing'
  //     }
  //   ],
  //   notes: [
  //     'Our first exam will be this Friday at our normal lecture location and time.',
  //     'The exam will cover everything we\'ve talked about so far in lecture, through top-down parsing and LL(1) grammars.',
  //     'During lecture this Wednesday, we\'ll do some practice exercises that will be similar to the questions that will appear on the exam.'
  //   ]
  // },
  //
  // {
  //   title: 'The Bison Parser Generator',
  //   weeks: [ 6 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/19LCYNojTimpgpvrZu-pawIj0wfRXKZCKHVapwS2BxUI/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS480-W18/bison'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Bison',
  //       link: 'https://www.gnu.org/software/bison/manual/bison.html',
  //       description: 'The Bison user manual'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Bottom-Up Parsing and LR(1) Grammars',
  //   weeks: [ 7, 8 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1sQO-3uMJ8GOs81nuMht0LzewEB9F7TvKwmOYEGhIRV0/edit?usp=sharing'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Chapter 3 (3.4)',
  //       description: 'Cooper and Torczon'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Intermediate Representations',
  //   weeks: [ 9 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1NHqnUdp6EV6Pi6ewJ_SXbeuN79sgBCsAag56C9VtlzA/edit?usp=sharing'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Chapter 5',
  //       description: 'Cooper and Torczon'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Second Exam',
  //   weeks: [ 9 ],
  //   resources: [
  //     {
  //       title: 'Exam warmup problems',
  //       link: 'https://docs.google.com/document/d/1e-k6ivtOvOc9JQhg6XF_dX-IiUAFQIV6I43naMcH-dE/edit?usp=sharing',
  //       description: 'These are similar to the kinds of questions you\'ll see on the exam.'
  //     },
  //     {
  //       title: 'Exam warmup problem solutions',
  //       link: 'https://docs.google.com/document/d/1u1Kh84UcwEcA5gTPsHbI6BBjDIo4AlStOncqDcWc0PQ/edit?usp=sharing'
  //     }
  //   ],
  //   notes: [
  //     'Our second exam will be this Friday at our normal lecture location and time.',
  //     'The exam will cover everything we\'ve talked about in lecture after the first exam, including bottom-up parsing and LR(1) grammars and intermediate representations.',
  //     'During lecture this Wednesday, we\'ll do some practice exercises that will be similar to the questions that will appear on the exam.'
  //   ]
  // },
  //
  // {
  //   title: 'LLVM: Code Generation and Optimization',
  //   weeks: [ 10 ],
  //   isCurrent: true,
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1H3IUpE1FPdtjN-eTrFR6Acl45GuL90szN7PXLpPMZM4/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS480-W18/llvm'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Kaleidoscope: Implementing a Language with LLVM',
  //       link: 'https://llvm.org/docs/tutorial/index.html',
  //       description: 'LLVM Tutorial'
  //     },
  //     {
  //       title: 'The Architecture of Open Source Applications: LLVM',
  //       link: 'http://www.aosabook.org/en/llvm.html',
  //       description: 'Chris Lattner'
  //     }
  //   ]
  // }
];

export default topics;
