import CourseStyleGuidelines from '../../../static/cs162-style-guidelines.pdf';

const assignments = {
  assignments: [],
  preamble: `Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a \`README.md\` file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.\n\nNote that all of your assignments will have a component of their grade based on your code style and commenting. Using descriptive comments and good, consistent code style is very important to ensure the code you write is readable, understandable, and maintainable. For more on why good, consistent style is important, check out the background and goals of [Google's C++ style guide](https://google.github.io/styleguide/cppguide.html#Background).  Please read the [style guidelines for this course](${CourseStyleGuidelines}) and try to follow them when writing your assignments.`
};

export default assignments;
