import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown, faLongArrowRight } from '@fortawesome/pro-light-svg-icons';
import triangles from 'assets/tri-large.svg'; 
import trismall from 'assets/tri-vert1.svg';
import trismall2 from 'assets/tri-hor1.svg';
import PortfolioFeatures from 'components/portfolioFeatures';
import knakWires from 'assets/portfolio/knak-wires.jpg';
class Home extends Component {
  render() {
    return (
      <>
      <div className="hero feature-width feature-height">
        <img src={triangles} alt="" className="tri-large" />
        <div className="content">
          <h1><span className="pop">Design</span> for work,<br/>life, and play</h1>
        </div>
        <FontAwesomeIcon icon={faLongArrowDown} className="scroll" alt="scroll down" />
      </div>
      <div className="light feature bottom feature-width feature-height">
        <div className="feature-content">
          <div className="title">
            <img src={trismall} alt="" className="tri-small" />
            <h2>Who I am</h2>
          </div>
          <div className="description">
            <h3>I <span className="pop">design</span> experiences</h3>
            <p>Whether it's on a keyboard, at the easel, in the garden, or with a power tool in hand: I live to create. The hobbies and skills I've accumulated all share features of engagement, imagination, and a little whimsy.</p>
            <p>Professionally, I thrive on cross-functional teams, working directly with users to build elegant products that solve real problems.</p>
            <p>
              <Link to="/about" className="arrow-link block">Get to know Caryn <FontAwesomeIcon icon={faLongArrowRight} /></Link>
            </p>
          </div>
        </div>
        <div className="section-divider"></div>
      </div>
      <div className="light feature top feature-width feature-height">
        <div className="feature-content flex column">
          <div className="flex row">
            <div className="title">
              <img src={trismall2} alt="" className="tri-small" />
              <h2>What I do</h2>
            </div>
            <div className="description">
              <p>I am a UX strategist, a UI designer, and a front-end developer. I write about practical UX, design, and product management skills. I coach teams and speak publicly about product strategy.</p>
              <p>
                <Link to="/portfolio" className="arrow-link block">View Caryn's work <FontAwesomeIcon icon={faLongArrowRight} /></Link>
              </p>
            </div>
          </div>
          <div className="flex row">
            <PortfolioFeatures />
          </div>
        </div>
      </div>
      <div className="dark feature center filter feature-width headline">
        <div className="headline-image">
          <img src={knakWires} alt="Knak app on a laptop"/>
        </div>
        <div className="headline overlay">
          <h3>Knak: A Case Study</h3>
          <h2>Architecting User Experience</h2>
          <Link to="/portfolio/knak-ux-case-study" className="arrow-link block">View case study <FontAwesomeIcon icon={faLongArrowRight} /></Link>
        </div>
      </div>
      </>
    )
  }
}

export default Home;
