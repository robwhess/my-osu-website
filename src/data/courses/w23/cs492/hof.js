import noteworthyImage from './hofFiles/noteworthy.jpg';
import noteworthyScreencap from './hofFiles/noteworthy.gif';
import cinelinkImage from './hofFiles/cinelink.jpg';
import cinelinkScreencap from './hofFiles/cinelink.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Noteworthy",
    developers: [
      "Carter Roeser",
      "Ekkachai Jet Ittihrit",
      "Kristina Marquez"
    ],
    description: "Noteworthy is an AI assisted note taking app that provides AI based autocompletion, summaries, and suggestions for your notes, such as searching the web, emailing a contact, automatically creating reminders and calendar events, or finding directions to a location. Notes can be pinned, categorized, privated, searched, and filtered, can be composed via voice input, and are backed up and synced between devices over the cloud. Noteworthy is built in Kotlin using Jetpack Compose and Material 2 as the design system. OpenAI's GPT-3 LLM is used for AI generations, Google SpeechRecognizer is used for voice recognition, and Firebase Cloud Functions, Firestore, and Algolia are used for the database and search engine.",
    imageUrl: noteworthyImage,
    screencapUrl: noteworthyScreencap
  },
  {
    title: "CineLink",
    developers: [
      "Charlie Hayden",
      "Elijah Cirioli",
      "Grey Wolnick"
    ],
    description: "CineLink is a game that tests your movie knowledge. Your goal is to make it from one randomly-selected famous actor to another using their acting, writing, and directing credits. Race against the clock as you try to find the shortest possible path to the target actor using their shared filmography as you groove to the game’s background music. CineLink uses The Movie Database API to source actor and movie credits as well as images to represent them.",
    imageUrl: cinelinkImage,
    screencapUrl: cinelinkScreencap
  }
];

export default hof;
