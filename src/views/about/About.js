import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import caryn1 from 'assets/caryn1.jpg';
import caryn2 from 'assets/caryn5.jpg';
import caryn3 from 'assets/caryn3.jpg';
import caryn4 from 'assets/caryn4.jpg';
import carynResume from 'assets/caryn-humphreys-resume-2021.pdf';

const About = () => {
  return (
    <div className="feature feature-width">
      <div className="bio">
        <div className="inline">
          <img src={caryn1} alt="Caryn Farvour portrait"/>
        </div>
        <div className="bio-content">
          <h1>Hi, I'm Caryn</h1>
          <p className="help">(pronounced kuh-<i>RIN</i>; like Corinne)</p>
          <p>I'm a senior User Experience (UX) developer who is passionate about product design. I have been specializing in UX design for 9 years, and honing my front-end development and web design skills for the past 6 years. I've been leading cross-functional software teams through facilitation, coaching, and project management for 4 years. I have had training in accessibility for web, and have a formal education in business, marketing, and traditional art.</p>
          <a href={carynResume} target="_blank" rel="noreferrer" className="arrow-link block">View Resume (PDF)<FontAwesomeIcon icon={faLongArrowRight} /></a>
          <div className="gallery">
            <div className="image">
              <img src={caryn2} alt="Caryn Farvour in the wild" className="caption"/>
              <span className="image-caption">Wireframing in the wild</span>
            </div>
            <div className="image">
              <img src={caryn3} alt="Caryn Farvour speaking at Erie Day of Code" className="caption"/>
              <span className="image-caption">Speaking at Erie Day of Code</span>
            </div>
            <div className="image">
              <img src={caryn4} alt="Caryn Farvour and her bengal, Nyx" className="caption left"/>
              <span className="image-caption">My bengal assistant, Nyx</span>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline">
        <h2>History</h2>
        <div className="timeline-content">
          <div className="path"></div>
          <ul>
            <li className="job">
              <span className="date">2008</span>
              Advertising Layout & Graphic Artist (Conestoga College)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About
