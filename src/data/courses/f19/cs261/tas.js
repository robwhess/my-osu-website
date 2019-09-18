const taInfo = [
  // {
  //   name: "Zahir Al-Sulaimawi",
  //   email: "alsulaiz@oregonstate.edu",
  //   officeHours: [
  //     {
  //       day: 'M',
  //       time: '8:00 &ndash; 10:00am',
  //       location: 'JOHN 121'
  //     }
  //   ],
  //   gradingHours: [
  //     {
  //       day: 'Th',
  //       time: '4:00 &ndash; 7:00pm',
  //       location: 'JOHN 122',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UURkY1pGQTNXb3dNfGRlZmF1bHR8NzAxNWI0NTczZjM2ZmM1NTgzYTU5MjI1NDJjNDc4YTk'
  //     },
  //     {
  //       day: 'F',
  //       time: '4:00 &ndash; 7:00pm',
  //       location: 'JOHN 122',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UURkY1pGQTNXb3dNfGRlZmF1bHR8NzAxNWI0NTczZjM2ZmM1NTgzYTU5MjI1NDJjNDc4YTk'
  //     }
  //   ]
  // },
  // {
  //   name: "Andrew Emmott",
  //   email: "emmotta@oregonstate.edu",
  //   officeHours: [
  //     {
  //       day: 'W',
  //       time: '11:00am &ndash; 4:00pm',
  //       location: 'webex',
  //       link: 'https://oregonstate.webex.com/oregonstate/j.php?MTID=ma0d9d6122c98cc6ea0254573b14b57f4'
  //     }
  //   ],
  //   gradingHours: [
  //     {
  //       day: 'Tu',
  //       time: '12:00-2:00pm',
  //       location: 'JOHN 123',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UU9xNmlQOVNJT0tNfGRlZmF1bHR8MWU3ZDRmNDU0OWMzODFhNmZiOTEyZjE4YWExMTFmYWU'
  //     },
  //     {
  //       day: 'Th',
  //       time: '1:00-2:00pm',
  //       location: 'JOHN 125',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UU9xNmlQOVNJT0tNfGRlZmF1bHR8MWU3ZDRmNDU0OWMzODFhNmZiOTEyZjE4YWExMTFmYWU'
  //     }
  //   ]
  // },
  // {
  //   name: "Chloe Fleming",
  //   email: "flemichl@oregonstate.edu",
  //   officeHours: [
  //     {
  //       day: 'Tu',
  //       time: '4:00 &ndash; 5:00pm',
  //       location: 'Covell 140 Table 4'
  //     },
  //     {
  //       day: 'Th',
  //       time: '12:00 &ndash; 1:00pm',
  //       location: 'Covell 140 Table 2'
  //     }
  //   ],
  //   gradingHours: [
  //     {
  //       day: 'W',
  //       time: '3:00 &ndash; 6:00pm',
  //       location: 'Covell 140 Table 4',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUxLN1A2MzFPUVF3fGRlZmF1bHR8MTE4ODlmYzUzZjEyNTUzN2VhMzcyZWJjZjZlOTY2YzU'
  //     },
  //     {
  //       day: 'Th',
  //       time: '9:00am &ndash; 12:00pm',
  //       location: 'Covell 140 Table 2',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUxLN1A2MzFPUVF3fGRlZmF1bHR8MTE4ODlmYzUzZjEyNTUzN2VhMzcyZWJjZjZlOTY2YzU'
  //     }
  //   ]
  // },
  // {
  //   name: "Prashant Kumar",
  //   email: "kumarp@oregonstate.edu",
  //   officeHours: [
  //     {
  //       day: 'W',
  //       time: '2:00 &ndash; 3:00pm',
  //       location: 'JOHN 121'
  //     },
  //     {
  //       day: 'Th',
  //       time: '1:00 &ndash; 2:00pm',
  //       location: 'JOHN 121'
  //     }
  //   ],
  //   gradingHours: [
  //     {
  //       day: 'Tu',
  //       time: '4:00 &ndash; 7:00pm',
  //       location: 'JOHN 122',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UU12WkRvTS1TekxvfGRlZmF1bHR8YWVhMWJiZThjOTg1MDEyZWRkNWM0N2U3M2Y0ODk3ZGI'
  //     },
  //     {
  //       day: 'Th',
  //       time: '2:00 &ndash; 5:00pm',
  //       location: 'JOHN 121',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UU12WkRvTS1TekxvfGRlZmF1bHR8YWVhMWJiZThjOTg1MDEyZWRkNWM0N2U3M2Y0ODk3ZGI'
  //     }
  //   ]
  // },
  // {
  //   name: "Aayam Shrestha",
  //   email: "shrestaa@oregonstate.edu",
  //   officeHours: [
  //     {
  //       day: 'M',
  //       time: '2:00 &ndash; 4:00pm',
  //       location: 'KEC Atrium'
  //     }
  //   ],
  //   gradingHours: [
  //     {
  //       day: 'M',
  //       time: '5:00 &ndash; 7:00pm',
  //       location: 'KEC Atrium',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUV2cnhwSURETWwzfGRlZmF1bHR8NWRiNTNlNmViOGI0ODk3MDQxNjExOGFjMWQyNmFmMDQ'
  //     },
  //     {
  //       day: 'Tu',
  //       time: '8:00 &ndash; 10:00am',
  //       location: 'KEC Atrium',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUV2cnhwSURETWwzfGRlZmF1bHR8NWRiNTNlNmViOGI0ODk3MDQxNjExOGFjMWQyNmFmMDQ'
  //     },
  //     {
  //       day: 'Tu',
  //       time: '2:00 &ndash; 3:00pm',
  //       location: 'KEC Atrium',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUV2cnhwSURETWwzfGRlZmF1bHR8NWRiNTNlNmViOGI0ODk3MDQxNjExOGFjMWQyNmFmMDQ'
  //     },
  //     {
  //       day: 'Tu',
  //       time: '4:00 &ndash; 5:00pm',
  //       location: 'KEC Atrium',
  //       link: 'https://calendar.google.com/calendar/selfsched?sstoken=UUV2cnhwSURETWwzfGRlZmF1bHR8NWRiNTNlNmViOGI0ODk3MDQxNjExOGFjMWQyNmFmMDQ'
  //     }
  //   ]
  // }
];

export default taInfo;
