import bioReactImage from './hofFiles/bioReact.jpg';
import bioReactScreencap from './hofFiles/bioReact.gif';
import talkToBeavsImage from './hofFiles/talkToBeavs.jpg';
import talkToBeavsScreencap from './hofFiles/talkToBeavs.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "BioReact",
    developers: [
      "Anh (Frank) Nguyen",
      "Imgyeong Lee",
    ],
    description: "BioReact is a full-stack system for the BMES bioreactor. BMES at OSU is a club that brings networking opportunities to students and allows hands-on collaboration on designing and developing projects relevant to the biomedical industry. One of the projects in this club is to develop a more affordable bioreactor. Our project contains both the frontend to control the machine and the backend that can handle the automation for it.",
    imageUrl: bioReactImage,
    screencapUrl: bioReactScreencap
  },
  {
    title: "TalkToBeavs",
    developers: [
      "Tom Nyuma",
      "Jeff Huang",
      "Artem Kolpakov",
      "Colby Hannan",
    ],
    description: "Introducing TalkToBeavs, the cutting-edge social media platform made exclusively for Oregon State University students seeking connections around campus. After creating an account, TalkToBeavs enables you to contribute to the global feed by sharing posts while granting you the power to influence the community's discourse through upvoting and downvoting. With TalkToBeavs, initiating a chat is a breeze as you await another student to join before being seamlessly transported to a private chat room. Experience the future of OSU socialization with TalkToBeavs today by visiting https://talktobeavs.onrender.com.",
    imageUrl: talkToBeavsImage,
    screencapUrl: talkToBeavsScreencap
  }
];

export default hof;
