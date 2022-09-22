import beatmapsImage from './hofFiles/beatmaps.jpg';
import beatmapsScreencap from './hofFiles/beatmaps.gif';
import metaboardImage from './hofFiles/metaboard.jpg';
import metaboardScreencap from './hofFiles/metaboard.gif';

const hof = [
  {
    title: "BeatMaps",
    developers: [
      "Ella Daugherty",
      "Anh Nguyen",
      "Connor Kealey"
    ],
    description: "BeatMaps is an event finder relevant to a user's location and top artists on Spotify. The site returns events using the Google Events API that finds matches between the user's most listened to artists on Spotify and concerts that are happening in the location the user inputs. This site filters through concerts with much more ease than scrolling through a list of events for any given city or going through artists you like and individually Googling each one to see when they are playing nearby. The results are filtered by city and shown on a map with markers where each event is being held.",
    imageUrl: beatmapsImage,
    screencapUrl: beatmapsScreencap
  },
  {
    title: "Metaboard",
    developers: [
      "Joshua Lim",
      "Kyusung Kwon",
      "Junsu Lee",
      "Akshat Patel"
    ],
    description: "The purpose of Metaboard is for users to express their creativity online using a 2-D pixel canvas served from a web server. Users are able to move around the canvas, draw onto the canvas, and teleport to a specified coordinate position. The size of the canvas is configurable on the server-side and can even be infinitely large. Some technical features of this project include, efficient canvas rendering using the Three.js library, reduced memory usage by dynamic loading and saving of canvas data, optimized database efficiency by compressing canvas data, and lowered server-client latency using WebSockets.",
    imageUrl: metaboardImage,
    screencapUrl: metaboardScreencap
  }
];

export default hof;
