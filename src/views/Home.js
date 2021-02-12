import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowDown, faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import triangles from '../assets/tri-large.svg'; 

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
      <div className="about feature feature-width feature-height">
        <div className="feature-content">
          <div className="title">
            <h2 className="headline">Who I am</h2>
          </div>
          <div className="description">
            <h3>I <span className="pop">design</span> experiences</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cupiditate corporis sed ea, nobis fugiat facere maiores praesentium perspiciatis tempora id aut culpa obcaecati saepe ipsam voluptatem repudiandae tenetur accusamus!</p>
            <p>
              <Link to="/about" className="arrow-link">More about Caryn <FontAwesomeIcon icon={faLongArrowRight} /></Link>
            </p>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Home;
