import { generateSitePath } from '../../../lib/SitePath';

var courseDetails = {
  number: 'CS 496',
  title: 'Mobile Software Development',
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
      infoHTML: 'MWF 4:00&ndash;5:20pm, OWEN 102'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: TBD (KEC 1109)'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1WuqD2mJ8w_ayB64cpSJC8phApNmRRGSRyFF3KZRMXnw/edit?usp=sharing">CS 496 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2017/cs496">CS 496 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
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
            'Java'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="http://pages.cs.wisc.edu/~hasti/cs368/JavaTutorial/">Java for C++ Programmers</a> &ndash; Beck Hasti',
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
