import Project1 from '../../assets/flashkart-frontend.png';
import Project2 from '../../assets/mocha-frontend-2.png';
import Project3 from '../../assets/cloneflix-frontend.png';
import Project4 from '../../assets/mocha-frontend.png';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
    modalTitle: "Title1",
    modalDescription: "Title2",
    modalService: [
      "XXXXXXXX",
      "XXXXXXXX",
      "XXXXXXXX",
    ],
  },
  {
    id: 2,
    name: ' Apps Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
      modalTitle: "Title1",
      modalDescription: "Title2",
      modalService: [
        "XXXXXXXX",
        "XXXXXXXX",
        "XXXXXXXX",
      ],
  },
  {
    id: 3,
    name: ' Game Development ',
    title: ' Unity & Unreal ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
      modalTitle: "Title1",
      modalDescription: "Title2",
      modalService: [
        "XXXXXXXX",
        "XXXXXXXX",
        "XXXXXXXX",
      ],
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    name: ' Music Writing ',
    title: ' Sound Track ',
    description:
      'Music copying, writing, creating, transcription and composition services.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Frontend',
    percentage: 80,
    description:
      'Experienced in creating single/multi page front-end applications using React, TypeScript and Redux. Also handy with Tailwind and Chakra UI.',
  },

  {
    id: 2,
    name: 'Backend',
    percentage: 80,
    description:
      'Can develop a REST API backend using NodeJS and Express. Currently learning how to create a microservice based API using JS.',
  },

  {
    id: 3,
    name: 'Database',
    percentage: 80,
    description:
      'Expericed in developing a NoSQL database like MongoDB and intermediate in SQL databases like MYSQL and Postgres.',
  },

  {
    id: 4,
    name: 'Microsoft Office',
    percentage: 90,
    description:
      'Excellent in using products like Word, Excel and Powerpoint to generate reports, spreadsheets and presentations for different environments.',
  },

  {
    id: 5,
    name: 'Testing',
    percentage: 60,
    description:
      'Intermediate in testing React based websites using JestJS.',
  },

  {
    id: 6,
    name: 'C++, Java, Python',
    percentage: 50,
    description:
      'Intermediate in using OOP languages. Knowledge of classes, interfaces and testing helps me in developing JS applications.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    link: "https://flash-kart.netlify.app/",
    category: 'Frontend',
    title: 'Flash Kart (Frontend)',
    description:
      'Flash store is an e-commerce app built on React for all your book needs. The responsive app has custom built toasts.',
  },
  {
    id: 2,
    img: Project2,
    category: 'Frontend',
    link: "https://mocha-sheldon.netlify.app/",
    title: 'Mocha',
    description:
      'Mocha is an social media app for connecting with your friends. Built using React, Express and MongoDB.',
  },
  {
    id: 3,
    img: Project3,
    category: 'Frontend',
    link: "https://cloneflix-frontend.netlify.app/browse", 
    title: 'CloneFlix',
    description:
      'CloneFlix is a front-end clone of Netflix. It is made from React, Typescript, Redux and Chakra UI.',
  },
  {
    id: 4,
    img: Project4,
    category: 'Backend',
    link: "https://sheldon-mocha-backend.netlify.app/",
    title: 'Mocha (Backend)',
    description:
      'Backend of Mocha built with Express and MongoDB. This app is hosted on Netlify.',
  },
  
];

export const cv = [
  {
    id: 1,
    title: 'Full-stack development student',
    subtitle: 'Neog Camp',
    date: '2023-Present',
    description:
      'Web development bootcamp to learn React, Typescript, Express, MongoDB and Jest by building real world applications.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Senior Stress Engineer',
    subtitle: 'Taal Tech. India Pvt. Ltd.',
    date: '2018-2022',
    description:
      'To build, analyze and post process models based on required standards under strict deadlines. Communicated with customer to ensure all criteria was met. Mentored 10 junior and senior engineers as well as handling quality control per regulations.',
    category: 'experience',
  },

  {
    id: 3,
    title: 'B.Tech. in Mechanical Engineering',
    subtitle: 'Manipal Institute of Technology',
    date: '2014 - 2018',
    description:
      'Merit-cum-means scholar. CGPA = 8.54/10',
    category: 'education',
  },

  {
    id: 4,
    title: 'Intermediate Student',
    subtitle: 'Narayana Junior College',
    date: '2012 - 2014',
    description:
      'Completed my education in Physics, Maths and Chemistry. Result = 96.30%',
    category: 'education',
  },

  {
    id: 5,
    title: 'High School Student',
    subtitle: "St Andrew's High School",
    date: '2000 - 2012',
    description:
      'An NCC Cadet from 2009-2011. CGPA = 9.40/10',
    category: 'education',
  },
];