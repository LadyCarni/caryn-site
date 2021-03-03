import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Prism from 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/show-language/prism-show-language.js';
import 'prismjs/components/prism-json';
import Home from 'views/home/Home';
import { Portfolio } from 'views/portfolio';
import ScrollArrow from 'components/scrollArrow';
import Menu from 'components/menu';
import { PortfolioRoutes } from './views/portfolio/index';

export default function Site() {
  return (
    <Router>
      <ScrollToTop />
      <div className="header row feature-width">
        <span className="brand"><Link to="/">Caryn Farvour</Link></span>
        <div className="nav-container">
          <Menu />
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/creative">
          <Creative />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <PortfolioRoutes />
      </Switch>

      <div className="footer">
        <ScrollArrow />
        <div className="follow-links">
          <a href="https://github.com/LadyCarni"
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faGithub}
            alt="Caryn's GitHub profile"
            title="GitHub"
            className="github" />
          </a>
          <a href="https://twitter.com/LadyCarni"
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter}
            alt="Caryn's Twitter profile"
            title="Twitter"
            className="twitter" />
          </a>
          <a href="https://www.instagram.com/lady.carni/"
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram}
            alt="Caryn's Instagram profile"
            title="Instagram"
            className="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/carynfarvour/" 
          target="_blank"
          rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} 
            alt="Caryn's LinkedIn profile" 
            title="LinkedIn"
            className="linkedin" />
          </a>
        </div>
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Articles() {
  return (
    <div className="light feature feature-width full-height">
      <h2>Articles</h2>
      <p>Coming soon for your reading pleasure!</p>
    </div>
  );
}
function Creative() {
  return (
    <div className="light feature feature-width full-height">
      <h2>Creative</h2>
      <p>Coming soon for your inspiration!</p>
    </div>
  );
}

function About() {
  return (
    <div className="light feature feature-width full-height">
      <h2>About</h2>
      <p>Coming soon... existential crisis pending!</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="light feature feature-width full-height">
      <h2>Contact</h2>
      <p>Coming soon! Contact me somewhere else!</p>
    </div>
  );
}
