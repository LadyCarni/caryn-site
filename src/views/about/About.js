import React from 'react';
import caryn1 from 'assets/caryn1.jpg';

const About = () => {
  return (
    <div className="feature feature-width">
      <div className="bio">
        <div className="flex columns">
          <div className="fit">
            <img src={caryn1} alt="Caryn Farvour portrait"/>
          </div>
          <div className="fill">
            <h1>Hi, I'm Caryn</h1>
            <p className="help">(pronounced kuh-<i>RIN</i>; like Corinne)</p>
            <h2 className="title">I <span className="pop">design</span> experiences</h2>
            <p>Whether it's on a keyboard, at the easel, in the garden, or with a power tool in hand: I live to create. The hobbies and skills I've accumulated all share features of engagement, imagination, and a little whimsy.</p>
            <p>Professionally, I thrive on cross-functional teams, working directly with users to build elegant products that solve real problems.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
