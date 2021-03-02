import React, { Component } from 'react';
import devLondon from 'assets/portfolio/dev-london.jpg';
import devLondonSlack from 'assets/portfolio/dev-london-slack.gif';


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
                <li>Front-end Development (React)</li>
                <li>Web Design</li>
              </ul>
            </div>
          </div>
          <div className="article">
            <p className="external-link"><a href="https://devldn.ca/" target="_blank" rel="noreferrer">Dev London website</a></p>
            <p className="external-link"><a href="https://github.com/DevLdn/devldn-website" target="_blank" rel="noreferrer">Dev London repo</a></p>
            <p>Built with React, I designed and built a clean, simple site where we could highlight sponsors, cross-promote other peer groups, allow community members to submit ideas for talks, volunteer for events, and join the official Meetup page.</p>
            <h3>Self-sufficient Slack</h3>
            <p>To encourage the growth of the Dev London group, the site takes advantage of Slack's API to enable new members to join the Slack community without requiring a personal invite.</p>
            <img src={devLondonSlack} alt="Dev London slack form"/>
            <h3>Code cleanliness</h3>
            <p>To maintain properly linted files automatically, the repo is equipped with a <a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">Husky</a> pre-commit git hook for running the <a href="https://github.com/prettier/prettier" target="_blank" rel="noreferrer">Prettier</a> SCSS and Javascript linters.</p>
            
          </div>
        </div>
      </div>
    )
  }
}

export default DevLondon;
