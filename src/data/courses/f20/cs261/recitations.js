const recitations = {
  calendar: [
    {
      title: 'Week 0: No Recitation',
      isCurrent: true,
      notes: [
        'No recitation this week.'
      ]
    },

    {
      title: 'Week 1: CS 261 IT',
      isCurrent: true,
      resources: [
        {
          title: 'CS 261 IT Basics',
          link: 'https://docs.google.com/presentation/d/15J_2DPpmXAHfDtsQXM_Bkj8wsyq6mthf8AB4vFU24JQ/edit?usp=sharing',
          description: 'Presentation slides.'
        },
        {
          title: 'Recitation exercise',
          link: 'https://docs.google.com/document/d/1VIeZ-OQujN4vbrlEM2V72VtaRr7Tj63tssBLtS47_JQ/edit?usp=sharing'
        },
        {
          title: 'test.c',
          link: 'https://gist.githubusercontent.com/robwhess/a55e1360b474b910ab19b3af24cd5ae2/raw/938ddc0320bc962797c07d837477651722182146/test.c',
          description: 'This is the C program you\'ll have to download as part of the week\'s recitation exercise.'
        }
      ],
      readings: [
        {
          title: 'Beginner\'s Guide To SSH',
          link: 'https://youtu.be/qWKK_PNHnnA',
          description: 'This is a great, short video explaining what SSH is and how to use it.  Give this a watch if you\'re not familiar with SSH and want to brush up.'
        },
        {
          title: 'The Linux command line for beginners',
          link: 'https://ubuntu.com/tutorials/command-line-for-beginners',
          description: 'If you need further help with using the terminal, this tutorial might be a good one to follow.  It\'s written in the context of using a terminal directly on a Linux machine, but is still really relevant for what we need to do in this course.'
        }
      ]
    }
  ],

  sections: {
    '010': {
      meeting: {
        day: 'Tu',
        time: '8:00 &ndash; 9:50am',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Nicholas Broce' ]
    },
    '011': {
      meeting: {
        day: 'Tu',
        time: '10:00 &ndash; 11:50am',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Oyebolaji Akinyemi' ]
    },
    '012': {
      meeting: {
        day: 'Tu',
        time: '12:00 &ndash; 1:50pm',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Kevin Neiger' ]
    },
    '013': {
      meeting: {
        day: 'Th',
        time: '8:00 &ndash; 9:50am',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Sierra Freihoefer' ]
    },
    '014': {
      meeting: {
        day: 'Th',
        time: '4:00 &ndash; 5:50pm',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Gregory Blood' ]
    },
    '015': {
      meeting: {
        day: 'Tu',
        time: '2:00 &ndash; 3:50pm',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Anneliese Doerfler' ]
    },
    '016': {
      meeting: {
        day: 'Tu',
        time: '4:00 &ndash; 5:50pm',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Jonathan Dressel' ]
    },
    '017': {
      meeting: {
        day: 'W',
        time: '4:00 &ndash; 5:50pm',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Honghao Li' ]
    },
    '018': {
      meeting: {
        day: 'M',
        time: '4:00 &ndash; 5:50pm',
        timeZone: 'US/Pacific',
        videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
      },
      tas: [ 'Zachary Taylor' ]
    }
  },

  policies: [
    '**Recitation attendance.** Attendance is required for recitations, and you must attend the recitation section for which you are registered.  Excused absences from recitations must be approved by the lecture instructor.  It is your responsibility to make up recitation work missed for an excused absence.  You will receive a zero for any unexcused absences from recitation.',
    // '**No laptops.** You may not use a laptop in recitation, *except during the first week\'s recitation, for which you will need a laptop.*',
    // '**Writing utensil required.** You must bring a writing utensil to recitation.',
    // '**Recitation quizzes.** Each week during recitation, you will take a short quiz that will count towards your overall final grade for the course.  These quizzes may contain various types of questions (short answer, true/false, multiple choice, relevant math problems, etc.)  Each quiz will count for an equal portion of your overall grade.'
    '**Recitation exercises.** Each week during recitation, you will work in a small group on an exercise designed to more deeply explore one or more topics from lecture.  Each exercise will have a deliverable that you\'ll need to submit on Canvas before the end of the recitation period.  Your submission will be graded *based on effort*, not correctness, and this grade will count towards your final grade for the course.'
  ]
};

export default recitations;
