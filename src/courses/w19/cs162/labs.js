const recitations = {
  calendar: [
    {
      title: 'Week 1: TBD',
      isCurrent: true,
      resources: [
        {
          title: 'TBD'
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
