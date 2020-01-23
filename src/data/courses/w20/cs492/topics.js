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
    title: 'Java',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/10-d9kS41MD5JXYK0vbuJBtNXP6yAZQzmTjYnsL8WxGs/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w20/java',
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
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Uq5jFnnBvBpy0qEou13UVUkAhIekvfl_OcYDdSah4Cs/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w20/BasicTodos',
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
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w20/RecyclerViewTodos',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Create a List with RecyclerView',
        link: 'https://developer.android.com/guide/topics/ui/layout/recyclerview',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'User Interactions and RecyclerView',
    isCurrent: true,
    weeks: [ 3 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1nzNxY5fh9KSfr1-jtyebn5mqg87mL0ScqrSf2HejBGI/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w20/RecyclerViewTodos',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Toasts overview',
        link: 'https://developer.android.com/guide/topics/ui/notifiers/toasts',
        description: 'Android Developers'
      },
      {
        title: 'ItemTouchHelper.SimpleCallback',
        link: 'https://developer.android.com/reference/androidx/recyclerview/widget/ItemTouchHelper.SimpleCallback.html',
        description: 'Android Developers'
      },
      {
        title: 'Drag and Swipe with RecyclerView',
        link: 'https://medium.com/@ipaulpro/drag-and-swipe-with-recyclerview-b9456d2b1aaf',
        description: 'Paul Burke (Medium)'
      }
    ]
  },

  {
    title: 'Fetching Internet Data using AsyncTask',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1vBELl7qpuxlwZaRs7HJ6fEAAUGP1SIEoz4cP0YF0Ds8/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/OSU-CS492-W19/GitHubSearch',
      //   description: 'code written in lecture'
      // }
    ],
    readings: [
      {
        title: 'Uri.Builder',
        link: 'https://developer.android.com/reference/android/net/Uri.Builder',
        description: 'Android Developers'
      },
      {
        title: 'OkHttp Recipes',
        link: 'https://github.com/square/okhttp/wiki/Recipes',
        description: 'OkHttp Wiki'
      },
      {
        title: 'Processes and threads overview',
        link: 'https://developer.android.com/guide/components/processes-and-threads',
        description: 'Android Developers'
      },
      {
        title: 'AsyncTask',
        link: 'https://developer.android.com/reference/android/os/AsyncTask',
        description: 'Android Developers'
      },
      {
        title: 'Permissions overview',
        link: 'https://developer.android.com/guide/topics/permissions/overview',
        description: 'Android Developers'
      },
      {
        title: 'Gson User Guide',
        link: 'https://github.com/google/gson/blob/master/UserGuide.md',
        description: 'on GitHub'
      }
    ]
  },
  //
  // {
  //   title: 'Starting New Activities with Intents',
  //   weeks: [ 5 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1JDw2GH9zSPlaLSstrw2CH_ugSfdeA-v7qfl7HoXkS1E/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS492-W19/GitHubSearchWithIntents',
  //       description: 'code written in lecture'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Start Another Activity',
  //       link: 'https://developer.android.com/training/basics/firstapp/starting-activity',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Intents and Intent Filters',
  //       link: 'https://developer.android.com/guide/components/intents-filters',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Menus',
  //       link: 'https://developer.android.com/guide/topics/ui/menus',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Sending the User to Another App',
  //       link: 'https://developer.android.com/training/basics/intents/sending',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Sharing Simple Data',
  //       link: 'https://developer.android.com/training/sharing/',
  //       description: 'Android Developers'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'The Activity Lifecycle and Loaders',
  //   weeks: [ 5, 6 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/18vxnSkYTDzF4KMANiJt517IKSzlZebO-GBhCXxoW_nA/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Lifecycle logging example code',
  //       link: 'https://github.com/OSU-CS492-W19/LifecycleLogging',
  //       description: 'small demo app code written in lecture'
  //     },
  //     {
  //       title: 'GitHub search example code',
  //       link: 'https://github.com/OSU-CS492-W19/GitHubSearchWithLifecycle',
  //       description: 'GitHub search app code written in lecture'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Understand the Activity Lifecycle',
  //       link: 'https://developer.android.com/guide/components/activities/activity-lifecycle',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Handle Activity State Changes',
  //       link: 'https://developer.android.com/guide/components/activities/state-changes',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Understand Tasks and Back Stack',
  //       link: 'https://developer.android.com/guide/components/activities/tasks-and-back-stack',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'ViewModel Overview',
  //       link: 'https://developer.android.com/topic/libraries/architecture/viewmodel',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Lifecycle Aware Data Loading with Architecture Components',
  //       link: 'https://medium.com/androiddevelopers/lifecycle-aware-data-loading-with-android-architecture-components-f95484159de4',
  //       description: 'Ian Lake (on Medium)'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Storing Prefs with SharedPreferences',
  //   weeks: [ 6, 7 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1Bod43t4V_b1KPvijQIf7wQL90BOxcNTKm1D8r8LO1U8/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS492-W19/GitHubSearchWithPrefs',
  //       description: 'code written in lecture'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Settings',
  //       link: 'https://developer.android.com/guide/topics/ui/settings/',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Save key-value data',
  //       link: 'https://developer.android.com/training/data-storage/shared-preferences',
  //       description: 'Android Developers'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Storing Data with SQLite (Featuring Navigation Drawers)',
  //   weeks: [ 7, 8 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1M0B8LPzEbYFzF08Jp9ybUc2F94qwSDXHh-9jkgHam0U/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS492-W19/GitHubSearchWithSQLite',
  //       description: 'code written in lecture'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Create a navigation drawer',
  //       link: 'https://developer.android.com/training/implementing-navigation/nav-drawer',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'NavigationView',
  //       link: 'https://developer.android.com/reference/android/support/design/widget/NavigationView',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'SQLite Tutorial',
  //       link: 'http://www.sqlitetutorial.net/'
  //     },
  //     {
  //       title: 'Save data in a local database using Room',
  //       link: 'https://developer.android.com/training/data-storage/room/',
  //       description: 'Android Developers'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Revisiting the Activity Lifecycle: Incorporating ViewModel',
  //   weeks: [ 8, 9 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/18vxnSkYTDzF4KMANiJt517IKSzlZebO-GBhCXxoW_nA/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS492-W19/GitHubSearchWithViewModel',
  //       description: 'code written in lecture'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'ViewModel Overview',
  //       link: 'https://developer.android.com/topic/libraries/architecture/viewmodel',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Guide to app architecture',
  //       link: 'https://developer.android.com/jetpack/docs/guide',
  //       description: 'Android Developers'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'A Photo Gallery App',
  //   weeks: [ 9, 10 ],
  //   isCurrent: true,
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1GdTrvxIm27MMKjYiVKyR7LF_kdU58IiYQSL7Tyqev4s/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS492-W19/PhotosApp',
  //       description: 'code written in lecture'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Creating swipe views with tabs',
  //       link: 'https://developer.android.com/training/implementing-navigation/lateral',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Glide documentation',
  //       link: 'http://bumptech.github.io/glide/'
  //     }
  //   ]
  // },
  //
  // {
  //   title: 'Background Work and Notifications',
  //   weeks: [ 10 ],
  //   isCurrent: true,
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1zZAneZTOFFfDhze99ZeJpOb_0XO98pXfUYr3e8M6Z90/edit?usp=sharing'
  //     },
  //     {
  //       title: 'Example code',
  //       link: 'https://github.com/OSU-CS492-W19/GitHubSearchWithNotifications',
  //       description: 'code written in lecture'
  //     }
  //   ],
  //   readings: [
  //     {
  //       title: 'Guide to background processing',
  //       link: 'https://developer.android.com/guide/background/',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Getting started with WorkManager',
  //       link: 'https://developer.android.com/topic/libraries/architecture/workmanager/basics',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Notifications Overview',
  //       link: 'https://developer.android.com/guide/topics/ui/notifiers/notifications',
  //       description: 'Android Developers'
  //     },
  //     {
  //       title: 'Create a Notification',
  //       link: 'https://developer.android.com/training/notify-user/build-notification',
  //       description: 'Android Developers'
  //     }
  //   ]
  // }
];

export default topics;
