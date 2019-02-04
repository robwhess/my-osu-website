import CourseStyleGuidelines from '../../../static/cs162-style-guidelines.pdf';

const assignments = {
  title: 'Assignments',
  assignments: [
    {
      link : 'https://classroom.github.com/a/rP9YUQXN',
      title: 'Assignment 1 &ndash; Pointers, arrays, structs, and file I/O',
      due: {
        day: 'Monday, 1/21/2019',
        time: '11:59pm'
      },
      notes: [
        'Demo due by 11:59pm, Monday 2/4/2019'
      ]
    },

    {
      link : 'https://classroom.github.com/a/phbOO7kT',
      title: 'Assignment 2 &ndash; Go Fish (Classes and Composition)',
      due: {
        day: 'Monday, 2/4/2019',
        time: '11:59pm'
      },
      notes: [
        'Demo due by 11:59pm, Monday 2/18/2019'
      ]
    },

    {
      link : 'https://classroom.github.com/a/UVvn4Qiq',
      title: 'Assignment 3 &ndash; Zoo Tycoon (Inheritance)',
      due: {
        day: 'Monday, 2/18/2019',
        time: '11:59pm'
      },
      notes: [
        'Demo due by 11:59pm, Monday 3/4/2019'
      ]
    }
  ],

  preamble: `Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a \`README.md\` file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.\n\nNote that all of your assignments will have a component of their grade based on your code style and commenting. Using descriptive comments and good, consistent code style is very important to ensure the code you write is readable, understandable, and maintainable. For more on why good, consistent style is important, check out the background and goals of [Google's C++ style guide](https://google.github.io/styleguide/cppguide.html#Background).  Please read the [style guidelines for this course](${CourseStyleGuidelines}) and try to follow them when writing your assignments.`
};

export default assignments;
