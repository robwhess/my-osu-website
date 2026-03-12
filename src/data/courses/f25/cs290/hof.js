import fourKeyImage from './hofFiles/4Key.jpg';
import fourKeyScreencap from './hofFiles/4Key.gif';
import afterLightMetroImage from './hofFiles/afterLightMetro.jpg';
import afterLightMetroScreencap from './hofFiles/afterLightMetro.gif';
import oralAssignmentGraderImage from './hofFiles/oralAssignmentGrader.jpg';
import oralAssignmentGraderScreencap from './hofFiles/oralAssignmentGrader.gif';
/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "4Key Web Rhythm Game Emulator",
    developers: [ "William Tu", "James Walker", "Logan Jordan", "Cesar Rodriguez-Delgado" ],
    description: "A web-based rhythm game made to bring the native desktop vertical scrolling rhythm game (VSRG) to the browser just in case you didn't want to install a whole game on your computer. Players download songs from the osu! website and upload them to the website and attempt to hit the falling notes to the music being played. At the end of the song, the players performance is analyzed and given a grade and their timing breakdowns, which can then be submitted to a leaderboard.",
    imageUrl: fourKeyImage,
    screencapUrl: fourKeyScreencap
  },
  {
    title: "AfterLight Metro",
    developers: [ "Newton Ace Babphavong", "Ally Chen", "Simarjeet Kaur", "Nour Alzahraa Alqattan" ],
    description: "AfterLight metro is a two player narrative co-op game where one player takes on the role of a human commuter and the other plays a wandering ghost, both trapped in an abandoned underground metro station. Each player experiences a different version of the same environment, requiring them to work together across two overlapping worlds to solve puzzles and progress. As the players explore the station, they uncover fragmented memories that gradually reveal how both characters ended up there, culminating in the realization that the human also dies. The game focuses on cooperation, atmosphere, and storytelling, bringing back hope, connection, and loss through shared discovery.",
    imageUrl: afterLightMetroImage,
    screencapUrl: afterLightMetroScreencap
  },
  {
    title: "Oral Assignment Grader",
    developers: [ "Alina Hyk", "Joseph J. Slade" ],
    description: "Because online multiple-choice quizzes, discussion posts, and essays can all be completed by AI with minimal effort, instructors can no longer rely on these traditional ways to assess student learning. Our app addresses this challenge by shifting assessment to a format that is inherently harder to outsource: spoken responses recorded via webcam in real time. The Oral Assignment Grader is a web-based application that records, transcribes, and automatically grades oral quiz responses.\n\nStudents click \"Begin\" to activate their webcam and start recording as the first question appears on screen. They answer each question on camera, proceeding at their own pace before submitting. The system extracts audio from the video using FFmpeg, generates a text transcript via OpenAI Whisper, then uses Anthropic APIs to provide feedback and an overall grade based on instructor-customizable rubrics. Students can review their grade, feedback, and full transcript, with video and audio files preserved in case of grade disputes.",
    imageUrl: oralAssignmentGraderImage,
    screencapUrl: oralAssignmentGraderScreencap
  }
];

export default hof;
