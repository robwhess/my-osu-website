import CourseStyleGuidelines from '../../../files/162_style_guideline.pdf';

var assignments = {
  preambleHTML: "<p> Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a <code>README.md</code> file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.</p>" +
    "<p>Note that all of your assignments will have a component of their grade based on your code style and commenting. Using descriptive comments and good, consistent code style is very important to ensure the code you write is readable, understandable, and maintainable. For more on why good, consistent style is important, check out the background and goals of <a href='https://google.github.io/styleguide/cppguide.html#Background'>Google's C++ style guide</a>.  Please read the <a href='" + CourseStyleGuidelines + "'>style guidelines for this course</a> and try to follow them when writing your assignments.</p>",
  assignments: [
    {
      link : 'https://classroom.github.com/a/Hl6XiXUi',
      title: 'Assignment 1 - Pointers, arrays, structs, and file I/O',
      notesHTML: [
        'Due by 11:59pm, Monday 1/22/2018',
        'Demo due by 11:59pm, Monday 2/5/2018'
      ]
    },
    {
      link : 'https://classroom.github.com/a/oLioGZfr',
      title: 'Assignment 2 - Go Fish (Classes and Composition)',
      notesHTML: [
        'Due by 11:59pm, Monday 2/5/2018',
        'Demo due by 11:59pm, Monday 2/19/2018'
      ]
    },
    {
      link : 'https://classroom.github.com/a/z3alch7x',
      title: 'Assignment 3 - Zoo Tycoon (Inheritance)',
      notesHTML: [
        'Due by 11:59pm, Monday 2/19/2018',
        'Demo due by 11:59pm, Monday 3/5/2018'
      ]
    },
    {
      link : 'https://classroom.github.com/a/cwjffebS',
      title: 'Assignment 4 - Hunt the Wumpus (Polymorphism and the STL)',
      notesHTML: [
        'Due by 11:59pm, Monday 3/5/2018',
        'Demo due by 11:59pm, Monday 3/19/2018'
      ]
    }
  ]
};

export default assignments;
