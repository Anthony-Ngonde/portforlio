import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import profileImage from '../../assets/profile.png';
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className="about__image-container">
        <img src={profileImage} alt="Profile" className="about__image" />
      </div>

      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description}</p>

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