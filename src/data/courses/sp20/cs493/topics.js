const topics = [
  {
    title: 'Course Intro',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1L9pKt1GmBeBiQgTWswDkgwPHLW9mRz4ObrNDXGBp97s/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1PcDTszXoKyHLllIeq5DvdcTNY-NVfPLR/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'What is REST',
        link: 'https://restfulapi.net/',
        description: 'restfulapi.net'
      },
      {
        title: 'Chapters 1 and 2',
        link: 'https://git-scm.com/book/en/v2',
        description: 'Pro Git'
      }
    ]
  },

  {
    title: 'RESTful API Design',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1AYg6cE2JYTkDvu0JxiyNbNFrMc3fZxQqoHZqim81voM/edit?usp=sharing'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1xOt7Q_WwPlxVgdaYeEE8ii7n_Pr4CI83/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'How to design a RESTful API architecture from a human-language spec',
        link: 'https://www.oreilly.com/learning/how-to-design-a-restful-api-architecture-from-a-human-language-spec',
        description: 'Filipe Ximenes and Flávio Juvenal (O\'Reilly)'
      },
      {
        title: 'API Design',
        link: 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design',
        description: 'Microsoft'
      }
    ]
  },

  {
    title: 'Setting up a Server with Node.js and Express',
    weeks: [ 2 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1Bxlcxy1A4jqa0Mqu1AZKr4f27b4I5E3yRFj4uosdMGQ/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/server-setup',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Node.js',
        link: 'http://eloquentjavascript.net/20_node.html',
        description: 'Eloquent Javascript, Chapter 20'
      },
      {
        title: 'How to Install Local Packages',
        link: 'https://docs.npmjs.com/getting-started/installing-npm-packages-locally',
        description: 'npm docs'
      },
      {
        title: 'Working with package.json',
        link: 'https://docs.npmjs.com/getting-started/using-a-package.json',
        description: 'npm docs'
      },
      {
        title: 'Hello world example',
        link: 'https://expressjs.com/en/starter/hello-world.html',
        description: 'Express docs'
      },
      {
        title: 'Basic routing',
        link: 'https://expressjs.com/en/starter/basic-routing.html',
        description: 'Express docs'
      },
      {
        title: 'Routing',
        link: 'https://expressjs.com/en/guide/routing.html',
        description: 'Express docs'
      },
      {
        title: 'Writing middleware for use in Express apps',
        link: 'https://expressjs.com/en/guide/writing-middleware.html',
        description: 'Express docs'
      },
      {
        title: 'Requests',
        link: 'https://www.getpostman.com/docs/postman/sending_api_requests/requests',
        description: 'Postman'
      },
      {
        title: 'Responses',
        link: 'https://www.getpostman.com/docs/postman/sending_api_requests/responses',
        description: 'Postman'
      },
      {
        title: 'Test scripts',
        link: 'https://www.getpostman.com/docs/postman/scripts/test_scripts',
        description: 'Postman'
      },
      {
        title: 'Test examples',
        link: 'https://www.getpostman.com/docs/postman/scripts/test_examples',
        description: 'Postman'
      }
    ]
  },

  {
    title: 'Containerization with Docker',
    weeks: [ 3, 4 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1oscyJP10ZXobbypdvcKhKxr-s22W2v5L999Qk9frgnQ/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/docker',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1oe74BHxQPGkIuiIzmnezgOD-b2sPKAzv/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'Docker overview',
        link: 'https://docs.docker.com/engine/docker-overview/',
        description: 'Docker docs'
      },
      {
        title: 'Get started with Docker',
        link: 'https://docs.docker.com/get-started/',
        description: 'Docker docs'
      },
      {
        title: 'Dockerfile reference',
        link: 'https://docs.docker.com/engine/reference/builder/',
        description: 'Docker docs'
      },
      {
        title: 'Use volumes',
        link: 'https://docs.docker.com/storage/volumes/',
        description: 'Docker docs'
      },
      {
        title: 'Networking overview',
        link: 'https://docs.docker.com/network/',
        description: 'Docker docs'
      },
      {
        title: 'Networking with standalone containers',
        link: 'https://docs.docker.com/network/network-tutorial-standalone/',
        description: 'Docker docs'
      },
      {
        title: 'Overview of Docker Compose',
        link: 'https://docs.docker.com/compose/overview/',
        description: 'Docker docs'
      },
      {
        title: 'Compose file version 3 reference',
        link: 'https://docs.docker.com/compose/compose-file/',
        description: 'Docker docs'
      },
    ]
  },

  {
    title: 'Using MySQL to Store API Data',
    weeks: [ 4, 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1ZmvaQ_ml6mg6alg_OIC8RMaJJBDgxBtDYPeDKlJSymQ/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/using-mysql',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1VyuPooTtBZNuS5k32Z3duY2qHNpdxaIl/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'Official MySQL image',
        link: 'https://hub.docker.com/_/mysql/',
        description: 'Docker Hub'
      },
      {
        title: 'MySQL Tutorial',
        link: 'https://dev.mysql.com/doc/refman/8.0/en/tutorial.html',
        description: 'MySQL Docs'
      },
      {
        title: 'mysql',
        link: 'https://www.npmjs.com/package/mysql',
        description: 'npm'
      },
      {
        title: 'Promises',
        link: 'https://www.promisejs.org/',
        description: 'promisejs.org'
      },
      {
        title: 'Using promises',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises',
        description: 'MDN'
      }
    ]
  },

  {
    title: 'Using MongoDB to Store API Data',
    weeks: [ 5 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/16Po_Rw5a1DiLo4DuSyA7oiCbB-SJA2yqPBYVBZ3d088/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/using-mongodb',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Official MongoDB image',
        link: 'https://hub.docker.com/_/mongo/',
        description: 'Docker Hub'
      },
      {
        title: 'Getting Started with MongoDB',
        link: 'https://docs.mongodb.com/getting-started/shell/',
        description: 'MongoDB docs'
      },
      {
        title: 'Documents',
        link: 'https://docs.mongodb.com/manual/core/document/',
        description: 'MongoDB docs'
      },
      {
        title: 'MongoDB CRUD Operations',
        link: 'https://docs.mongodb.com/manual/crud/',
        description: 'MongoDB docs'
      },
      {
        title: '6 Rules of Thumb for MongoDB Schema Design: Part 1',
        link: 'https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1',
        description: 'William Zola (MongoDB Blog)'
      },
      {
        title: 'Node.js Quick Start',
        link: 'http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/',
        description: 'MongoDB docs'
      },
      {
        title: 'Indexes',
        link: 'https://docs.mongodb.com/manual/indexes/',
        description: 'MongoDB docs'
      },
      {
        title: 'Aggregation',
        link: 'https://docs.mongodb.com/manual/aggregation/',
        description: 'MongoDB docs'
      },
      {
        title: 'Aggregation Pipeline Stages',
        link: 'https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/',
        description: 'MongoDB docs'
      }
    ]
  },

  {
    title: 'API Authentication and Authorization',
    weeks: [ 6 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1uQjeMG2GtLFSdB0yBdkZroKojnuaCykt_6Tl4c09E2s/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/auth',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1YPb5emLdmAtUp2MCiJ3dFp8ChoOS9RTj/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'Securing Node.js RESTful APIs with JSON Web Tokens',
        link: 'https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52',
        description: 'Adnan Rahić (freeCodeCamp.org)'
      },
      {
        title: 'Introduction to JSON Web Tokens',
        link: 'https://jwt.io/introduction/',
        description: 'JWT.IO'
      },
      {
        title: 'JSON Web Token',
        link: 'https://en.wikipedia.org/wiki/JSON_Web_Token',
        description: 'Wikipedia'
      },
      {
        title: 'bcrypt.js',
        link: 'https://www.npmjs.com/package/bcryptjs',
        description: 'npm'
      }
    ]
  },

  {
    title: 'API Rate Limiting and Redis',
    weeks: [ 7 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1UViQCrmRRntELmNsqVT89vuFpuoU_M13py-VS_5CJxI/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/rate-limiting',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1AzR-C-KLtrYdrYSfeychMHxipOVT-p5w/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'Scaling your API with rate limiters',
        link: 'https://stripe.com/blog/rate-limiters',
        description: 'Paul Tarjan (Stripe Engineering Blog)'
      },
      {
        title: 'An alternative approach to rate limiting',
        link: 'https://blog.figma.com/an-alternative-approach-to-rate-limiting-f8a06cf7c94c',
        description: 'Nikrad Mahdi (Figma Design Blog)'
      },
      {
        title: 'Token bucket',
        link: 'https://en.wikipedia.org/wiki/Token_bucket',
        description: 'Wikipedia'
      },
      {
        title: 'An introduction to Redis data types and abstractions',
        link: 'https://redis.io/topics/data-types-intro',
        description: 'Redis docs'
      },
      {
        title: 'Redis commands',
        link: 'https://redis.io/commands',
        description: 'Redis docs'
      }
    ]
  },

  {
    title: 'Storing File Data',
    weeks: [ 8 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1FD1RY28hHCzeIirL1r9eMtTqr-fa4biBG7e-tKXpub8/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/file-storage',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1_66iI5aumvJ0sFF7CmMny6IsEXtMxGG6/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'POST (info on multipart form-data)',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST',
        description: 'MDN'
      },
      {
        title: 'Multer',
        link: 'https://expressjs.com/en/resources/middleware/multer.html',
        description: 'Express docs'
      },
      {
        title: 'Building MongoDB Applications with Binary Files Using GridFS: Part 2',
        link: 'https://www.mongodb.com/blog/post/building-mongodb-applications-binary-files-using-gridfs-part-2',
        description: 'Jay Runkel (MongoDB blog)'
      },
      {
        title: 'GridFS',
        link: 'https://docs.mongodb.com/manual/core/gridfs/',
        description: 'MongoDB docs'
      },
      {
        title: 'The GridFS API',
        link: 'http://mongodb.github.io/node-mongodb-native/3.2/tutorials/gridfs/streaming/',
        description: 'MongoDB Node.js driver docs'
      },
      {
        title: 'Stream',
        link: 'https://nodejs.org/api/stream.html',
        description: 'Node.js docs'
      }
    ]
  },

  {
    title: 'Performing Offline Work with RabbitMQ',
    weeks: [ 9 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/11HHOL2J2O8pbppHvAOFjoqqUfmWXURmsT0VmtGaAUew/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/offline-work',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1OMnXTINbXeqThPc7p2N_j3-zfsDELBRc/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'Message Queues',
        link: 'https://aws.amazon.com/message-queue/',
        description: 'AWS Docs'
      },
      {
        title: 'Pub/Sub Messaging',
        link: 'https://aws.amazon.com/pub-sub-messaging/',
        description: 'AWS Docs'
      },
      {
        title: '"Hello World!"',
        link: 'https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html',
        description: 'RabbitMQ Tutorials'
      },
      {
        title: 'Work Queues',
        link: 'https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html',
        description: 'RabbitMQ Tutorials'
      }
    ]
  },

  {
    title: 'Data Replication',
    weeks: [ 10 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1fIOAQ53Gs-TY27geuxQybI0mcw78ImGnPWxrP0u0YiU/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/osu-cs493-sp20/data-replication',
        description: 'code written in lecture'
      },
      {
        title: 'Lecture doodles',
        link: 'https://drive.google.com/file/d/1ICeN_4ltOx5Vm3abx7bJUxoBt9DLFM8K/view?usp=sharing',
        description: 'drawings from lecture'
      }
    ],
    readings: [
      {
        title: 'A Primer on Database Replication',
        link: 'https://www.brianstorti.com/replication/',
        description: 'Brian Storti'
      },
      {
        title: 'MongoDB Replication',
        link: 'https://docs.mongodb.com/manual/replication/',
        description: 'MongoDB docs'
      },
      {
        title: 'Deploy New Replica Set With Keyfile Access Control',
        link: 'https://docs.mongodb.com/manual/tutorial/deploy-replica-set-with-keyfile-access-control/',
        description: 'MongoDB docs'
      },
      {
        title: 'MySQL Replication',
        link: 'https://dev.mysql.com/doc/refman/8.0/en/replication.html',
        description: 'MySQL docs'
      }
    ]
  }
];

export default topics;
