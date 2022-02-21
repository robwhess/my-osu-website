const topics = [
  {
    title: 'Course Intro',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1JXtkTnnGypf8C-PLdONnwh9znzspJjq8zp_3JglDJc8/edit?usp=sharing'
      },
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
        title: 'Example code',
        link: 'https://github.com/osu-cs499-w22/jsx-and-components',
        description: 'GitHub repo for code written in lecture'
      },
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
        title: 'Example code',
        link: 'https://github.com/osu-cs499-w22/components-to-apps',
        description: 'GitHub repo for code written in lecture'
      }
      // {
      //   title: 'Synchronized Temperature Conversion code',
      //   link: 'https://codepen.io/robwhess/pen/ExaeaLw',
      //   description: 'on Codepen'
      // }
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
        link: 'https://github.com/osu-cs499-w22/react-hooks',
        description: 'GitHub repo for code written in lecture'
      },
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
        link: 'https://github.com/osu-cs499-w22/using-react-router',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Working with the History API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API',
        description: 'MDN'
      },
      {
        title: 'Overview',
        link: 'https://reactrouter.com/docs/en/v6/getting-started/overview',
        description: 'React Router Docs'
      },
      {
        title: 'Main Concepts',
        link: 'https://reactrouter.com/docs/en/v6/getting-started/concepts',
        description: 'React Router Docs'
      },
      {
        title: 'Tutorial',
        link: 'https://reactrouter.com/docs/en/v6/getting-started/tutorial',
        description: 'React Router Docs'
      }
    ]
  },

  {
    title: 'Communicating with an HTTP API',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Q7mF8c3psaiEPX2M2Dzd9Hkqoo60tpD8_XigrGAHShk/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs499-w22/api-communication',
        description: 'GitHub repo for code written in lecture'
      },
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
  },

  {
    title: 'Styling Components with Emotion',
    weeks: [ 6 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1XgCyJ3XA7lzpaT7HN5fNY65RuqN_j6vaPrWbxq0Vjso/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs499-w22/styling-with-emotion',
        description: 'GitHub repo for code written in lecture'
      },
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
    title: 'Centralizing Application State with Redux',
    weeks: [ 6, 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1nYBJTdCKoAbP_pKxjBfSqjozDAPqH5ppiOyh6ZjUjPs/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs499-w22/using-redux',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Redux: Core Concepts',
        link: 'https://redux.js.org/introduction/core-concepts',
        description: 'Redux Docs'
      },
      {
        title: 'Redux: Three Principles',
        link: 'https://redux.js.org/introduction/three-principles',
        description: 'Redux Docs'
      },
      {
        title: 'Redux: Basic Tutorial',
        link: 'https://redux.js.org/basics/basic-tutorial',
        description: 'Redux Docs'
      },
      {
        title: 'React Redux: Basic Tutorial',
        link: 'https://react-redux.js.org/introduction/basic-tutorial',
        description: 'React Redux Docs'
      },
      {
        title: 'React Redux: Hooks',
        link: 'https://react-redux.js.org/api/hooks',
        description: 'React Redux Docs'
      },
      {
        title: 'Redux vs. Context vs. State: An in-depth look at state management in React',
        link: 'https://medium.com/better-programming/redux-vs-context-vs-state-4202be6d3e54',
        description: 'Denny Scott (on Medium)'
      }
    ]
  },

  {
    title: 'Next.js',
    weeks: [ 7, 8 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1W_Lgbq_vfwAR3EGJ9BhdB81uYwqE1x5kSM3bMAGIHOk/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs499-w22/using-nextjs',
        description: 'GitHub repo for code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Getting Started',
        link: 'https://nextjs.org/docs/getting-started',
        description: 'Next.js Docs'
      },
      {
        title: 'Pages',
        link: 'https://nextjs.org/docs/basic-features/pages',
        description: 'Next.js Docs'
      },
      {
        title: 'Routing',
        link: 'https://nextjs.org/docs/routing/introduction',
        description: 'Next.js Docs'
      },
      {
        title: 'Dynamic Routes',
        link: 'https://nextjs.org/docs/routing/dynamic-routes',
        description: 'Next.js Docs'
      },
      {
        title: 'Data Fetching',
        link: 'https://nextjs.org/docs/basic-features/data-fetching',
        description: 'Next.js Docs'
      },
      {
        title: 'API Routes',
        link: 'https://nextjs.org/docs/api-routes/introduction',
        description: 'Next.js Docs'
      }
    ]
  },

  {
    title: 'API Queries with GraphQL',
    weeks: [ 8, 9 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1i02SdUAS96QYayvf4KtDa0HmEwZNOLZZb7jZBfbWWl8/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs499-w22/using-apollo',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Introduction to GraphQL',
        link: 'https://graphql.org/learn/',
        description: 'GraphQL Docs'
      },
      {
        title: 'Schemas and Types',
        link: 'https://graphql.org/learn/schema/',
        description: 'GraphQL Docs'
      },
      {
        title: 'Queries and Mutations',
        link: 'https://graphql.org/learn/queries/',
        description: 'GraphQL Docs'
      },
      {
        title: 'Thinking in Graphs',
        link: 'https://graphql.org/learn/thinking-in-graphs/',
        description: 'GraphQL Docs'
      },
      {
        title: 'GraphQL Fundamentals (4 videos)',
        link: 'https://www.howtographql.com/',
        description: 'How to GraphQL'
      },
      {
        title: 'Apollo Client: Get started',
        link: 'https://www.apollographql.com/docs/react/get-started/',
        description: 'Apollo Client Docs'
      },
      {
        title: 'Apollo Client: Queries',
        link: 'https://www.apollographql.com/docs/react/data/queries/',
        description: 'Apollo Client Docs'
      },
      {
        title: 'Apollo Client: Mutations',
        link: 'https://www.apollographql.com/docs/react/data/mutations/',
        description: 'Apollo Client Docs'
      }
    ]
  },

  {
    title: 'Authenticating Users',
    weeks: [ 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/17zERsoO6i5MMQjVfDsb_OKo2MopVV4Jn8Q8qbo8bFFI/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs499-w21/authentication',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Set-Cookie',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie',
        description: 'MDN'
      },
      {
        title: 'Http-only cookie',
        link: 'https://en.wikipedia.org/wiki/HTTP_cookie#Http-only_cookie',
        description: 'under "HTTP cookie" on Wikipedia'
      },
      {
        title: 'Example app utilizing cookie-based authentication',
        link: 'https://github.com/vercel/next.js/tree/canary/examples/with-cookie-auth-fauna',
        description: 'Next.js examples on GitHub'
      },
      {
        title: 'Cross-site request forgery',
        link: 'https://en.wikipedia.org/wiki/Cross-site_request_forgery',
        description: 'Wikipedia'
      },
      {
        title: 'Cross-Site Request Forgery Prevention Cheat Sheet',
        link: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html',
        description: 'OWASP'
      },
      {
        title: 'OAuth 2 Simplified',
        link: 'https://aaronparecki.com/oauth-2-simplified/',
        description: 'Aaron Parecki'
      },
      {
        title: 'The Ultimate Guide to Next.js Authentication with Auth0',
        link: 'https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/',
        description: 'Sandrino Di Mattia (Auth0 Blog)'
      },
      {
        title: 'OAuth 2.0',
        link: 'https://oauth.net/2/',
        description: 'OAuth 2.0 documentation'
      }
    ]
  }
];

export default topics;
