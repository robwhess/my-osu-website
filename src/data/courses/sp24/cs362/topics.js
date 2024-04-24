
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
        weeks: [ 2 ],
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
        weeks: [ 3 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1kTbcXqFVreDtsG2fbncoZ77Z5YiQobCn18Nibu4Lt50/edit?usp=sharing'
            },
            {
                title: 'Example code',
                link: 'https://github.com/osu-cs362-sp24/unit-testing-with-jest',
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

    {
        title: 'Test-Driven Development: A Case Study',
        weeks: [ 4 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1cCiUGRj5IBUTbWgyXwS8j4b5kwA4VlsrsTls7exuX48/edit?usp=sharing'
            },
            {
                title: 'Example code',
                link: 'https://github.com/osu-cs362-sp24/tdd-case-study',
                description: 'code written during lecture'
            }
        ],
        readings: [
            {
                title: 'Test-Driven Development',
                link: 'https://www.jamesshore.com/v2/books/aoad2/test-driven_development',
                description: 'James Shore and Shane Warden (from The Art of Agile Development)'
            },
            {
                title: 'Incremental Test-Driven Development',
                link: 'https://www.jamesshore.com/v2/projects/lunch-and-learn/incremental-tdd',
                description: 'James Shore'
            },
            {
                title: 'When I follow TDD',
                link: 'https://kentcdodds.com/blog/when-i-follow-tdd',
                description: 'Kent C. Dodds'
            }
        ]
    },

    {
        title: 'UI-Based Integration Testing',
        weeks: [ 4, 5 ],
        isCurrent: true,
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1Q9ih-CIUsUwnsaCUhjjIaP05gCvC7Ftr9sUZvsPpn8g/edit?usp=sharing'
            },
            {
                title: 'Example code',
                link: 'https://github.com/osu-cs362-sp24/ui-integration-testing',
                description: 'code written during lecture'
            }
        ],
        readings: [
            {
                title: 'JSDOM',
                link: 'https://github.com/jsdom/jsdom#readme'
            },
            {
                title: 'DOM Manipulation',
                link: 'https://jestjs.io/docs/tutorial-jquery',
                description: 'Jest Docs'
            },
            {
                title: 'DOM Testing Library Introduction',
                link: 'https://testing-library.com/docs/dom-testing-library/intro',
                description: 'Testing Library Docs'
            },
            {
                title: 'User Event Library Introduction',
                link: 'https://testing-library.com/docs/user-event/intro',
                description: 'Testing Library Docs'
            },
            {
                title: 'jest-dom',
                link: 'https://github.com/testing-library/jest-dom#readme'
            },
            {
                title: 'Snapshot Testing',
                link: 'https://jestjs.io/docs/snapshot-testing',
                description: 'Jest Docs'
            }
        ]
    },

    {
        title: 'Test Doubles',
        weeks: [ 6, 7 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1NB775R2seFx5YmMeDeiCEnTCw3uGoEzDKGcHjkYAAvI/edit?usp=sharing'
            },
            // {
            //     title: 'Example code',
            //     link: 'https://github.com/osu-cs362-sp23/test-doubles',
            //     description: 'code written during lecture'
            // }
        ],
        readings: [
            {
                title: 'Test Doubles',
                link: 'https://abseil.io/resources/swe-book/html/ch13.html',
                description: 'Andrew Trenk and Dillon Bly (Chapter 13 of Software Engineering at Google)'
            },
            {
                title: 'TestDouble',
                link: 'https://martinfowler.com/bliki/TestDouble.html',
                description: 'Martin Fowler'
            },
            {
                title: 'Mocks Aren\'t Stubs',
                link: 'https://martinfowler.com/articles/mocksArentStubs.html',
                description: 'Martin Fowler'
            },
            {
                title: 'Test Double',
                link: 'http://xunitpatterns.com/Test%20Double.html',
                description: 'xUnit Patterns'
            },
            {
                title: 'Mock Functions',
                link: 'https://jestjs.io/docs/mock-functions',
                description: 'Jest Documentation'
            },
            {
                title: 'Introduction to Mock Service Worker',
                link: 'https://mswjs.io/docs/',
                description: 'MSW Documentation'
            }
        ]
    },

    {
        title: 'A Team-Based Workflow for using Git and GitHub',
        weeks: [ 7 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1Uzencnr7c6dorZvG53g27G57B8lIowoctNTZosUsiuM/edit?usp=sharing'
            },
            // {
            //     title: 'Example code',
            //     link: 'https://github.com/osu-cs362-sp23/github-flow',
            //     description: 'code written during lecture'
            // }
        ],
        readings: [
            {
                title: 'Code Review',
                link: 'https://abseil.io/resources/swe-book/html/ch09.html',
                description: 'Tom Manshreck and Caitlin Sadowski (Chapter 9 of Software Engineering at Google)'
            },
            {
                title: 'GitHub flow',
                link: 'https://docs.github.com/en/get-started/quickstart/github-flow',
                description: 'GitHub Docs'
            },
            {
                title: 'GitHub Flow',
                link: 'https://githubflow.github.io/'
            },
            {
                title: 'Git Feature Branch Workflow',
                link: 'https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow',
                description: 'Atlassian'
            },
            {
                title: 'Git Branches - Branching in a Nutshell',
                link: 'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell',
                description: 'Pro Git'
            },
            {
                title: 'Git Merge',
                link: 'https://www.atlassian.com/git/tutorials/using-branches/git-merge',
                description: 'Atlassian'
            },
            {
                title: 'About pull requests',
                link: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests',
                description: 'GitHub Docs'
            },
            {
                title: 'About protected branches',
                link: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches',
                description: 'GitHub Docs'
            }
        ]
    },

    {
        title: 'End-to-End Testing with Cypress',
        weeks: [ 8, 9 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1YQK068Fpqllgw_6ZJ4sZvSlNS1b2QM3N8I_nQMpE_cg/edit?usp=sharing'
            },
            // {
            //     title: 'Example code',
            //     link: 'https://github.com/osu-cs362-sp23/e2e-testing',
            //     description: 'code written during lecture'
            // }
        ],
        readings: [
            {
                title: 'Larger Testing',
                link: 'https://abseil.io/resources/swe-book/html/ch14.html',
                description: 'Joseph Graves (Chapter 14 of Software Engineering at Google)'
            },
            {
                title: 'Introduction to Cypress',
                link: 'https://docs.cypress.io/guides/core-concepts/introduction-to-cypress',
                description: 'Cypress Docs'
            },
            {
                title: 'Writing and Organizing Tests',
                link: 'https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests',
                description: 'Cypress Docs'
            },
            {
                title: 'Testing Your App',
                link: 'https://docs.cypress.io/guides/end-to-end-testing/testing-your-app',
                description: 'Cypress Docs'
            },
            {
                title: 'Assertions',
                link: 'https://docs.cypress.io/guides/references/assertions',
                description: 'Cypress Docs'
            },
            {
                title: 'Cypress Testing Library',
                link: 'https://testing-library.com/docs/cypress-testing-library/intro',
                description: 'Testing Library Docs'
            },
            {
                title: 'Best Practices',
                link: 'https://docs.cypress.io/guides/references/best-practices',
                description: 'Cypress Docs'
            }
        ]
    },

    {
        title: 'Continuous Integration and Continuous Delivery with GitHub Actions',
        weeks: [ 10 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1q64GcApt1mikM2FGEq_kgh_eFS5gXZBen8D0FFsGXk0/edit?usp=sharing'
            },
            // {
            //     title: 'Example code',
            //     link: 'https://github.com/osu-cs362-sp23/ci-cd',
            //     description: 'code written during lecture'
            // }
        ],
        readings: [
            {
                title: 'Continuous Integration',
                link: 'https://abseil.io/resources/swe-book/html/ch23.html',
                description: 'Rachel Tannenbaum (Chapter 23 of Software Engineering at Google)'
            },
            {
                title: 'Continuous Integration',
                link: 'https://www.martinfowler.com/articles/continuousIntegration.html',
                description: 'Martin Fowler'
            },
            {
                title: 'Continuous Delivery',
                link: 'https://abseil.io/resources/swe-book/html/ch24.html',
                description: 'Radha Narayan, Bobbi Jones, Sheri Shipe, and David Owens (Chapter 24 of Software Engineering at Google)'
            },
            {
                title: 'Continuous Delivery',
                link: 'https://martinfowler.com/bliki/ContinuousDelivery.html',
                description: 'Martin Fowler'
            },
            {
                title: 'Understanding GitHub Actions',
                link: 'https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions',
                description: 'GitHub Docs'
            },
            {
                title: 'Storing workflow data as artifacts',
                link: 'https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts',
                description: 'GitHub Docs'
            },
            {
                title: 'Reusing workflows',
                link: 'https://docs.github.com/en/actions/using-workflows/reusing-workflows',
                description: 'GitHub Docs'
            }
        ]
    }
]

export default topics
