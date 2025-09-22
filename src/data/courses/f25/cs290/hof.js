import depictionImage from './hofFiles/depiction.jpg';
import depictionScreencap from './hofFiles/depiction.gif';
import resumeBookImage from './hofFiles/resumeBook.jpg';
import resumeBookScreencap from './hofFiles/resumeBook.gif';
import t42Image from './hofFiles/t42.jpg';
import t42Screencap from './hofFiles/t42.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Depiction",
    developers: [ "Ethan Harter", "Rose Farrens", "Sam Willard" ],
    description: "Depiction is a drawing game based on Telestrations and Gartic Phone that combines elements of Telephone and Pictionary. Each player enters their starting prompt, which is then sent to the next player. Players alternate between drawing their given prompt and guessing what another player drew. At the end of the game, each chain of drawings and guesses are displayed starting with the initial prompts.",
    imageUrl: depictionImage,
    screencapUrl: depictionScreencap
  },
  {
    title: "OSU Club Resume Book",
    developers: [ "Will Teyema", "Owen Krause", "Cassius Villareal", "Bailey Budlong" ],
    description: "A platform for OSU clubs to share members resumes with companies and sponsors. Students can log in, upload, or update their resumes, and allow club officers to share them with potential employers via a secure link. Companies have access to filter resumes and download them for review, making industry connections easier.",
    imageUrl: resumeBookImage,
    screencapUrl: resumeBookScreencap
  },
  {
    title: "T42",
    developers: [ "Arvin Mirtorabi" ],
    description: "The T42 Chat App is a real-time chat site built with Node.js and Express. It features secure user authentication using bcryptjs for password encryption and session management powered by Supabase, with data handled via Prisma ORM. The app includes a user-friendly interface with a dark/light mode toggle, a visual chat history timeline, and is fully responsive, ensuring use on both mobile and desktop. With its simple design, T42 is meant to be engaging for the user as well as extensible for future use.",
    imageUrl: t42Image,
    screencapUrl: t42Screencap
  },
];

export default hof;
