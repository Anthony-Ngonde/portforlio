const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John Smith',
  role: 'Front End Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Group Project - Anime App',
    description: `Built and deployed a React-based web application with API integration for fetching anime data. Collaborated with a team to ensure responsive design and smooth performance across platforms.`,
    stack: ['React', 'JavaScript', 'API'],
    sourceCode: 'https://github.com/Anthony-Ngonde/anime-app', // Replace with actual GitHub URL if available
    livePreview: 'https://anime-app-plum.vercel.app/',
  },
  {
    name: 'Solo Project – Ecommerce Website',
    description: `Developed a web application for an e-commerce platform aimed at enhancing the user experience for online shopping. Integrated responsive design and optimized product display for seamless navigation across devices. Collaborated with a team to implement features like product search, filtering, and a shopping cart system.`,
    stack: ['React', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/Anthony-Ngonde/opticart-frontend', // Replace with actual GitHub URL if available
    livePreview: 'https://opticart-frontend.vercel.app/',
  },
  {
    name: 'Solo Project – Gym Website',
    description: `Developed a fully responsive gym website aimed at promoting fitness services and workout programs. Implemented features such as a class schedule, membership plans, and a contact form ensuring smooth navigation and an engaging user experience.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Anthony-Ngonde/Phase-1-Project', // Replace with actual GitHub URL if available
    livePreview: 'https://anthony-ngonde.github.io/Phase-1-Project/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJs',
  'Git',
  'Python',
  'Flask'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
