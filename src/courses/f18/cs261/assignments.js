const preamble = 'Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a `README.md` file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.';

const assignments = [
  {
    link : 'https://classroom.github.com/a/y0RCxcIK',
    title: 'Assignment 0 &ndash; Git and GitHub',
    due: {
      day: 'Monday, 10/1/2018',
      time: '11:59pm'
    },
    notes: [
      '**No demo for this assignment**'
    ]
  },
  {
    link : 'https://classroom.github.com/a/FRPkj3G3',
    title: 'Assignment 1 &ndash; C, pointers, and dynamic arrays',
    due: {
      day: 'Monday, 10/15/2018',
      time: '11:59pm'
    },
    notes: [
      'Demo due by 11:59pm, Monday 10/29/2018'
    ]
  },
  {
    link : 'https://classroom.github.com/a/n4Md7XzG',
    title: 'Assignment 2 &ndash; Linked lists, stacks, and queues',
    due: {
      day: 'Monday, 10/29/2018',
      time: '11:59pm'
    },
    notes: [
      'Demo due by 11:59pm, Monday 11/12/2018'
    ]
  },
  {
    link : 'https://classroom.github.com/a/a-pnR8zg',
    title: 'Assignment 3 &ndash; Binary search trees',
    due: {
      day: 'Monday, 11/12/2018',
      time: '11:59pm'
    },
    notes: [
      'Demo due by 11:59pm, ~~Monday 11/26/2018~~ Friday 11/30/2018'
    ]
  },
  {
    link : 'https://classroom.github.com/a/vPEiapqI',
    title: 'Assignment 4 &ndash; Priority queues',
    due: {
      day: '~~Monday, 11/26/2018~~ Wednesday 11/28/2018',
      time: '11:59pm'
    },
    notes: [
      '**No demo for this assignment**'
    ]
  }
];

export { assignments, preamble };
