import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>Anthony Ngonde.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A Fullstack Developer.</h2>}
      <p className='about__desc'>I specialize in crafting dynamic, user-friendly web applications by combining elegant front-end interfaces with robust back-end functionality. With experience in React, Node.js, and Flask, I build seamless experiences that focus on performance, scalability, and modern design. My goal is to create intuitive solutions that not only meet user needs but also push the boundaries of technology.</p>

      <div className='about__contact center'>
        {resume && (
          <a href='https://drive.google.com/file/d/1vhYBD5-bP0Lwu2WWv5Ak8kNdZAGjiaoM/view?usp=drive_link' target='_blank' rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
              href='https://github.com/Anthony-Ngonde'
              aria-label='github'
              className='link link--icon'
              target='_blank' 
              rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href='https://www.linkedin.com/in/anthony-ngonde-a06442290/'
                aria-label='linkedin'
                className='link link--icon'
                target='_blank' 
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
