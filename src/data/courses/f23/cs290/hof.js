import survivalIslandImage from './hofFiles/survivalIsland.jpg';
import survivalIslandScreencap from './hofFiles/survivalIsland.gif';
import pokerImage from './hofFiles/poker.jpg';
import pokerScreencap from './hofFiles/poker.gif';
import beaverBracketsImage from './hofFiles/beaverBrackets.jpg';
import beaverBracketsScreencap from './hofFiles/beaverBrackets.gif';
import devDynastyImage from './hofFiles/devDynasty.jpg';
import devDynastyScreencap from './hofFiles/devDynasty.gif';
import layoutPlannerImage from './hofFiles/layoutPlanner.jpg';
import layoutPlannerScreencap from './hofFiles/layoutPlanner.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Survival Island",
    developers: [
      "Bessie He",
      "Chi Chan",
      "Kai Black",
      "(TanX) Thanaphon Singsukhum"
    ],
    description: "Island Survival catapults players into a thrilling 2D adventure where the sole aim is to break free from an ominous island. This immersive game plunges users into a world filled with obstacles, urging them to explore diverse landscapes, interact with NPCs for vital guidance, and tackle pivotal missions for their escape plan. Amidst adversaries strewn across the island, players must deftly navigate strategic encounters, culminating in a showdown against a formidable Boss hiding in a haunting cave. Mastering this game necessitates strategic wit, survival instincts, and quick decisions as players unravel the island's secrets, aiming to secure their passage to liberty. Upon completion, players can input their time scores into the scoreboard, where beating previous scores proudly showcases their progress atop the leaderboard. This game was built using the Godot game engine and implemented with an Express server connected to a JSON file for data storage.",
    imageUrl: survivalIslandImage,
    screencapUrl: survivalIslandScreencap
  },
  {
    title: "Poker!",
    developers: [
      "Blaise Skoletsky",
      "Mithun Karthikeyan",
      "Gabby Buckingham",
      "Luke Hashbarger"
    ],
    description: "This website is an online poker app designed to allow over 3 players to play a free game of poker! The website tracks winnings, and allows users to see just how much money they can earn.",
    imageUrl: pokerImage,
    screencapUrl: pokerScreencap
  },
  {
    title: "Beaver Brackets",
    developers: [
      "Nicolas Rist",
      "Aryan Gupta",
      "Jim Huang",
      "Skylar Soon"
    ],
    description: "Beaver Brackets is meant to assist in any of your tournament creation needs. Inspired by how the Oregon State Tennis Club runs their tournaments, Beaver Brackets automatically generates brackets and tournament pools with a simple upload of an Excel spreadsheet or CSV file. It allows the tournament host to set times and locations of matches to seamlessly build a schedule and set scores and results as the tournament goes on. Additionally, tournament participants can easily “join” a tournament to see the current brackets and schedules.",
    imageUrl: beaverBracketsImage,
    screencapUrl: beaverBracketsScreencap
  },
  {
    title: "DevDynasty: Full-Stack Ascent",
    developers: [
      "Annette Tongsak",
      "Oria Weng",
      "Deepti Ravidath",
      "Jonathan David-Jackson",
      "Amish Nautiyal"
    ],
    description: "DevDynasty is a web game where users play as a CS major undergoing the application process for a full-stack developer internship. Like in the real world, the player must pass a resume screening and interview to receive an offer. This game features 3D scenes, animations, interactive pages with music, and interview questions pulled from a database for an immersive experience.",
    imageUrl: devDynastyImage,
    screencapUrl: devDynastyScreencap
  },
  {
    title: "Layout Planner",
    developers: [
      "Hal Barnett",
      "Cade Wisecaver",
      "Judah Jackson",
      "Escher Wright-Dykhouse"
    ],
    description: "Layout Planner is an interactive floor plan designer with limitless potential. Using it is easy! Simply draw the bounds of your room, and add as many doors, windows, and pieces of furniture as your heart desires. When you’re ready to show off your work, you can export it is a JPEG or PDF, or save it to the server to work on it later. Layout Planner was built by Hal, Cade, Judah, and Escher, and is powered by Express and Handlebars.",
    imageUrl: layoutPlannerImage,
    screencapUrl: layoutPlannerScreencap
  }
];

export default hof;
