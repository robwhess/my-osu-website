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
    description: "The purpose of Metaboard is for users to express their creativity online using a 2-D pixel canvas served from a web server. Users are able to move around the canvas, draw onto the canvas, and teleport to a specified coordinate position. The size of the canvas is configurable on the server-side and can even be infinitely large. Some technical features of this project include, efficient canvas rendering using the Three.js library, reduced memory usage by dynamic loading and saving of canvas data, optimized database efficiency by compressing canvas data, and lowered server-client latency using WebSockets.",
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
