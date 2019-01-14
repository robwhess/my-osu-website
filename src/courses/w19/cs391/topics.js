const topics = [
  {
    title: 'Course Intro',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1BbRs0IJAN9Js-wCfrGH_ByztlOgTML6uMDdmY0iJixg/edit?usp=sharing'
      },
      {
        title: 'Research and Writing in CS 391',
        link: 'https://docs.google.com/document/d/1au6cCRbpTHjQnxPePyVgVLFKDsZOQObJFi960uOk8mg/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Flickr faces complaints over \'offensive\' auto-tagging for photos',
        link: 'https://www.theguardian.com/technology/2015/may/20/flickr-complaints-offensive-auto-tagging-photos',
        description: 'The Guardian'
      },
      {
        title: 'Citation Managers',
        link: 'http://guides.library.oregonstate.edu/c.php?g=286173&p=1905969',
        description: 'OSU Libraries'
      },
      {
        title: 'CRAAP Test',
        link: 'https://en.wikipedia.org/wiki/CRAAP_test',
        description: 'Wikipedia'
      },
      {
        title: 'Step-by-Step Guide & Research Rescue: Evaluating Credibility',
        link: 'http://guides.lib.byu.edu/c.php?g=216340&p=1428399',
        description: 'BYU Library'
      },
      {
        title: 'Evaluating the Credibility of Your Sources',
        link: 'https://www.college.columbia.edu/academics/integrity-sourcecredibility',
        description: 'Columbia College'
      }
    ]
  },

  {
    title: 'Foundations of Ethics',
    isCurrent: true,
    weeks: [ 1, 2 ],
    resources: [
      {
        title: 'Questions on the Foundations of Ethics',
        link: 'https://docs.google.com/document/d/1MIGYaL6yesB7gzYMVus8slosIM1kvSB5_PTMT3NTeI0/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'What is a Moral Issue?',
        link: 'https://philosophy.lander.edu/ethics/issue.html',
        description: 'philosophy.lander.edu'
      },
      {
        title: 'Ethics: A General Introduction',
        link: 'http://www.bbc.co.uk/ethics/introduction/intro_1.shtml',
        description: 'BBC Ethics Guide'
      },
      {
        title: 'The trolley problem',
        link: 'https://en.wikipedia.org/wiki/Trolley_problem',
        description: 'Wikipedia'
      }
    ]
  },

  {
    title: 'Ethical Theories',
    isCurrent: true,
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1getG6DdDkI-5NEL0mSzC7rF-t49gMo8wg-QFU5TsTyg/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Calculating Consequences: The Utilitarian Approach to Ethics',
        link: 'https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/calculating-consequences-the-utilitarian-approach/',
        description: 'Markkula Center for Applied Ethics at Santa Clara University'
      },
      {
        title: 'Kantian Ethics',
        link: 'https://www.csus.edu/indiv/g/gaskilld/ethics/kantian%20ethics.htm',
        description: 'Dan Gaskill (CSU Sacramento)'
      },
      {
        title: 'Rights',
        link: 'https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/rights/',
        description: 'Markkula Center for Applied Ethics at Santa Clara University'
      },
      {
        title: 'The Common Good',
        link: 'https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/the-common-good/',
        description: 'Markkula Center for Applied Ethics at Santa Clara University'
      },
      {
        title: 'Social Contract Theory',
        link: 'https://www.iep.utm.edu/soc-cont/',
        description: 'Internet Encyclopedia of Philosophy'
      },
      {
        title: 'Justice and Fairness',
        link: 'https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/justice-and-fairness/',
        description: 'Markkula Center for Applied Ethics at Santa Clara University'
      },
      {
        title: 'Ethics and Virtue',
        link: 'https://www.scu.edu/ethics/ethics-resources/ethical-decision-making/ethics-and-virtue/',
        description: 'Markkula Center for Applied Ethics at Santa Clara University'
      },
      {
        title: 'Virtue Ethics',
        link: 'https://www.iep.utm.edu/virtue/',
        description: 'Internet Encyclopedia of Philosophy'
      }
    ]
  }
];

// calendar: [
//   {
//     week: 2,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Ethical Theories &ndash; <a href="https://docs.google.com/document/d/1getG6DdDkI-5NEL0mSzC7rF-t49gMo8wg-QFU5TsTyg/edit?usp=sharing">notes</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="">The trolley problem</a> &ndash; Wikipedia',
//           '<a href="https://www.nytimes.com/2016/09/02/technology/artificial-intelligence-ethics.html">How Tech Giants Are Devising Real Ethics for Artificial Intelligence</a> &ndash; NY Times',
//           '<a href="http://spectrum.ieee.org/video/robotics/robotics-software/how-to-build-a-moral-robot">How to Build a Moral Robot</a> &ndash; IEEE Spectrum'
//         ]
//       }
//     ]
//   },
//   {
//     week: 3,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Accountability'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://plato.stanford.edu/entries/computing-responsibility/">Computing and Moral Responsibility</a> &ndash; Stanford Encyclopedia of Philosphy',
//           '<a href="https://www.nytimes.com/2016/12/14/technology/yahoo-hack.html">Yahoo Says 1 Billion User Accounts Were Hacked</a> &ndash; NY Times'
//         ]
//       }
//     ]
//   },
//   {
//     week: 4,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Accountability'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://fortune.com/2017/03/01/twitter-abuse-real-time/">Twitter is Now Trying to Detect and Curb Abuse in Real Time</a> &ndash; Fortune'
//         ]
//       }
//     ]
//   },
//   {
//     week: 5,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Privacy'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://plato.stanford.edu/entries/it-privacy/">Privacy and Information Technology</a> &ndash; Stanford Encyclopedia of Philosophy',
//           '<a href="http://www.npr.org/2017/03/28/521831393/congress-overturns-internet-privacy-regulation">Congress Overturns Internet Privacy Regulation</a> &ndash; NPR',
//           '<a href="https://www.nytimes.com/2017/04/28/us/politics/nsa-surveillance-terrorism-privacy.html?_r=0">N.S.A. Halts Collection of Americans\' Emails About Foreign Targets</a> &ndash; NY Times',
//           '<a href="https://www.forbes.com/sites/legalnewsline/2016/07/05/il-facial-recognition-law-leads-to-wave-of-class-actions-against-facebook-others/">Illinois Facial Recognition Law Leads To Wave Of Class Actions Against Facebook, Others</a> &ndash; Forbes'
//         ]
//       }
//     ]
//   },
//   {
//     week: 6,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Intellectual Property &ndash; <a href="https://docs.google.com/document/d/1r_AwMzclmqfSoq8_Xhv3gWzqpE2B1enFH03Y4OQHQUU/edit?usp=sharing">notes</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://www.wipo.int/about-ip/en/">What is Intellectual Property</a> &ndash; World Intellectual Property Organization'
//         ]
//       }
//     ]
//   }
// ],

export default topics;
