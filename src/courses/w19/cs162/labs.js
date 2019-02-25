const recitations = {
  calendar: [
    {
      title: 'Lab 1: Git, GitHub, and C++ review',
      weeks: [ 1, 2 ],
      resources: [
        {
          title: 'Lab description',
          link: 'https://docs.google.com/document/d/1IrVJm1SPP2aOWi7w8fOoLFOszPgwGh0Gk4GuGO4ScGk/edit?usp=sharing',
          description: 'on Google Docs'
        },
        {
          title: 'GitHub Classroom link for lab',
          link: 'https://classroom.github.com/a/oC3UOqv2'
        }
      ],
      notes: [
        'This will be a 2-week lab.'
      ]
    },

    {
      title: 'Lab 3: File I/O',
      weeks: [ 3 ],
      resources: [
        {
          title: 'GitHub Classroom link for lab',
          link: 'https://classroom.github.com/a/LtNEhHcp'
        }
      ]
    },

    {
      title: 'Lab 4: Classes and OOP',
      weeks: [ 4 ],
      resources: [
        {
          title: 'GitHub Classroom link for lab',
          link: 'https://classroom.github.com/a/yKSGJWwb'
        },
        {
          title: 'Lab description',
          link: 'https://docs.google.com/document/d/1MN-PX8HAxpi7eagDanX5TR2F1E-tyVJf7_tMpxZCQ5w/edit?usp=sharing',
          description: 'on Google Docs'
        }
      ]
    },

    {
      title: 'Practice Proficiency Demo',
      weeks: [ 5 ],
      notes: [
        'This week in lab, we will have our practice proficiency demo, where you\'ll get a chance to practice doing a problem similar to the ones you\'ll do during the final proficiency demo.'
      ]
    },

    {
      title: 'Lab 6: Inheritance',
      weeks: [ 6 ],
      resources: [
        {
          title: 'GitHub Classroom link for lab',
          link: 'https://classroom.github.com/a/U2HqeGfo'
        },
        {
          title: 'Lab description',
          link: 'https://docs.google.com/document/d/1inAoXBmmONesrI0LrJSnh4lDPeRqtny27iA8cd8vg_o/edit?usp=sharing',
          description: 'on Google Docs'
        }
      ]
    },

    {
      title: 'Lab 7: Debugging using gdb',
      weeks: [ 7 ],
      resources: [
        {
          title: 'GitHub Classroom link for lab',
          link: 'https://classroom.github.com/a/ED42C9Xk'
        },
        {
          title: 'Lab description',
          link: 'https://docs.google.com/document/d/1IxW2MbbE0xWOerRcQoi3YYn_5TsmdwSc9v_061OosZk/edit?usp=sharing',
          description: 'on Google Docs'
        }
      ]
    },

    {
      title: 'Lab 8: Templates and exceptions',
      weeks: [ 8 ],
      isCurrent: true,
      resources: [
        {
          title: 'GitHub Classroom link for lab',
          link: 'https://classroom.github.com/a/7U1UkDpB'
        },
        {
          title: 'Lab description',
          link: 'https://docs.google.com/document/d/1xkceZkTgsAoWyzhfY_hRGswquh2m29xaSeMr4Zch5c0/edit?usp=sharing',
          description: 'on Google Docs'
        }
      ]
    }
  ],

  sections: {
    '010': {
      meeting: {
        day: 'Tu',
        time: '10:00 &ndash; 11:50am',
        location: 'DEAR 222'
      },
      tas: [ 'Kaitlin Hill', 'Jarrod Hollis', 'Fauzi Kliman' ]
    },
    '011': {
      meeting: {
        day: 'Tu',
        time: '12:00 &ndash; 1:50pm',
        location: 'DEAR 222'
      },
      tas: [ 'Benjamin Friedman', 'Jarrod Hollis', 'Fauzi Kliman' ]
    },
    '012': {
      meeting: {
        day: 'W',
        time: '2:00 &ndash; 3:50pm',
        location: 'DEAR 222'
      },
      tas: [ 'Benjamin Friedman', 'Burton Jaursch', 'Mason Sidebottom' ]
    },
    '013': {
      meeting: {
        day: 'Th',
        time: '2:00 &ndash; 3:50pm',
        location: 'DEAR 222'
      },
      tas: [ 'Kaitlin Hill', 'Jarrod Hollis', 'Aiden Nelson' ]
    },
    '014': {
      meeting: {
        day: 'Tu',
        time: '2:00 &ndash; 3:50pm',
        location: 'DEAR 222'
      },
      tas: [ 'Jarrod Hollis', 'Aiden Nelson', 'Mason Sidebottom' ]
    },
    '015': {
      meeting: {
        day: 'F',
        time: '2:00 &ndash; 3:50pm',
        location: 'DEAR 222'
      },
      tas: [ 'Benjamin Friedman', 'Burton Jaursch', 'Fauzi Kliman' ]
    }
  },

  policies: [
    '**Lab attendance.** Attendance is required for labs, and you must attend the lab section for which you are registered.  Excused absences from labs must be approved by the lecture instructor.  It is your responsibility to make up lab work missed for an excused absence.  You will receive a zero for any unexcused absences from lab.',
    '**Laptops required.** You must bring a laptop to lab.',
    '**Finishing lab work.** You may finish or re-do up to 30% of the points for a week’s lab work after your lab meeting for that week.  To redeem these points, you must show your update to your lab TA at the beginning of the following week’s lab meeting.  Otherwise, your update will not be accepted.'
  ]
};

export default recitations;
