// Import all images
import snakeGameImage from "../assets/images/snake-game.png";
import redditGraphImage from "../assets/images/reddit-graph.png";
import connectedComponentsImage from "../assets/images/connected-components.png";
import narutoMobileImage from "../assets/images/naruto-mobile.png";
import taekwondoMobileImage from "../assets/images/taekwondo-mobile.png";
import stringBarImage from "../assets/images/string-bar.png";
import libraryDbImage from "../assets/images/library-db.png";
import acneImage from "../assets/images/acne.png";
import safeguardImage from "../assets/images/safeguard.png";
import homeReadinessImage from "../assets/images/home-readiness.png";
import capfluencerImage from "../assets/images/capfluencer.png";
import ecosenseImage from "../assets/images/ecosense.png";
// Portfolio data
const portfolioItems = [
  {
    image: snakeGameImage,
    title: "Machine Learning: Snake Game",
    description:
      "Enhancing Snake Game Strategy with Deep Reinforcement Learning and Advanced Neural Networks.",
    link: "./documents/snake-ml.pdf", // Path to PDF or external URL
  },
  {
    image: redditGraphImage,
    title: "Big Data: Kafka Connection to Reddit API",
    description:
      "From Reddit to Insights: A Big Data Pipeline for Entity Recognition on Comments from Subreddit “news.”",
    link: "./documents/reddit-kafka.pdf", // Path to PDF or external URL
  },
  {
    image: connectedComponentsImage,
    title: "Big Data: Graph-Based Social Network Analysis",
    description:
      "Insights from Facebook's Dataset Using PySpark and GraphFrames.",
    link: "./documents/pyspark-graphframes.pdf", // Path to PDF or external URL
  },
  {
    image: narutoMobileImage,
    title: "React Native: Naruto Info",
    description:
      "Mobile App in iOS and Android Store, connects to a Node JS API to display information about characters from my favorite anime show, Naruto.",
    link: "https://apps.apple.com/au/app/naruto-info/id6450222151",
  },
  {
    image: taekwondoMobileImage,
    title: "React Native Mobile App: Taekwondo Instructor Manual",
    description:
      "In iOS and Android Store, uses Firebase backend to display videos of Taeguek and Palgwae Taekwondo forms to help me teach students as a third degree black belt.",
    link: "https://apps.apple.com/au/app/taekwondo-instructor-manual/id6464021773",
  },
  {
    image: stringBarImage,
    title: "React Native: Tuning and Chords",
    description:
      "In iOS and Android Store, uses Firebase backend to display chords and sounds for tuning guitar, banjo, mandolin, and ukulele. Pictures and sounds are from my own instruments.",
    link: "https://apps.apple.com/au/app/string-bar/id6454298923",
  },
  {
    image: libraryDbImage,
    title: "JavaFX UI and SQL Library Database",
    description:
      "Search, Add, Delete books. Built a UI and a complete backend in SQL with UML Database Design. Built a library management system with UI using Java FX and SQL Management Studio.",
    link: "https://github.com/amberhasan/library",
  },
  {
    image: acneImage,
    title: "Roboflow AI / Open AI API / Flask Python: Acne Be Gone!",
    description:
      "We used Roboflow's AI dataset and API to classify what type of acne is displayed in the picture. We then fed that JSON object into Open AI's API to find the best solutions for that type of acne. Flask Python website. UTD Axxess Hackathon 2023.",
    link: "https://devpost.com/software/acne-be-gone",
  },
  {
    image: safeguardImage,
    title: "React Native: Safety Map Alert (SheHacks8+ at Western)",
    description:
      "Mobile app that lets users pin/comment/view crime data by zip code. Connects to 7 API’s including Google Maps Basic API, Google Maps Geocoding API, Google Maps Marker API, Crime Data by Zip Code API. Top 5 Projects chosen to present in final round.",
    link: "https://devpost.com/software/safeguard-10ms7z",
  },
  {
    image: homeReadinessImage,
    title: "MERN Web App: Home Buying Calculator (HackUTD)",
    description:
      "React web application with MongoDB backend (the MERN stack). Users input their financial info, and output tells their eligibility status to buy the house they want.",
    link: "https://devpost.com/software/home-buying-readiness-calculator",
  },
  {
    image: capfluencerImage,
    title:
      "React Native / Firebase: Instagram Captioning Mobile App (for client)",
    description:
      "I developed a caption app from scratch using React Native and Firebase based on the client's designs. It is currently on the iOS app store under the name, Capfluencer.",
    link: "https://github.com/amberhasan/say_what",
  },
  {
    image: ecosenseImage,
    title: "Docker / Google Charts API / Flask Python: EcoSense",
    description:
      "Fast API, Python, HTML/CSS/JS to simulate data and mock it with Google Charts API. Docker for containerization.",
    link: "https://devpost.com/software/ecosense-65tfuw",
  },
];

export default portfolioItems;
