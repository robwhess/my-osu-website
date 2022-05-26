const topics = [
  {
    title: 'Course Intro/Overview of Compilers',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1TVQFQlMrP0RpSTYAI9P-xnM_5iA45rswqCuI0yADEfw/edit?usp=sharing'
      },
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
    title: 'Regular Expression-Based Scanners',
    weeks: [ 1, 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Q3Qj3pZVixeeD6bQ7oDeBze3csKF58-k0E6r5XJ7Ssk/edit?usp=sharing'
      },
      // {
      //   title: 'Quiz 1 lecture doodles',
      //   link: 'https://drive.google.com/file/d/17ECDkVyCwRqDV5Lh0DdEFnlNdYaUinYV/view?usp=sharing',
      //   description: 'drawings from lecture'
      // }
    ],
    readings: [
      {
        title: 'Chapter 2',
        description: 'Cooper and Torczon'
      },
      {
        title: 'RegexOne',
        link: 'https://regexone.com/',
        description: 'Learn regular expressions with simple, interactive exercises'
      },
      {
        title: 'RegExr',
        link: 'https://regexr.com/',
        description: 'An online tool to learn, build, and texst regular expressions'
      }
    ]
  },

  {
    title: 'The Flex Scanner Generator',
    weeks: [ 2, 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1yda-qsmCSYMxkSABpsA9SZ-8vKyR-ozjEfd1LiZGdbk/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs480-sp22/flex',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Flex In a Nutshell',
        link: 'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/handouts/050%20Flex%20In%20A%20Nutshell.pdf',
        description: 'Julie Zelenski (Stanford)'
      },
      {
        title: 'Lexical Analysis with Flex',
        link: 'https://westes.github.io/flex/manual/',
        description: 'The Flex user manual'
      }
    ]
  },

  {
    title: 'Parsing and Context-Free Grammars',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1ONS1Ud0TIWEXAVeebkDUxQtBimBMKBRTE_rWPkKfVX8/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Chapter 3 (3.1)',
        description: 'Cooper and Torczon'
      },
      {
        title: 'A Guide to Parsing: Algorithms and Terminology',
        link: 'https://tomassetti.me/guide-parsing-algorithms-terminology/',
        author: 'Garbriele Tomassetti'
      }
    ]
  },

  {
    title: 'The Bison Parser Generator',
    weeks: [ 4, 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/19LCYNojTimpgpvrZu-pawIj0wfRXKZCKHVapwS2BxUI/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs480-sp22/bison',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Bison',
        link: 'https://www.gnu.org/software/bison/manual/bison.html',
        description: 'The Bison user manual'
      }
    ]
  },

  {
    title: 'Bottom-Up Parsing and LR(1) Grammars',
    weeks: [ 6, 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1sQO-3uMJ8GOs81nuMht0LzewEB9F7TvKwmOYEGhIRV0/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Chapter 3 (3.4)',
        description: 'Cooper and Torczon'
      }
    ]
  },

  {
    title: 'Top-Down Parsing and LL(1) Grammars',
    weeks: [ 8 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1lcRl0KIgMNy-vAByU3kCsNymwxgi1I59gMjhc8dTZ2A/edit?usp=sharing'
      },
      // {
      //   title: 'Quiz 3 lecture doodles',
      //   link: 'https://drive.google.com/file/d/1X4kJrHCziNpZGhHx1SFj8fKKdqs8B2jR/view?usp=sharing',
      //   description: 'drawings from lecture'
      // }
    ],
    readings: [
      {
        title: 'Chapter 3 (3.2 - 3.3)',
        description: 'Cooper and Torczon'
      }
    ]
  },

  {
    title: 'LLVM: Code Generation and Optimization',
    weeks: [ 9, 10 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1H3IUpE1FPdtjN-eTrFR6Acl45GuL90szN7PXLpPMZM4/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs480-sp22/llvm',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Kaleidoscope: Implementing a Language with LLVM',
        link: 'https://llvm.org/docs/tutorial/index.html',
        description: 'LLVM Tutorial'
      },
      {
        title: 'The Architecture of Open Source Applications: LLVM',
        link: 'http://www.aosabook.org/en/llvm.html',
        description: 'Chris Lattner'
      }
    ]
  },

  {
    title: 'Bonus Material: Intermediate Representations',
    weeks: [ 11 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1NHqnUdp6EV6Pi6ewJ_SXbeuN79sgBCsAag56C9VtlzA/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapter 5',
        description: 'Cooper and Torczon'
      }
    ]
  }
];

export default topics;
