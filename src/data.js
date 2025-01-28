// BACKGROUND IMAGES
import programmingBg from "./images/programming.jpg";
import architectureBg from "./images/architecture-fade.jpg";
// CERTIFICATES
import certLazy from "./images/certs/cert-lazy.jpg";
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
import craftingImg from "./images/crafting.jpg";
import gamingImg from "./images/gaming.jpg";
// HOBBIES LAZY
import hikingLazy from "./images/hiking-lazy.jpg";
import drawingLazy from "./images/drawing-lazy.jpg";
import craftingLazy from "./images/crafting-lazy.jpg";
import gamingLazy from "./images/gaming-lazy.jpg";
// PROGRAMMING-images
import sgi from "./images/programming/sgi.png";
import candavero from "./images/programming/candavero.png";
import reviveRemodeling from "./images/programming/reviveremodeling.png";
import games from "./images/programming/games.png";
import podstanar from "./images/programming/podstanar.png";
import forkify from "./images/programming/forkify.png";
import omnifood from "./images/programming/omnifood.png";
import natours from "./images/programming/natours.png";
import todo from "./images/programming/todo.png";
import restaurant from "./images/programming/restaurant.png";
import zgz from "./images/programming/zgz.png";
import wordle from "./images/programming/wordle.png";
// PROGRAMMING-images LAZY
import sgiLazy from "./images/programming/sgi-lazy.png";
import candaveroLazy from "./images/programming/candavero-lazy.png";
import reviveRemodelingLazy from "./images/programming/reviveremodeling-lazy.png";
import gamesLazy from "./images/programming/games-lazy.png";
import podstanarLazy from "./images/programming/podstanar-lazy.png";
import forkifyLazy from "./images/programming/forkify-lazy.png";
import omnifoodLazy from "./images/programming/omnifood-lazy.png";
import natoursLazy from "./images/programming/natours-lazy.png";
import todoLazy from "./images/programming/todo-lazy.png";
import restaurantLazy from "./images/programming/restaurant-lazy.png";
import zgzLazy from "./images/programming/zgz-lazy.png";
import wordleLazy from "./images/programming/wordle-lazy.png";
// ARCHITECTURE-images
import hirsch from "./images/architecture/hirsch.jpg";
import nek from "./images/architecture/nek17.jpg";
import tg from "./images/architecture/tg78.jpg";
import house from "./images/architecture/kuca.jpg";
import nova from "./images/architecture/nova-dental.jpg";
// ARCHITECTURE-images LAZY
import hirschLazy from "./images/architecture/hirsch-lazy.jpg";
import nekLazy from "./images/architecture/nek17-lazy.jpg";
import tgLazy from "./images/architecture/tg78-lazy.jpg";
import houseLazy from "./images/architecture/kuca-lazy.jpg";
import novaLazy from "./images/architecture/nova-dental-lazy.jpg";

const today = new Date(Date.now());
const birthDay = "14-05-1995";
const parse = birthDay.split("-");
const myBirthDay = new Date(parse[2], parse[1], parse[0]);
const age = today.getFullYear() - myBirthDay.getFullYear();

