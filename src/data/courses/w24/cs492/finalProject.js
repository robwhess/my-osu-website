const finalProject = {
  title: 'Final Project',
  assignments: [
    {
      title: 'Final Project Details',
      link: 'https://docs.google.com/document/d/1USGmi6qFNl4UHrhU-IEg-e97woaiL_LuKUR_5h_juFc/edit?usp=sharing'
    },
    {
      title: 'Deliverable #1: Final Project Proposal',
      link: 'https://docs.google.com/document/d/1vr07ZPFye2mSFeVXdmuoB_u-LmNbDKWedz1jt3DZgo4/edit?usp=sharing',
      due: {
        time: '11:59pm',
        day: 'Friday, 2/23/2024',
        location: 'on Canvas'
      },
      notes: [
        'Use [this Ed thread](https://edstem.org/us/courses/51456/discussion/4338548) to help connect with potential teammates.',
        'Submit [this form](https://forms.gle/5MvD3oTdV91cnCcy9) if you just want to be assigned to a random team.'
      ]
    },
    {
      title: 'Deliverable #2: Code',
      link: 'https://classroom.github.com/a/pCPqpX7x',
      due: {
        time: 'at the time of your grading demo or project presentation',
        day: 'during finals week'
      },
      notes: [
        'Use the link above to create a repo on GitHub for your team to use for the final project.'
      ]
    },
    {
      title: 'Deliverable #3: Final Project Team Evaluation',
      link: 'https://docs.google.com/document/d/149t4DcQLhblPIxR72Pip6k9KEY0teazfguoNvY8oLHs/edit?usp=sharing',
      due: {
        time: '5:00pm',
        day: 'Friday, 3/22/2023',
        location: 'on Canvas'
      },
      notes: [
        'Note that this must be completed individually by every member of your team.'
      ]
    },
    // {
    //   link : '',
    //   title: 'Final Project Demo Signup',
    //   notes: [
    //     'Sign up for a final project demo appointment using the link above.',
    //     'Sign up for one demo appointment per team.',
    //     'All team members must attend your demo unless prior arrangements have been made with Hess.',
    //     'Code is due on GitHub at the time of your demo.',
    //     'Come to the demo prepared to run your project from one of your team\'s computers.',
    //     'Final project demos will be held in person in Hess\'s office (KEC 1109).',
    //     'Remote attendance at a final project demo is possible *by request only*.  If you\'d like to attend your demo remotely via Zoom, please ask at least 24 hours in advance.'
    //   ]
    // }
  ],

  preamble: 'For the final project in this course, you will work in teams to implement a complete Android app that gets data from a third-party API.  The project will have three deliverables: a proposal, where you outline the app you\'d like to write; an implementation of your app; and a brief evaluation of your project team.  Follow the links below to find out more about each of these deliverables.'
};

export default finalProject;
