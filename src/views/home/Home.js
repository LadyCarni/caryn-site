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
        <h1><span className="pop">Design</span> for work,<br/>life & play</h1>
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
          <p>I'm someone who finds inspiration in the small details and brings creativity into every corner of my life. Whether I'm behind the camera capturing light and texture, in the kitchen crafting recipes that are as beautiful as they are delicious, or designing thoughtful solutions in my professional work, I approach everything with intention and an eye for harmony. I love blending form and function, finding beauty in simplicity, and telling stories—whether it's through a photograph, a dish, or a design. For me, creativity isn't just a job or a hobby; it's how I see the world and how I connect with others. It's about creating experiences that feel as meaningful as they look.</p>

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
            <p>I'm a designer and creative leader who specializes in guiding thoughtful, strategy-driven design processes that deliver meaningful results. My work focuses on creating user-centered solutions that blend aesthetic simplicity with functional purpose, always with an eye toward the bigger picture. I believe in leading with a clear vision, balancing creativity with strategy to ensure that every project achieves its goals while maintaining a strong visual identity. Collaboration and accessibility are central to my approach, as I work to align diverse perspectives and ensure that the end result resonates with its audience. For me, design is about shaping impactful experiences and empowering teams and clients to bring their ideas to life with purpose and clarity.</p>

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
        <img src={knakWires} alt="Knak app on a laptop"/>
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