const data = {
  bgImages: {
    progBg: programmingBg,
    archBg: architectureBg,
  },
  bio: {
    birthday: "14.05.1995",
    name: "Adnan Dacić",
    school: "High School of Civil Engineering and Geodesy",
    location: "BiH, Sarajevo",
    email: "adnandacic145@gmail.com",
    phone: "061/053-653",
    mbti: "INTP - a",
  },
  homeQuotes: [
    `Hey there, web wanderer! I'm Adnan Dacić, a ${age}-year-old junior full-stack developer hailing
    from Bosnia and Herzegovina. Welcome to my webpage, where
    I'm excited to share my journey and insights in the world of web
    development.`,
  ],
  contactQuote: [
    `If you like my work, have questions, suggestions, or simply want to say hello, I'd love to hear from you! You can reach out to me through one of the links provided below.`,
  ],
  aboutMeQoute: {
    main: `I'm Adnan Dacić, a ${age}-year-old Bosnian enthusiast who's been on quite the
    adventure. Welcome to my website, where you can get to know me better, along with my previous work in both architecture and programming.`,
    architecture: `After completing high school, I enrolled in the architectural faculty. During my studies, I began working as an architect, acquiring numerous valuable skills. Realizing the client's dreams while simultaneously staying grounded in reality, attempting to find a balance between the two, and designing something both unique and functional is a challenging task for which I am grateful. It has helped me think outside the box and strengthen my problem-solving skills. Although I am a fan of challenging architectural endeavors and the artistic aspects it offers, I came across cybersecurity courses that introduced me to an entirely new virtual world. This realm provides complete freedom and is far more challenging than architecture.`,
    programming: `After taking my initial steps in the virtual world, I realized that the only limits that exist are the boundaries of knowledge one possesses. In the beginning, it felt like standing at a crossroads with infinite possibilities, making it challenging to decide which path to take. This led to my first encounter with web development. I believed that if I wanted to learn website hacking/pentesting, I had to first understand how to code them. After some exploration and advice from friends, I decided to start with the holy trinity of web development: HTML, CSS, and JS. Of course, after mastering the basics of the holy trinity, I faced a new crossroads where I opted for the MERN stack. I began learning React, NodeJS, Mongo, MySQL, and React Native. After three and a half years of learning and developing small personal projects, I decided to seek employment to enhance my knowledge in an environment where individuals have dedicated many more years to programming. This way, I aim to learn best practices and code development.`,
  },
  hobbies: [
    {
      title: "Hiking",
      description:
        "Hiking is a testament to our enduring connection with the natural world. It's a reminder that, despite our modern lives filled with screens and schedules, we are fundamentally creatures of the outdoors. Especially since our exploration of previously unknown territories brings us back to our childhood days and awakens the adventurous spirit.",
      img: hikingImg,
      imgLazy: hikingLazy,
    },
    {
      title: "Drawing & Music",
      description:
        "Drawing, along with music, is a universal language that transcends cultural and linguistic barriers. Without spoken words, it allows you to connect with others, sharing stories, ideas, and emotions. It's a form of meditation, a mindful practice that brings you into the present moment.",
      img: drawingImg,
      imgLazy: drawingLazy,
    },
    {
      title: "Crafting",
      description:
        "It's a form of therapy. Crafting provides a moment of respite from the hustle and bustle of everyday life. As you immerse yourself in your craft, the world fades into the background, and you find solace in the rhythm of your work. It's a sanctuary for the mind, a place where stress dissipates and a sense of accomplishment blossoms.",
      img: craftingImg,
      imgLazy: craftingLazy,
    },
    {
      title: "Gaming",
      description: "If you play games as well add me on Discord ra6an#4417!",
      img: gamingImg,
      imgLazy: gamingLazy,
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
    { title: "HTML", cert: [htmlAndCssImg], color: "html", certLazy },
    { title: "CSS", cert: [htmlAndCssImg], color: "css", certLazy },
    {
      title: "JavaScript",
      cert: [javaScriptImg, javaScriptTwoImg],
      color: "javascript",
      certLazy,
    },
    { title: "React", cert: [reactImg], color: "react", certLazy },
    {
      title: "ReactNative",
      cert: [reactNativeImg],
      color: "react-native",
      certLazy,
    },
    {
      title: "NodeJS",
      cert: [nodeJSImg, nodeJSTwoImg],
      color: "node-js",
      certLazy,
    },
    { title: "MongoDB", cert: [nodeJSTwoImg], color: "mongodb", certLazy },
    { title: "MySQL", cert: [mySQLImg], color: "mysql", certLazy },
  ],
  architectureJobs: [
    {
      id: 0,
      company: "Architekt DI Admir Dedic ZT",
      months: 24,
      tech: "AutoCAD, Archicad, Lumion",
      type: "Remote",
      description:
        "My architectural journey reached its peak during this phase as I delved into larger projects, an experience for which I'm truly grateful. Working on these projects allowed me to learn and grow through the invaluable experiences shared with me. I have worked on both conceptual design and construction projects, from blueprints and specifications to developing 3D models and renderings.",
    },
    {
      id: 1,
      company: "Trust d.o.o.",
      months: 2,
      tech: "AutoCAD, Archicad, Lumion",
      type: "On-site",
      description:
        "My journey in this role was relatively short due to the impact of COVID, but nonetheless, very rich with experience. During this time, I was primarily engaged in interior design, allowing me to foster direct communication with clients. I also played a pivotal role in creating blueprints, specifications, 3D models, and intricate renderings.",
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
      months: 12,
      tech: "Wordpress, CSS, HTML, React, NodeJS, Express, MongoDB, MySQL, JavaScript",
      type: "Remote",
      description: `I have worked on several projects over the past year, including one for a New York-based company called Revive Remodeling, as well as a wine shop Wein Candavero and a dropshipping website SGI, which is still in development. You can find more details on the 'Projects' page.`,
    },
  ],
  programmingProjects: [
    {
      details: {
        id: 1,
        title: "SGI - Schweizer Gratis Inserate",
        tech: "MERN",
        description:
          "Schweizer Gratis Inserate is a Swiss company. The project is still in development and utilizes React, Node.js with Express, and MongoDB with Mongoose as the tech stack.",
        url: "https://schweizer-gratis-inserate.ch/",
        img: sgi,
        imgLazy: sgiLazy,
      },
    },
    {
      details: {
        id: 2,
        title: "Wein Candavero",
        tech: "React, NodeJS, Express, MySQL",
        description:
          "Wein Candavero is a privately-run wine shop website, redesigned and rebuilt from scratch using React, Node.js with Express, and MySQL. The site offers a modern and intuitive platform for customers to browse and purchase a curated selection of wines.",
        url: "https://db.candavero.de/",
        img: candavero,
        imgLazy: candaveroLazy,
      },
    },
    {
      details: {
        id: 3,
        title: "Wordle",
        tech: "React, SCSS",
        description:
          "This Wordle-inspired application is a word puzzle game developed using React and SCSS. The project replicates the popular word-guessing gameplay, offering a smooth and interactive user experience.",
        url: "https://wordle-ra6an.netlify.app/",
        img: wordle,
        imgLazy: wordleLazy,
      },
    },
    {
      details: {
        id: 4,
        title: "Revive Remodeling",
        tech: "Wordpress, CSS, JavaScript",
        description:
          "Revive Remodeling is a company from New York specializing in room reconstruction and remodeling. The project was done using WordPress with a few modifications using CSS and JavaScript.",
        url: "https://reviveremodelingnyc.com/",
        img: reviveRemodeling,
        imgLazy: reviveRemodelingLazy,
      },
    },
    {
      details: {
        id: 5,
        title: "Podstanar",
        tech: "React, NodeJS, MongoDB",
        description:
          "Podstanar is my personal project that is still in the development process and was inspired by the Airbnb app. The ultimate goal is to simplify the rental process for both hosts and clients, reducing the number of steps taken care of by the application's logic.",
        url: "https://github.com/ra6an/PODSTANAR-in-progress",
        img: podstanar,
        imgLazy: podstanarLazy,
      },
    },
    {
      details: {
        id: 6,
        title: "Omnifood",
        tech: "HTML5, CSS3, JavaScript",
        description:
          "Omnifood was the final project of Johnas Schmedtman's HTML and CSS course. The project's goal was to apply best practices and write clean and functional code, making the site responsive for all types of screens.",
        url: "https://omnifoodr.netlify.app/",
        img: omnifood,
        imgLazy: omnifoodLazy,
      },
    },
    {
      details: {
        id: 7,
        title: "Forkify",
        tech: "JavaScript",
        description:
          "Forkify is also a final project from Johnas Schmedtman's course, this time focused on JavaScript. It involved adding JavaScript code for the client side to an existing HTML and CSS codebase, with a primary emphasis on AJAX calls.",
        url: "https://forkifyr6.netlify.app/",
        img: forkify,
        imgLazy: forkifyLazy,
      },
    },
    {
      details: {
        id: 8,
        title: "Natours",
        tech: "NodeJS, MongoDB, Pug, CSS",
        description:
          "Natours is final project from Jonas Schmedtman's course mostly focused on NodeJS and MongoDB. I was implementing authentification/authorization and basic CRUD operations.",
        url: "https://github.com/ra6an/Natours",
        img: natours,
        imgLazy: natoursLazy,
      },
    },
    {
      details: {
        id: 9,
        title: "React Meals",
        tech: "React, Css",
        description:
          "React Meals is one of the projects from Maximilian Schwarzmüller's React course, with the goal of implementing AJAX calls.",
        url: "https://github.com/ra6an/restaurant-react",
        img: restaurant,
        imgLazy: restaurantLazy,
      },
    },
    // {
    //   details: {
    //     id: 9,
    //     title: "The To-do List",
    //     tech: "React, Redux, Css",
    //     description:
    //       "The to-do list is my side project after completing a React course. I wanted to delve into React Hooks and Redux for further exploration.",
    //     url: "https://github.com/ra6an/TODO",
    //     img: todo,
    //     imgLazy: todoLazy,
    //   },
    // },
    {
      details: {
        id: 10,
        title: "ZGZ Forum",
        tech: "React, NodeJS, Express, MongoDB",
        description:
          "ZGZ Forum is my personal project where, after completing Maximilian's MERN course, I decided to create a website to test my knowledge.",
        url: "https://github.com/ra6an/zgz-dit",
        img: zgz,
        imgLazy: zgzLazy,
      },
    },
    {
      details: {
        id: 11,
        title: "Games",
        tech: "HTML5, CSS3, JavaScript",
        description:
          "This is my personal project where I summarized the knowledge I had gathered in HTML, CSS, and JavaScript and implemented it in the development of several mini-games.",
        url: "https://gamesr6.netlify.app/",
        img: games,
        imgLazy: gamesLazy,
      },
    },
  ],
  architectureProjects: [
    {
      details: {
        id: 1,
        title: "Hirschstettnerstrasse 13, 1220 Vienna",
        company: "Architekt DI Admir Dedic ZT",
        tech: "AutoCAD, Archicad, Lumion",
        description:
          "Hirschstrasse is a duplex house in Austria, where I worked on both the conceptual design and construction projects. This involved creating blueprints, specifications, 3D models, and renderings",
        url: null,
        img: hirsch,
        imgLazy: hirschLazy,
      },
    },
    {
      details: {
        id: 2,
        title: "Tauschinskygasse 78, 1210 Vienna",
        company: "Architekt DI Admir Dedic ZT",
        tech: "AutoCAD, Archicad, Lumion",
        description:
          "Tauschinskygasse is duplex house in Austria, where I was involved in both conceptual design and construction projects. I was working on creation of the blueprints, specifications, 3D models, and renderings.",
        url: null,
        img: tg,
        imgLazy: tgLazy,
      },
    },
    {
      details: {
        id: 3,
        title: "Dr.-Nekowitsch Str. 17, 1210 Vienna",
        company: "Architekt DI Admir Dedic ZT",
        tech: "AutoCAD, Archicad, Lumion",
        description:
          "Nekowitsch is project where I collaborated with group of architects on construction projects. I was working on creation of the blueprints, specifications, 3D models, and renderings.",
        url: null,
        img: nek,
        imgLazy: nekLazy,
      },
    },
    {
      details: {
        id: 4,
        title: "Nova Dental",
        company: "Trust d.o.o",
        tech: "AutoCAD, Archicad, Lumion",
        description:
          "The Nova Dental clinic is located in Bosnia and Herzegovina. It was an interior design project where I worked on blueprints, specifications, 3D modeling, and renderings.",
        url: null,
        img: nova,
        imgLazy: novaLazy,
      },
    },
    {
      details: {
        id: 5,
        title: "House Renovation",
        company: "Freelance",
        tech: "AutoCAD, Archicad, Lumion, Photoshop",
        description:
          "This is my personal project where I was working on blueprints, specifications, 3D modeling, and renderings for House Renovation located in Bosnia and Herzegovina.",
        url: null,
        img: house,
        imgLazy: houseLazy,
      },
    },
  ],
};

export default data;
