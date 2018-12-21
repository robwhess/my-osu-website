const recitations = {
  calendar: [
    {
      title: 'Week 0',
      notes: [
        'No recitation this week.'
      ]
    },

    {
      title: 'Week 1: Recitation Preparation',
      resources: [
        {
          title: 'CS 261 IT Basics',
          link: 'https://docs.google.com/presentation/d/15J_2DPpmXAHfDtsQXM_Bkj8wsyq6mthf8AB4vFU24JQ/edit?usp=sharing'
        },
        {
          title: 'Recitation worksheet',
          link: 'https://docs.google.com/document/d/1VIeZ-OQujN4vbrlEM2V72VtaRr7Tj63tssBLtS47_JQ/edit?usp=sharing',
          description: 'Print this and bring it with you to recitation.'
        },
        {
          title: 'test.c',
          link: 'https://gist.githubusercontent.com/robwhess/a55e1360b474b910ab19b3af24cd5ae2/raw/301eb52186fa405d80311b5827f9dfc1d15bce31/test.c',
          description: 'This is the C program you\'ll have to download as part of the week\'s recitation exercise.'
        }
      ]
    }
  ],

  sections: {
    '010': {
      meeting: {
        day: 'Tu',
        time: '3:00 &ndash; 3:50pm',
        location: 'Weniger 287'
      },
      ta: 'Zahir Al-Sulaimawi'
    },
    '011': {
      meeting: {
        day: 'W',
        time: '3:00 &ndash; 3:50pm',
        location: 'KEC 1001'
      },
      ta: 'Zahir Al-Sulaimawi'
    },
    '012': {
      meeting: {
        day: 'W',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      ta: 'Aayam Shrestha'
    },
    '013': {
      meeting: {
        day: 'Th',
        time: '8:00 &ndash; 8:50am',
        location: 'KEC 1003'
      },
      ta: 'Prashant Kumar'
    },
    '014': {
      meeting: {
        day: 'Th',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      ta: 'Chloe Fleming'
    },
    '015': {
      meeting: {
        day: 'Tu',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      ta: 'Aayam Shrestha'
    },
    '016': {
      meeting: {
        day: 'Tu',
        time: '10:00 &ndash; 10:50am',
        location: 'STAG 160'
      },
      ta: 'Andrew Emmott'
    },
    '017': {
      meeting: {
        day: 'W',
        time: '11:00 &ndash; 11:50am',
        location: 'Milam 033'
      },
      ta: 'Chloe Fleming'
    },
    '018': {
      meeting: {
        day: 'M',
        time: '6:00 &ndash; 6:50pm',
        location: 'KEC 1003'
      },
      ta: 'Prashant Kumar'
    }
  },

  policies: [
    '**Recitation attendance.** Attendance is required for recitations, and you must attend the recitation section for which you are registered.  Excused absences from recitations must be approved by the lecture instructor.  It is your responsibility to make up recitation work missed for an excused absence.  You will receive a zero for any unexcused absences from recitation.',
    '**No laptops.** You may not use a laptop in recitation, <em>except during the first week\'s recitation, for which you will need a laptop.',
    '**Writing utensil required.** You must bring a writing utensil to recitation.',
    '**Recitation worksheet.** It is your responsibility to print the week\'s recitation worksheet and to bring it with you to recitation.',
    '**[Recitation syllabus.](https://docs.google.com/document/d/1fGxLaNdInNcc3IKEwentHlq5FDmHPAwUvEFDTtTI5j8/edit?usp=sharing)**'
  ]
};

export default recitations;
