// CERTIFICATES
import htmlAndCssImg from "./images/certs/html-css.jpg";
import javaScriptImg from "./images/certs/js.jpg";
import javaScriptTwoImg from "./images/certs/js2.jpg";
import nodeJSImg from "./images/certs/nodejs.jpg";
import nodeJSTwoImg from "./images/certs/nodejs-mongo.jpg";
import mySQLImg from "./images/certs/mysql.jpg";
import reactImg from "./images/certs/react.jpg";
import reactNativeImg from "./images/certs/reactnative.jpg";
// HOBBIES
import hikingImg from "./images/hiking.jpg";
import drawingImg from "./images/drawing.jpg";
import craftingImg from "./images/crafting-1.jpg";
import gamingImg from "./images/gaming.jpg";
// PROGRAMMING-images
import reviveRemodeling from "./images/programming/reviveremodeling.png";
import games from "./images/programming/games.png";
import podstanar from "./images/programming/podstanar.png";
import forkify from "./images/programming/forkify.png";
import omnifood from "./images/programming/omnifood.png";
// ARCHITECTURE-images
import hirsch from "./images/architecture/hirsch1.jpg";
import hirschTwo from "./images/architecture/hirsch2.jpg";
import hirschThree from "./images/architecture/hirsch3.jpg";

const today = new Date(Date.now());
const birthDay = "14-05-1995";
const parse = birthDay.split("-");
const myBirthDay = new Date(parse[2], parse[1], parse[0]);
const age = today.getFullYear() - myBirthDay.getFullYear();

