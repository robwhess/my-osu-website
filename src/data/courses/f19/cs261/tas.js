const taInfo = [
  {
    name: 'Zahir Al-Sulaimawi',
    email: 'alsulaiz@oregonstate.edu',
    officeHours: [
      {
        day: 'W',
        time: '12:30 &ndash; 2:30pm',
        location: 'JOHN 125'
      }
    ],
    gradingHours: [
      {
        day: 'M',
        time: '8:00 &ndash; 9:30am',
        location: 'Covell 140, Table 1'
      }
    ]
  },
  {
    name: 'Gregory Blood',
    email: 'bloodg@oregonstate.edu',
    officeHours: [
      {
        day: 'Tu',
        time: '11:00am &ndash; 2:00pm',
        location: 'KEC Atrium'
      }
    ],
    gradingHours: [
      {
        day: 'Th',
        time: '10:30am &ndash; 2:00pm',
        location: 'KEC Atrium',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUFUWnZHY3Bpcmw1fGRlZmF1bHR8ZGQyOGMwNjVjMmUwMjZiYjE3MzVlZjQ5YzYzMjFhNzg'
      }
    ]
  },
  {
    name: 'Aaron Didner',
    email: 'didnera@oregonstate.edu',
    officeHours: [
      {
        day: 'M',
        time: '2:00 &ndash; 5:00pm',
        location: 'Covell 140'
      }
    ],
    gradingHours: [
      {
        day: 'Tu',
        time: '10:00am &ndash; 12:00pm',
        location: 'Covell 140',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UURSdm9NdzJ2bk8xfGRlZmF1bHR8MTBmNTNlMjBlNzQ5ZDFjYjgzMTczZjE0ZDNlZmIyNzM'
      },
      {
        day: 'W',
        time: '2:00 &ndash; 3:30pm',
        location: 'Covell 140',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UURSdm9NdzJ2bk8xfGRlZmF1bHR8MTBmNTNlMjBlNzQ5ZDFjYjgzMTczZjE0ZDNlZmIyNzM'
      }
    ]
  },
  {
    name: 'Jianlong Huang',
    email: 'huangj2@oregonstate.edu',
    officeHours: [
      {
        day: 'Tu',
        time: '2:00 &ndash; 4:30pm',
        location: 'DEAR 119'
      },
      {
        day: 'Th',
        time: '2:00 &ndash; 4:30pm',
        location: 'DEAR 119'
      },
      {
        day: 'F',
        time: '2:00 &ndash; 4:30pm',
        location: 'DEAR 119'
      }
    ],
    gradingHours: [
      {
        day: 'Tu',
        time: '4:30 &ndash; 5:30pm',
        location: 'DEAR 119',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUJlNWpjMlZXMEMwfGRlZmF1bHR8ZmM4NzYzZGE0NGI1Zjg2M2QxOTYzZTQxYzI0NDNlYjI'
      },
      {
        day: 'Th',
        time: '4:30 &ndash; 5:30pm',
        location: 'DEAR 119',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUJlNWpjMlZXMEMwfGRlZmF1bHR8ZmM4NzYzZGE0NGI1Zjg2M2QxOTYzZTQxYzI0NDNlYjI'
      },
      {
        day: 'F',
        time: '4:30 &ndash; 6:00pm',
        location: 'DEAR 119',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUJlNWpjMlZXMEMwfGRlZmF1bHR8ZmM4NzYzZGE0NGI1Zjg2M2QxOTYzZTQxYzI0NDNlYjI'
      }
    ]
  },
  {
    name: 'Ryan Kennedy',
    email: 'kennerya@oregonstate.edu',
     officeHours: [
       {
         day: "T",
         time: "10:00am - 10:30am",
         location: "JOHN 123"
       },
       {
         day: "T",
         time: "10:30am - 11:30am",
         location: "JOHN 125"
       },
       {
         day: "W",
         time: "9:00am - 11:00am",
         location: "JOHN 123"
       },
       {
         day: "Th",
         time: "9:00am - 11:30am",
         location: "JOHN 123"
       },
       {
         day: "F",
         time: "12:00pm - 3:00pm",
         location: "JOHN 121"
       }
     ],
    gradingHours:[
      {
        day: "M",
        time: "9:00am - 12:00pm",
        location: "JOHN 123"
      },
      {
        day: "T",
        time: "9:00am - 9:30am",
        location: "JOHN 123"
      }
    ]
  },
  {
    name: 'Seifeddine Mejri',
    email: 'mejris@oregonstate.edu',
    officeHours: [
      {
        day: 'Th',
        time: '4:00 &ndash; 6:00pm',
        location: 'KEC Atrium'
      },
      {
        day: 'F',
        time: '12:00 &ndash; 1:00pm',
        location: 'KEC Atrium'
      }
    ],
    gradingHours: [
      {
        day: 'F',
        time: '8:30am &ndash; 12:00pm',
        location: 'KEC Atrium',
        link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUNiaVRkaWFrbkxXfGRlZmF1bHR8Y2EwY2UwZDE5MzhiZmQwN2I1ZTJjZDJlMDI0NGQ0M2E'
      }
    ]
  },
  {
    name: 'Jiawei Mo',
    email: 'moji@oregonstate.edu',
    officeHours: [
      {
        day: 'Tu',
        time: '5:00 &ndash; 6:00pm',
        location: 'DEAR 119'
      },
      {
        day: 'W',
        time: '10:00 &ndash; 11:00am',
        location: 'DEAR 119'
      },
      {
        day: 'Th',
        time: '4:00 &ndash; 5:00pm',
        location: 'DEAR 119'
      }
    ],
    gradingHours: [
      {
        day: 'M',
        time: '5:00 &ndash; 6:30pm',
        location: 'DEAR 119'
      },
      {
        day: 'F',
        time: '5:00 &ndash; 7:00pm',
        location: 'DEAR 119'
      }
    ]
  },
  {
    name: 'Huahua Wang',
    email: 'wanghuah@oregonstate.edu',
    officeHours: [
      {
        day: 'W',
        time: '9:00 &ndash; 10:00am',
        location: 'JOHN 121'
      },
      {
        day: 'F',
        time: '4:00 &ndash; 6:00pm',
        location: 'JOHN 121'
      }
    ],
    gradingHours: [
      {
        day: 'M',
        time: '9:00 &ndash; 11:00am',
        location: 'DEAR 119'
      },
      {
        day: 'M',
        time: '4:00 &ndash; 5:00pm',
        location: 'JOHN 125'
      },
      {
        day: 'M',
        time: '5:00 &ndash; 5:30pm',
        location: 'JOHN 121'
      }
    ]
  }
];

export default taInfo;
