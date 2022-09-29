import picnicDefenderImage from './hofFiles/picnicDefender.jpg';
import picnicDefenderScreencap from './hofFiles/picnicDefender.gif';
import smartListsImage from './hofFiles/smartLists.jpg';
import smartListsScreencap from './hofFiles/smartLists.gif';
import movieMatchMakerImage from './hofFiles/movieMatchMaker.jpg';
import movieMatchMakerScreencap from './hofFiles/movieMatchMaker.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Picnic Defender",
    developers: [
      "Brayden Aldrich",
      "Jordan Pearcey",
      "Salam Rahal-Arabi",
      "Samantha Egge"
    ],
    description: "Picnic Defender is a game where the player must use their bug-swatter to keep the swarm of bugs from invading their picnic. As time progresses and the score goes up, the bugs start increasing in number. The player loses once ten bugs make it onto their picnic unsquashed, ruining the food. If the player's score is high enough, they can enter their name onto the leaderboard of the top-ten bug-squashers.",
    imageUrl: picnicDefenderImage,
    screencapUrl: picnicDefenderScreencap
  },
  {
    title: "SmartLists",
    developers: [
      "Jim Landers",
      "Carter Roeser",
      "Yash Sankanagouda",
      "Connor Mclaughlin"
    ],
    description: "SmartLists is a music visualization platform that allows users to view the metadata from their Spotify playlists through a range of interactive 2D, 3D, and AI generated graphs and art, based on 14 Spotify data points such as energy, valence, instrumentallness, liveness, etc. Using SmartLists you can generate a group of visualizations, interact with and listen to your songs as data points, save and publish the visualizations, and send them to friends where they can not only hear your music, but see it as well. SmartLists is powered by Express, MongoDB, ECharts, and Wombo Dream, designed for a scaleable, serverless architecture.",
    imageUrl: smartListsImage,
    screencapUrl: smartListsScreencap
  },
  {
    title: "MovieMatchMaker",
    developers: [
      "Danny Zahariev",
      "Tom Nyuma",
      "Artem Kolpakov"
    ],
    description: "MovieMatchMaker is a web app designed to help users find movies. It features a Tinder-inspired \"matching\" interface, which presents one movie at a time. Users swipe right for movies that interest them and left for those that don't. Meanwhile, the app algorithmically presents new movies based on that data. M.M.M. is a React-based app employing a variety of libraries including react-tinder-card.js and redux.js as well as TMDB for its movie data.",
    imageUrl: movieMatchMakerImage,
    screencapUrl: movieMatchMakerScreencap
  }
];

export default hof;
