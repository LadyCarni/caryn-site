import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/pro-light-svg-icons';
import office from 'assets/office.jpg';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="header-image">
         <img src={office} alt="Caryn's home office"/>
        </div>
        <h1 className="contact-headline">Let's make something <span className="pop">great</span></h1>
        <p>If you're interested in finding out more about the type of work I do, don't forget to check out my <Link to="/portfolio">portfolio</Link>. I also have a few handy posts on <a href="https://codepen.io/ladycarni" target="_blank" rel="noreferrer">CodePen</a> if that's more your jam.</p>
      </div>
      <div className="contact-container">
        <div className="work">
          <h2>Work</h2>
          <p>I'm happy to offer any help I can, let's hear your idea!</p>
          <ul>
            <li>
              <a href="https://github.com/LadyCarni" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/carynfarvour/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:caryn.farvour@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                Email
              </a>
            </li>
          </ul>
        </div>
        <div className="play">
          <h2>Play</h2>
          <p>There's always room for a little fun. Let's connect!</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/lady.carni/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/our_workbench/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                #DIY
              </a>
            </li>
            <li>
              <a href="https://twitter.com/LadyCarni" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
