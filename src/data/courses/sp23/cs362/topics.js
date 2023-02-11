
const topics = [
    {
        title: 'Course Intro',
        weeks: [ 1 ],
        resources: [
            {
                title: 'Lecture notes',
                link: 'https://docs.google.com/document/d/1xX6GRthVDqvTK1GCeAAkHCdKH6GNv4x-1L6ngAuMQPo/edit?usp=sharing'
            },
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
        title: 'Software Testing Fundamentals',
        weeks: [ 1, 2 ],
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
    }
]

export default topics
