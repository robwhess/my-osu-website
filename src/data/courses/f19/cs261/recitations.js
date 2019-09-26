const recitations = {
  calendar: [
    // {
    //   title: 'Week 10: No Recitation',
    //   notes: [
    //     'No recitation this week.'
    //   ]
    // },
    //
    // {
    //   title: 'Week 9: No Recitation',
    //   notes: [
    //     'No recitation this week.',
    //     'Only section 018 will meet on Monday at 6pm to cover week 8\'s recitation material.'
    //   ]
    // },
    //
    // {
    //   title: 'Week 8: Graph Representations',
    //   resources: [
    //     {
    //       title: 'Recitation worksheet',
    //       link: 'https://docs.google.com/document/d/1PjuSRUwXo16J_a0fwRmUg_JvxmT9uvYxcak3KPdEdaY/edit?usp=sharing',
    //       description: 'Print this and bring it with you to recitation.'
    //     },
    //     {
    //       title: 'Recitation Quiz Solutions',
    //       link: 'https://docs.google.com/document/d/1QO2RDjNpLRWepcBsVt7VKx6suS3RlfkUJOnHbKY6fZ0/edit?usp=sharing'
    //     }
    //   ]
    // },
    //
    // {
    //   title: 'Week 7: AVL Tree Operations',
    //   resources: [
    //     {
    //       title: 'Recitation worksheet',
    //       link: 'https://docs.google.com/document/d/1TTIe7OCqy6htYEl2kxfCLbYLAnDrgOqrSbNvAMPDx3k/edit?usp=sharing',
    //       description: 'Print this and bring it with you to recitation.'
    //     },
    //     {
    //       title: 'Recitation Worksheet Solutions',
    //       link: 'https://drive.google.com/open?id=0B8aZMq9VhvmrcXExc1pQdFM3ZTFXUHE4OFVGTFF1ajJ4TlE0'
    //     },
    //     {
    //       title: 'Recitation Quiz Solutions',
    //       link: 'https://docs.google.com/document/d/1OGgErCvtIBTfhdP8eRaVY6ivLdel0KT1TFUxwSPbVUM/edit?usp=sharing'
    //     }
    //   ]
    // },
    //
    // {
    //   title: 'Week 6: Midterm Solutions review',
    //   resources: [
    //     {
    //       title: 'No recitation worksheet this week.'
    //     }
    //   ]
    // },
    //
    // {
    //   title: 'Week 5: No Recitation',
    //   notes: [
    //     'No recitation this week.'
    //   ]
    // },
    //
    // {
    //   title: 'Week 4: Set Operations with Ordered Arrays',
    //   resources: [
    //     {
    //       title: 'Recitation worksheet',
    //       link: 'https://docs.google.com/document/d/1NrevxgIlatWTj3fo4h5l4r7CMTsMBBQeNKCnlw-WHUk/edit?usp=sharing',
    //       description: 'Print this and bring it with you to recitation.'
    //     },
    //     {
    //       title: 'Recitation Worksheet Solutions',
    //       link: 'https://docs.google.com/document/d/1QRWtPQWmulDyvKlqJ-UBsrc7ilNNARKLAcGeTcg0178/edit?usp=sharing'
    //     },
    //     {
    //       title: 'Recitation Quiz Solutions',
    //       link: 'https://docs.google.com/document/d/1r15d63MLyoOFBaS7O96jhWG2hGVUJybYenchwcEJMus/edit?usp=sharing'
    //     }
    //   ]
    // },
    //
    // {
    //   title: 'Week 3: Iterating through ADTs',
    //   resources: [
    //     {
    //       title: 'Recitation worksheet',
    //       link: 'https://docs.google.com/document/d/1c_3NsjNeVLlZkx46_VUs5I0D6KvGNursji3It-nL_QM/edit?usp=sharing',
    //       description: 'Print this and bring it with you to recitation.'
    //     },
    //     {
    //       title: 'Recitation Quiz Solutions',
    //       link: 'https://docs.google.com/document/d/1wQzap-66QQBPirWaS-9ZXzaQOnmq32rYEM9mejTSl0I/edit?usp=sharing'
    //     }
    //   ]
    // },
    //
    // {
    //   title: 'Week 2: Pointers and Program Memory in C',
    //   resources: [
    //     {
    //       title: 'Recitation worksheet',
    //       link: 'https://docs.google.com/document/d/1qLatGmhnC29_8rKXMd6OD80ZOQ6nppPlO3Duo9arLqc/edit?usp=sharing',
    //       description: 'Print this and bring it with you to recitation.'
    //     },
    //     {
    //       title: 'Recitation Worksheet Solutions',
    //       link: 'https://drive.google.com/open?id=0B8aZMq9VhvmrSVBtNmw0X3hobVhQTE1Xa3dVcHNfZWE4eHBN'
    //     },
    //     {
    //       title: 'Recitation Quiz Solutions',
    //       link: 'https://docs.google.com/document/d/1Tm0mPQMljeFRuWK505vWe4vq9vZzxDHpVz9Y6r1qlYM/edit?usp=sharing'
    //     }
    //   ]
    // },
    //
    // {
    //   title: 'Week 1: Recitation Preparation',
    //   resources: [
    //     {
    //       title: 'CS 261 IT Basics',
    //       link: 'https://docs.google.com/presentation/d/15J_2DPpmXAHfDtsQXM_Bkj8wsyq6mthf8AB4vFU24JQ/edit?usp=sharing',
    //       description: 'Presentation slides.'
    //     },
    //     {
    //       title: 'Recitation worksheet',
    //       link: 'https://docs.google.com/document/d/1VIeZ-OQujN4vbrlEM2V72VtaRr7Tj63tssBLtS47_JQ/edit?usp=sharing',
    //       description: 'Print this and bring it with you to recitation.'
    //     },
    //     {
    //       title: 'test.c',
    //       link: 'https://gist.githubusercontent.com/robwhess/a55e1360b474b910ab19b3af24cd5ae2/raw/301eb52186fa405d80311b5827f9dfc1d15bce31/test.c',
    //       description: 'This is the C program you\'ll have to download as part of the week\'s recitation exercise.'
    //     }
    //   ]
    // },

    {
      title: 'Week 0: No Recitation',
      isCurrent: true,
      notes: [
        'No recitation this week.'
      ]
    }
  ],

  sections: {
    '010': {
      meeting: {
        day: 'Tu',
        time: '3:00 &ndash; 3:50pm',
        location: 'Bexell 328'
      },
      tas: [ 'Seifeddine Mejri' ]
    },
    '011': {
      meeting: {
        day: 'W',
        time: '3:00 &ndash; 3:50pm',
        location: 'Bexell 323'
      },
      tas: [ 'Zahir Al-Sulaimawi' ]
    },
    '012': {
      meeting: {
        day: 'W',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      tas: [ 'Zahir Al-Sulaimawi' ]
    },
    '013': {
      meeting: {
        day: 'Th',
        time: '8:00 &ndash; 8:50am',
        location: 'Bexell 3289'
      },
      tas: [ 'Huahua Wang' ]
    },
    '014': {
      meeting: {
        day: 'Th',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      tas: [ 'Aaron Didner' ]
    },
    '015': {
      meeting: {
        day: 'Tu',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      tas: [ 'Jiawei Mo' ]
    },
    '016': {
      meeting: {
        day: 'Tu',
        time: '10:00 &ndash; 10:50am',
        location: 'Bexell 102'
      },
      tas: [ 'Gregory Blood' ]
    },
    '017': {
      meeting: {
        day: 'W',
        time: '11:00 &ndash; 11:50am',
        location: 'Bexell 102'
      },
      tas: [ 'Ryan Kennedy' ]
    },
    '018': {
      meeting: {
        day: 'M',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      tas: [ 'Jianlong Huang' ]
    }
  },

  policies: [
    '**Recitation attendance.** Attendance is required for recitations, and you must attend the recitation section for which you are registered.  Excused absences from recitations must be approved by the lecture instructor.  It is your responsibility to make up recitation work missed for an excused absence.  You will receive a zero for any unexcused absences from recitation.',
    '**No laptops.** You may not use a laptop in recitation, *except during the first week\'s recitation, for which you will need a laptop.*',
    '**Writing utensil required.** You must bring a writing utensil to recitation.',
    '**Recitation quizzes.** Each week during recitation, you will take a short quiz that will count towards your overall final grade for the course.  These quizzes may contain various types of questions (short answer, true/false, multiple choice, relevant math problems, etc.)  Each quiz will count for an equal portion of your overall grade.'
  ]
};

export default recitations;
