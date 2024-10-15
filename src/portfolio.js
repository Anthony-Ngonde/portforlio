const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anthony Ngonde.',
  role: 'Full-stack Developer',
  description:
    'I specialize in crafting dynamic, user-friendly web applications by combining elegant front-end interfaces with robust back-end functionality. With experience in ReactJs, Python and Flask, I build seamless experiences that focus on performance, scalability and modern design. My goal is to create intuitive solutions that not only meet user needs but also push the boundaries of technology.',
  resume: 'https://drive.google.com/file/d/1vhYBD5-bP0Lwu2WWv5Ak8kNdZAGjiaoM/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/anthony-ngonde-a06442290/',
    github: 'https://github.com/Anthony-Ngonde',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Anime Application',
    description: `Built and deployed a React-based web application with API integration for fetching anime data. Collaborated with a team to ensure responsive design and smooth performance across platforms.`,
    stack: ['React', 'JavaScript', 'API'],
    sourceCode: 'https://github.com/Anthony-Ngonde/anime-app', // Replace with actual GitHub URL if available
    livePreview: 'https://anime-app-plum.vercel.app/',
  },
  {
    name: 'Ecommerce Website',
    description: `Developed a web application for an e-commerce platform aimed at enhancing the user experience for online shopping. Collaborated with a team to implement features like product search, filtering, and a shopping cart system.`,
    stack: ['React', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/Anthony-Ngonde/opticart-frontend', // Replace with actual GitHub URL if available
    livePreview: 'https://opticart-frontend.vercel.app/',
  },
  {
    name: 'Gym Website',
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
  email: 'anto.ngonde@gmail.com',
}

export { header, about, projects, skills, contact }
