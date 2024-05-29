const finalProject = {
  title: 'Final Project',
  assignments: [
    {
      title: 'Final Project Details',
      link: 'https://docs.google.com/document/d/1nIxMUtNhLRL8CgnKtLTzn2oSitZQGPXjPQ-iImyYgaQ/edit?usp=sharing'
    },
    {
      title: 'Deliverable #1: Final Project Team Formation',
      link: 'https://docs.google.com/document/d/1MCZeCqP9ghF9k4FE06BgT9usf6b8Mcs9_hx1KG7ehtk/edit?usp=sharing',
      due: {
        time: '11:59pm',
        day: 'Wednesday, 5/22/2024',
        location: 'on Canvas'
      },
      notes: [
        'Use [this Ed thread](https://edstem.org/us/courses/57635/discussion/4927602) to help connect with potential teammates.',
        'Submit [this form](https://forms.gle/7FzZ5fKn5hYbUZpu7) if you just want to be assigned to a random team.'
      ]
    },
    {
      title: 'Deliverable #2: Code',
      link: 'https://classroom.github.com/a/EbH1uor2',
      due: {
        time: 'at the time of your grading demo',
        day: 'during finals week'
      },
      notes: [
        'Use the link above to create a repo on GitHub for your team to use for the final project.'
      ]
    },
    {
      title: 'Deliverable #3: Final Project Team Evaluation',
      link: 'https://docs.google.com/document/d/1R7F9Wl9cyznp1QMrToISyTOrsM1dzqJl3Ft5YZezw58/edit?usp=sharing',
      due: {
        time: '5:00pm',
        day: 'Friday, 6/14/2024',
        location: 'on Canvas'
      },
      notes: [
        'Note that this must be completed individually by every member of your team.'
      ]
    },
    {
      link : 'https://outlook.office365.com/owa/calendar/CS362@OregonStateUniversity.onmicrosoft.com/bookings/s/t-cClCYnJkK9Uji1YCvDHg2',
      title: 'Final Project Demo Signup',
      notes: [
        'Sign up for a final project demo appointment using the link above.',
        'Sign up for one demo appointment per team.',
        'All team members must attend your demo unless prior arrangements have been made with Hess.',
        'Code is due on GitHub at the time of your demo.',
        'Come to the demo prepared to run your project from one of your team\'s computers.',
        'Final project demos will be held in person in Hess\'s office (KEC 1109).',
        'Remote attendance at a final project demo is possible *by request only*.  If you\'d like to attend your demo remotely via Zoom, please ask at least 24 hours in advance.'
      ]
    }
  ],

  preamble: 'For the final project in this course, you will work in teams to write tests for an application and set up a CI/CD pipeline to automatically test and deploy that application.  The project will have three deliverables: a document where you simply form your team; the code implementing your tests and CI/CD pipeline; and a brief evaluation of your project team.  Links will be released below where you can find out more about each of these deliverables.'
};

export default finalProject;
