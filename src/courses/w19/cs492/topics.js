const topics = [
  {
    title: 'Course Intro',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1UTWRygJFwM_4rh3qziFHHlRDwMST5hDcYe9ABZSSmyA/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Application Fundamentals',
        link: 'https://developer.android.com/guide/components/fundamentals',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Git and GitHub',
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1AdrFnQTwCLeB5dCphfRj3itg6cTcaeePm2WCtVHlLGA/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapters 1 and 2',
        link: 'https://git-scm.com/book/en/v2',
        description: 'Pro Git (optional, for those without much git/GitHub experience)'
      }
    ]
  },

  {
    title: 'Java',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/10-d9kS41MD5JXYK0vbuJBtNXP6yAZQzmTjYnsL8WxGs/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS492-W19/java',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Java for C++ Programmers',
        link: 'http://pages.cs.wisc.edu/~hasti/cs368/JavaTutorial/',
        description: 'Beck Hasti'
      }
    ]
  },

  {
    title: 'Getting Started with Android Studio',
    isCurrent: true,
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/182E2WAi6A7IgaStmhQLK8aMUcSf1x71bteQ-L3iIom4/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Meet Android Studio',
        link: 'https://developer.android.com/studio/intro/'
      }
    ]
  },

  {
    title: 'Our First Android App: TODOs',
    isCurrent: true,
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Uq5jFnnBvBpy0qEou13UVUkAhIekvfl_OcYDdSah4Cs/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS492-W19/SimpleTodoApp',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Building Your First App',
        link: 'https://developer.android.com/training/basics/firstapp/',
        description: 'Android Developers'
      },
      {
        title: 'Introduction to Activities',
        link: 'https://developer.android.com/guide/components/activities/intro-activities',
        description: 'Android Developers'
      },
      {
        title: 'Layouts',
        link: 'https://developer.android.com/guide/topics/ui/declaring-layout',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'RecyclerView',
    isCurrent: true,
    weeks: [ 2, 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1LfCy-0xNEjYXCZFcwbRdtEgeeQI3IC5tVrHJEUljuu8/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Create a List with RecyclerView',
        link: 'https://developer.android.com/guide/topics/ui/layout/recyclerview',
        description: 'Android Developers'
      }
    ]
  }
];

// var calendar = [
//
//   {
//     week: 3,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'User Interactions and RecyclerView &ndash; <a href="https://docs.google.com/document/d/1nzNxY5fh9KSfr1-jtyebn5mqg87mL0ScqrSf2HejBGI/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/RecyclerViewInteractions">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/guide/topics/ui/notifiers/toasts.html">Toasts</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/reference/android/support/v7/widget/helper/ItemTouchHelper.SimpleCallback.html">ItemTouchHelper.SimpleCallback</a> &ndash; Android Developers',
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 4,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Fetching Internet Data using AsyncTask &ndash; <a href="https://docs.google.com/document/d/1vBELl7qpuxlwZaRs7HJ6fEAAUGP1SIEoz4cP0YF0Ds8/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/GitHubSearch">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/reference/java/net/URL.html">URL</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/reference/android/net/Uri.Builder.html">Uri.Builder</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/guide/components/processes-and-threads.html">Processes and Threads</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/reference/android/os/AsyncTask.html">AsyncTask</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/guide/topics/permissions/index.html">Permissions</a> &ndash; Android Developers',
//           '<a href="https://www.tutorialspoint.com/android/android_json_parser.htm">Android - JSON Parser</a> &ndash; TutorialsPoint'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 5,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Starting New Activities with Intents &ndash; <a href="https://docs.google.com/document/d/1JDw2GH9zSPlaLSstrw2CH_ugSfdeA-v7qfl7HoXkS1E/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/GitHubSearchWithIntents">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/training/basics/firstapp/starting-activity.html">Start Another Activity</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/guide/topics/ui/menus.html">Menus</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/training/basics/intents/sending.html">Sending the User to Another App</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/training/sharing/index.html">Sharing Simple Data</a> &ndash; Android Developers'
//         ]
//       },
//       {
//         heading: 'Entrepreneurship Presentation',
//         entriesHTML: [
//           '<a href="https://drive.google.com/file/d/0B8aZMq9Vhvmrb29ib3NsOHVBZ0VuLU1nLXk0aHpXRHR6eUlj/view?usp=sharing">Entrepreneurship in CS</a> &ndash; These are the slides from Gabriel Kauffman\'s presentation on entrepreneurship'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 6,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'The Activity Lifecycle and Loaders &ndash; <a href="https://docs.google.com/document/d/18vxnSkYTDzF4KMANiJt517IKSzlZebO-GBhCXxoW_nA/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/LifecycleLogging">example code (lifecycle logging)</a> &ndash; <a href="https://github.com/OSU-CS492-W18/GitHubSearchWithLifecycle">example code (lifecycle-enabled GitHub search)</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/guide/components/activities/activity-lifecycle.html">The Activity Lifecycle</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/guide/components/activities/state-changes.html">Activity State Changes</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/guide/components/activities/tasks-and-back-stack.html">Tasks and Back Stack</a> &ndash; Android Developers'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 7,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Storing Prefs with SharedPreferences &ndash; <a href="https://docs.google.com/document/d/1Bod43t4V_b1KPvijQIf7wQL90BOxcNTKm1D8r8LO1U8/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/GitHubSearchWithPrefs">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/guide/topics/ui/settings.html">Settings</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/training/basics/data-storage/shared-preferences.html">Saving Key-Value Sets</a> &ndash; Android Developers'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 8,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Storing Data with SQLite (Featuring Navigation Drawers) &ndash; <a href="https://docs.google.com/document/d/1M0B8LPzEbYFzF08Jp9ybUc2F94qwSDXHh-9jkgHam0U/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/GitHubSearchWithSQLite">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/training/implementing-navigation/nav-drawer.html">Creating a Navigation Drawer</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/reference/android/support/design/widget/NavigationView.html">NavigationView</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/training/basics/data-storage/databases.html">Saving Data in SQL Databases</a> &ndash; Android Developers',
//           '<a href="http://www.sqlitetutorial.net/">SQLite Tutorial</a>'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 9,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Storing Data with SQLite (Featuring Navigation Drawers) &ndash; <a href="https://docs.google.com/document/d/1M0B8LPzEbYFzF08Jp9ybUc2F94qwSDXHh-9jkgHam0U/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/GitHubSearchWithSQLite">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/training/implementing-navigation/nav-drawer.html">Creating a Navigation Drawer</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/reference/android/support/design/widget/NavigationView.html">NavigationView</a> &ndash; Android Developers',
//           '<a href="https://developer.android.com/training/basics/data-storage/databases.html">Saving Data in SQL Databases</a> &ndash; Android Developers',
//           '<a href="http://www.sqlitetutorial.net/">SQLite Tutorial</a>'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 10,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'A Photo Gallery App &ndash; <a href="https://docs.google.com/document/d/1GdTrvxIm27MMKjYiVKyR7LF_kdU58IiYQSL7Tyqev4s/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS492-W18/PhotosApp">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://developer.android.com/training/implementing-navigation/lateral.html">Creating Swipe Views with Tabs</a> &ndash; Android Developers',
//           '<a href="http://bumptech.github.io/glide/">Glide documentation</a>'
//         ]
//       }
//     ]
//   }
// ];

export default topics;
