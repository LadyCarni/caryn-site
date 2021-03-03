import React, { Component } from 'react';
import devLondon from 'assets/portfolio/dev-london.jpg';
import devLondonSlack from 'assets/portfolio/dev-london-slack.gif';
import devLondonPlans from 'assets/portfolio/dev-london-plans.jpg';
import devLondonSite from 'assets/portfolio/dev-london-site.png';


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
            <h3>Context</h3>
            <p>In September of 2018, I volunteered to take over the events of a local community group that had become quiet and relatively inactive in London, Ontario. With the branding of the Slack community I was already an active member in, I decided to create a fresh face for the group with a new website and a new voice.</p>
            <img src={devLondonPlans} alt="Dev London site planning"/>
            <p>The site needed to include:</p>
            <ul>
              <li>Local company highlights as sponsors for our monthly events</li>
              <li>A place to cross-promote other peer groups</li>
              <li>An ability to allow community members to submit ideas for talks and to volunteer for events</li>
              <li>A place to join the official Meetup page and RSVP to upcoming events</li>
            </ul>
            <p>Built with React, I designed and created a clean, simple site where new and existing members of the community would be able to learn about and get involved in Dev London.</p>
            <h3>Feature: Self-serve Slack</h3>
            <p>To encourage the growth of the Dev London group, the site takes advantage of Slack's API to enable new members to join the Slack community without requiring a personal invite.</p>
            <img src={devLondonSlack} alt="Dev London slack form"/>
            <h3>Feature: Code cleanliness</h3>
            <p>To maintain linting automatically while working on the site, the repo is equipped with a <a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">Husky</a> pre-commit git hook for running the <a href="https://github.com/prettier/prettier" target="_blank" rel="noreferrer">Prettier</a> SCSS and Javascript linters.</p>
            <pre>
              <code>
                {`
                  something
                `}
              </code>
            </pre>
            <p>To ensure stable and consistent styling, the site also uses a <a href="https://gist.github.com/LadyCarni/0eee4b69f54c615d70597d54c075830a" target="_blank" rel="noreferrer">practical SCSS lint config</a> I have curated and maintained over the years, paired with <a href="https://github.com/stylelint/stylelint" target="_blank" rel="noreferrer">Stylelint</a>.</p>
            <h3>The results</h3>
            <p>In collaboration with the local economic development group (<a href="https://www.ledc.com/" target="_blank" rel="noreferrer">LEDC</a>), the Universities, heavy involvement on <a href="https://twitter.com/dev_ldn" target="_blank" rel="noreferrer">social media</a>, and engagement at networking events, the website saw significant traffic throughout 2018 and continued steadily through 2019 and into 2020. The slack community grew to over 800 members, and monthly events averaged 50 attendees. The community has since expanded into Discord, and remains active today.</p>
            <img src={devLondonSite} alt="Dev London website" className="shadow"/>
          </div>
        </div>
      </div>
    )
  }
}

export default DevLondon;
