import muviImage from './hofFiles/muvi.jpg';
import muviScreencap from './hofFiles/muvi.gif';
import aiCharacterGeneratorImage from './hofFiles/aiCharacterGenerator.jpg';
import aiCharacterGeneratorScreencap from './hofFiles/aiCharacterGenerator.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Muvi",
    developers: [
      "Steven Bui",
      "Alex Young",
    ],
    description: "MUVI is a web app for discovering movies using data provided by the TMDB API. Users can browse for movies by searching or filtering through categories such as Popular and Top Rated. Login for TMDB accounts is supported with third party authentication. Users that are logged in have access to managing their favorites and watchlist.",
    imageUrl: muviImage,
    screencapUrl: muviScreencap
  },
  {
    title: "AI D&D 5e Character Generator",
    developers: [
      "Tyler Titsworth",
      "Kira Jiroux",
      "Miguel Ruiz"
    ],
    description: "Create a D&D 5e Character and download a PDF of it using natural language processing via OpenAI's GPT-3 Engine and NextJS.",
    imageUrl: aiCharacterGeneratorImage,
    screencapUrl: aiCharacterGeneratorScreencap
  }
];

export default hof;