const data = {
  bio: {
    birthday: "14.05.1995",
    name: "Adnan Dacić",
    school: "Srednja Građevinso-Geodetska",
    location: "BiH, Sarajevo",
    email: "adnandacic145@gmail.com",
    phone: "061/053-653",
    mbti: "INTP - a",
  },
  homeQuotes: [
    `I'm Adnan Dacić, a ${age}-year-old junior full-stack developer hailing
    from Bosnia and Herzegovina. Welcome to my webpage, where
    I'm excited to share my journey and insights in the world of web
    development.`,
  ],
  contactQuote: [
    `If you like my work, have a question, suggestion, or just want to say
  hello? I'd love to hear from you! You can contact me on one of links
  provided below.`,
  ],
  aboutMeQoute: {
    main: `I'm Adnan Dacić, a ${age}-year-old Bosnian guy who's been on quite the
    adventure. Welcome to my website, where you can get to know me better, along with my previous work in both architecture and programming.`,
    architecture: `After completing high school, I enrolled in the architectural faculty. During my studies, I began working as an architect, acquiring numerous valuable skills. Realizing the client's dreams while simultaneously staying grounded in reality, attempting to find a balance between the two, and designing something both unique and functional is a challenging task for which I am grateful. It has helped me think outside the box and strengthen my problem-solving skills. Although I am a fan of challenging architectural endeavors and the artistic aspects it offers, I came across cybersecurity courses that introduced me to an entirely new virtual world. This realm provides complete freedom and is far more challenging than architecture.`,
    programming: `After taking my initial steps in the virtual world, I realized that the only limits that exist are the boundaries of knowledge one possesses. In the beginning, it felt like standing at a crossroads with infinite possibilities, making it challenging to decide which path to take. This led to my first encounter with web development. I believed that if I wanted to learn website hacking/pentesting, I had to first understand how to code them. After some exploration and advice from friends, I decided to start with the holy trinity of web development: HTML, CSS, and JS. Of course, after mastering the basics of the holy trinity, I faced a new crossroads where I opted for the MERN stack. I began learning React, NodeJS, Mongo, MySQL, and React Native. After three and a half years of learning and developing small personal projects, I decided to seek employment to enhance my knowledge in an environment where individuals have dedicated many more years to programming. This way, I aim to learn best practices and code development`,
  },
  hobbies: [
    {
      title: "Hiking",
      description:
        "Hiking is a testament to our enduring connection with the natural world. It's a reminder that, despite our modern lives filled with screens and schedules, we are fundamentally creatures of the outdoors. Especially since our exploration of previously unknown territories brings us back to our childhood days and awakens the adventurous spirit.",
      img: hikingImg,
    },
    {
      title: "Drawing & Music",
      description:
        "Drawing, along with music, is a universal language that transcends cultural and linguistic barriers. Without spoken words, it allows you to connect with others, sharing stories, ideas, and emotions. It's a form of meditation, a mindful practice that brings you into the present moment.",
      img: drawingImg,
    },
    {
      title: "Crafting",
      description:
        "It's a form of therapy. Crafting provides a moment of respite from the hustle and bustle of everyday life. As you immerse yourself in your craft, the world fades into the background, and you find solace in the rhythm of your work. It's a sanctuary for the mind, a place where stress dissipates and a sense of accomplishment blossoms.",
      img: craftingImg,
    },
    {
      title: "Gaming",
      description: "If you play games as well add me on Discord ra6an#4417!",
      img: gamingImg,
    },
  ],
  architectureTech: [
    {
      title: "AutoCAD",
      color: "autocad",
      cert: null,
    },
    {
      title: "Archicad",
      color: "archicad",
      cert: null,
    },
    {
      title: "Photoshop",
      color: "photoshop",
      cert: null,
    },
    {
      title: "Lumion",
      color: "lumion",
      cert: null,
    },
  ],
  programmingTech: [
    { title: "HTML", cert: [htmlAndCssImg], color: "html" },
    { title: "CSS", cert: [htmlAndCssImg], color: "css" },
    {
      title: "JavaScript",
      cert: [javaScriptImg, javaScriptTwoImg],
      color: "javascript",
    },
    { title: "React", cert: [reactImg], color: "react" },
    { title: "ReactNative", cert: [reactNativeImg], color: "react-native" },
    { title: "NodeJS", cert: [nodeJSImg, nodeJSTwoImg], color: "node-js" },
    { title: "MongoDB", cert: [nodeJSTwoImg], color: "mongodb" },
    { title: "MySQL", cert: [mySQLImg], color: "mysql" },
  ],
  architectureJobs: [
    {
      id: 0,
      company: "AD-Arch",
      months: 24,
      tech: "AutoCAD, Archicad, Lumion",
      type: "Remote",
      description:
        "That's my longest journey in architecture where i worked on bigger projects, for which I am grateful for the experiences shared with me. I have worked on both conceptual design and construction projects, from blueprints and specifications to developing 3D models and renderings.",
    },
    {
      id: 1,
      company: "Trust d.o.o.",
      months: 2,
      tech: "AutoCAD, Archicad, Lumion",
      type: "On-site",
      description:
        "It was a short ride because of COVID, but nonetheless, very rich with experience. I worked on interior design where I was more involved in direct communication with the client. I also worked on creating blueprints, specifications, 3D models, and renderings.",
    },
    {
      id: 2,
      company: "Freelance",
      months: 12,
      tech: "AutoCAD, Archicad, Lumion, Photoshop",
      type: "Remote",
      description:
        "I've worked on several projects as a freelancer, with the majority of them focusing on interior design. This includes creating blueprints, specifications, 3D models, and renderings.",
    },
  ],
  programmingJobs: [
    {
      id: 0,
      company: "Freelance",
      months: 2,
      tech: "Wordpress, CSS, JavaScript",
      type: "Remote",
      description: `Since I dedicated the past four years to learning web development, I've recently entered the world of real projects. Currently, I have one project under my belt, involving a company from New York called Revive Remodeling. You can find more details on the "Projects" page.`,
    },
  ],
  programmingProjects: [
    {
      details: {
        id: 1,
        title: "Revive Remodeling",
        tech: "Wordpress, CSS, JavaScript",
        description:
          "Revive Remodeling is a company from New York specializing in room reconstruction and remodeling. The project was done using WordPress with a few modifications using CSS and JavaScript.",
        url: "https://reviveremodelingnyc.com/",
        img: reviveRemodeling,
      },
    },
    {
      details: {
        id: 2,
        title: "Podstanar",
        tech: "React, NodeJS, MongoDB",
        description:
          "Podstanar is my personal project that is still in the development process and was inspired by the Airbnb app. The ultimate goal is to simplify the rental process for both hosts and clients, reducing the number of steps taken care of by the application's logic.",
        url: "https://github.com/ra6an/PODSTANAR-in-progress",
        img: podstanar,
      },
    },
    {
      details: {
        id: 3,
        title: "Omnifood",
        tech: "HTML5, CSS3, JavaScript",
        description:
          "Omnifood was the final project of Johnas Schmedtman's HTML and CSS course. The project's goal was to apply best practices and write clean and functional code, making the site responsive for all types of screens.",
        url: "https://omnifoodr.netlify.app/",
        img: omnifood,
      },
    },
    {
      details: {
        id: 4,
        title: "Forkify",
        tech: "JavaScript",
        description:
          "Forkify is also a final project from Johnas Schmedtman's course, this time focused on JavaScript. It involved adding JavaScript code for the client side to an existing HTML and CSS codebase, with a primary emphasis on AJAX calls.",
        url: "https://forkifyr6.netlify.app/",
        img: forkify,
      },
    },
    {
      details: {
        id: 5,
        title: "Games",
        tech: "HTML5, CSS3, JavaScript",
        description:
          "This is my personal project where I summarized the knowledge I had gathered in HTML, CSS, and JavaScript and implemented it in the development of several mini-games.",
        url: "https://gamesr6.netlify.app/",
        img: games,
      },
    },
  ],
  architectureProjects: [
    {
      details: {
        id: 1,
        title: "Hirschstrasse",
        company: "AD-Arch",
        tech: "AutoCAD, Archicad, Lumion",
        description:
          "Hirschstrasse is a duplex house in Austria, where I worked on both the conceptual design and construction projects. This involved creating blueprints, specifications, 3D models, and renderings",
        url: null,
        img: hirsch,
      },
    },
    {
      details: {
        id: 2,
        title: "Tauschinskygasse",
        company: "AD-Arch",
        tech: "AutoCAD, Archicad, Lumion",
        description:
          "Tauschinskygasse is a more complex project located in Austria, where I collaborated with a group of architects on construction projects. I was involved in the creation of blueprints, specifications, 3D models, and renderings.",
        url: null,
        img: hirschTwo,
      },
    },
    {
      details: {
        id: 3,
        title: "Dental Office",
        company: "Trust d.o.o",
        tech: "AutoCAD, Archicad, Lumion",
        description:
          "The dental office is located in Bosnia and Herzegovina. It was an interior design project where I worked on blueprints, specifications, 3D modeling, and renderings.",
        url: null,
        img: hirschThree,
      },
    },
    {
      details: {
        id: 4,
        title: "Home 1",
        company: "Freelance",
        tech: "AutoCAD, Archicad, Lumion, Photoshop",
        description:
          "This is my personal project where I summarized the knowledge I had gathered in HTML, CSS, and JavaScript and implemented it in the development of several mini-games.",
        url: null,
        img: hirsch,
      },
    },
  ],
};

export default data;
