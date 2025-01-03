import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown, faShovel, faPeopleCarry, faUsersClass, faDoorOpen, faHeartbeat, faHandsHeart } from '@fortawesome/pro-light-svg-icons';
import triangles from 'assets/tri-large.svg'; 
import { Helmet } from 'react-helmet';
import PortfolioFeatures from 'components/portfolioFeatures';
import knakWires from 'assets/portfolio/knak-wires.jpg';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Caryn Farvour</title>
        <meta property="og:title" content="Caryn Farvour" />
        <meta property="og:description" content="A professional UX portfolio showcasing industry insights, creative projects, hobbies, and recipes, blending design expertise with personal passion." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/about/caryn-portrait.jpg" />
        <meta property="og:url" content="https://carynfarvour.design" />
        <meta property="og:type" content="article" />
      </Helmet>
    <div className="hero feature-width feature-height">
      <div className="hero-content">
        <h1><span className="pop">Design</span> for work,<br/>life & play</h1>
      </div>
      <FontAwesomeIcon icon={faLongArrowDown} className="scroll" alt="scroll down" />
    </div>
    <div className="light feature bottom feature-width feature-height">
      <div className="feature-content">
        <div className="title">
          <h2>Who I am</h2>
        </div>
        <div className="description">
          <h3>I <span className="pop">design</span> experiences</h3>
          <p>Whether it's on a keyboard, at the easel, in the garden, or with a power tool in hand: I live to create. My hobbies and skills all include creativity, imagination, with a little flavor of whimsy.</p>
          <p>Professionally, I thrive on cross-functional teams, working directly with users to build elegant products that solve real problems.</p>
          <p>
            <Link to="/about" className="arrow-link block">Get to know Caryn</Link>
          </p>
        </div>
      </div>
      <div className="section-divider"></div>
    </div>
    <div className="light feature top feature-width feature-height">
      <div className="feature-content flex column">
        <div className="flex row">
          <div className="title">
            <h2>What I do</h2>
          </div>
          <div className="description">
            <p>I am a UX strategist, a UI designer, and a front-end developer. I write about practical UX, design, and product management skills. I coach teams and speak publicly about product strategy.</p>
            <p>
              <Link to="/portfolio" className="arrow-link block">View Caryn's work</Link>
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
        <Link to="/portfolio/knak-ux-case-study" className="arrow-link block">View case study</Link>
      </div>
    </div>
    <div className="light feature bottom feature-width feature-height">
      <div className="feature-content">
        <div className="title">
          <h2>What I Value</h2>
        </div>
        <div className="description">
          <div className="value-row">
            <div className="value">
              <h3>Pragmatism</h3>
              <FontAwesomeIcon icon={faShovel} />
              <p>Use tools, methods, and processes with practicality.</p>
            </div>
            <div className="value">
              <h3>Collaboration</h3>
              <FontAwesomeIcon icon={faPeopleCarry} />
              <p>Work on cross-functional teams to achieve success.</p>
            </div>
          </div>
          <div className="value-row">
            <div className="value">
              <h3>Community</h3>
              <FontAwesomeIcon icon={faUsersClass} />
              <p>Give back by volunteering, teaching, and having a voice.</p>
            </div>
            <div className="value">
              <h3>Coaching</h3>
              <FontAwesomeIcon icon={faHandsHeart} />
              <p>Lead by encouraging and facilitating a growth mentality.</p>
            </div>
          </div>
          <div className="value-row">
            <div className="value">
              <h3>Transparency</h3>
              <FontAwesomeIcon icon={faDoorOpen} />
              <p>Communicate thoroughly and often to ensure shared vision.</p>
            </div>
            <div className="value">
              <h3>Self-Awareness</h3>
              <FontAwesomeIcon icon={faHeartbeat} />
              <p>Take time to reflect on areas of opportunity and improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
