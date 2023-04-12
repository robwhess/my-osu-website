
const topics = [
    {
        title: 'Course Intro',
        weeks: [ 1 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1xX6GRthVDqvTK1GCeAAkHCdKH6GNv4x-1L6ngAuMQPo/edit?usp=sharing'
            }
        ],
        readings: [
            {
                title: 'What is Software Engineering',
                link: 'https://abseil.io/resources/swe-book/html/ch01.html',
                description: 'Titus Waters (Chapter 1 of Software Engineering at Google)'
            }
        ]
    },
    {
        title: 'Git and GitHub: An Individual\'s Perspective',
        weeks: [ 1, 2 ],
        isCurrent: true,
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1OvD4CHSYbJ7fWG6NtoLE5ekia6RnKJRRCS-OSUN8XZM/edit?usp=sharing'
            }
        ],
        readings: [
            {
                title: 'Getting Started [with Git]',
                link: 'https://git-scm.com/book/en/v2/',
                description: 'Chapter 1 of Pro Git by Scott Chacon and Ben Straub'
            },
            {
                title: 'Git Basics',
                link: 'https://git-scm.com/book/en/v2/',
                description: 'Chapter 2 of Pro Git by Scott Chacon and Ben Straub'
            },
            {
                title: 'Git cheat sheet',
                link: 'https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet',
                description: 'Atlassian'
            },
            {
                title: 'Git cheat sheet',
                link: 'https://training.github.com/',
                description: 'GitHub'
            },
            {
                title: 'Git merge conflicts',
                link: 'https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts',
                description: 'Atlassian'
            }
        ]
    },
    {
        title: 'Software Testing Fundamentals',
        weeks: [ 2, 3 ],
        isCurrent: true,
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1aCfeMbS_DJxe-ZorQMee3oPXvRsKWPKxu2XxaBnqHhc/edit?usp=sharing'
            },
        ],
        readings: [
            {
                title: 'Testing Overview',
                link: 'https://abseil.io/resources/swe-book/html/ch11.html',
                description: 'Adam Bender (Chapter 11 of Software Engineering at Google)'
            },
            {
                title: 'Test Behavior, Not Implementation',
                link: 'https://testing.googleblog.com/2013/08/testing-on-toilet-test-behavior-not.html',
                description: 'Andrew Trenk (Google Testing Blog)'
            },
            {
                title: 'Different types of testing and the testing pyramid',
                link: 'https://learn.microsoft.com/en-us/training/modules/visual-studio-test-concepts/4-different-types-of-testing',
                description: 'Microsoft Training'
            },
            {
                title: 'TestPyramid',
                link: 'https://martinfowler.com/bliki/TestPyramid.html',
                description: 'Martin Fowler'
            },
            {
                title: 'Write Tests.  Not too many.  Mostly integration.',
                link: 'https://kentcdodds.com/blog/write-tests',
                description: 'Kent C. Dodds'
            },
            {
                title: 'Test-Driven Development',
                link: 'https://www.jamesshore.com/v2/books/aoad2/test-driven_development',
                description: 'James Shore and Shane Warden (from The Art of Agile Development)'
            }
        ]
    },
    {
        title: 'Unit Testing and the Jest Testing Framework',
        weeks: [ 3, 4 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1kTbcXqFVreDtsG2fbncoZ77Z5YiQobCn18Nibu4Lt50/edit?usp=sharing'
            },
            {
                title: 'Example code',
                link: 'https://github.com/osu-cs362-sp23/unit-testing-with-jest',
                description: 'code written during lecture'
            }
        ],
        readings: [
            {
                title: 'Unit Testing',
                link: 'https://abseil.io/resources/swe-book/html/ch12.html',
                description: 'Erik Kuefler (Chapter 12 of Software Engineering at Google)'
            },
            {
                title: 'Getting Started with Jest',
                link: 'https://jestjs.io/docs/getting-started',
                description: 'Jest Docs'
            },
            {
                title: 'Using Matchers',
                link: 'https://jestjs.io/docs/using-matchers',
                description: 'Jest Docs'
            },
            {
                title: 'Arrange, Act and Assert Pattern: The Three A\'s of Unit Testing',
                link: 'https://robertmarshall.dev/blog/arrange-act-and-assert-pattern-the-three-as-of-unit-testing/',
                description: 'Robert Marshall'
            },
            {
                title: 'Building a JavaScript Testing Framework',
                link: 'https://cpojer.net/posts/building-a-javascript-testing-framework#building-a-testing-framework',
                description: 'Christoph Nakazawa'
            }
        ]
    },
    // {
    //     title: 'Test-Driven Development: A Case Study',
    //     weeks: [ 4 ],
    //     resources: [
    //         {
    //             title: 'Lecture notes',
    //             link: 'https://docs.google.com/document/d/1cCiUGRj5IBUTbWgyXwS8j4b5kwA4VlsrsTls7exuX48/edit?usp=sharing'
    //         }
    //     ],
    //     readings: [
    //         {
    //             title: 'Test-Driven Development',
    //             link: 'https://www.jamesshore.com/v2/books/aoad2/test-driven_development',
    //             description: 'James Shore and Shane Warden (from The Art of Agile Development)'
    //         },
    //         {
    //             title: 'Incremental Test-Driven Development',
    //             link: 'https://www.jamesshore.com/v2/projects/lunch-and-learn/incremental-tdd',
    //             description: 'James Shore'
    //         },
    //         {
    //             title: 'When I follow TDD',
    //             link: 'https://kentcdodds.com/blog/when-i-follow-tdd',
    //             description: 'Kent C. Dodds'
    //         },
    //         {
    //             title: '',
    //             link: '',
    //             description: ''
    //         },
    //         {
    //             title: '',
    //             link: '',
    //             description: ''
    //         }
    //     ]
    // }
]

export default topics
