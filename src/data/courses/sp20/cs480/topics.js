const topics = [
  {
    title: 'Course Intro/Overview of Compilers',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1TVQFQlMrP0RpSTYAI9P-xnM_5iA45rswqCuI0yADEfw/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1YGYFc2q2iP0QrymUoL3TyGlfIAhREsNU/view?usp=sharing',
        description: 'drawings from lecture'
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
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1FODBAP83e_JCkJBTxzfa5672vKLdCRDLw4c4UEjMerE/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1yoaR8pcAWrmHIjrdAHuB1VSBOL_8HPKR/view?usp=sharing',
        description: 'drawings from lecture'
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
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Q3Qj3pZVixeeD6bQ7oDeBze3csKF58-k0E6r5XJ7Ssk/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1e2cRZIg81WVJ6WarsRoV9Aj3S0gGhuJy/view?usp=sharing',
        description: 'drawings from lecture'
      },
      // {
      //   title: 'Quiz 1 lecture doodles',
      //   link: 'https://drive.google.com/file/d/17ECDkVyCwRqDV5Lh0DdEFnlNdYaUinYV/view?usp=sharing',
      //   description: 'drawings from lecture'
      // }
    ],
    readings: [
      {
        title: 'Chapter 2 (2.4 - 2.5)',
        description: 'Cooper and Torczon'
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
        link: 'https://github.com/osu-cs480-sp20/flex',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1RXjAuGgpHSAmF05Ew-IID-_7oX-MTRuL/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'Flex In a Nutshell',
        link: 'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/handouts/050%20Flex%20In%20A%20Nutshell.pdf',
        description: 'Julie Zelenski (Stanford)'
      },
      {
        title: 'Flex - A fast scanner generator',
        link: 'ftp://ftp.gnu.org/old-gnu/Manuals/flex-2.5.4/html_mono/flex.html',
        description: 'The Flex user manual'
      }
    ]
  },

  {
    title: 'Context-Free Grammars',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1panYEuyBXFSY1bRe3Ywa-7ozRAfSwQl6e4GFyLNjKwo/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/10pu-6e0Iw-IhBTx_HxPzK754QLZh7Ij8/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'Chapter 3 (3.1)',
        description: 'Cooper and Torczon'
      }
    ]
  },

  {
    title: 'Top-Down Parsing and LL(1) Grammars',
    weeks: [ 4, 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1lcRl0KIgMNy-vAByU3kCsNymwxgi1I59gMjhc8dTZ2A/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1AWZ4cnXuBXPAOmfmqghQT2X5y1mB8WR9/view?usp=sharing',
        description: 'drawings from lecture'
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
    title: 'The Bison Parser Generator',
    weeks: [ 6, 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/19LCYNojTimpgpvrZu-pawIj0wfRXKZCKHVapwS2BxUI/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs480-sp20/bison',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/19GcQ04DkSEaEYYpyT88nn0ijjF4G6wGQ/view?usp=sharing',
        description: 'drawings from lecture'
      }
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
    weeks: [ 7, 8, 9 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1sQO-3uMJ8GOs81nuMht0LzewEB9F7TvKwmOYEGhIRV0/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1vaFAKy1wnH5hIMV1I7vB-e6ute_05xBE/view?usp=sharing',
        description: 'drawings from lecture'
      },
      // {
      //   title: 'Quiz 5 lecture doodles',
      //   link: 'https://drive.google.com/file/d/1RY8ZN4x3KnNf0h_Lg1WAzR53p5uGqX0j/view?usp=sharing',
      //   description: 'drawings from lecture'
      // }
    ],
    readings: [
      {
        title: 'Chapter 3 (3.4)',
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
        link: 'https://github.com/osu-cs480-sp20/llvm',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1uQR2_12kLO0UeF2G-ih5a92Rdj3CEU0q/view?usp=sharing',
        description: 'drawings from lecture'
      }
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
