import { generateSitePath } from '../../../lib/SitePath';
import FinalProjectProposalPage from './FinalProjectProposalPage';

var courseDetails = {
  number: 'CS 496',
  title: 'Mobile Software Development',
  term: 'Spring 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)'
    },
    {
      title: 'TA',
      infoHTML: 'Jake Joseph (<a href="mailto:josepjak@oregonstate.edu">josepjak@oregonstate.edu</a>)'
    },
    {
      title: 'Lectures',
      infoHTML: 'TuTh 4:00&ndash;5:20pm, OWEN 102'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: M 3:00&ndash;4:00pm, Tu 2:00&ndash;3:00pm (KEC 1109)<br>Jake: MW 9:00&ndash;10:00am, Tu 3:00&ndash;4:00pm (KEC Atrium)'
    },
    {
      title: 'Grading Hours',
      infoHTML: 'Jake: <a href="http://doodle.com/poll/8zbuye5zr8amrc83">Sign up here</a> (KEC Atrium)'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1WuqD2mJ8w_ayB64cpSJC8phApNmRRGSRyFF3KZRMXnw/edit?usp=sharing">CS 496 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2017/cs496">CS 496 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: [
    {
      week: 1,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Course Intro &ndash; <a href="https://docs.google.com/document/d/1UTWRygJFwM_4rh3qziFHHlRDwMST5hDcYe9ABZSSmyA/edit?usp=sharing">notes</a>',
            'Git and GitHub &ndash; <a href="https://docs.google.com/document/d/1AdrFnQTwCLeB5dCphfRj3itg6cTcaeePm2WCtVHlLGA/edit?usp=sharing">notes</a>',
            'Java &ndash; <a href="https://docs.google.com/document/d/10-d9kS41MD5JXYK0vbuJBtNXP6yAZQzmTjYnsL8WxGs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/java">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="http://pages.cs.wisc.edu/~hasti/cs368/JavaTutorial/">Java for C++ Programmers</a> &ndash; Beck Hasti',
          ]
        }
      ]
    },
    {
      week: 2,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Java &ndash; <a href="https://docs.google.com/document/d/10-d9kS41MD5JXYK0vbuJBtNXP6yAZQzmTjYnsL8WxGs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/java">example code</a>',
            'Getting Started with Android Studio &ndash; <a href="https://docs.google.com/document/d/182E2WAi6A7IgaStmhQLK8aMUcSf1x71bteQ-L3iIom4/edit?usp=sharing">notes</a>',
            'Our First Android App: TODOs &ndash; <a href="https://docs.google.com/document/d/1Uq5jFnnBvBpy0qEou13UVUkAhIekvfl_OcYDdSah4Cs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/SimpleTODOs">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/studio/intro/index.html">Android Studio User Guide</a>',
            '<a href="https://developer.android.com/training/basics/firstapp/index.html">Building Your First App</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/components/activities/intro-activities.html">Introduction to Activities</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/topics/ui/declaring-layout.html">Layouts</a> &ndash; Android Developers'
          ]
        }
      ]
    },
    {
      week: 3,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'RecyclerView &ndash; <a href="https://docs.google.com/document/d/1LfCy-0xNEjYXCZFcwbRdtEgeeQI3IC5tVrHJEUljuu8/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/RecyclerViewTODOs">example code</a>',
            'User Interactions and RecyclerView &ndash; <a href="https://docs.google.com/document/d/1nzNxY5fh9KSfr1-jtyebn5mqg87mL0ScqrSf2HejBGI/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/RecyclerViewInteractions">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/guide/topics/ui/layout/recyclerview.html">RecyclerView</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/training/material/lists-cards.html#RecyclerView">Creating Lists and Cards (Create Lists)</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/topics/ui/notifiers/toasts.html">Toasts</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/reference/android/support/v7/widget/helper/ItemTouchHelper.SimpleCallback.html">ItemTouchHelper.SimpleCallback</a> &ndash; Android Developers'
          ]
        }
      ]
    },
    {
      week: 4,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Fetching Internet Data using AsyncTask &ndash; <a href="https://docs.google.com/document/d/1vBELl7qpuxlwZaRs7HJ6fEAAUGP1SIEoz4cP0YF0Ds8/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/GitHubSearch">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/reference/java/net/URL.html">URL</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/reference/android/net/Uri.Builder.html">Uri.Builder</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/components/processes-and-threads.html">Processes and Threads</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/reference/android/os/AsyncTask.html">AsyncTask</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/topics/permissions/index.html">Permissions</a> &ndash; Android Developers',
            '<a href="https://www.tutorialspoint.com/android/android_json_parser.htm">Android - JSON Parser</a> &ndash; TutorialsPoint'
          ]
        }
      ]
    },
    {
      week: 5,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Starting New Activities with Intents &ndash; <a href="https://docs.google.com/document/d/1JDw2GH9zSPlaLSstrw2CH_ugSfdeA-v7qfl7HoXkS1E/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/GitHubSearchWithIntents">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/training/basics/firstapp/starting-activity.html">Start Another Activity</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/components/intents-filters.html">Intents and Intent Filters</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/topics/ui/menus.html">Menus</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/training/basics/intents/sending.html">Sending the User to Another App</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/training/sharing/index.html">Sharing Simple Data</a> &ndash; Android Developers'
          ]
        }
      ]
    },
    {
      week: 6,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'The Activity Lifecycle and Loaders &ndash; <a href="https://docs.google.com/document/d/18vxnSkYTDzF4KMANiJt517IKSzlZebO-GBhCXxoW_nA/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/LifecycleLogging">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/guide/components/activities/activity-lifecycle.html">The Activity Lifecycle</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/components/activities/state-changes.html">Activity State Changes</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/guide/components/activities/tasks-and-back-stack.html">Tasks and Back Stack</a> &ndash; Android Developers'
          ]
        }
      ]
    },
    {
      week: 7,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'The Activity Lifecycle and Loaders &ndash; <a href="https://docs.google.com/document/d/18vxnSkYTDzF4KMANiJt517IKSzlZebO-GBhCXxoW_nA/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/GitHubSearchWithLifecycle">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/guide/components/loaders.html">Loaders</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/reference/android/content/AsyncTaskLoader.html">AsyncTaskLoader</a> &ndash; Android Developers'
          ]
        }
      ]
    },
    {
      week: 8,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Storing Prefs with SharedPreferences &ndash; <a href="https://docs.google.com/document/d/1Bod43t4V_b1KPvijQIf7wQL90BOxcNTKm1D8r8LO1U8/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/GitHubSearchWithPreferences">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/guide/topics/ui/settings.html">Settings</a> &ndash; Android Developers',
            '<a href="https://developer.android.com/training/basics/data-storage/shared-preferences.html">Saving Key-Value Sets</a> &ndash; Android Developers'
          ]
        }
      ]
    }
  ],

  assignments: {
    preambleHTML: "<p> Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a <code>README.md</code> file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.</p>",
    assignments: [
      {
        link : 'https://classroom.github.com/assignment-invitations/0192703fc2e58909c9325671d4f83a82',
        title: 'Assignment 1 – The beginnings of a weather app',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 4/24/2017',
          'Demo due by 11:59pm on Monday, 5/8/2017'
        ]
      },
      {
        link : 'https://classroom.github.com/assignment-invitations/d1c8fd469370b44cf35e1ae3fe1d5395',
        title: 'Assignment 2 – Internet connectivity and intents',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 5/8/2017',
          'Demo due by 11:59pm on Monday, 5/22/2017'
        ]
      },
      {
        link : 'https://classroom.github.com/assignment-invitations/a245f4dc8c45c057e0eab16d0ce70aab',
        title: 'Assignment 3 – The activity lifecycle and AsyncTaskLoader',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 5/22/2017',
          'Demo due by 11:59pm on Monday, 6/4/2017'
        ]
      }
    ]
  },

  finalProject: {
    preambleHTML: "<p>For the final project in this course, you will work in teams to implement a complete Android app that gets data from a third-party API.  The project will have two deliverables: a proposal, where you outline the app you'd like to write; and an implementation of your app.  Follow the links below to find out more about each of these deliverables.</p>",
    assignments: [
      {
        title: 'Final Project Proposal',
        subPage: 'final-project-proposal',
        notesHTML: [
          'Due <a href="https://oregonstate.instructure.com/courses/1627342/assignments/6999157"><strong>on Canvas</strong></a> by 11:59pm on Friday 5/19/2017'
        ]
      }
    ]
  },

  subPages: {
    'final-project-proposal': FinalProjectProposalPage
  }
};

export default courseDetails;
