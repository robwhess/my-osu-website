import { generateSitePath } from '../../../lib/SitePath';
import CS290TAInfoPage from './CS290TAInfoPage';

var courseDetails = {
  number: 'CS 290',
  title: 'Web Development',
  term: 'Spring 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)<br/>Office hours: W 3:30&ndash;4:30pm, Th 2:00&ndash;3:00pm (KEC 1109)'
    },
    {
      title: 'TAs',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA info'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 9:00&ndash;9:50am, LINC 210'
    },
    {
      title: 'Office Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA office hours'
    },
    {
      title: 'Grading Hours',
      infoSubPage: 'ta-info',
      infoText: 'See this page for TA grading hours'
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
    },
    {
      week: 2,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'CSS &ndash; <a href="https://docs.google.com/document/d/17yv1VXIy1_PBzqU6wvGHnBLNrY8JxCtSOXC1B2c7EgE/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/css">example code</a>',
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS">Introduction to CSS</a> &ndash; MDN',
          ]
        }
      ]
    },
    {
      week: 3,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'CSS &ndash; <a href="https://docs.google.com/document/d/17yv1VXIy1_PBzqU6wvGHnBLNrY8JxCtSOXC1B2c7EgE/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/css">example code</a>',
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="http://csswizardry.com/2015/04/cyclomatic-complexity-logic-in-css/">Cyclomatic Complexity: Logic in CSS</a> &ndash; CSS Wizardry',
            '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">Using CSS Flexible Boxes</a> &ndash; MDN',
            '<a href="https://developers.google.com/web/fundamentals/design-and-ui/responsive/">Responsive Web Design Basics</a> &ndash; Google Web Fundamentals'
          ]
        }
      ]
    },
    {
      week: 4,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'JavaScript Fundamentals &ndash; <a href="https://docs.google.com/document/d/1QQtkKwb3tqxnbcZdvaNPnW8WH2ZJoGynrgIrXwtRAvs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS290-Sp2017/js">example code</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps">JavaScript first steps</a> &ndash; MDN',
            '<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks">JavaScript building blocks</a> &ndash; MDN'
          ]
        }
      ]
    },
    {
      week: 5,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'JavaScript DOM Manipulation'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">Introduction to the DOM</a> &ndash; MDN',
            '<a href="http://eloquentjavascript.net/13_dom.html">The Document Object Model</a> &ndash; Eloquent Javascript, Chapter 13'
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
      },
      {
        link : 'https://classroom.github.com/assignment-invitations/b67f8710f4d589d4d5697db72243fdce',
        title: 'Assignment 2 – CSS',
        notesHTML: [
          'Assignment due by 11:59pm, Monday 5/1/2017',
          'Code Blog due <b>ON CANVAS</b> by 11:59pm, Monday 5/1/2017',
          'Demo due by 11:59pm on Monday, 5/15/2017'
        ]
      }
    ]
  },

  subPages: {
    'ta-info': CS290TAInfoPage
  }
};

export default courseDetails;
