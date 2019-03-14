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
      },
      {
        title: 'Feynman\'s Error: On Ethical Thinking and Drifting',
        link: 'https://www.danmunro.ca/blog/2018/11/29/feynmans-error-on-ethical-thinking-and-drifting-nbsp',
        description: 'Dan Munro'
      }
    ]
  },

  {
    title: 'Ethical Theories',
    weeks: [ 2, 3 ],
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
  },

  {
    title: 'Professional Ethics',
    weeks: [ 3 ],
    resources: [
      {
        title: 'Notes and questions',
        link: 'https://docs.google.com/document/d/1IbIFU4mVMuH1IYrmhi-Taz5aIpqLVEnEc7WcU6fSzZc/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'ACM Code of Ethics and Professional Conduct',
        link: 'https://www.acm.org/code-of-ethics',
        description: 'Association for Computing Machinery'
      },
      {
        title: 'IEEE Code of Ethics',
        link: 'https://www.ieee.org/about/corporate/governance/p7-8.html',
        description: 'Institute of Electrical and Electronics Engineers'
      },
      {
        title: 'Artificial Intelligence at Google: Our Principles',
        link: 'https://ai.google/principles/',
        description: 'Google AI'
      }
    ]
  },

  {
    title: 'Risks, Harm, Accountability, and the Ethics of Design',
    weeks: [ 4 ],
    resources: [
      {
        title: 'Notes and questions',
        link: 'https://docs.google.com/document/d/1pQa-23QMXU30V-q3PBGuzCYpCpyhnwrXKB9srNohL0Q/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Computing and Moral Responsibility',
        link: 'https://plato.stanford.edu/entries/computing-responsibility/',
        description: 'Stanford Encyclopedia of Philosophy'
      },
      {
        title: 'Killed by a Machine: The Therac-25',
        link: 'https://hackaday.com/2015/10/26/killed-by-a-machine-the-therac-25/',
        description: 'Adam Fabio (Hackaday)'
      },
      {
        title: 'The Therac-25: 30 Years Later',
        link: 'https://www.computer.org/csdl/mags/co/2017/11/mco2017110008.html',
        description: 'Nancy G. Leveson (Computer Magazine)'
      },
      {
        title: 'Hawaii’s missile alert interface had a one-word difference between sending a test alert and a real one',
        link: 'https://www.theverge.com/2018/1/16/16896368/hawaii-false-missile-alert-system-confusing-interface-poor-design',
        description: 'Shannon Liao (The Verge)'
      },
      {
        title: 'Man sues Hawaii, blaming false missile alert for heart attack',
        link: 'https://www.reuters.com/article/us-usa-missiles/startled-by-false-missile-alert-man-sues-hawaii-for-heart-attack-idUSKCN1NX26M',
        description: 'Reuters'
      },
      {
        title: 'What are "Ethics in Design"?',
        link: 'https://slate.com/technology/2018/08/ethics-in-design-what-exactly-does-that-mean.html',
        description: 'Slate'
      }
    ]
  },

  {
    title: 'Whistleblowing',
    weeks: [ 4, 5 ],
    readings: [
      {
        title: 'Encouraging Internal Whistleblowing in Organizations',
        link: 'https://www.scu.edu/ethics/focus-areas/business-ethics/resources/encouraging-internal-whistleblowing/',
        description: 'Lilanthi Ravishankar (Markkula Center for Applied Ethics at Santa Clara University)'
      },
      {
        title: 'Whistle Blowing in the Public Sector',
        link: 'https://www.scu.edu/government-ethics/resources/what-is-government-ethics/whistle-blowing-in-the-public-sector/',
        description: 'Judy Nadler and Miriam Schulman (Markkula Center for Applied Ethics at Santa Clara University)'
      },
      {
        title: 'Edward Snowden',
        link: 'https://en.wikipedia.org/wiki/Edward_Snowden',
        description: 'Wikipedia (focus on these sections: "Global surveillance disclosures", "Criminal charges", "Reaction")'
      },
      {
        title: 'Chelsea Manning',
        link: 'https://en.wikipedia.org/wiki/Chelsea_Manning',
        description: 'Wikipedia (focus on these sections: "Publication of leaked material", "Legal proceedings", "Reaction to disclosures")'
      }
    ]
  },

  {
    title: 'Privacy, Data Collection, and Digital Surveillance',
    weeks: [ 5, 6 ],
    readings: [
      {
        title: 'United States of Secrets',
        link: 'https://www.pbs.org/wgbh/frontline/film/united-states-of-secrets/#united-states-of-secrets',
        description: 'Frontline (a two-part video series)'
      },
      {
        title: 'A Contextual Approach to Privacy Online',
        link: 'https://www.amacad.org/publication/contextual-approach-privacy-online',
        description: 'Helen Nissenbaum'
      },
      {
        title: 'Facebook Average Revenue per User (ARPU)',
        link: 'https://s21.q4cdn.com/399680738/files/doc_financials/2018/Q1/Q1-2018-Earnings-Presentation-%281%29.pdf#page=8',
        description: 'page 8 of Facebook\'s Q1 2018 earnings presentation'
      },
      {
        title: 'Facebook\'s Data Policy',
        link: 'https://www.facebook.com/policy.php',
        description: 'Facebook'
      }
    ]
  },

  {
    title: 'Human Attention and Humane Technology Design',
    weeks: [ 6, 7 ],
    // resources: [
    //
    // ],
    readings: [
      {
        title: 'Center for Humane Technology',
        link: 'http://humanetech.com/'
      },
      {
        title: 'Can software be good for us?',
        link: 'https://medium.com/what-to-build/dear-zuck-fd25ecb1aa5a',
        description: 'Joe Edelman (on Medium)'
      },
      {
        title: 'How to Design Social Systems (Without Causing Depression and War)',
        link: 'https://medium.com/what-to-build/how-to-design-social-systems-without-causing-depression-and-war-3c3f8e0226d1',
        description: 'Joe Edelman (on Medium)'
      },
      {
        title: 'Luddite',
        link: 'https://en.wikipedia.org/wiki/Luddite',
        description: 'Wikipedia'
      },
      {
        title: 'Amish Community Not Anti-Technology, Just More Thoughtful',
        link: 'https://www.npr.org/sections/alltechconsidered/2013/09/02/217287028/amish-community-not-anti-technology-just-more-thoughful',
        description: 'NPR'
      },
      {
        title: 'Stand Out of Our Light: Freedom and Resistance in the Attention Economy',
        link: 'https://www.cambridge.org/core/books/stand-out-of-our-light/3F8D7BA2C0FE3A7126A4D9B73A89415D',
        description: 'James Williams (optional)'
      }
    ]
  },

  {
    title: 'AI and Algorithmic Bias',
    weeks: [ 7, 8, 9 ],
    // resources: [
    //
    // ],
    readings: [
      {
        title: 'Machine Bias',
        link: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing',
        description: 'Julia Angwin, Jeff Larson, Surya Mattu, and Lauren Kirchner (ProPublica)'
      },
      {
        title: 'How We Analyzed the COMPAS Recidivism Algorithm',
        link: 'https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm',
        description: 'Jeff Larson, Surya Mattu, Lauren Kirchner, and Julia Angwin (ProPublica)'
      },
      {
        title: 'Make Algorithms Accountable',
        link: 'https://www.nytimes.com/2016/08/01/opinion/make-algorithms-accountable.html?_r=0',
        description: 'Julia Angwin (NY Times)'
      },
      {
        title: 'A computer program used for bail and sentencing decisions was labeled biased against blacks. It’s actually not that clear.',
        link: 'https://www.washingtonpost.com/news/monkey-cage/wp/2016/10/17/can-an-algorithm-be-racist-our-analysis-is-more-cautious-than-propublicas/?noredirect=on&utm_term=.4666a0a937a3#comments',
        description: 'Sam Corbett-Davies, Emma Pierson, Avi Feller, and Sharad Goel (Washington Post)'
      },
      {
        title: 'Bias detectives: the researchers striving to make algorithms fair',
        link: 'https://www.nature.com/articles/d41586-018-05469-3',
        description: 'Rachel Courtlan (in Nature)'
      }
    ]
  },

  {
    title: 'Private Platforms and Free Speech',
    isCurrent: true,
    weeks: [ 10 ],
    // resources: [
    //
    // ],
    readings: [
      {
        title: 'It\'s the (Democracy-Poisoning) Golden Age of Free Speech',
        link: 'https://www.wired.com/story/free-speech-issue-tech-turmoil-new-censorship/',
        description: 'Zeynep Tufecki (Wired)'
      },
      {
        title: 'Does the banning of Alex Jones signal a new era of big tech responsibility?',
        link: 'https://www.theguardian.com/technology/2018/aug/10/alex-jones-banning-apple-facebook-youtube-twitter-free-speech',
        description: 'Julia Carrie Wong and Olivia Solon (The Guardian)'
      },
      {
        title: 'Inside Twitter’s Struggle Over What Gets Banned',
        link: 'https://www.nytimes.com/2018/08/10/technology/twitter-free-speech-infowars.html',
        description: 'Cecilia Kang and Kate Conger (NY Times)'
      },
      {
        title: 'Is the First Amendment Obsolete',
        link: 'https://knightcolumbia.org/content/tim-wu-first-amendment-obsolete',
        description: 'Tim Wu'
      },
      {
        title: 'Tech Platforms and the Knowledge Problem',
        link: 'https://americanaffairsjournal.org/2018/05/tech-platforms-and-the-knowledge-problem/',
        description: 'Frank Pasquale'
      },
      {
        title: 'The New Governors: The People, Rules, and Processes Governing Online Speech',
        link: 'https://harvardlawreview.org/wp-content/uploads/2018/04/1598-1670_Online.pdf',
        description: 'Kate Klonick (you can just read the introduction)'
      },
      {
        title: 'Resisting Political Fragmentation on the Internet',
        link: 'https://www.mitpressjournals.org/doi/pdf/10.1162/daed_a_00118',
        description: 'R. Kelly Garrett & Paul Resnick'
      },
      {
        title: 'The Social Responsibility of Business is to Increase its Profits',
        link: 'http://umich.edu/~thecore/doc/Friedman.pdf',
        description: 'Milton Friedman'
      }
    ]
  }
];

export default topics;
