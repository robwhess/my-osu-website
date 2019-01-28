import ExampleDesignDocument from '../../../static/cs162-example-design-document.pdf';

const recitations = {
  calendar: [
    {
      title: 'Week 1: Recitation Overview & Assignment 1 Design',
      resources: [
        {
          title: 'CS 162 recitation syllabus',
          link: 'https://docs.google.com/document/d/1IvZbg-nn8Si0AV7XjS0zbedu7Uf9IJp1-TH5hUxWWt0/edit?usp=sharing'
        },
        {
          title: 'CS 162 design document requirements',
          link: 'https://docs.google.com/document/d/1_5AGiczmRTAi1IVLpYIfIXlLNfpS2oPLQegobG2KL1c/edit?usp=sharing'
        },
        {
          title: 'Example design document',
          link: ExampleDesignDocument
        },
        {
          title: 'Assignment 1 link',
          link: 'https://classroom.github.com/a/rP9YUQXN',
          description: 'on GitHub Classroom'
        }
      ],
      notes: [
        'Assignment 1 design due on Canvas by 11:59pm, Sunday 1/13/2019'
      ]
    },

    {
      title: 'Week 2: Assignment 1 Design Review',
      resources: [
        {
          title: 'Week 2 quiz solutions',
          link: 'https://docs.google.com/document/d/1DWx80uBSLQdw45yBltY-UB1U_-UiAf0C2SlEQzoYqho/edit?usp=sharing'
        }
      ],
      notes: [
        'In this week\'s recitation, your TA will review your assignment 1 designs and take questions on the assignment.'
      ]
    },

    {
      title: 'Week 3: Assignment 2 Design',
      isCurrent: true,
      resources: [
        {
          title: 'CS 162 design document requirements',
          link: 'https://docs.google.com/document/d/1_5AGiczmRTAi1IVLpYIfIXlLNfpS2oPLQegobG2KL1c/edit?usp=sharing'
        },
        {
          title: 'Example design document',
          link: ExampleDesignDocument
        },
        {
          title: 'Assignment 2 link',
          link: 'https://classroom.github.com/a/phbOO7kT',
          description: 'on GitHub Classroom'
        }
      ],
      notes: [
        'Assignment 2 design due on Canvas by 11:59pm, Sunday 1/27/2019'
      ]
    },

    {
      title: 'Week 4: Assignment 2 Design Review',
      isCurrent: true,
      notes: [
        'In this week\'s recitation, your TA will review your assignment 2 designs and take questions on the assignment.'
      ]
    }
  ],

  sections: {
    '016': {
      meeting: {
        day: 'Tu',
        time: '2:00 &ndash; 2:50pm',
        location: 'Nash 204'
      },
      tas: [ 'Johannes Freischuetz' ]
    },
    '017': {
      meeting: {
        day: 'Tu',
        time: '3:00 &ndash; 3:50pm',
        location: 'KIDD 237'
      },
      tas: [ 'Johannes Freischuetz' ]
    },
    '018': {
      meeting: {
        day: 'W',
        time: '10:00 &ndash; 10:50am',
        location: 'STAG 263'
      },
      tas: [ 'Mason Sidebottom' ]
    },
    '019': {
      meeting: {
        day: 'W',
        time: '11:00 &ndash; 11:50am',
        location: 'BRC 136'
      },
      tas: [ 'Alex Guyer' ]
    },
    '020': {
      meeting: {
        day: 'Th',
        time: '10:00 &ndash; 10:50am',
        location: 'PHAR 107'
      },
      tas: [ 'Johannes Freischuetz' ]
    },
    '021': {
      meeting: {
        day: 'Th',
        time: '11:00 &ndash; 11:50am',
        location: 'GILK 108'
      },
      tas: [ 'Johannes Freischuetz' ]
    },
    '022': {
      meeting: {
        day: 'Th',
        time: '2:00 &ndash; 2:50pm',
        location: 'Nash 204'
      },
      tas: [ 'Alex Guyer' ]
    }
  },

  policies: [
    '**Recitation attendance.** Attendance is required for recitations, and you must attend the recitation section for which you are registered.  Excused absences from recitations must be approved by the lecture instructor.  It is your responsibility to make up recitation work missed for an excused absence.  You will receive a zero for any unexcused absences from recitation.',
    '**No laptops.** You may not use a laptop in recitation.',
    '**Paper and writing utensil required.** You must bring paper and a writing utensil to recitation.',
    '**[Recitation syllabus.](https://docs.google.com/document/d/1IvZbg-nn8Si0AV7XjS0zbedu7Uf9IJp1-TH5hUxWWt0/edit?usp=sharing)**'
  ]
};

export default recitations;
