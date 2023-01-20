import SoftwareEngineeringAtGoogleCh1 from '../../../../static/Software_Engineering_at_Google-Ch1.pdf';
import SoftwareEngineeringAtGoogleCh11 from '../../../../static/Software_Engineering_at_Google-Ch11.pdf';

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
                link: SoftwareEngineeringAtGoogleCh1,
                description: 'Titus Waters (Chapter 1 of O\'Reilly\'s Software Engineering at Google)'
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
                link: SoftwareEngineeringAtGoogleCh11,
                description: 'Adam Bender (Chapter 11 of O\'Reilly\'s Software Engineering at Google)'
            }
        ]
    }
]

export default topics
