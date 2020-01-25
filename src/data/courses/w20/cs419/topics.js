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
    isCurrent: true,
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
    isCurrent: true,
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
    title: 'Client-Side Navigation with React Router',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: '#'
      }
    ],
    readings: [
      {
        title: 'Working with the History API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API',
        description: 'MDN'
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
  }
];

export default topics;
