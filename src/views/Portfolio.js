import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="light feature feature-width feature-height">
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
      </>
    )
  }
}

export default Portfolio;
