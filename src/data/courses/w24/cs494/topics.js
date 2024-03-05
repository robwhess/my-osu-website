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
        link: 'https://github.com/osu-cs494-w24/jsx-and-components',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Quick Start',
        link: 'https://react.dev/learn',
        description: 'React Docs'
      },
      {
        title: 'Describing the UI',
        link: 'https://react.dev/learn/describing-the-ui',
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
        link: 'https://github.com/osu-cs494-w24/components-to-apps',
        description: 'GitHub repo for code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Adding Interactivity',
        link: 'https://react.dev/learn/adding-interactivity',
        description: 'React Docs'
      },
      {
        title: 'Managing State',
        link: 'https://react.dev/learn/managing-state',
        description: 'React Docs'
      }
    ]
  },

  {
    title: 'Interacting with External Systems using Refs and Effects',
    weeks: [ 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1UBr0sukXuRUs2xb8bx4DUwMg5E6nqAK5_1q3JqBjX3M/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs494-w24/refs-and-effects',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Referencing Values with Refs',
        link: 'https://react.dev/learn/referencing-values-with-refs',
        description: 'React Docs'
      },
      {
        title: 'Manipulating the DOM with Refs',
        link: 'https://react.dev/learn/manipulating-the-dom-with-refs',
        description: 'React Docs'
      },
      {
        title: 'Synchronizing with Effects',
        link: 'https://react.dev/learn/synchronizing-with-effects',
        description: 'React Docs'
      },
      {
        title: 'Lifecycle of Reactive Effects',
        link: 'https://react.dev/learn/lifecycle-of-reactive-effects',
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
        link: 'https://github.com/osu-cs494-w24/using-react-router',
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
        link: 'https://reactrouter.com/en/main/start/overview',
        description: 'React Router Docs'
      },
      {
        title: 'Main Concepts',
        link: 'https://reactrouter.com/en/main/start/concepts',
        description: 'React Router Docs'
      },
      {
        title: 'Tutorial',
        link: 'https://reactrouter.com/en/main/start/tutorial',
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
        link: 'https://docs.google.com/document/d/1d4Wmete9oVlyZfSPRxTOHY6-kQYfeVZPdPcpeKhm0Fs/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs494-w24/api-communication',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
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
        link: 'https://github.com/osu-cs494-w24/styling-with-emotion',
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
    weeks: [ 7 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1YLu7NeNkAx4YpUh7AjkI2e5tDN7nK8D04_z6xUK4g9E/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs494-w24/using-redux',
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
        title: 'Redux Essentials Tutorial',
        link: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts',
        description: 'Redux Docs'
      },
      {
        title: 'Redux: Fundamentals',
        link: 'https://redux.js.org/tutorials/fundamentals/part-1-overview',
        description: 'Redux Docs'
      },
      {
        title: 'Getting Started with Redux Toolkit',
        link: 'https://redux-toolkit.js.org/introduction/getting-started',
        description: 'Redux Toolkit Docs'
      },
      {
        title: 'Redux Toolkit Usage Guide',
        link: 'https://redux-toolkit.js.org/usage/usage-guide',
        description: 'Redux Toolkit Docs'
      },
      {
        title: 'React Redux Quick Start',
        link: 'https://react-redux.js.org/tutorials/quick-start',
        description: 'React Redux Docs'
      },
      {
        title: 'React Redux Hooks',
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

  // {
  //   title: 'Next.js',
  //   weeks: [ 8 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1W_Lgbq_vfwAR3EGJ9BhdB81uYwqE1x5kSM3bMAGIHOk/edit?usp=sharing'
  //     },
  //     // {
  //     //   title: 'Example code',
  //     //   link: 'https://github.com/osu-cs494-w23/using-nextjs',
  //     //   description: 'GitHub repo for code written in lecture'
  //     // }
  //   ],
  //   readings: [
  //     {
  //       title: 'Getting Started',
  //       link: 'https://nextjs.org/docs/getting-started',
  //       description: 'Next.js Docs'
  //     },
  //     {
  //       title: 'Pages',
  //       link: 'https://nextjs.org/docs/basic-features/pages',
  //       description: 'Next.js Docs'
  //     },
  //     {
  //       title: 'Routing',
  //       link: 'https://nextjs.org/docs/routing/introduction',
  //       description: 'Next.js Docs'
  //     },
  //     {
  //       title: 'Dynamic Routes',
  //       link: 'https://nextjs.org/docs/routing/dynamic-routes',
  //       description: 'Next.js Docs'
  //     },
  //     {
  //       title: 'Data Fetching',
  //       link: 'https://nextjs.org/docs/basic-features/data-fetching',
  //       description: 'Next.js Docs'
  //     },
  //     {
  //       title: 'API Routes',
  //       link: 'https://nextjs.org/docs/api-routes/introduction',
  //       description: 'Next.js Docs'
  //     }
  //   ]
  // },

  {
    title: 'API Queries with GraphQL',
    weeks: [ 9 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1i02SdUAS96QYayvf4KtDa0HmEwZNOLZZb7jZBfbWWl8/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs494-w23/graphql-with-apollo',
      //   description: 'GitHub repo for code written in lecture'
      // },
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
      //   link: 'https://github.com/osu-cs494-w23/authentication',
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
  },

  {
    title: 'Testing and CI/CD Primer for React Apps',
    weeks: [ 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1oE5a3HUQqLN25FQQs0UTqcAA3a4SlxArLPxaomr8Bb4/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs499-w22/testing-and-deployment',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Testing Overview',
        link: 'https://reactjs.org/docs/testing.html',
        description: 'React Docs'
      },
      {
        title: 'Testing Recipes',
        link: 'https://reactjs.org/docs/testing-recipes.html',
        description: 'React Docs'
      },
      {
        title: 'Getting Started with Jest',
        link: 'https://jestjs.io/docs/getting-started',
        description: 'Jest Docs'
      },
      {
        title: 'Testing React Apps',
        link: 'https://jestjs.io/docs/tutorial-react',
        description: 'Jest Docs'
      },
      {
        title: 'React Testing Library Introduction',
        link: 'https://testing-library.com/docs/react-testing-library/intro',
        description: 'React Testing Library Docs'
      },
      {
        title: 'React Testing Library Tutorial',
        link: 'https://www.robinwieruch.de/react-testing-library/',
        description: 'Robin Wieruch'
      },
      {
        title: 'Mock Service Worker Introduction',
        link: 'https://mswjs.io/docs/',
        description: 'Mock Service Worker Docs'
      },
      {
        title: 'Understanding GitHub Actions',
        link: 'https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions',
        description: 'GitHub Docs'
      },
      {
        title: 'GitHub Pages Documentation',
        link: 'https://docs.github.com/en/pages',
        description: 'GitHub Docs'
      },
      {
        title: 'Deploying Node.js Apps on Heroku',
        link: 'https://devcenter.heroku.com/articles/deploying-nodejs',
        description: 'Heroku Docs'
      },
      {
        title: 'GitHub Integration (Heroku GitHub Deploys)',
        link: 'https://devcenter.heroku.com/articles/github-integration',
        description: 'Heroku Docs'
      },
      {
        title: 'How to Deploy a Next.js Site with Vercel',
        link: 'https://vercel.com/guides/deploying-nextjs-with-vercel',
        description: 'Vercel Docs'
      }
    ]
  }
];

export default topics;
