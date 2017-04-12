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
      title: 'TA',
      infoHTML: 'Jake Joseph (<a href="mailto:josepjak@oregonstate.edu">josepjak@oregonstate.edu</a>)'
    },
    {
      title: 'Lectures',
      infoHTML: 'TuTh 4:00&ndash;5:20pm, OWEN 102'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: M 3:00&ndash;4:00pm, Tu 2:00&ndash;3:00pm (KEC 1109)<br>Jake: MW 9:00&ndash;10:00am, Tu 3:00&ndash;4:00pm (KEC Atrium)'
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
            'Course Intro &ndash; <a href="https://docs.google.com/document/d/1UTWRygJFwM_4rh3qziFHHlRDwMST5hDcYe9ABZSSmyA/edit?usp=sharing">notes</a>',
            'Git and GitHub &ndash; <a href="https://docs.google.com/document/d/1AdrFnQTwCLeB5dCphfRj3itg6cTcaeePm2WCtVHlLGA/edit?usp=sharing">notes</a>',
            'Java &ndash; <a href="https://docs.google.com/document/d/10-d9kS41MD5JXYK0vbuJBtNXP6yAZQzmTjYnsL8WxGs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/java">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="http://pages.cs.wisc.edu/~hasti/cs368/JavaTutorial/">Java for C++ Programmers</a> &ndash; Beck Hasti',
          ]
        }
      ]
    },
    {
      week: 2,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Java &ndash; <a href="https://docs.google.com/document/d/10-d9kS41MD5JXYK0vbuJBtNXP6yAZQzmTjYnsL8WxGs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS496-Sp2017/java">example code</a>',
            'Getting Started with Android Studio'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.android.com/studio/intro/index.html">Android Studio User Guide</a>',
          ]
        }
      ]
    }
  ],

  assignments: {
    preamble: "<p> Programming assignments will be managed via GitHub Classroom.  Following the links below will prompt you to sign in to GitHub and to create an assignment repository for yourself.  The assignment repository will at a minimum contain a <code>README.md</code> file containing the assignment description.  There may also be additional skeleton files in the repository to help you get started with the assignment.  To submit an assignment, make sure you have committed your solution code and pushed it to your GitHub repository before the assignment deadline.</p>",
    assignments: [
      {
        link : 'https://classroom.github.com/assignment-invitations/0192703fc2e58909c9325671d4f83a82',
        title: 'Assignment 1 – The beginnings of a weather app',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 4/24/2017',
          'Demo due by 11:59pm on Monday, 5/8/2017'
        ]
      }
    ]
  }
};

export default courseDetails;
