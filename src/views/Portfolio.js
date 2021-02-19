import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Projects from '../components/portfolioGallery';

class Portfolio extends Component {
  render() {
    return (
      <div className="light feature top feature-width full-height">
        <Projects />
      </div>
    )
  }
}

export default Portfolio;
