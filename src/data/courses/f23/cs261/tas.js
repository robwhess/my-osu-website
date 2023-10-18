const taInfo = [
  {
    name: 'Jun Chen',
    email: 'chenju3@oregonstate.edu',
    videoConferenceLink: 'https://oregonstate.zoom.us/j/3377073373?pwd=MTViK0pIQTk5YklKQWpBSjhrYis2QT09',
    appointmentsLink: 'https://outlook.office365.com/owa/calendar/CS261@OregonStateUniversity.onmicrosoft.com/bookings/',
    officeHours: [
      {
        day: 'Mon.',
        time: '12:00 &ndash; 1:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/3377073373?pwd=MTViK0pIQTk5YklKQWpBSjhrYis2QT09'
      },
      {
        day: 'Wed.',
        time: '12:00 &ndash; 1:00pm',
        location: 'KEC Atrium',
      },
      {
        day: 'Thurs.',
        time: '12:00 &ndash; 1:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/3377073373?pwd=MTViK0pIQTk5YklKQWpBSjhrYis2QT09'
      },
      {
        day: 'Fri.',
        time: '12:00 &ndash; 1:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/3377073373?pwd=MTViK0pIQTk5YklKQWpBSjhrYis2QT09'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '1:00 &ndash; 2:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/3377073373?pwd=MTViK0pIQTk5YklKQWpBSjhrYis2QT09'
      },
      {
        day: 'Wed.',
        time: '1:00 &ndash; 2:00pm',
        location: 'KEC Atrium',
      },
      {
        day: 'Thurs.',
        time: '1:00 &ndash; 2:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/3377073373?pwd=MTViK0pIQTk5YklKQWpBSjhrYis2QT09'
      },
      {
        day: 'Fri.',
        time: '1:00 &ndash; 2:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/3377073373?pwd=MTViK0pIQTk5YklKQWpBSjhrYis2QT09'
      }
    ]
  },
  {
    name: 'Kevin Chang',
    email: 'changk2@oregonstate.edu',
    appointmentsLink: 'https://outlook.office365.com/owa/calendar/CS261@OregonStateUniversity.onmicrosoft.com/bookings/',
    officeHours: [
      {
        day: 'Mon.',
        time: '11:30am &ndash; 1:00pm',
        location: 'KEC Atrium'
      },
      {
        day: 'Wed.',
        time: '11:30am &ndash; 1:00pm',
        location: 'KEC Atrium'
      }
    ],
    gradingHours: [
      {
        day: 'Fri.',
        time: '3:00 &ndash; 6:00',
        location: 'KEC Atrium'
      }
    ]
  },
  {
    name: 'Mahmoud Fakhry',
    email: 'fakhryk@oregonstate.edu',
    videoConferenceLink: 'https://oregonstate.zoom.us/j/94167515520?pwd=ZC9mM3pXVnJBRHUrdmJpUmY5VUVMUT09',
    appointmentsLink: 'https://outlook.office365.com/owa/calendar/CS261@OregonStateUniversity.onmicrosoft.com/bookings/',
    officeHours: [
      {
        day: 'Tues.',
        time: '5:00 &ndash; 8:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/94167515520?pwd=ZC9mM3pXVnJBRHUrdmJpUmY5VUVMUT09'
      }
    ],
    gradingHours: [
      {
        day: 'Fri.',
        time: '5:00 &ndash; 8:00',
        location: 'KEC Atrium'
      }
    ]
  },
  {
    name: 'Imgyeong Lee',
    email: 'leeim@oregonstate.edu',
    appointmentsLink: 'https://outlook.office365.com/owa/calendar/CS261@OregonStateUniversity.onmicrosoft.com/bookings/',
    officeHours: [
      {
        day: 'Mon.',
        time: '3:30 &ndash; 5:00pm',
        location: 'Valley Library Room 1165',
        details: 'Here\'s a map of the 1st floor study rooms, including room 1165: [https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms](https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms)'
      },
      {
        day: 'Tues.',
        time: '3:00 &ndash; 4:30pm',
        location: 'Valley Library Room 1165',
        details: 'Here\'s a map of the 1st floor study rooms, including room 1165: [https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms](https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms)'
      }
    ],
    gradingHours: [
      {
        day: 'Wed.',
        time: '3:30 &ndash; 5:00pm',
        location: 'Valley Library Room 1165',
        details: 'Here\'s a map of the 1st floor study rooms, including room 1165: [https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms](https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms)'
      },
      {
        day: 'Fri.',
        time: '12:30 &ndash; 2:00pm',
        location: 'Valley Library Room 1165',
        details: 'Here\'s a map of the 1st floor study rooms, including room 1165: [https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms](https://library.oregonstate.edu/floormaps/first-floor-group-study-rooms)'
      }
    ]
  },
  {
    name: 'Kantaro Nakanishi',
    email: 'nakanika@oregonstate.edu',
    appointmentsLink: 'https://outlook.office365.com/owa/calendar/CS261@OregonStateUniversity.onmicrosoft.com/bookings/',
    videoConferenceLink: 'https://oregonstate.zoom.us/j/2551586932?pwd=YUNRRVBRT1c3WGJPQWVja2dEOXoyQT09',
    officeHours: [
      {
        day: 'Wed.',
        time: '11:00am &ndash; 1:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/2551586932?pwd=YUNRRVBRT1c3WGJPQWVja2dEOXoyQT09'
      },
      {
        day: 'Fri.',
        time: '11:00am &ndash; 1:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/2551586932?pwd=YUNRRVBRT1c3WGJPQWVja2dEOXoyQT09'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '12:00 &ndash; 1:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/2551586932?pwd=YUNRRVBRT1c3WGJPQWVja2dEOXoyQT09'
      },
      {
        day: 'Tues.',
        time: '5:00 &ndash; 6:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/2551586932?pwd=YUNRRVBRT1c3WGJPQWVja2dEOXoyQT09'
      },
      {
        day: 'Wed.',
        time: '5:00 &ndash; 6:00pm',
        location: 'Zoom',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/2551586932?pwd=YUNRRVBRT1c3WGJPQWVja2dEOXoyQT09'
      }
    ]
  }
];

export default taInfo;
