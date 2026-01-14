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
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1inGsny784QH8YwTX0kMwskfFknA3bhTJ2QZSbumdzyM/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w26/kotlin-primer',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Learn Kotlin for Android',
        link: 'https://developer.android.com/kotlin/campaign/learn',
        description: 'Android Developers'
      },
      {
        title: 'Kotlin Playground',
        link: 'https://play.kotlinlang.org',
        description: 'Kotlin docs'
      },
      {
        title: 'Kotlin Tour',
        link: 'https://kotlinlang.org/docs/kotlin-tour-welcome.html',
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
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/182E2WAi6A7IgaStmhQLK8aMUcSf1x71bteQ-L3iIom4/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Android Studio Homepage',
        link: 'https://developer.android.com/studio/'
      },
      {
        title: 'Meet Android Studio',
        link: 'https://developer.android.com/studio/intro/',
        description: 'An official overview of how to use Android Studio'
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
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-599-w24/BasicToDos',
      //   description: 'GitHub repo for code written in lecture'
      // },
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
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1OGRgzRL0KA3xdhmNnI8d5pcW9J1CO18tYxYFicghHH0/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs492-w26/RecyclerViewTodos',
        description: 'GitHub repo for code written in lecture'
      },
    ],
    readings: [
      {
        title: 'Create a List with RecyclerView',
        link: 'https://developer.android.com/guide/topics/ui/layout/recyclerview',
        description: 'Android Developers'
      },
      {
        title: 'Pop-up messages overview',
        link: 'https://developer.android.com/training/snackbar',
        description: 'Android Developers'
      },
      {
        title: 'ItemTouchHelper.SimpleCallback',
        link: 'https://developer.android.com/reference/androidx/recyclerview/widget/ItemTouchHelper.SimpleCallback.html',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Using Data from the Internet',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1KW2qwtoMDDYhP0ximsH1ZoyKmxCTqrub9cD6BQHpAmI/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-599-w24/GitHubSearch',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Getting started with the REST API',
        link: 'https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?tool=curl',
        description: 'GitHub Docs'
      },
      {
        title: 'Retrofit',
        link: 'https://square.github.io/retrofit/',
        description: 'Retrofit Docs'
      },
      {
        title: 'Permissions overview',
        link: 'https://developer.android.com/guide/topics/permissions/overview',
        description: 'Android Developers'
      },
      {
        title: 'An Introduction to JSON',
        link: 'https://www.digitalocean.com/community/tutorials/an-introduction-to-json',
        description: 'Lisa Tagliaferri (Digital Ocean)'
      },
      {
        title: 'Moshi',
        link: 'https://github.com/square/moshi/',
        description: 'on GitHub'
      },
      {
        title: 'App resources overview',
        link: 'https://developer.android.com/guide/topics/resources/providing-resources',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'The Activity Lifecycle and the ViewModel Architecture',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/18PdfWxcWt8LwIKByggbWQvK8JyR9KRcS5JJBdFed-4c/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-599-w24/ViewModelGitHubSearch',
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
        title: 'Coroutines basics',
        link: 'https://kotlinlang.org/docs/coroutines-basics.html',
        description: 'Kotlin docs'
      },
      {
        title: 'Kotlin coroutines on Android',
        link: 'https://developer.android.com/kotlin/coroutines',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Screens, Fragments, and the Jetpack Navigation Component',
    weeks: [ 6 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1gFowg2fA1EPyp7YrMu3vMSP02aP78FJESoRZTU6X-OM/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-599-w24/GitHubSearchWithNavigation',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Navigation',
        link: 'https://developer.android.com/guide/navigation',
        description: 'Android Developers'
      },
      {
        title: 'Fragments',
        link: 'https://developer.android.com/guide/fragments',
        description: 'Android Developers'
      },
      {
        title: 'Getting started with the Navigation component',
        link: 'https://developer.android.com/guide/navigation/navigation-getting-started',
        description: 'Android Developers'
      },
      {
        title: 'Create destinations',
        link: 'https://developer.android.com/guide/navigation/navigation-create-destinations',
        description: 'Android Developers'
      },
      {
        title: 'Design navigation graphs',
        link: 'https://developer.android.com/guide/navigation/navigation-design-graph',
        description: 'Android Developers'
      },
      {
        title: 'Navigate to a destination',
        link: 'https://developer.android.com/guide/navigation/navigation-navigate',
        description: 'Android Developers'
      },
      {
        title: 'Pass data between destinations',
        link: 'https://developer.android.com/guide/navigation/navigation-pass-data',
        description: 'Android Developers'
      },
      {
        title: 'Connect UI components to NavController using NavigationUI',
        link: 'https://developer.android.com/guide/navigation/integrations/ui',
        description: 'Android Developers'
      },
      {
        title: 'Sending the user to another app',
        link: 'https://developer.android.com/training/basics/intents/sending',
        description: 'Android Developers'
      },
      {
        title: 'Send simple data to other apps',
        link: 'https://developer.android.com/training/sharing/send',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Storing Settings with the Preference Library',
    weeks: [ 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/14c1sa_eBykec1EX1wlgJYr79IDOVsujnEJ4SiTAbYnk/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-599-w24/GitHubSearchWithSettings',
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
        title: 'Preference components and attributes',
        link: 'https://developer.android.com/guide/topics/ui/settings/components-and-attributes',
        description: 'Android Developers'
      },
      {
        title: 'Use saved values',
        link: 'https://developer.android.com/guide/topics/ui/settings/use-saved-values',
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
    title: 'Storing Data using the Room Persistence Library',
    weeks: [ 8 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1PXJW9mwYRW1_bVG54bXhm4o8YQu8KxFjIFAP1WPz7Ms/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-599-w24/GitHubSearchWithRoom',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'SQLite Tutorial',
        link: 'http://www.sqlitetutorial.net/'
      },
      {
        title: 'Save data in a local database using Room',
        link: 'https://developer.android.com/training/data-storage/room/',
        description: 'Android Developers'
      },
      {
        title: 'Defining data using Room entities',
        link: 'https://developer.android.com/training/data-storage/room/defining-data',
        description: 'Android Developers'
      },
      {
        title: 'Accessing data using Room DAOs',
        link: 'https://developer.android.com/training/data-storage/room/accessing-data',
        description: 'Android Developers'
      },
      {
        title: 'Kotlin flows on Android',
        link: 'https://developer.android.com/kotlin/flow',
        description: 'Android Developers'
      }
    ]
  },

  {
    title: 'Using the Navigation UI Library',
    weeks: [ 9 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1tLtktp8ZHqU6A3PSb7pbWn88_rTu2d2ssx5juNDA9iY/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-599-w24/GitHubSearchWithNavUI',
      //   description: 'GitHub repo for code written in lecture'
      // },
    ],
    readings: [
      {
        title: 'Update UI components with NavigationUI',
        link: 'https://developer.android.com/guide/navigation/navigation-ui',
        description: 'Android Developers'
      },
      {
        title: 'Navigation Drawer',
        link: 'https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationDrawer.md',
        description: 'Material Components Documentation'
      },
      {
        title: 'Bottom Navigation',
        link: 'https://github.com/material-components/material-components-android/blob/master/docs/components/BottomNavigation.md',
        description: 'Material Components Documentation'
      }
    ]
  },

  {
    title: 'Background Work and Notifications',
    weeks: [ 10 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Hgr56xP-UkL4tb0HvwlN6VBkPtjfCgjDAp2C2VAAu3Y/edit?usp=sharing'
      },
      // {
      //   title: 'Example code',
      //   link: 'https://github.com/osu-cs492-w22/GitHubSearchWithNotifications',
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
