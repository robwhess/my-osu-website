const recitations = {
  calendar: [
    {
      title: 'Week 0: No Recitation',
      notes: [
        'No recitation this week.'
      ]
    },

    {
      title: 'Week 1: CS 261 IT',
      resources: [
        {
          title: 'CS 261 IT Basics',
          link: 'https://docs.google.com/presentation/d/15J_2DPpmXAHfDtsQXM_Bkj8wsyq6mthf8AB4vFU24JQ/edit?usp=sharing',
          description: 'Presentation slides.'
        },
        {
          title: 'Recitation exercise worksheet',
          link: 'https://docs.google.com/document/d/1VIeZ-OQujN4vbrlEM2V72VtaRr7Tj63tssBLtS47_JQ/edit?usp=sharing'
        },
        {
          title: 'test.c',
          link: 'https://gist.githubusercontent.com/robwhess/a55e1360b474b910ab19b3af24cd5ae2/raw/938ddc0320bc962797c07d837477651722182146/test.c',
          description: 'This is the C program you\'ll have to download as part of the week\'s recitation exercise.'
        }
      ],
      readings: [
        {
          title: 'Beginner\'s Guide To SSH',
          link: 'https://youtu.be/qWKK_PNHnnA',
          description: 'This is a great, short video explaining what SSH is and how to use it.  Give this a watch if you\'re not familiar with SSH and want to brush up.'
        },
        {
          title: 'The Linux command line for beginners',
          link: 'https://ubuntu.com/tutorials/command-line-for-beginners',
          description: 'If you need further help with using the terminal, this tutorial might be a good one to follow.  It\'s written in the context of using a terminal directly on a Linux machine, but is still really relevant for what we need to do in this course.'
        }
      ]
    },

    {
      title: 'Week 2: Debugging with GDB and Valgrind',
      resources: [
        {
          title: 'Recitation exercise worksheet',
          link: 'https://docs.google.com/document/d/1WtKcGEB-lbbnr7dyzG_dR5ftD2RXOoS3ztcT4DkJP_4/edit?usp=sharing'
        },
        {
          title: 'Recitation exercise code',
          link: 'https://github.com/osu-cs261-f24/recitation-2',
          description: 'This GitHub repo contains the buggy code you\'ll work with for this week\'s recitation exercise.'
        },
        {
          title: 'GDB/Valgrind Tutorial Video #1',
          link: 'https://media.oregonstate.edu/media/t/1_2s6m3klv',
          description: 'A short tutorial video on some basics of GDB/Valgrind'
        },
        {
          title: 'GDB/Valgrind Tutorial Video #2',
          link: 'https://media.oregonstate.edu/media/t/1_k1xlf75p',
          description: 'Another short tutorial video on how to use GDB/Valgrind'
        }
      ],
      notes: [
        'There won\'t be a quiz in recitation this week, only an exercise.'
      ]
    },

    {
      title: 'Week 3: C Pointers and Memory Allocation',
      resources: [
        {
          title: 'Recitation exercise worksheet',
          link: 'https://docs.google.com/document/d/14iKjOR6u8xYm1IUbvUSs538WrTD8nCXsVeZt24vE_bk/edit?usp=sharing',
          description: 'Submit on Canvas at the end of recitation'
        },
        {
          title: 'prog1.c and prog2.c',
          link: 'https://gist.github.com/robwhess/5b102e5f7dbaad3f51b48cd7ef9ac7a5',
          description: 'This GitHub Gist contains the two C programs you\'ll have to analyze for this week\'s recitation exercise.'
        }
      ]
    },

    {
      title: 'Week 4: Iteration and Data Hiding',
      resources: [
        {
          title: 'Recitation exercise worksheet',
          link: 'https://docs.google.com/document/d/1fHzdtB9q3jXAFBz6GtE9GkZjzDxJaWgJeyXCmhZV4tA/edit?usp=sharing',
          description: 'Submit on Canvas at the end of recitation'
        },
        {
          title: 'Recitation exercise code',
          link: 'https://github.com/osu-cs261-f24/recitation-4',
          description: 'This GitHub repo contains the linked list code you\'ll have to analyze and fix for this week\'s recitation exercise.'
        }
      ]
    },

    {
      title: 'Week 5: Runtime Effects of Dynamic Array Resizing Strategies',
      resources: [
        {
          title: 'Recitation exercise worksheet',
          link: 'https://docs.google.com/document/d/1BwkBaIK1bqruzXo7-Zn35SHjCJyLkiv52vIEAikuFnc/edit?usp=sharing'
        },
        {
          title: 'Recitation exercise code',
          link: 'https://github.com/osu-cs261-f24/recitation-5',
          description: 'This GitHub repo contains the dynamic array code you\'ll work with for this week\'s recitation exercise.'
        }
      ]
    },

    {
      title: 'Week 6: Stack and Queue Job Interview Questions',
      resources: [
        {
          title: 'Recitation exercise worksheet',
          link: 'https://docs.google.com/document/d/18regEBb0IVD4mu1ek4B9t75aFZIzgqDSuCUgaLV6h_I/edit?usp=sharing'
        }
      ]
    },

    {
      title: 'Week 7: Recursion',
      isCurrent: true,
      resources: [
        {
          title: 'Recitation exercise worksheet',
          link: 'https://docs.google.com/document/d/1TT1AYFuvWOCFZ73EEY7lvpbZKOp2bxnoSHoHWj3d6Ho/edit?usp=sharing'
        },
        {
          title: 'Recitation exercise code',
          link: 'https://github.com/osu-cs261-f24/recitation-7',
          description: 'This GitHub repo contains the starter code you\'ll work with for this week\'s recitation exercise.'
        }
      ]
    },

    // {
    //   title: 'Week 8: No Recitation',
    //   notes: [
    //     'No recitation this week due to the Thanksgiving holiday.'
    //   ]
    // },

    // {
    //   title: 'Week 9: BST and AVL Tree Comparison',
    //   resources: [
    //     {
    //       title: 'Recitation exercise worksheet',
    //       link: 'https://docs.google.com/document/d/1pNBpZePXE3-Ml5xoc5uMkuleGdkhS42e43HSOwJ4UuI/edit?usp=sharing'
    //     }
    //   ]
    // },

    // {
    //   title: 'Week 10: Student Learning Experience Survey',
    //   resources: [
    //     {
    //       title: 'Recitation exercise worksheet',
    //       link: 'https://docs.google.com/document/d/1FxLjyup7WhY-5w31HoKvLP5Pzpi167u1jZKQIU5w2L4/edit?usp=sharing'
    //     },
    //     {
    //       title: 'OSU Student Learning Experience Survey (SLE)',
    //       link: 'https://beav.es/Student-Learning-Survey'
    //     }
    //   ]
    // }
  ],

  sections: {
    '021': {
      meeting: {
        day: 'W',
        time: '2:00 &ndash; 3:50pm',
        timeZone: 'US/Pacific',
        location: 'DEAR 203',
      },
      tas: [ 'Ksenia Bannova', 'Riley Rice' ]
    },
    '022': {
      meeting: {
        day: 'Tu',
        time: '12:00 &ndash; 1:50pm',
        timeZone: 'US/Pacific',
        location: 'DEAR 203',
      },
      tas: [ 'Gabriel de Leon', 'Son Nguyen' ]
    },
    '023': {
      meeting: {
        day: 'Tu',
        time: '4:00 &ndash; 5:50pm',
        timeZone: 'US/Pacific',
        location: 'DEAR 203',
      },
      tas: [ 'Jinwoo Baek', 'Riley Rice' ]
    },
    '024': {
      meeting: {
        day: 'W',
        time: '12:00 &ndash; 1:50pm',
        timeZone: 'US/Pacific',
        location: 'DEAR 203',
      },
      tas: [ 'Mahmoud Fakhry' ]
    }
  },

  policies: [
    '**Recitation attendance.** In-person attendance is required for recitations, and you must attend the recitation section for which you are registered.  Excused absences from recitations must be approved by the lecture instructor.  It is your responsibility to make up recitation work missed for an excused absence.  You will receive a zero for any unexcused absences from recitation.',
    '**Recitation quizzes.** Each week during recitation, you will take a short quiz that will count towards your overall final grade for the course.  These quizzes may contain various types of questions (short answer, true/false, multiple choice, relevant math problems, etc.)  Each quiz will count for an equal portion of your overall grade.',
    '**Recitation exercises.** Each week during recitation, you will work in a small group on an exercise designed to more deeply explore one or more topics from lecture.  Each exercise will have a deliverable that you\'ll need to submit on Canvas before the end of the recitation period.  Your submission will be graded *based on effort*, not correctness, and this grade will count towards your final grade for the course.',
    '**Laptops required.** Many of the recitation exercises will require a laptop, so make sure you bring yours.',
    '**Writing utensil required.** You must bring a writing utensil to recitation.'
  ]
};

export default recitations;
