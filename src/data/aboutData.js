// aboutData.js

import userImage from "../assets/images/user.png"; // Import the user image

const aboutData = [
  {
    title: null, // No title for the image card
    items: [userImage],
  },
  {
    title: "About Me",
    items: [
      "I'm a passionate software developer with a strong interest in DevOps, Web Development, and Cloud Technologies. I thrive on solving complex problems and building innovative solutions.",
    ],
  },
  {
    title: "Skills",
    items: [
      "Web Development (React, HTML/CSS)",
      "DevOps (Azure, Kubernetes, Terraform)",
      "Programming Languages (Java, Python, Bash)",
    ],
  },
  {
    title: "Experience",
    items: [
      "2022–Present: Worked at Shopify",
      "2017–2022: Bank of America",
      "2022: Microsoft",
    ],
  },
  {
    title: "Education",
    items: [
      "B.S. in Computer Science, UTD (2017)",
      "M.S. in Software Engineering, UTD (Ongoing)",
    ],
  },
];

export default aboutData;
