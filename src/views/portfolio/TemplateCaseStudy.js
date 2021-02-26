import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class CaseStudy extends Component {
  render() {
    return (
      <div className="feature feature-width full-height flex row">
        <div className="project-content">
          <div className="project-title filter">
            <div className="image left">
              <img src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="placeholder"/>
            </div>
            <div className="title-content">
              <h1>Title</h1>
              <h2>Byline</h2>
            </div>
          </div>
          <div className="summary flex row">
            <div className="about">
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium et non tenetur illo suscipit culpa iusto fuga eum est veritatis deleniti, excepturi qui, magni ea ipsa aliquid nihil autem?</p>
            </div>
            <div className="disciplines">
              <h3>Disciplines</h3>
              <ul className="tags">
                <li>UX Design</li>
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

export default CaseStudy;