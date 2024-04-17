import queryCornerImage from './hofFiles/queryCorner.jpg';
import queryCornerScreencap from './hofFiles/queryCorner.gif';
import puzzleFuzionImage from './hofFiles/puzzleFuzion.jpg';
import puzzleFuzionScreencap from './hofFiles/puzzleFuzion.gif';
import youTubeTidyImage from './hofFiles/youTubeTidy.jpg';
import youTubeTidyScreencap from './hofFiles/youTubeTidy.gif';
import basilImage from './hofFiles/basil.jpg';
import basilScreencap from './hofFiles/basil.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "QueryCorner",
    developers: [
      "Sankalp (Sandy) Patil",
      "Adrian Baker",
      "Muhammad Faks",
      "Sabyatha Kumar",
      "Jack Stevenson"
    ],
    description: "QueryCorner is a full-stack prompt-sharing platform for generative AI tools where people can share their prompts and prompt templates. Users can create, share, and find the perfect prompt with ease. We use embeddings and vector search to implement a robust semantic search, providing unparalleled search precision. Additional features include user profiles, filtering by tags, search history, saved prompts, and likes. With QueryCorner, the perfect prompt is always one search away. Try it out at: [https://query-corner-one.vercel.app](https://query-corner-one.vercel.app)",
    imageUrl: queryCornerImage,
    screencapUrl: queryCornerScreencap
  },
  {
    title: "PuzzleFuzion",
    developers: [
      "Hla Htun",
      "Dani Valdovinos"
    ],
    description: "PuzzleFuzion is a unique web application that combines elements of the popular Wordle game, the classic Connections puzzle, and an exciting multiplayer feature. It allows users to enjoy the traditional Wordle experience, either in a single-player mode or by connecting with friends in real-time to solve the daily Wordle together. Additionally, users can create and share their own Connections puzzles, challenging others to find the connections between seemingly unrelated words. The application offers a live chat feature for real-time interaction and dynamic updates to ensure a seamless multiplayer experience. Built using modern web technologies like React, Convex, and Redux, PuzzleFuzion aims to provide a platform for creativity, competition, and connection among puzzle enthusiasts. You can try it out here: [https://puzzle-fuzion.vercel.app/](https://puzzle-fuzion.vercel.app/).  Or, you can check the code on GitHub: [https://github.com/HlaKarki/puzzle-fuzion](https://github.com/HlaKarki/puzzle-fuzion).",
    imageUrl: puzzleFuzionImage,
    screencapUrl: puzzleFuzionScreencap
  },
  {
    title: "YouTube Tidy",
    developers: [
      "Ari Zeto",
      "Samantha Egge",
      "Kameron Keller",
      "Oria Weng"
    ],
    description: "Manage your YouTube playlists and subscriptions using YouTube Tidy! With YTT, you can easily select multiple videos at once to copy or move between playlists, or mass remove subscriptions and playlist items. Explore new videos and mass-add them to playlists from the search screen. Check out the app here: [https://youtubetidy.netlify.app/](https://youtubetidy.netlify.app/), or learn more at [https://github.com/osu-cs494-w24/youtube-tidy](https://github.com/osu-cs494-w24/youtube-tidy)!",
    imageUrl: youTubeTidyImage,
    screencapUrl: youTubeTidyScreencap
  },
  {
    title: "Basil",
    developers: [
      "Carter Roeser",
      "Chris Asbury",
      "Kaylee Eichorn"
    ],
    description: "Basil is a personal finance app that helps you manage your money, save for the future, and make budgets that work for you. With Basil you can connect your credit, debit, and investment accounts to track your net worth, view recent transactions, set spending and savings goals, and create budgets. Basil is built with React, Vite, and Express.js, and is powered by Firebase, Cloudflare, and the Plaid API. [https://basilwealth.com](https://basilwealth.com)",
    imageUrl: basilImage,
    screencapUrl: basilScreencap
  }
];

export default hof;
