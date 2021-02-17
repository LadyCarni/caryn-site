import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowDown, faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import triangles from '../assets/tri-large.svg'; 
import trismall from '../assets/tri-vert1.svg';
import trismall2 from '../assets/tri-hor1.svg';

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
      <div className="light feature feature-width feature-height">
        <div className="feature-content center">
          <div className="title">
            <img src={trismall} alt="" className="tri-small" />
            <h2>Who I am</h2>
          </div>
          <div className="description">
            <h3>I <span className="pop">design</span> experiences</h3>
            <p>Whether it's on a keyboard, at the easle, in the garden, or with a power tool in hand: I live to create. The hobbies and skills I've accumulated all share features of engagement, imagination, and a little whimsy.</p>
            <p>Professionally, I thrive on cross-functional teams, working directly with users to build elegant products that solve real problems.</p>
            <p>
              <Link to="/about" className="arrow-link block">More about Caryn <FontAwesomeIcon icon={faLongArrowRight} /></Link>
            </p>
          </div>
        </div>
        <div className="section-divider"></div>
      </div>
      <div className="light feature feature-width feature-height">
        <div className="feature-content top">
          <div className="title">
            <h2>What I do</h2>
            <img src={trismall2} alt="" className="tri-small" />
          </div>
          <div className="description">
            <p>I am a UX strategist, a UI designer, and a front-end developer. I write about practical UX, design, and product management skills. I coach teams and speak publicly about product strategy.</p>
            <p>
              <Link to="/portfolio" className="arrow-link block">View all work <FontAwesomeIcon icon={faLongArrowRight} /></Link>
            </p>
          </div>
        </div>
        <div className="feature-content bottom columns portfolio">
          <div className="column">
            <Link to="#" >
              <div className="image filter bottom">
                <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="placeholder"/>
              </div>
              <div className="caption overlay">
                <h3>Title</h3>
                <span>Research & Strategy</span>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="#" >
              <div className="image filter bottom">
                <img src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="placeholder"/>
              </div>
              <div className="caption overlay">
                <h3>Title</h3>
                <span>UX Design</span>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="#" >
              <div className="image filter bottom">
                <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="placeholder"/>
              </div>
              <div className="caption overlay">
                <h3>Title</h3>
                <span>Website</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="dark feature feature-width feature-height headline">
        <div className="headline-image filter middle">
          <img src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="placeholder"/>
        </div>
        <div className="headline overlay">
          <h3>Knak: A Case Study</h3>
          <h2>Architecting User Experience</h2>
          <Link to="/portfolio" className="arrow-link block">View case study <FontAwesomeIcon icon={faLongArrowRight} /></Link>
        </div>
      </div>
      </>
    )
  }
}

export default Home;
