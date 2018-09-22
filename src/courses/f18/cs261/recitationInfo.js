var recitationInfo = {
  policiesHTML: [
    '<strong>Recitation attendance.</strong> Attendance is required for recitations, and you must attend the recitation section for which you are registered.  Excused absences from recitations must be approved by the lecture instructor.  It is your responsibility to make up recitation work missed for an excused absence.  You will receive a zero for any unexcused absences from recitation.',
    '<strong>No laptops.</strong> You may not use a laptop in recitation, <em>except during the first week\'s recitation, for which you will need a laptop.',
    '<strong>Writing utensil required.</strong> You must bring a writing utensil to recitation.',
    '<strong>Recitation worksheet.</strong> It is your responsibility to print the week\'s recitation worksheet and to bring it with you to recitation.',
    '<strong><a href="https://docs.google.com/document/d/1fGxLaNdInNcc3IKEwentHlq5FDmHPAwUvEFDTtTI5j8/edit?usp=sharing">Recitation syllabus.</a></strong>'
  ],

  sections: [
    {
      number: '010',
      dayTime: 'Tu 3:00-3:50pm',
      location: 'Weniger 287',
      ta: 'Zahir Al-Sulaimawi'
    },
    {
      number: '011',
      dayTime: 'W 3:00-3:50pm',
      location: 'KEC 1001',
      ta: 'Zahir Al-Sulaimawi'
    },
    {
      number: '012',
      dayTime: 'W 6:00-6:50pm',
      location: 'KEC 1003',
      ta: 'Aayam Shrestha'
    },
    {
      number: '013',
      dayTime: 'Th 8:00-8:50am',
      location: 'KEC 1003',
      ta: 'Prashant Kumar'
    },
    {
      number: '014',
      dayTime: 'Th 6:00-6:50pm',
      location: 'KEC 1003',
      ta: 'Aayam Shrestha'
    },
    {
      number: '015',
      dayTime: 'Tu 6:00-6:50pm',
      location: 'KEC 1003',
      ta: 'Chloe Fleming'
    },
    {
      number: '016',
      dayTime: 'Tu 10:00-10:50am',
      location: 'STAG 160',
      ta: 'Andrew Emmott'
    },
    {
      number: '017',
      dayTime: 'W 11:00-11:50am',
      location: 'Milam 033',
      ta: 'Chloe Fleming'
    },
    {
      number: '018',
      dayTime: 'M 6:00-6:50pm',
      location: 'KEC 1003',
      ta: 'Prashant Kumar'
    }
  ],

  calendar: [
    {
      week: 0,
      sections: [
        {
          heading: 'No recitation this week.',
        }
      ]
    },

    {
      week: 1,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Recitation syllabus review',
            '<a href="https://docs.google.com/presentation/d/1Y_az4p9rHyE33dAQBB6ZYTvYkVbu44dl5aWFT2NRfwY/edit?usp=sharing">CS 261 IT Basics</a>'
          ]
        },
        {
          heading: 'Recitation worksheet',
          entriesHTML: [
            '<a href="https://docs.google.com/document/d/1VIeZ-OQujN4vbrlEM2V72VtaRr7Tj63tssBLtS47_JQ/edit?usp=sharing">Week 1 Recitation Worksheet</a> &ndash; print this and bring it with you to recitation',
            '<a href="https://gist.githubusercontent.com/robwhess/a55e1360b474b910ab19b3af24cd5ae2/raw/301eb52186fa405d80311b5827f9dfc1d15bce31/test.c">Here\'s a link</a> to the C program you\'ll have to download as part of the week\'s recitation exercise.'
          ]
        }
      ]
    }
  ]
};

export default recitationInfo;
