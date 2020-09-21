const recitations = {
  calendar: [
    {
      title: 'Week 0: No Recitation',
      isCurrent: true,
      notes: [
        'No recitation this week.'
      ]
    },

    // {
    //   title: 'Week 1: CS 261 IT',
    //   isCurrent: true,
    //   resources: [
    //     {
    //       title: 'CS 261 IT Basics',
    //       link: 'https://docs.google.com/presentation/d/15J_2DPpmXAHfDtsQXM_Bkj8wsyq6mthf8AB4vFU24JQ/edit?usp=sharing',
    //       description: 'Presentation slides.'
    //     },
    //     {
    //       title: 'Recitation worksheet',
    //       link: 'https://docs.google.com/document/d/1VIeZ-OQujN4vbrlEM2V72VtaRr7Tj63tssBLtS47_JQ/edit?usp=sharing'
    //     },
    //     {
    //       title: 'test.c',
    //       link: 'https://gist.githubusercontent.com/robwhess/a55e1360b474b910ab19b3af24cd5ae2/raw/938ddc0320bc962797c07d837477651722182146/test.c',
    //       description: 'This is the C program you\'ll have to download as part of the week\'s recitation exercise.'
    //     }
    //   ],
    //   notes: [
    //     'This week in recitation, instead of taking a quiz, you\'ll do a basic exercise to ensure that you are able to edit and compile code on the OSU ENGR servers (which you\'ll have to be able to do for all of your assignments in this course).  Complete the worksheet above and show the compiled program\'s output to your TA during your recitation section to earn full credit for this week\'s recitation.',
    //     '**Make sure to bring your laptop with you to recitation this week!**  The exercise you\'ll do will require a laptop.'
    //   ]
    // }
  ],

  sections: {
    '010': {
      meeting: {
        day: 'Tu',
        time: '8:00 &ndash; 9:50am',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '011': {
      meeting: {
        day: 'Tu',
        time: '10:00 &ndash; 11:50am',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '012': {
      meeting: {
        day: 'Tu',
        time: '12:00 &ndash; 1:50pm',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '013': {
      meeting: {
        day: 'Th',
        time: '8:00 &ndash; 9:50am',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '014': {
      meeting: {
        day: 'Th',
        time: '4:00 &ndash; 5:50pm',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '015': {
      meeting: {
        day: 'Tu',
        time: '2:00 &ndash; 3:50pm',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '016': {
      meeting: {
        day: 'Tu',
        time: '4:00 &ndash; 5:50pm',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '017': {
      meeting: {
        day: 'W',
        time: '4:00 &ndash; 5:50pm',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    },
    '018': {
      meeting: {
        day: 'M',
        time: '4:00 &ndash; 5:50pm',
        videoConferenceLink: ''
      },
      tas: [ 'TBD' ]
    }
  },

  policies: [
    '**Recitation attendance.** Attendance is required for recitations, and you must attend the recitation section for which you are registered.  Excused absences from recitations must be approved by the lecture instructor.  It is your responsibility to make up recitation work missed for an excused absence.  You will receive a zero for any unexcused absences from recitation.',
    // '**No laptops.** You may not use a laptop in recitation, *except during the first week\'s recitation, for which you will need a laptop.*',
    // '**Writing utensil required.** You must bring a writing utensil to recitation.',
    // '**Recitation quizzes.** Each week during recitation, you will take a short quiz that will count towards your overall final grade for the course.  These quizzes may contain various types of questions (short answer, true/false, multiple choice, relevant math problems, etc.)  Each quiz will count for an equal portion of your overall grade.'
    '**Recitation exercises.** Each week during recitation, you will work in a small group on an exercise designed to more deeply explore one or more topics from lecture.  Each exercise will have a deliverable that you\'ll need to submit on Canvas before the end of the recitation period.  Your submission will be graded *based on effort*, not correctness, and this grade will count towards your final grade for the course.'
  ]
};

export default recitations;
