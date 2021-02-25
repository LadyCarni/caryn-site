import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Projects from 'components/projects';

class Portfolio extends Component {
  render() {
    return (
      <div className="light feature feature-width full-height">
        <h1>Welcome to the greatest portfolio on this website</h1>
        <Projects />
        <span className="gotcha">* To protect the privacy of the client, this project's identity has been hidden</span>
      </div>
    )
  }
}

export default Portfolio;
