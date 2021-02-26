import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import devLondon from 'assets/portfolio/dev-london.jpg';

class DevLondon extends Component {
  render() {
    return (
      <div className="feature feature-width">
        <div className="project-content flex column">
          <div className="project-title filter">
            <div className="image left">
              <img src={devLondon} alt="Dev London event"/>
            </div>
            <div className="title-content">
              <h1>Dev London</h1>
              <h2>A software community group</h2>
            </div>
          </div>
          <div className="summary flex row">
            <div className="section">
              <h3>About</h3>
              <p>Dev London is a peer-to-peer group I run and operate in London, Ontario. It is designed to provide insights and inspire through leadership and networking with the local tech community.</p>
            </div>
            <div className="section">
              <h3>Disciplines</h3>
              <ul className="tags">
                <li>Front-end Development</li>
                <li>Web Design</li>
              </ul>
            </div>
          </div>
          <div className="article">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi eaque at corrupti. Debitis reprehenderit similique officia neque hic odio, corrupti animi rerum minima, ex provident. Aut iste porro magni.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DevLondon;
