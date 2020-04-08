const taInfo = [
  {
    name: 'Vijay Tadimeti',
    email: 'tadimetv@oregonstate.edu',
    officeHours: [
      {
        day: 'Thurs.',
        time: '2:00 &ndash; 6:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/4421051055'
      },
      {
        day: 'Fri.',
        time: '2:00 &ndash; 6:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/4421051055'
      }
    ],
    gradingHours: [
      {
        day: 'Thurs.',
        time: '1:00 &ndash; 2:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUlZVmVLTU9Lai1ofGRlZmF1bHR8M2FkZjNjZGUxZjRhMmExYTI1NDBiNTY2ZWJmNmM3Y2Q\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/4421051055'
      },
      {
        day: 'Fri.',
        time: '1:00 &ndash; 2:00pm',
        location: 'online via Zoom &ndash; click for details',
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
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/272698338'
      }
    ],
    gradingHours: [
      {
        day: 'Tues.',
        time: '10:00am &ndash; 2:00pm',
        location: 'online via Zoom &ndash; click for details',
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
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/694180780'
      },
      {
        day: 'Fri.',
        time: '12:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/623504283'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '12:30 &ndash; 2:30pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUV1dGxNN3NxLXlafGRlZmF1bHR8Y2M5NGVlODVlZDk1OGRhNzZmZWU5N2IxYjdlNjQ4M2E\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/845510912'
      },
      {
        day: 'Fri.',
        time: '10:00am &ndash; 12:00pm',
        location: 'online via Zoom &ndash; click for details',
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
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/816350612'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '2:00 &ndash; 4:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UUhpSjRTUHMwLTd1fGRlZmF1bHR8MjhiNGFmYWE0MzNjYjZhZTBkNTJmZTdjYzFmM2FiOGM\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/714998084'
      },
      {
        day: 'Fri.',
        time: '1:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
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
        location: 'online via Zoom &ndash; click for details',
        details: `Maddalozzo, Conner is inviting you to a scheduled Zoom meeting.

Topic: cs290 office hours MONDAY
Time: Apr 13, 2020 10:00 AM Pacific Time (US and Canada)
        Every week on Mon, until May 18, 2020, 6 occurrence(s)
        Apr 13, 2020 10:00 AM
        Apr 20, 2020 10:00 AM
        Apr 27, 2020 10:00 AM
        May 4, 2020 10:00 AM
        May 11, 2020 10:00 AM
        May 18, 2020 10:00 AM
Please download and import the following iCalendar (.ics) files to your calendar system.
Weekly: https://oregonstate.zoom.us/meeting/v5AlcOmhrTsobYvGaXEDRzQN5sXYPcMrAA/ics?icsToken=98tyKuuspjwqE9eVsl-Cc6oqOYHlbM_yjXN3vIRcpDrBMTpiTFblDttyMZ9tMfmB

Join Zoom Meeting
https://oregonstate.zoom.us/j/248709302

Phone Dial-In Information
        +1 971 247 1195 US (Portland)
        +1 253 215 8782 US
        +1 301 715 8592 US

Meeting ID: 248 709 302

Join by Polycom/Cisco/Other Room System
248709302@zoomcrc.com

`
      },
      {
        day: 'Tues.',
        time: '4:00 &ndash; 5:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: `Maddalozzo, Conner is inviting you to a scheduled Zoom meeting.
Topic: TUE cs290 office hour - conner
Time: Apr 14, 2020 04:00 PM Pacific Time (US and Canada)
        Every week on Tue, until May 19, 2020, 6 occurrence(s)
        Apr 14, 2020 04:00 PM
        Apr 21, 2020 04:00 PM
        Apr 28, 2020 04:00 PM
        May 5, 2020 04:00 PM
        May 12, 2020 04:00 PM
        May 19, 2020 04:00 PM
Please download and import the following iCalendar (.ics) files to your calendar system.
Weekly: https://oregonstate.zoom.us/meeting/upItd--srjguWfNyGfMLJpLta_-W13Eg2Q/ics?icsToken=98tyKu6urjssHtSWtFzHe7ItW8H-bPHml0ZIhLp6mjLJKTB_dgLJe9UTYZd4QumB

Join Zoom Meeting
https://oregonstate.zoom.us/j/760064034

Phone Dial-In Information
        +1 971 247 1195 US (Portland)
        +1 253 215 8782 US
        +1 301 715 8592 US

Meeting ID: 760 064 034

Join by Polycom/Cisco/Other Room System
760064034@zoomcrc.com

`
      },
      {
        day: 'Wed.',
        time: '2:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: `Maddalozzo, Conner is inviting you to a scheduled Zoom meeting.

Topic: wed cs290 office hours
Time: Apr 8, 2020 02:00 PM Pacific Time (US and Canada)
        Every week on Wed, until May 13, 2020, 6 occurrence(s)
        Apr 8, 2020 02:00 PM
        Apr 15, 2020 02:00 PM
        Apr 22, 2020 02:00 PM
        Apr 29, 2020 02:00 PM
        May 6, 2020 02:00 PM
        May 13, 2020 02:00 PM
Please download and import the following iCalendar (.ics) files to your calendar system.
Weekly: https://oregonstate.zoom.us/meeting/vJIkceCorDIoSoXVOO9kWMkXG5sYTm9jQA/ics?icsToken=98tyKuiupz0jGtacsl_9e60qE6_ibN_IjUJBkpVys0buNA1YWiSjJdt2P-t1IfmB

Join Zoom Meeting
https://oregonstate.zoom.us/j/169690292

Phone Dial-In Information
        +1 971 247 1195 US (Portland)
        +1 253 215 8782 US
        +1 301 715 8592 US

Meeting ID: 169 690 292

Join by Polycom/Cisco/Other Room System
169690292@zoomcrc.com
`
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '1:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/105451447\n**Password**: 202020\n Calender Link: https://calendar.google.com/calendar/selfsched?sstoken=UUR5dGZ4emFXQXdlfGRlZmF1bHR8MmFiYWJjMTIzYjhlNjEyOGI2YzlmMGFjMDkyNGY4YTk'
      },
      {
        day: 'Thurs.',
        time: '4:00 &ndash; 6:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/365717716\n**Password**: 101010\n Calendar Link: https://calendar.google.com/calendar/selfsched?sstoken=UUR5dGZ4emFXQXdlfGRlZmF1bHR8MmFiYWJjMTIzYjhlNjEyOGI2YzlmMGFjMDkyNGY4YTk'
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
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      },
      {
        day: 'Tues.',
        time: '1:00 &ndash; 2:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      },
      {
        day: 'Thurs.',
        time: '1:00 &ndash; 2:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      },
      {
        day: 'Fri.',
        time: '1:00 &ndash; 2:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/203646919'
      }
    ],
    gradingHours: [
      {
        day: 'Mon.',
        time: '2:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      },
      {
        day: 'Tues.',
        time: '2:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      },
      {
        day: 'Wed.',
        time: '2:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      },
      {
        day: 'Thurs.',
        time: '2:00 &ndash; 3:00pm',
        location: 'online via Zoom &ndash; click for details',
        details: '**Sign up for Grading Demo Appointment**\nhttps://calendar.google.com/calendar/selfsched?sstoken=UU04TzJfSFBQX0lSfGRlZmF1bHR8NTljNGM4MTM4NTJkZjY4MGFkZGY3ZTM3NjM4ZmU0ODg\n\n**Join Zoom Meeting**\nhttps://oregonstate.zoom.us/j/758977888'
      }
    ]
  }
];

export default taInfo;
