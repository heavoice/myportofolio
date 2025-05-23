export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Project',
    href: '#project',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'X-Project 10.0 | X-Project 2024',
    desc: 'X-Project is an annual event held by HIMTI UNESA.',
    subdesc:
      'X-Project 10.0 has a series of events that include training activities, learning in certain areas of expertise, competitions, IT expo, entrepreneurship and performances that aim to introduce HIMTI UNESA.',
    href: 'https://xproject24-flame.vercel.app/',
    texture: '/textures/project/project1.png',
    logo: '/assets/xproject.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Needify',
    desc: 'Needify is an Android-based e-commerce application designed to provide essential daily needs.',
    subdesc:
      'The platform ensures high-quality products with reliable delivery services, maintaining freshness upon arrival. Needify offers a modern shopping solution by integrating secure payment options and efficient logistics.',
    href: 'https://needify-deployment.vercel.app/',
    texture: '/textures/project/project2.png',
    logo: '/assets/needify.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Dart',
        path: '/assets/dart.svg',
      },
      {
        id: 2,
        name: 'Flutter',
        path: 'assets/flutter.svg',
      },
      {
        id: 3,
        name: 'Supabase',
        path: '/assets/supabase.png',
      },
    ],
  },
  {
    title: 'Dashboard Cianjur',
    desc: 'An interactive web platform.',
    subdesc:
      'Designed to deliver comprehensive information about the Cianjur area, covering statistical data, important locations, and tools for regional planning and development. It features statistical data, important geographic locations, and integrated tools to support regional management, development planning, and public accessibility to local insights.',
    href: 'https://dashboard-cianjur.vercel.app/auth',
    texture: '/textures/project/project3.png',
    logo: '/assets/sugihmukti.png',
    logoStyle: {
      backgroundColor: '#142A1E',
      border: '0.2px solid #1D3F36',
      boxShadow: '0px 0px 60px 0px #30AA6C4D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/nodejs.svg',
      },
      {
        id: 5,
        name: 'Express.js',
        path: '/assets/expressjs.svg',
      },
      {
        id: 6,
        name: 'PostgreSQL',
        path: '/assets/postgresql.svg',
      },
    ],
  },
  {
    title: 'Arcatime',
    desc: ' Arcade battle game.',
    subdesc:
      'Arcatime is an arcade battle game built with Pygame, a Python-based game development library. The gameplay centers around two characters fighting using both melee and ranged attacks, offering dynamic and fast-paced action.',
    href: 'https://github.com/heavoice/Arcatime',
    texture: '/textures/project/project4.png',
    logo: '',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'Pygame',
        path: 'assets/pygame.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
