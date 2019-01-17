const tas = [
  {
    name: "Johannes Freischuetz",
    email: "freischj@oregonstate.edu"
  },
  {
    name: "Benjamin Friedman",
    email: "friedmab@oregonstate.edu",
    officeHours: [
      {
        day: 'Wed.',
        time: '8:00 &ndash; 10:00am',
        location: 'DEAR 119'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '8:00 &ndash; 10:00am',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUl1U05VeDlmU3N1fGRlZmF1bHR8ZDIxNjk4MmZiNjQwY2QxZDZkNWQyYTdhZmNmZTliMTI'
      },
      {
        day: 'Mon.',
        time: '2:00 &ndash; 3:00pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUl1U05VeDlmU3N1fGRlZmF1bHR8ZDIxNjk4MmZiNjQwY2QxZDZkNWQyYTdhZmNmZTliMTI'
      }
    ]
  },
  {
    name: "Alex Guyer",
    email: "guyera@oregonstate.edu",
    officeHours: [
      {
        day: 'Tues.',
        time: '1:00 &ndash; 3:00pm',
        location: 'DEAR 119'
      },
      {
        day: 'Thurs.',
        time: '1:00 &ndash; 2:00pm',
        location: 'DEAR 119'
      }
    ]
  },
  {
    name: "Kaitlin Hill",
    email: "hillkai@oregonstate.edu",
    officeHours: [
      {
        day: 'Mon.',
        time: '9:00 &ndash; 10:00am',
        location: 'JOHN 220'
      },
      {
        day: 'Wed.',
        time: '9:00 &ndash; 10:00am',
        location: 'JOHN 220'
      }
    ],
    gradingHours: [
      {
        day: 'Wed.',
        time: '3:00 &ndash; 4:00pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUo2RXZFTlNxa0pFfGRlZmF1bHR8NzUzNTNkMDY4NmE3ZDIyZGMwYzE4MTQ2MWMzZmQyMzg'
      },
      {
        day: 'Thurs.',
        time: '10:00am &ndash; 12:00pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUo2RXZFTlNxa0pFfGRlZmF1bHR8NzUzNTNkMDY4NmE3ZDIyZGMwYzE4MTQ2MWMzZmQyMzg'
      }
    ]
  },
  {
    name: "Jarrod Hollis",
    email: "hollisj@oregonstate.edu",
    officeHours: [
      {
        day: 'Thurs.',
        time: '11:00am &ndash; 2:00pm',
        location: 'DEAR 119'
      }
    ],
    gradingHours: [
      {
        day: 'Wed.',
        time: '4:30 &ndash; 6:00pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UU95YXNpUFYwdzZGfGRlZmF1bHR8ODFmZTg2MjkzZDE3YmMyMDQwNTNkNmM4ZTJjZTJiZTY'
      }
    ]
  },
  {
    name: "Burton Jaursch",
    email: "jaurschb@oregonstate.edu",
    officeHours: [
      {
        day: 'Wed.',
        time: '11:00am &ndash; 12:00pm',
        location: 'KEC Atrium'
      },
      {
        day: 'Fri.',
        time: '11:00am &ndash; 12:00pm',
        location: 'KEC Atrium'
      }
    ],
    gradingHours: [
      {
        day: 'Tues.',
        time: '12:00 &ndash; 2:00pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUxpRVB5a3pZMy1xfGRlZmF1bHR8YmNhNTk5MzVlODIyN2FkODlmYjI5MTRkODEyMTdmOWM'
      }
    ]
  },
  {
    name: "Fauzi Kliman",
    email: "klimanf@oregonstate.edu",
    officeHours: [
      {
        day: 'Wed.',
        time: '11:00am &ndash; 12:00pm',
        location: 'JOHN 125'
      },
      {
        day: 'Fri.',
        time: '11:00am &ndash; 12:00pm',
        location: 'JOHN 125'
      }
    ],
    gradingHours: [
      {
        day: 'Thurs.',
        time: '10:00am &ndash; 12:00pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUt4SmlQNXM3NHB2fGRlZmF1bHR8ODY3OTdiNWJmYzBhMDQ1NTVkYjkyYWY1YTZlYzM4NTg'
      }
    ]
  },
  {
    name: "Aiden Nelson",
    email: "nelsonai@oregonstate.edu",
    officeHours: [
      {
        day: 'Wed.',
        time: '9:30 &ndash; 11:00am',
        location: 'JOHN 125'
      },
      {
        day: 'Fri.',
        time: '9:30 &ndash; 11:00am',
        location: 'JOHN 125'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '1:00 &ndash; 3:00pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UU0ydWlxc28wZnRvfGRlZmF1bHR8MzdhZGE1YmYwNDlhOThiMWZkN2IwNTlmYWRmYTMxN2U'
      }
    ]
  },
  {
    name: "Mason Sidebottom",
    email: "sidebotm@oregonstate.edu",
    officeHours: [
      {
        day: 'Mon.',
        time: '12:00 &ndash; 1:00pm',
        location: 'DEAR 119'
      },
      {
        day: 'Thurs.',
        time: '12:00 &ndash; 2:00pm',
        location: 'DEAR 119'
      }
    ],
    gradingHours: [
      {
        day: 'Tues.',
        time: '12:00 &ndash; 1:50pm',
        location: 'KEC 1174',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUExWWdOQWpabF9WfGRlZmF1bHR8NTEwYTE3ZmVlZWMwYmJlZDQyMjM0NzExNzNmZGJmOGI'
      }
    ]
  },
];

export default tas;
