import { generateSitePath } from '../../../lib/SitePath';

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
      infoHTML: 'Purbasha Chatterjee (<a href="mailto:chattepu@oregonstate.edu">chattepu@oregonstate.edu</a>)<br>Sudhanshu Shobhakant Pathak (<a href="mailto:pathaks@oregonstate.edu">pathaks@oregonstate.edu</a>)<br>Naimisha Reddy Saireddy (<a href="mailto:saireddn@oregonstate.edu">saireddn@oregonstate.edu</a>)<br>Meghamala Sinha (<a href="mailto:sinham@oregonstate.edu">sinham@oregonstate.edu</a>)'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 9:00&ndash;9:50am, LINC 210'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: W 3:30&ndash;4:30pm, Th 2:00&ndash;3:00pm (KEC 1109)'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1Rwiv-QjO3pDNKtdqAICA8s5immQbDpjrQ3SHzSbE3u0/edit?usp=sharing">CS 290 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2017/cs290">CS 290 on Piazza</a>'
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
            'Course Intro &ndash; <a href="https://docs.google.com/document/d/1PHwPcCxBNeLSV9wbgd_yRrcCKOn7AAmzjzIq1BEQUPI/edit?usp=sharing">notes</a>',
            'Git and GitHub &ndash; <a href="https://docs.google.com/document/d/1ya0X-WIdBzNKWZZ-gQFaW40IGWV23ldQX8V3vLKD5to/edit?usp=sharing">notes</a>',
            'HTML &ndash; <a href="https://docs.google.com/document/d/1-dCjGCQu_LhQ96sXMF5zqWuGbpxqiz2fmu2UY_8FUUM/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/html">example code</a>'
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
      {
        link : 'https://classroom.github.com/assignment-invitations/31b9a7d362d610fb0f5bf3884eec945e',
        title: 'Assignment 1 – HTML',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 4/17/2017',
          'Code Blog due <b>ON CANVAS</b> by 11:59pm, Monday 4/17/2017',
          'Demo due by 11:59pm on Monday, 5/1/2017'
        ]
      }
    ]
  }
};

export default courseDetails;
