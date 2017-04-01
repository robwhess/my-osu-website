var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Spring 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)'
    },
    {
      title: 'TAs',
      infoHTML: ''
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 9:00&ndash;9:50am, LINC 210'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: TBD (KEC 1109)'
    },
    {
      title: 'Syllabus',
      infoHTML: ''
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2017/cs290">CS 290 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="http://web.engr.oregonstate.edu/~hessro/teaching/community.html">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: [
    {
      week: 1,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Course Intro',
            'Git and GitHub',
            'HTML'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://git-scm.com/book/en/v2">Chapters 1 and 2</a> &ndash; Pro Git',
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a> &ndash; MDN',
          ]
        }
      ]
    }
  ],

  assignments: {
    preamble: "<p> Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a <code>README.md</code> file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.</p>",
    assignments: [

    ]
  }
};

export default courseDetails;
