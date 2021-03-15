import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import caryn1 from 'assets/caryn1.jpg';

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
          <h2 className="title">I <span className="pop">design</span> experiences</h2>
          <p>I'm a senior User Experience (UX) developer who is passionate about product design. I have been specializing in UX design for 9 years, and honing my front-end development and web design skills for the past 6 years. I've been leading cross-functional software teams through facilitation, coaching, and project management for the last 4 years. I have had training in accessibility for web, and have a formal education in business, marketing, and traditional art.</p>
          <Link to="/about" className="arrow-link block">View Resume <FontAwesomeIcon icon={faLongArrowRight} /></Link>
        </div>
      </div>
    </div>
  );
}

export default About
