import trivicationImage from './hofFiles/trivication.jpg';
import trivicationScreencap from './hofFiles/trivication.gif';
import songguessrImage from './hofFiles/songguessr.jpg';
import songguessrScreencap from './hofFiles/songguessr.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Trivication",
    developers: [
      "Korey Englert",
      "Austin Friedrich",
      "Christopher LeMoss"
    ],
    description: "Trivication (Trivia + education) is an app that tests the ability of players to answer trivia questions. Users can select from 24 categories as well as filter questions based on difficulty level and type (true/false or multiple choice). Trivication uses the Open Trivia Database API to source its questions.",
    imageUrl: trivicationImage,
    screencapUrl: trivicationScreencap
  },
  {
    title: "Songguessr",
    developers: [
      "Eduardo Gonzalez",
      "Trey Husko",
      "Joseph Nibali",
      "Kyle Kanwischer"
    ],
    description: "An application to test your song recognition skills. Using Spotify's genre playlists that are curated to what you listen to, try to guess the name of the song for points. More points are awarded for guessing the artist and album. You can compete with friends by sharing your high scores as well!",
    imageUrl: songguessrImage,
    screencapUrl: songguessrScreencap
  }
];

export default hof;
