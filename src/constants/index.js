import {
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  huddersfield,
  zentry,
  plamories,
  petadopt,
  bookwise,
  emotionscanner,
  proshop,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    title: "Full Stack Web Developer",
    description:
      "Proficient in building scalable and responsive web applications, specializing in React, Next.js, and Node.js frameworks for seamless frontend and backend integration.",
    icon: FaCode,
  },
  {
    title: "React Native Developer",
    description:
      "Skilled in developing high-performance cross-platform mobile applications for iOS and Android using the React Native framework, ensuring optimal user experience.",
    icon: FaMobileAlt,
  },
  {
    title: "ML Developer",
    description:
      "Passionate about designing and implementing AI and machine learning solutions, leveraging frameworks like TensorFlow and Scikit-learn for data-driven results.",
    icon: FaRobot,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Research Assistant",
    company_name: "University of Huddersfield",
    icon: huddersfield,
    date: "July 2024 - Current",
    points: [
      "Assisting in the development and deployment of AI-driven applications, including integrating custom machine learning models and optimizing solutions for real-world user needs.",
      "Designing and implemented a cloud-hosted dashboard to track user tasks programmatically, incorporating data visualization tools to enhance usability and team collaboration.",
      "Conducting outreach and engagement activities, including promoting mental health research projects, refining app designs, and addressing user feedback to improve participation and user experience.",
      "Ensuring project security and efficiency by implementing best practices for API key management, cost-effective AI model exploration, and robust app maintenance workflows.",
    ],
  },
];

const projects = [
  {
    name: "ProShop",
    category: "web",
    description:
      "Web-based ecommerce platform that allows users to authenticate, purchase, and order online.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: proshop,
    source_code_link: "https://github.com/MinMyatPaing/ProShop",
  },
  {
    name: "Zentry Clone",
    category: "web",
    description:
      "Experience the ultimate gaming hub! Packed with sleek visuals, dynamic animations, and intuitive navigation, this website is your gateway to the latest gaming news, reviews, and community events. Designed for gamers, by gamers – where style meets functionality!",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: zentry,
    source_code_link: "https://github.com/MinMyatPaing/zentry-clone",
  },
  {
    name: "BookWise",
    category: "web",
    description:
      "BookWise is a library booking website that lets users browse, reserve, and manage book loans with secure sign-in and sign-out features. It also includes admin tools for managing inventory, reservations, and user accounts efficiently.",
    tags: [
      {
        name: "nextjs",
        color: "white",
      },
      {
        name: "neon",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
    ],
    image: bookwise,
    source_code_link: "https://github.com/MinMyatPaing/university-library",
  },
  {
    name: "Pet Adopt App",
    category: "mobile",
    description:
      "An app that lets users adopt pets and connect directly with sellers for seamless communication.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "white",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: petadopt,
    source_code_link: "https://github.com/MinMyatPaing/pet-adopt-app",
  },
  {
    name: "Plamories",
    category: "mobile",
    description:
      "An app that lets users save their favorite places with locations and photos for easy access and memories.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: plamories,
    source_code_link: "https://github.com/MinMyatPaing/plamories",
  },
  {
    name: "Emotion Scanner",
    category: "ML",
    description:
      "A Python-based emotion scanner that analyzes facial expressions to determine and display emotions",
    tags: [
      {
        name: "tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: emotionscanner,
    source_code_link: "https://github.com/MinMyatPaing/Facial_Recog_Minigame",
  },
];

const socialLinks = [
  {
    name: "Github",
    link: "https://github.com/MinMyatPaing",
    icon: FaGithub,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/min-myat-paing-70566319a/",
    icon: FaLinkedin,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/min_myat_paing08/",
    icon: FaInstagram,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/min.m.paing.31/?locale=en_GB",
    icon: FaFacebook,
  },
];

export { skills, socialLinks, technologies, experiences, projects };
