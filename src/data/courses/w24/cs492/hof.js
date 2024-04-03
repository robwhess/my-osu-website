import wikiRaceImage from './hofFiles/wikiRace.jpg';
import wikiRaceScreencap from './hofFiles/wikiRace.gif';
import timeVaultImage from './hofFiles/timeVault.jpg';
import timeVaultScreencap from './hofFiles/timeVault.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "WikiRace",
    developers: [
      "Owen Cole",
      "Jonathan Rockett",
      "Ian Van Emmerik",
      "Daniel Valdovinos"
    ],
    description: "WikiRace is a game where you are given 2 random Wikipedia articles, and you have to get from one to the other only using the links on the page you are currently on. The aim of the game is to get to the goal in the least amount of time and navigations. If you would like, you are able to manually set a start and end point so you can even race against your friends. WikiRace uses the Wikipedia API to generate 2 random titles and uses Androids WebView library to display that content within our app.",
    imageUrl: wikiRaceImage,
    screencapUrl: wikiRaceScreencap
  },
  {
    title: "TimeVault",
    developers: [
      "Ryan Spreier",
      "Yahir Gonzalez",
      "Eric York"
    ],
    description: "TimeVault is an application that allows users to document their interests and experiences in real-time, creating personalized \"time capsules\" for future reflection. With features such as photo uploads from camera roll, taking a picture using the phone's camera app, text entries, and link attachments, users can capture diverse moments and memories with ease. When a user adds an item, it is buried in a \"time capsule\" for the day. The calendar interface allows for navigation through past capsules so that users can see what they added on certain days, similar to an archive. Lastly, there is also an option to schedule reminders through notifications to enhance the user experience by prompting revisits to specific capsules on desired dates. This app uses Google's Firebase API to assist with sending notifications.",
    imageUrl: timeVaultImage,
    screencapUrl: timeVaultScreencap
  },
  // {
  //   title: "",
  //   developers: [],
  //   description: "",
  //   imageUrl: wikiRaceImage,
  //   screencapUrl: wikiRaceScreencap
  // }
];

export default hof;
