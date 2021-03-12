import React from 'react';
import ScrollArrow from './scrollArrow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <ScrollArrow />
      <div className="follow-links">
        <a
          href="https://github.com/LadyCarni"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            alt="Caryn's GitHub profile"
            title="GitHub"
            className="github"
          />
        </a>
        <a
          href="https://twitter.com/LadyCarni"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            alt="Caryn's Twitter profile"
            title="Twitter"
            className="twitter"
          />
        </a>
        <a
          href="https://www.instagram.com/lady.carni/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            alt="Caryn's Instagram profile"
            title="Instagram"
            className="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/carynfarvour/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            alt="Caryn's LinkedIn profile"
            title="LinkedIn"
            className="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
