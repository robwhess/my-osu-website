const topics = [
  {
    title: 'Course Intro',
    isCurrent: true,
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1JXtkTnnGypf8C-PLdONnwh9znzspJjq8zp_3JglDJc8/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Modern Web Development',
        link: 'https://hackernoon.com/modern-web-development-bf0b2ef0e22e',
        description: 'Mark Nutter (Hacker Noon)'
      },
      {
        title: 'What is React?',
        link: 'https://www.oreilly.com/library/view/what-react-is/9781491996744/ch01.html',
        description: 'Eric Baer'
      },
      {
        title: 'Why did we build React?',
        link: 'https://reactjs.org/blog/2013/06/05/why-react.html',
        description: 'Pete Hunt (ReactJS blog)'
      }
    ]
  },

  {
    title: 'React: JSX and Components',
    isCurrent: true,
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: '#'
      }
    ],
    readings: [
      {
        title: 'Introducing JSX',
        link: 'https://reactjs.org/docs/introducing-jsx.html',
        description: 'React Docs'
      },
      {
        title: 'Rendering Elements',
        link: 'https://reactjs.org/docs/rendering-elements.html',
        description: 'React Docs'
      },
      {
        title: 'Components and Props',
        link: 'https://reactjs.org/docs/components-and-props.html',
        description: 'React Docs'
      }
    ]
  }
];

export default topics;
