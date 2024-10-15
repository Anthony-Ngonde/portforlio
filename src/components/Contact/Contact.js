import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p>If you&apos;d like to get in touch, feel free to reach out via email. I&apos;m always open to discussing new opportunities and collaborations.</p>
      <a href={`mailto:${contact.email}`}>
        <br />
        <span type='button' className='btn btn--outline'>
          EMAIL ME
        </span>
      </a>
    </section>
  )
}

export default Contact