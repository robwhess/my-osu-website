const taInfo = [
  {
    name: 'Vijay Tadimeti',
    email: 'tadimetv@oregonstate.edu',
    officeHours: [
      {
        day: 'Thurs.',
        time: '2:00 &ndash; 6:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/4421051055'
      },
      {
        day: 'Fri.',
        time: '2:00 &ndash; 6:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/4421051055'
      }
    ],
    gradingHours: [
      {
        day: 'Thurs.',
        time: '1:00 &ndash; 2:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUlZVmVLTU9Lai1ofGRlZmF1bHR8M2FkZjNjZGUxZjRhMmExYTI1NDBiNTY2ZWJmNmM3Y2Q\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/4421051055'
      },
      {
        day: 'Fri.',
        time: '1:00 &ndash; 2:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUlZVmVLTU9Lai1ofGRlZmF1bHR8M2FkZjNjZGUxZjRhMmExYTI1NDBiNTY2ZWJmNmM3Y2Q\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/4421051055'
      }
    ]
  },
  {
    name: 'Gregory Blood',
    email: 'bloodg@oregonstate.edu',
    officeHours: [
      {
        day: 'Thurs.',
        time: '11:00am &ndash; 1:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/272698338'
      }
    ],
    gradingHours: [
      {
        day: 'Tues.',
        time: '10:00am &ndash; 2:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUFUWnZHY3Bpcmw1fGRlZmF1bHR8ZGQyOGMwNjVjMmUwMjZiYjE3MzVlZjQ5YzYzMjFhNzg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/429543490'
      }
    ]
  },
  {
    name: 'YanYan Lee',
    email: 'leeya@oregonstate.edu',
    officeHours: [
      {
        day: 'Wed.',
        time: '3:00 &ndash; 4:30pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/694180780'
      },
      {
        day: 'Fri.',
        time: '12:00 &ndash; 3:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/623504283'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '12:30 &ndash; 2:30pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUV1dGxNN3NxLXlafGRlZmF1bHR8Y2M5NGVlODVlZDk1OGRhNzZmZWU5N2IxYjdlNjQ4M2E\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/845510912'
      },
      {
        day: 'Fri.',
        time: '10:00am &ndash; 12:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUV1dGxNN3NxLXlafGRlZmF1bHR8Y2M5NGVlODVlZDk1OGRhNzZmZWU5N2IxYjdlNjQ4M2E\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/656464564'
      }
    ]
  },
  {
    name: 'Megan Liles',
    email: 'lilesme@oregonstate.edu',
    officeHours: [
      {
        day: 'Tues.',
        time: '2:00 &ndash; 3:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/816350612'
      },
      {
        day: 'Fri.',
        time: '12:00 &ndash; 1:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/211395346'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '2:00 &ndash; 4:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUhpSjRTUHMwLTd1fGRlZmF1bHR8MjhiNGFmYWE0MzNjYjZhZTBkNTJmZTdjYzFmM2FiOGM\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/714998084'
      },
      {
        day: 'Fri.',
        time: '1:00 &ndash; 3:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUhpSjRTUHMwLTd1fGRlZmF1bHR8MjhiNGFmYWE0MzNjYjZhZTBkNTJmZTdjYzFmM2FiOGM\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/797196318'
      }
    ]
  },
  {
    name: 'Conner Maddalozzo',
    email: 'maddaloc@oregonstate.edu',
    officeHours: [
      {
        day: 'Mon.',
        time: '10:00 &ndash; 11:30am',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/248709302'
      },
      {
        day: 'Tues.',
        time: '4:00 &ndash; 5:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/760064034'
      },
      {
        day: 'Wed.',
        time: '2:00 &ndash; 3:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/169690292'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '1:00 &ndash; 3:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUR5dGZ4emFXQXdlfGRlZmF1bHR8MmFiYWJjMTIzYjhlNjEyOGI2YzlmMGFjMDkyNGY4YTk\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/105451447\n**Password**: 202020'
      },
      {
        day: 'Thurs.',
        time: '4:00 &ndash; 6:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUR5dGZ4emFXQXdlfGRlZmF1bHR8MmFiYWJjMTIzYjhlNjEyOGI2YzlmMGFjMDkyNGY4YTk\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/365717716\n**Password**: 101010'
      }
    ]
  },
  {
    name: 'Quan Nguyen',
    email: 'nguyenq2@oregonstate.edu',
    officeHours: [
      {
        day: 'Mon.',
        time: '1:00 &ndash; 2:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      },
      {
        day: 'Tues.',
        time: '1:00 &ndash; 2:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      },
      {
        day: 'Thurs.',
        time: '1:00 &ndash; 2:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      },
      {
        day: 'Fri.',
        time: '1:00 &ndash; 2:00pm',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '2:00 &ndash; 3:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      },
      {
        day: 'Tues.',
        time: '2:00 &ndash; 3:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      },
      {
        day: 'Wed.',
        time: '2:00 &ndash; 3:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      },
      {
        day: 'Thurs.',
        time: '2:00 &ndash; 3:00pm',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      }
    ]
  }
];

export default taInfo;
