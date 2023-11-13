const topics = [
  {
    title: 'Course Intro',
    weeks: [ 0 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1_18W3dSNqxgCgnq28isyrUitQw1ics5ytn84D407PbU/edit?usp=sharing'
      }
    ]
  },

  {
    title: 'Git and GitHub',
    weeks: [ 0, 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1HSD5Sy8Q4SAZ-gL1GvptUmj_zWda1m-bkzQ_PDRnic4/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Getting Started [with Git]',
        link: 'https://git-scm.com/book/en/v2/',
        description: 'Chapter 1 of Pro Git by Scott Chacon and Ben Straub'
      },
      {
          title: 'Git Basics',
          link: 'https://git-scm.com/book/en/v2/',
          description: 'Chapter 2 of Pro Git by Scott Chacon and Ben Straub'
      },
      {
          title: 'Git cheat sheet',
          link: 'https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet',
          description: 'Atlassian'
      },
      {
          title: 'Git cheat sheet',
          link: 'https://training.github.com/',
          description: 'GitHub'
      },
      {
        title: 'Git-it',
        link: 'https://github.com/jlord/git-it-electron#git-it-desktop-app',
        description: 'a desktop app that teaches you how to use Git and GitHub'
      }
    ]
  },

  {
    title: 'HTML',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1RB_zhgQNrXyWiLBS7YQHMM3pTckI0lssYjkq2D5Sag8/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs290-f23/html',
        description: 'GitHub repo for code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Introduction to HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
        description: 'MDN'
      }
    ]
  },

  {
    title: 'CSS',
    weeks: [ 2, 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1DTpjDB2K4EF2sz4MwhPOYfC8CUhpZn9ykEVkwNZY8wM/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs290-f23/css',
        description: 'GitHub repo for code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Introduction to CSS',
        link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS',
        description: 'MDN'
      },
      {
        title: 'Cyclomatic Complexity: Logic in CSS',
        link: 'http://csswizardry.com/2015/04/cyclomatic-complexity-logic-in-css/',
        description: 'CSS Wizardry'
      },
      {
        title: 'Using CSS Flexible Boxes',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes',
        description: 'MDN'
      },
      {
        title: 'A Complete Guide to Flexbox',
        link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        description: 'Chris Coyer (on CSS-Tricks)'
      },
      {
        title: 'Flexbox Froggy',
        link: 'https://flexboxfroggy.com/',
        description: 'A little game to help you practice your flexbox skills'
      },
      {
        title: 'Responsive Web Design Basics',
        link: 'https://developers.google.com/web/fundamentals/design-and-ui/responsive/',
        description: 'Google Web Fundamentals'
      }
    ]
  },

  {
    title: 'JavaScript Fundamentals',
    weeks: [ 4, 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1C5fgsWQjTaPDOyqjecMZ2d554iOePCrDcZ5nzUykG_U/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs290-f23/js-fundamentals',
        description: 'GitHub repo for code written in lecture'
      }
    ],
    readings: [
      {
        title: 'JavaScript first steps',
        link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
        description: 'MDN'
      },
      {
        title: 'JavaScript building blocks',
        link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks',
        description: 'MDN'
      }
    ]
  },

  {
    title: 'JavaScript DOM Manipulation',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/12YeS7-5BSKc3gB21s4fJ6-NPeYO6qkiGcLYzNDyTlV8/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs290-f23/js-dom-manipulation',
        description: 'GitHub repo for code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Introduction to the DOM',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
        description: 'MDN'
      },
      {
        title: 'The Document Object Model',
        link: 'http://eloquentjavascript.net/13_dom.html',
        description: 'Eloquent Javascript (Chapter 13)'
      }
    ]
  },

  {
    title: 'JavaScript Event Handling',
    weeks: [ 6 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1KCjkNZZlYDHGcahfJQzyTsCSr21kGkXZJjOkmTJEVd4/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs290-f23/js-events',
        description: 'GitHub repo for code written in lecture'
      },
      {
        title: 'JS Fiddle DOM manipulation example',
        link: 'https://jsfiddle.net/robwhess/kmo8ksm4/'
      }
    ],
    readings: [
      {
        title: 'Overview of Events and Handlers',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers',
        description: 'MDN'
      },
      {
        title: 'Handling Events',
        link: 'http://eloquentjavascript.net/14_event.html',
        description: 'Eloquent Javascript (Chapter 14)'
      },
      {
        title: 'Forms and Fields',
        link: 'http://eloquentjavascript.net/18_forms.html',
        description: 'Eloquent Javascript (Chapter 18)'
      }
    ]
  },

  {
    title: 'Node.js Basics',
    weeks: [ 7 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1B7APm57ol-3iwAsvN4-uhR1Eq44BcHCrmPWYTvyI3Nw/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs290-f23/node-basics',
        description: 'GitHub repo for code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Node.js',
        link: 'http://eloquentjavascript.net/20_node.html',
        description: 'Eloquent Javascript (Chapter 20)'
      },
      {
        title: 'Environment variable',
        link: 'https://en.wikipedia.org/wiki/Environment_variable',
        description: 'Wikipedia'
      },
      {
        title: 'The Art of Node',
        link: 'https://github.com/maxogden/art-of-node/#the-art-of-node'
      },
      {
        title: 'Anatomy of an HTTP Transaction',
        link: 'https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/',
        description: 'Node.js docs'
      }
    ]
  },

  {
    title: 'Packages and npm',
    weeks: [ 7 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1jz3-RWjGoDzRddNAwPhAeNuqYF0o9MUWqVMQ-anN4TI/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'What is npm?',
        link: 'https://docs.npmjs.com/getting-started/what-is-npm',
        description: 'npm docs'
      },
      {
        title: 'Installing npm packages locally',
        link: 'https://docs.npmjs.com/getting-started/installing-npm-packages-locally',
        description: 'npm docs'
      },
      {
        title: 'Using a package.json',
        link: 'https://docs.npmjs.com/getting-started/using-a-package.json',
        description: 'npm docs'
      },
    ]
  },

  {
    title: 'Serving with Express',
    weeks: [ 8 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1hMtoRhCPMzuiw5uR1E92S6B0rVEQR869V2ZbDb4UQoM/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs290-f22/express-serving',
      //   description: 'GitHub repo for code written in lecture'
      // }
    ],
    readings: [
      {
        title: 'Hello world example',
        link: 'https://expressjs.com/en/starter/hello-world.html',
        description: 'Express docs'
      },
      {
        title: 'Basic routing',
        link: 'https://expressjs.com/en/starter/basic-routing.html',
        description: 'Express docs'
      },
      {
        title: 'Routing',
        link: 'https://expressjs.com/en/guide/routing.html',
        description: 'Express docs'
      },
      {
        title: 'Writing middleware for use in Express apps',
        link: 'https://expressjs.com/en/guide/writing-middleware.html',
        description: 'Express docs'
      },
      {
        title: 'Serving static files in Express',
        link: 'https://expressjs.com/en/starter/static-files.html',
        description: 'Express docs'
      }
    ]
  },

  {
    title: 'Dynamically Rendering Content with Handlebars',
    weeks: [ 8, 9 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Q8T6Q2sxPCfuUcKgaCSvONEXaAVBuca_wrd59iWhgQs/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs290-f22/handlebars-templating',
      //   description: 'GitHub repo for code written in lecture'
      // }
    ],
    readings: [
      {
        title: 'A Beginner\'s Guide to Handlebars',
        link: 'https://www.sitepoint.com/a-beginners-guide-to-handlebars/',
        description: 'sitepoint'
      },
      {
        title: 'Handlebars Introduction',
        link: 'https://handlebarsjs.com/guide/',
        description: 'Handlebars docs'
      },
      {
        title: 'Built-In Helpers',
        link: 'https://handlebarsjs.com/guide/builtin-helpers.html',
        description: 'Handlebars docs'
      },
      {
        title: 'Partials',
        link: 'https://handlebarsjs.com/guide/partials.html',
        description: 'Handlebars docs'
      },
      {
        title: 'Express Handlebars',
        link: 'https://github.com/ericf/express-handlebars/#readme',
        description: 'On GitHub'
      },
      {
        title: 'Using template engines with Express',
        link: 'http://expressjs.com/en/guide/using-template-engines.html',
        description: 'Express docs'
      },
      {
        title: 'Model-view-controller',
        link: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Asynchronous Client-Server Communication',
    weeks: [ 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1mG9PAN18vuKIXPZXE0P4EVkOBtU9zjz4UqaIv6DnDfY/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs290-f22/async-communication',
      //   description: 'GitHub repo for code written in lecture'
      // }
    ],
    readings: [
      {
        title: 'express.json()',
        link: 'https://expressjs.com/en/api.html#express.json',
        description: 'Express Docs'
      },
      {
        title: 'Using the Fetch API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
        description: 'MDN'
      },
      {
        title: 'Using Promises',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises',
        description: 'MDN'
      }
    ]
  },

  {
    title: 'MongoDB (Stretch goal)',
    weeks: [ 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1kRFCS2htU1WPgRn4Gwk-VLl-9wd-pIEEDwF3I73JQhc/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs290-sp19/using-mongodb',
      //   description: 'GitHub repo for code written in lecture'
      // }
    ],
    readings: [
      {
        title: 'Getting Started with MongoDB',
        link: 'https://docs.mongodb.com/getting-started/shell/',
        description: 'MongoDB docs'
      },
      {
        title: 'Documents',
        link: 'https://docs.mongodb.com/manual/core/document/',
        description: 'MongoDB docs'
      },
      {
        title: 'MongoDB CRUD Operations',
        link: 'https://docs.mongodb.com/manual/crud/',
        description: 'MongoDB docs'
      },
      {
        title: 'Node.js Quick Start',
        link: 'http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/',
        description: 'MongoDB docs'
      }
    ]
  }
];

export default topics;
