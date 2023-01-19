import fishRelatedGameImage from './hofFiles/fishRelatedGame.jpg';
import fishRelatedGameScreencap from './hofFiles/fishRelatedGame.gif';
import bennysCrusadeImage from './hofFiles/bennysCrusade.jpg';
import bennysCrusadeScreencap from './hofFiles/bennysCrusade.gif';
import riceCADImage from './hofFiles/riceCAD.jpg';
import riceCADScreencap from './hofFiles/riceCAD.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Fish Related Game",
    developers: [
      "Erik Tornquist",
      "Max Wild",
      "Oliver Flood",
      "Pavlo Havrylyuk"
    ],
    description: "Well, it’s oh-fish-ial. Fish Related Game is a fin-tastic fishing game where players catch fish created by other players. You can draw your wildest fish ideas into reality and throw them into a public pool of fish stored in a dynamic JSON database. This harnesses the previously untapped potential of using your own player base for the labor of asset creation. Fish Related Game is powered by Express.",
    imageUrl: fishRelatedGameImage,
    screencapUrl: fishRelatedGameScreencap
  },
  {
    title: "Benny's Crusade",
    developers: [
      "Noah Giss",
      "Gaurang Kakodkar",
      "Mosu Ngo",
      "Byron Ojua-Nice"
    ],
    description: "Benny's Crussade is a Risk like game where players play to try to take over all of the territories in the game. Players take turns to gain troops based on the number of territories they controle. They then attack other territories and try to take them over. After attacking, a player can move troops to reinforce another territory to prepare for the next turn. The game is won once one person controls the whole board.",
    imageUrl: bennysCrusadeImage,
    screencapUrl: bennysCrusadeScreencap
  },
  {
    title: "riceCAD online",
    developers: [
      "Trenton Young",
      "Hla Htun",
      "Cameron Kroeker",
      "Saya Kuznetsov"
    ],
    description: "Have you ever wanted to build cities in your sleep? Our tool, riceCAD, is a lightweight, online CAD (computer-assisted design tool) for generating schematics that can be used by OpenComputers robots (utilizing the riceBUILD program) to build your projects in game automatically! You design it, you publish it, and your robot builds it.\n\nThe riceCAD editor includes a 3D viewport and customizable materials to reflect whatever design you have in mind, with easy to use camera controls that allow you to view your project from any angle. When you have a finished project, make it your own with a title, description, and some tags that describe it, then publish it to riceCAD online's projects page. See a project you like but think you could make it better? You can remix any project that's been published, making it your own.\n\nWhen it comes time to build your creations in-game, simply copy the project ID from the project's page and paste it into the riceBUILD program running on a robot that meets the minimum specifications, and feed in some blocks! For better scalability, choose riceCAD.",
    imageUrl: riceCADImage,
    screencapUrl: riceCADScreencap
  }
];

export default hof;
