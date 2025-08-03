import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown, faShovel, faPeopleCarry, faUsersClass, faDoorOpen, faHeartbeat, faHandsHeart } from '@fortawesome/pro-light-svg-icons';
// import triangles from 'assets/tri-large.svg'; 
import PortfolioFeatures from 'components/portfolioFeatures';
import knakWires from 'assets/portfolio/knak-wires.jpg';
const Home = () => {
  return (
    <>
      <div className="hero feature-height">
        <div className="hero-content">
          <h1>UX Leader<br />Strategic Thinker</h1>
        </div>
        <FontAwesomeIcon icon={faLongArrowDown} className="scroll" alt="scroll down" />
      </div>
      <div className="feature bottom feature-width feature-height">
        <div className="feature-content">
          <div className="title">
            <h2>Who I am</h2>
          </div>
          <div className="description">
            <h3>I <span className="pop">design</span> experiences</h3>
            <p>I find inspiration in the small details and bring creativity into every part of my life. Whether I'm behind the camera capturing light and texture, in the kitchen crafting recipes that are as beautiful as they are delicious, or designing thoughtful solutions in my professional work, I approach everything with intention and a strong sense of harmony.</p>
            <p>Creativity isn't just a skill or a hobby for me. It's how I see the world, how I solve problems, and how I connect with others. I aim to create experiences that are not only effective and intuitive, but also deeply meaningful.</p>
            <p>
              <Link to="/about" className="arrow-link block">Get to know Caryn</Link>
            </p>
          </div>
        </div>
        <div className="section-divider"></div>
      </div>
      <div className="feature top feature-width feature-height">
        <div className="feature-content flex column">
          <div className="flex row">
            <div className="title">
              <h2>What I do</h2>
            </div>
            <div className="description">
              <p>I'm a designer and creative leader focused on guiding thoughtful, strategy-driven design processes that deliver meaningful outcomes. I specialize in creating user-centered solutions that balance aesthetic simplicity with functional clarity, always aligned to the broader vision.</p>
              <p>I lead with intention, merging creativity and strategy to ensure every project meets its goals while maintaining a strong, consistent visual identity. Collaboration and accessibility are at the core of my approach, helping teams align across perspectives and bring ideas to life with clarity and impact.</p>
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
      <div className="dark feature center filter headline">
        <div className="headline-image">
          <img src={knakWires} alt="Knak app on a laptop" />
        </div>
        <div className="headline overlay">
          <h3>Knak: A Case Study</h3>
          <h2>Architecting User Experience</h2>
          <Link to="/portfolio/knak-ux-case-study" className="arrow-link block">View case study</Link>
        </div>
      </div>
      <div className="feature bottom feature-width feature-height">
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
