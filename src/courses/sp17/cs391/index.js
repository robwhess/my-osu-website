import { generateSitePath } from '../../../lib/SitePath';
import EthicalTheoriesAssignmentPage from './EthicalTheoriesAssignmentPage';
import AccountabilityAssignmentPage from './AccountabilityAssignmentPage';

var courseDetails = {
  number: 'CS 391',
  title: 'Social & Ethical Issues in CS',
  term: 'Spring 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)'
    },
    {
      title: 'TAs',
      infoHTML: 'Souti Chattopadhyay (<a href="mailto:chattops@oregonstate.edu">chattops@oregonstate.edu</a>)<br>Anusha Dasari (<a href="mailto:dasaria@oregonstate.edu">dasaria@oregonstate.edu</a>)'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 1:00&ndash;1:50pm, KEC 1003'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: Tu 1:00&ndash;2:00pm (KEC 1109)'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1wRJzcmsf9DU9E3ostg6NQItTefZ_XVwSjS1FFGDSB7Q/edit?usp=sharing">CS 391 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2017/cs391">CS 391 on Piazza</a>'
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
            'Course Intro &ndash; <a href="https://docs.google.com/document/d/1BbRs0IJAN9Js-wCfrGH_ByztlOgTML6uMDdmY0iJixg/edit?usp=sharing">notes</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="http://people.oregonstate.edu/~vanlondp/cs391/writing.php">Writing Requirements</a> &ndash; Pam Van London\'s CS 391 Course',
            '<a href="http://people.oregonstate.edu/~vanlondp/cs391/research.php">Research Tools</a> &ndash; Pam Van London\'s CS 391 Course',
            '<a href="http://guides.library.oregonstate.edu/c.php?g=286173&p=1905969">Citation Managers</a> &ndash; OSU Libraries',
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
            'Ethical Theories &ndash; <a href="https://docs.google.com/document/d/1getG6DdDkI-5NEL0mSzC7rF-t49gMo8wg-QFU5TsTyg/edit?usp=sharing">notes</a>'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://en.wikipedia.org/wiki/Trolley_problem">The trolley problem</a> &ndash; Wikipedia',
            '<a href="https://www.nytimes.com/2016/09/02/technology/artificial-intelligence-ethics.html">How Tech Giants Are Devising Real Ethics for Artificial Intelligence</a> &ndash; NY Times',
            '<a href="http://spectrum.ieee.org/video/robotics/robotics-software/how-to-build-a-moral-robot">How to Build a Moral Robot</a> &ndash; IEEE Spectrum'
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
            'Accountability'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: [
            '<a href="https://plato.stanford.edu/entries/computing-responsibility/">Computing and Moral Responsibility</a> &ndash; Stanford Encyclopedia of Philosphy',
            '<a href="https://www.nytimes.com/2016/12/14/technology/yahoo-hack.html">Yahoo Says 1 Billion User Accounts Were Hacked</a> &ndash; NY Times'
          ]
        }
      ]
    }
  ],

  assignments: {
    preamble: "<p></p>",
    assignments: [
      {
        title: 'Applying an ethical framework',
        subPage: 'ethical-theories',
        notesHTML: [
          'Due via Canvas at 11:59pm on Monday, 4/17/2017'
        ]
      },
      {
        title: 'Case studies in accountability',
        subPage: 'accountability',
        notesHTML: [
          'Due via Canvas at 11:59pm on Monday, 5/1/2017'
        ]
      }
    ]
  },

  subPages: {
    'ethical-theories': EthicalTheoriesAssignmentPage,
    'accountability': AccountabilityAssignmentPage
  }
};

export default courseDetails;
