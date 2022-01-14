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
        title: '2019 Global State of Mobile Report',
        link: 'https://drive.google.com/file/d/1emCjHamQP5e3kFgWORv8YGnx9RogQPYr/view?usp=sharing',
        description: 'from Comscore'
      },
      {
        title: 'Application Fundamentals',
        link: 'https://developer.android.com/guide/components/fundamentals',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Kotlin Primer',
    weeks: [ 1, 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1BdHGrwyxafQrHUwp4n0m37q8xqmxBQXuEPZ8zWYPVJY/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w22/kotlin-primer',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Kotlin Bootcamp for Programmers',
        link: 'https://developer.android.com/courses/kotlin-bootcamp/overview',
        description: 'Android Developers'
      },
      {
        title: 'Kotlin By Example',
        link: 'https://play.kotlinlang.org/byExample/overview',
        description: 'Kotlin docs'
      },
      {
        title: 'Basic syntax',
        link: 'https://kotlinlang.org/docs/basic-syntax.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Null safety',
        link: 'https://kotlinlang.org/docs/null-safety.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Conditions and loops',
        link: 'https://kotlinlang.org/docs/control-flow.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Functions',
        link: 'https://kotlinlang.org/docs/functions.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Higher-order functions and lambdas',
        link: 'https://kotlinlang.org/docs/lambdas.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Classes',
        link: 'https://kotlinlang.org/docs/classes.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Properties',
        link: 'https://kotlinlang.org/docs/properties.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Inheritance',
        link: 'https://kotlinlang.org/docs/inheritance.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Interfaces',
        link: 'https://kotlinlang.org/docs/interfaces.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Generics',
        link: 'https://kotlinlang.org/docs/generics.html',
        description: 'Kotlin docs'
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
    title: 'Our First Android App: To-Dos',
    weeks: [ 2 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1jbk9s3ZDKJsVEyGD7h8HzyOKWzg5UjnD6zYDMyGA354/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w22/BasicToDos',
        description: 'GitHub repo for code written in lecture'
      },
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
    weeks: [ 3 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1OGRgzRL0KA3xdhmNnI8d5pcW9J1CO18tYxYFicghHH0/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w22/RecyclerViewToDos',
        description: 'GitHub repo for code written in lecture'
      },
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
    weeks: [ 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1nzNxY5fh9KSfr1-jtyebn5mqg87mL0ScqrSf2HejBGI/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-w21/RecyclerViewTodos',
      //   description: 'GitHub repo for code written in lecture'
      // },
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
      //   link: 'https://github.com/osu-cs492-w21/GitHubSearch',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Uri.Builder',
        link: 'https://developer.android.com/reference/android/net/Uri.Builder',
        description: 'Android Developers'
      },
      {
        title: 'OkHttp Recipes',
        link: 'https://square.github.io/okhttp/recipes/',
        description: 'OkHttp Wiki'
      },
      {
        title: 'Processes and threads overview',
        link: 'https://developer.android.com/guide/components/processes-and-threads',
        description: 'Android Developers'
      },
      {
        title: 'Volley overview',
        link: 'https://developer.android.com/training/volley',
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

  {
    title: 'Starting New Activities with Intents',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1JDw2GH9zSPlaLSstrw2CH_ugSfdeA-v7qfl7HoXkS1E/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-w21/MultiActivityGitHubSearch',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Start Another Activity',
        link: 'https://developer.android.com/training/basics/firstapp/starting-activity',
        description: 'Android Developers'
      },
      {
        title: 'Intents and Intent Filters',
        link: 'https://developer.android.com/guide/components/intents-filters',
        description: 'Android Developers'
      },
      {
        title: 'Menus',
        link: 'https://developer.android.com/guide/topics/ui/menus',
        description: 'Android Developers'
      },
      {
        title: 'Sending the User to Another App',
        link: 'https://developer.android.com/training/basics/intents/sending',
        description: 'Android Developers'
      },
      {
        title: 'Sharing Simple Data',
        link: 'https://developer.android.com/training/sharing/',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'The Activity Lifecycle and the ViewModel Architecture',
    weeks: [ 6, 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/18vxnSkYTDzF4KMANiJt517IKSzlZebO-GBhCXxoW_nA/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-w21/LifecycleAwareGitHubSearch',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Understand the Activity Lifecycle',
        link: 'https://developer.android.com/guide/components/activities/activity-lifecycle',
        description: 'Android Developers'
      },
      {
        title: 'Handle Activity State Changes',
        link: 'https://developer.android.com/guide/components/activities/state-changes',
        description: 'Android Developers'
      },
      {
        title: 'Understand Tasks and Back Stack',
        link: 'https://developer.android.com/guide/components/activities/tasks-and-back-stack',
        description: 'Android Developers'
      },
      {
        title: 'ViewModel Overview',
        link: 'https://developer.android.com/topic/libraries/architecture/viewmodel',
        description: 'Android Developers'
      },
      {
        title: 'Guide to app architecture',
        link: 'https://developer.android.com/jetpack/docs/guide',
        description: 'Android Developers'
      },
      {
        title: 'Lifecycle Aware Data Loading with Architecture Components',
        link: 'https://medium.com/androiddevelopers/lifecycle-aware-data-loading-with-android-architecture-components-f95484159de4',
        description: 'Ian Lake (on Medium)'
      },
      {
        title: 'Retrofit',
        link: 'https://square.github.io/retrofit/',
        description: 'A type-safe HTTP client for Android and Java'
      }
    ]
  },

  {
    title: 'Storing Prefs with SharedPreferences',
    weeks: [ 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Bod43t4V_b1KPvijQIf7wQL90BOxcNTKm1D8r8LO1U8/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-w21/GitHubSearchWithPrefs',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Settings',
        link: 'https://developer.android.com/guide/topics/ui/settings/',
        description: 'Android Developers'
      },
      {
        title: 'Save key-value data',
        link: 'https://developer.android.com/training/data-storage/shared-preferences',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Storing Data with SQLite (Featuring Navigation Drawers)',
    weeks: [ 8, 9 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1M0B8LPzEbYFzF08Jp9ybUc2F94qwSDXHh-9jkgHam0U/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-w21/GitHubSearchWithSQLite',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Create a navigation drawer',
        link: 'https://developer.android.com/training/implementing-navigation/nav-drawer',
        description: 'Android Developers'
      },
      {
        title: 'NavigationView',
        link: 'https://developer.android.com/reference/android/support/design/widget/NavigationView',
        description: 'Android Developers'
      },
      {
        title: 'SQLite Tutorial',
        link: 'http://www.sqlitetutorial.net/'
      },
      {
        title: 'Save data in a local database using Room',
        link: 'https://developer.android.com/training/data-storage/room/',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Background Work and Notifications',
    weeks: [ 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1zZAneZTOFFfDhze99ZeJpOb_0XO98pXfUYr3e8M6Z90/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-w21/GitHubSearchWithNotifications',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Guide to background processing',
        link: 'https://developer.android.com/guide/background/',
        description: 'Android Developers'
      },
      {
        title: 'Getting started with WorkManager',
        link: 'https://developer.android.com/topic/libraries/architecture/workmanager/basics',
        description: 'Android Developers'
      },
      {
        title: 'Notifications Overview',
        link: 'https://developer.android.com/guide/topics/ui/notifiers/notifications',
        description: 'Android Developers'
      },
      {
        title: 'Create a Notification',
        link: 'https://developer.android.com/training/notify-user/build-notification',
        description: 'Android Developers'
      }
    ]
  },

  // {
  //   title: 'A Photo Gallery App',
  //   weeks: [ 10 ],
  //   resources: [
  //     {
  //       title: 'Lecture notes',
  //       link: 'https://docs.google.com/document/d/1GdTrvxIm27MMKjYiVKyR7LF_kdU58IiYQSL7Tyqev4s/edit?usp=sharing'
  //     },
  //     // {
  //     //   title: 'Example code',
  //     //   link: 'https://github.com/osu-cs492-w20/PhotoGallery',
  //     //   description: 'GitHub repo for code written in lecture'
  //     // }
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
  // }
];

export default topics;
