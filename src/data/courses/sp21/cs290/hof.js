import buniImage from './hofFiles/buni.jpg';
import buniScreencap from './hofFiles/buni.gif';
import fooflightImage from './hofFiles/fooflight.jpg';
import fooflightScreencap from './hofFiles/fooflight.gif';
import pictogramImage from './hofFiles/pictogram.jpg';
import pictogramScreencap from './hofFiles/pictogram.gif';
import zoologImage from './hofFiles/zoolog.jpg';
import zoologScreencap from './hofFiles/zoolog.gif';


const hof = [
  {
    title: "The Buni Boards Stick Studio",
    developers: [
      "Alihan Baysal",
      "Parker Conrad"
    ],
    description: "Founded in 2020, Buni Boards is a surfboard company featuring six young surfers from around the world. They wish to progress the world of surfing, and at the heart of the company lies a modern and eco-friendly approach. In the spring of 2021, with the help of Rob Hess, Alihan Baysal and Parker Conrad were able to create a full-fledged website for Buni Boards. The site featured a 360°, fully interactive surfboard designer named \"The Buni Boards Stick Studio.\" Some notable aspects of the designer include 3D surfboard models made by Parker and Alihan in Blender and Three.js, a cross-browser JavaScript library and API used to display 3D graphics in a web browser using WebGL.",
    imageUrl: buniImage,
    screencapUrl: buniScreencap
  },
  {
    title: "Foo Flight",
    developers: [
      "Andrea Tongsak",
      "Cole Theodore",
      "Iain Moncrief",
      "David Korotky"
    ],
    description: "Foo Flight is a platform game in which players try to reach the highest altitude they can. Players choose from several bird sprites to control and enter nicknames to fill the leaderboard should they reach a high enough altitude.",
    imageUrl: fooflightImage,
    screencapUrl: fooflightScreencap
  },
  {
    title: "Pictogram",
    developers: [
      "Ethan Cline",
      "Elijah Cirioli",
      "Matthew Attebery"
    ],
    description: "This site allows you to create your own incredibly complex works of art and share them with the world. Simply draw your masterpiece, enter a name for the artist, and post away! If you see someone else’s drawing you really like, feel free to remix it and make it your own. You can also compare the drawings two at a time to help create the global ranking of whose drawings are the best. Although roles were shared, each member largely focused on just one section of the site. Ethan created the paint program, Elijah created the frontend, and Matthew created the backend.  A live version of the site that you can participate in can be found at https://pictogram-cs290.herokuapp.com",
    imageUrl: pictogramImage,
    screencapUrl: pictogramScreencap
  },
  {
    title: "ZooLog",
    developers: [
      "Julia Jordan"
    ],
    description: "ZooLog is an educational app for school-age children intended to develop early scientific observation skills. The app allows children to create a log of natural specimens that they have observed. For each entry, the child is able to draw a picture, include a written description, and categorize (as an animal, bug, or plant) what they saw. The site includes a gallery of all posted logs, which can be sorted by category and searched by description. For parents, there is an educational section that outlines the benefits of encouraging scientific observation from a young age.",
    imageUrl: zoologImage,
    screencapUrl: zoologScreencap
  }
];

export default hof;
