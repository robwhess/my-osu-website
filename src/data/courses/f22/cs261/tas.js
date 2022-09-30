const taInfo = [
  {
    name: 'Sagar Karki',
    email: 'karkisa@oregonstate.edu',
    officeHours: [
      // {
      //   day: 'Mon.',
      //   time: '12:00am &ndash; 2:00pm',
      //   location: 'KEC Atrium'
      // },
    ],
    gradingHours: [
      // {
      //   day: '',
      //   time: ' &ndash; ',
      //   appointmentsLink: '',
      //   videoConferenceLink: ''
      // },
    ]
  },
  {
    name: 'Garrett Berliner ',
    email: 'berlineg@oregonstate.edu',
    // appointmentsLink: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UVBCbEFLUkRkRUROfGRlZmF1bHR8MzY4ZmY3MzIyMDE1N2U1ZDA3ZjM5NmE4Y2MwYWJiMTQ',
    officeHours: [
      {
        day: 'Wed.',
        time: '3:00 &ndash; 4:00pm',
        location: 'KEC Atrium'
      },
      {
        day: 'Thurs.',
        time: '1:00 &ndash; 3:00pm',
        location: 'KEC Atrium'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '3:00 &ndash; 4:30pm',
        location: 'KEC Atrium'
      },
      {
        day: 'Fri.',
        time: '8:30 &ndash; 9:45am',
        location: 'KEC Atrium'
      }
    ]
  },
  {
    name: 'Ella Daugherty',
    email: 'daugheel@oregonstate.edu',
    videoConferenceLink: 'https://www.google.com/url?q=https://oregonstate.zoom.us/j/95583768230?pwd%3DMUErK1FVbW1jUU5hRndkd2N4OS84Zz09&sa=D&source=calendar&ust=1664559746528665&usg=AOvVaw3e0CT9bvgjveL6gFReBXM1',
    // appointmentsLink: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UVBCbEFLUkRkRUROfGRlZmF1bHR8MzY4ZmY3MzIyMDE1N2U1ZDA3ZjM5NmE4Y2MwYWJiMTQ',
    officeHours: [
      {
        day: 'Fri.',
        time: '2:00 &ndash; 4:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://www.google.com/url?q=https://oregonstate.zoom.us/j/95583768230?pwd%3DMUErK1FVbW1jUU5hRndkd2N4OS84Zz09&sa=D&source=calendar&ust=1664559746528665&usg=AOvVaw3e0CT9bvgjveL6gFReBXM1'
      }
    ],
    gradingHours: [
      {
        day: 'Tues.',
        time: '5:00 &ndash; 7:00pm',
        location: 'KEC Atrium'
      }
    ]
  },
  {
    name: 'Shaurya Gaur',
    email: 'gaurs@oregonstate.edu',
    // appointmentsLink: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUlsc0toVW1tV2hafGRlZmF1bHR8YjAzYTYzNWEwZTI3MDRjMGQ2N2E3NzZmMjkyZjU4NGE',
    officeHours: [
      {
        day: 'Mon.',
        time: '3:30 &ndash; 4:30pm',
        location: 'KEC Atrium'
      },
      {
        day: 'Wed.',
        time: '3:30 &ndash; 4:30pm',
        location: 'KEC Atrium'
      },
      {
        day: 'Thurs.',
        time: '10:00 &ndash; 11:00am',
        location: 'KEC Atrium'
      }
    ],
    gradingHours: [
      // {
      //   day: 'Tues.',
      //   time: '9:30 &ndash; 11:30am',
      //   location: 'KEC Atrium'
      // }
    ]
  },
  {
    name: 'Sergiy Greblov',
    email: 'greblovs@oregonstate.edu',
    // appointmentsLink: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UVBCbEFLUkRkRUROfGRlZmF1bHR8MzY4ZmY3MzIyMDE1N2U1ZDA3ZjM5NmE4Y2MwYWJiMTQ',
    officeHours: [
      // {
      //   day: 'Tues.',
      //   time: '9:00 &ndash; 11:50am',
      //   location: 'KEC Atrium'
      // }
    ],
    gradingHours: [
      // {
      //   day: 'Tues.',
      //   time: '2:00 &ndash; 4:00pm',
      //   location: 'KEC Atrium'
      // }
    ]
  },
  {
    name: 'Sadie Thomas',
    email: 'thomsadi@oregonstate.edu',
    appointmentsLink: 'https://calendar.app.google/PbPamdUFLZBgimni9',
    officeHours: [
      {
        day: 'Mon.',
        time: '11:00 &ndash; 11:50am',
        location: 'KEC Atrium',
      },
      {
        day: 'Wed.',
        time: '2:00 &ndash; 3:50pm',
        location: 'KEC Atrium',
      }
    ],
    gradingHours: [
      {
        day: 'Tues.',
        time: '9:30 &ndash; 11:30am',
        location: 'KEC Atrium',
      }
    ]
  },
  {
    name: 'Cody Wilson',
    email: 'wilsocod@oregonstate.edu',
    // appointmentsLink: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UVBCbEFLUkRkRUROfGRlZmF1bHR8MzY4ZmY3MzIyMDE1N2U1ZDA3ZjM5NmE4Y2MwYWJiMTQ',
    officeHours: [
      // {
      //   day: 'Tues.',
      //   time: '9:00 &ndash; 11:50am',
      //   location: 'KEC Atrium'
      // }
    ],
    gradingHours: [
      // {
      //   day: 'Tues.',
      //   time: '2:00 &ndash; 4:00pm',
      //   location: 'KEC Atrium'
      // }
    ]
  }
];

export default taInfo;
