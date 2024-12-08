const header = {

  title: 'Portfolio',
}

const about = {
 
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


  {
    name: 'Teeflex Fitness(Gym)',
    description: `Created and hosted the Teeflex Fitness website, a responsive platform showcasing fitness programs, membership plans, trainer profiles and a contact form. Designed for seamless navigation and optimized for performance.`,
    stack: ['React.js', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Anthony-Ngonde/Teeflex-Website.git', 
    livePreview: 'https://www.teeflexfitness.com/',
  },
  {
    name: 'Ecommerce Website',
    description: `Developed a web application for an e-commerce platform aimed at enhancing the user experience for online shopping. Collaborated with a team to implement features like product search, filtering, and a shopping cart system.`,
    stack: ['React', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/Anthony-Ngonde/opticart-frontend', 
    livePreview: 'https://opticart-frontend.vercel.app/',
  },
  {
    name: 'Anime Application',
    description: `Built and deployed a React-based web application with API integration for fetching anime data. Collaborated with a team to ensure responsive design and smooth performance across platforms.`,
    stack: ['React', 'JavaScript', 'API'],
    sourceCode: 'https://github.com/Anthony-Ngonde/anime-app',
    livePreview: 'https://anime-app-plum.vercel.app/'
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJs',
  'Git',
  'Python',
  'Flask',
  'Node.js',
  'Vercel',
  'AWS'
]

const contact = {
  email: 'anto.ngonde@gmail.com',
}

export { header, about, projects, skills, contact }
