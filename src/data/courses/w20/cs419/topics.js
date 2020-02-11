const topics = [
  {
    title: 'Course Intro',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1JXtkTnnGypf8C-PLdONnwh9znzspJjq8zp_3JglDJc8/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Modern Web Development',
        link: 'https://hackernoon.com/modern-web-development-bf0b2ef0e22e',
        description: 'Mark Nutter (Hacker Noon)'
      },
      {
        title: 'What is React?',
        link: 'https://www.oreilly.com/library/view/what-react-is/9781491996744/ch01.html',
        description: 'Eric Baer'
      },
      {
        title: 'Why did we build React?',
        link: 'https://reactjs.org/blog/2013/06/05/why-react.html',
        description: 'Pete Hunt (ReactJS blog)'
      }
    ]
  },

  {
    title: 'React: JSX and Components',
    weeks: [ 1, 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/14rZmZWMDETj1EIu1Oj4BZAwJhtg3grTZCXwLmDfze8k/edit?usp=sharing'
      },
      {
        title: 'JSX and Elements code',
        link: 'https://codepen.io/robwhess/pen/LYEdEZo',
        description: 'on Codepen'
      },
      {
        title: 'Our First Components code',
        link: 'https://codepen.io/robwhess/pen/RwNMNoW',
        description: 'on Codepen'
      },
      {
        title: 'A Stateful Clock code',
        link: 'https://codepen.io/robwhess/pen/povLvRa',
        description: 'on Codepen'
      }
    ],
    readings: [
      {
        title: 'React Main Concepts (1 - 5)',
        link: 'https://reactjs.org/docs/hello-world.html',
        description: 'React Docs'
      }
    ]
  },

  {
    title: 'React: From Components to Apps',
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1gxjgBCFZfB2cERMZEizn2_Bp8ySonFbwH_fc2id6h78/edit?usp=sharing'
      },
      {
        title: 'Handling Events code',
        link: 'https://codepen.io/robwhess/pen/yLyEqZY',
        description: 'on Codepen'
      },
      {
        title: 'Controlled Components code',
        link: 'https://codepen.io/robwhess/pen/eYmjGBK',
        description: 'on Codepen'
      },
      {
        title: 'General Purpose <select> code',
        link: 'https://codepen.io/robwhess/pen/mdyGbBJ',
        description: 'on Codepen'
      },
      {
        title: 'Synchronized Temperature Conversion code',
        link: 'https://codepen.io/robwhess/pen/ExaeaLw',
        description: 'on Codepen'
      }
    ],
    readings: [
      {
        title: 'React Main Concepts (6 - 12)',
        link: 'https://reactjs.org/docs/handling-events.html',
        description: 'React Docs'
      }
    ]
  },

  {
    title: 'Create React App',
    weeks: [ 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1VdOF6FeOxnbvYdWVPP4s-bqwyd-akTy-_I3GBMxeHPU/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Getting Started',
        link: 'https://create-react-app.dev/docs/getting-started',
        description: 'Create React App Docs'
      }
    ]
  },

  {
    title: 'React: Hooks',
    weeks: [ 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1UBr0sukXuRUs2xb8bx4DUwMg5E6nqAK5_1q3JqBjX3M/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs419-w20/react-hooks',
        description: 'code written during lecture'
      }
    ],
    readings: [
      {
        title: 'Hooks at a Glance',
        link: 'https://reactjs.org/docs/hooks-overview.html',
        description: 'React Docs'
      },
      {
        title: 'Using the State Hook',
        link: 'https://reactjs.org/docs/hooks-state.html',
        description: 'React Docs'
      },
      {
        title: 'Using the Effect Hook',
        link: 'https://reactjs.org/docs/hooks-effect.html',
        description: 'React Docs'
      },
      {
        title: 'Rules of Hooks',
        link: 'https://reactjs.org/docs/hooks-rules.html',
        description: 'React Docs'
      }
    ]
  },

  {
    title: 'Client-Side Routing with React Router',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1s0zG2b0wa5fGZrf2Dg9mimGW-Tdm_gtXXPfvDqE2wV8/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs419-w20/using-react-router',
        description: 'code written during lecture'
      }
    ],
    readings: [
      {
        title: 'Working with the History API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API',
        description: 'MDN'
      },
      {
        title: 'Philosophy',
        link: 'https://reacttraining.com/react-router/web/guides/philosophy',
        description: 'React Router Docs'
      },
      {
        title: 'Quick Start',
        link: 'https://reacttraining.com/react-router/web/guides/quick-start',
        description: 'React Router Docs'
      },
      {
        title: 'Primary Components',
        link: 'https://reacttraining.com/react-router/web/guides/primary-components',
        description: 'React Router Docs'
      },
      {
        title: 'URL Parameters',
        link: 'https://reacttraining.com/react-router/web/example/url-params',
        description: 'React Router examples'
      },
      {
        title: 'Nesting',
        link: 'https://reacttraining.com/react-router/web/example/nesting',
        description: 'React Router examples'
      }
    ]
  },

  {
    title: 'Styling Components with Emotion',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1XgCyJ3XA7lzpaT7HN5fNY65RuqN_j6vaPrWbxq0Vjso/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs419-w20/using-emotion',
        description: 'code written during lecture'
      }
    ],
    readings: [
      {
        title: 'Introduction to Emotion',
        link: 'https://emotion.sh/docs/introduction',
        description: 'Emotion Docs'
      },
      {
        title: 'The css Prop',
        link: 'https://emotion.sh/docs/css-prop',
        description: 'Emotion Docs'
      },
      {
        title: 'Composition',
        link: 'https://emotion.sh/docs/composition',
        description: 'Emotion Docs'
      },
      {
        title: 'Nested Selectors',
        link: 'https://emotion.sh/docs/nested',
        description: 'Emotion Docs'
      },
      {
        title: 'Global Styles',
        link: 'https://emotion.sh/docs/globals',
        description: 'Emotion Docs'
      },
      {
        title: 'Media Queries',
        link: 'https://emotion.sh/docs/media-queries',
        description: 'Emotion Docs'
      },
      {
        title: 'Styled Components',
        link: 'https://emotion.sh/docs/styled',
        description: 'Emotion Docs'
      }
    ]
  },

  {
    title: 'Communicating with an HTTP API',
    isCurrent: true,
    weeks: [ 6 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Q7mF8c3psaiEPX2M2Dzd9Hkqoo60tpD8_XigrGAHShk/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs419-w20/api-communication',
        description: 'code written during lecture'
      }
    ],
    readings: [
      {
        title: 'AJAX and APIs',
        link: 'https://reactjs.org/docs/faq-ajax.html',
        description: 'React Docs'
      },
      {
        title: 'How to fetch data with React Hooks',
        link: 'https://www.robinwieruch.de/react-hooks-fetch-data',
        description: 'Robin Wieruch'
      },
      {
        title: 'Async JavaScript: From Callbacks, to Promises, to Async/Await',
        link: 'https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/',
        description: 'Tyler McGinnis'
      },
      {
        title: 'How to work with React the right way to avoid some common pitfalls',
        link: 'https://www.freecodecamp.org/news/how-to-work-with-react-the-right-way-to-avoid-some-common-pitfalls-fc9eb5e34d9e/',
        description: 'Adeel Imran (freeCodeCamp)'
      }
    ]
  }
];

export default topics;
