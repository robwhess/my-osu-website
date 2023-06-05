const finalProject = {
  title: 'Final Project',
  assignments: [
    {
      title: 'Final Project Details',
      link: 'https://docs.google.com/document/d/17odj2tAtlc3F2KHplsDiogQllaGWg0NuUcjlYxopiNM/edit?usp=sharing'
    },
    {
      title: 'Deliverable #1: Final Project Team Formation',
      link: 'https://docs.google.com/document/d/1t0d4yACfivBUoCeBIn8yGVSSdTLP61tSn0mxy3lLloQ/edit?usp=sharing',
      due: {
        time: '11:59pm',
        day: 'Monday, 5/22/2023',
        location: 'on Canvas'
      },
      notes: [
        'Use [this Ed thread](https://edstem.org/us/courses/38462/discussion/3105210) to help connect with potential teammates.',
        'Submit [this form](https://forms.gle/7J6ocAkVkPVMh48T8) if you just want to be assigned to a random team.'
      ]
    },
    {
      title: 'Deliverable #2: Code',
      link: 'https://classroom.github.com/a/dINa9FAJ',
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
      link: 'https://docs.google.com/document/d/18hD4Q5gXaUNklYr0pMW8FBeGQgDT8yXZVL5iKIKfXFs/edit?usp=sharing',
      due: {
        time: '5:00pm',
        day: 'Friday, 6/16/2023',
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
