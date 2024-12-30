import React from "react";
import PortfolioHeader from "components/portfolioHeader";
// import { PortfolioRoutes } from "./index";
import devLondon from "assets/portfolio/dev-london.jpg";
import devLondonSlack from "assets/portfolio/dev-london-slack.gif";
import devLondonPlans from "assets/portfolio/dev-london-plans.jpg";
import devLondonSite from "assets/portfolio/dev-london-site.png";
import usePrism from "hooks/usePrism";

const DevLondon = () => {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage={devLondon}
        // routes={PortfolioRoutes}
        imageAlt="a scene of a live Dev London event"
        headerTitle="Dev London"
        headerSubtitle="A software community group"
        headerDescription="Dev London is a peer-to-peer group I run and operate in London, Ontario. It is designed to provide insights and inspire through leadership and networking with the local tech community."
        headerDisciplines={["Front-end Development (React)", "Web Design"]}
      />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="article">
            <p className="external-link"><a href="https://github.com/DevLdn/devldn-website" target="_blank" rel="noreferrer">Dev London repo</a></p>
            <h2>Context</h2>
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
            <h2>Feature: Self-serve Slack</h2>
            <p>To encourage the growth of the Dev London group, the site takes advantage of Slack's API to enable new members to join the Slack community without requiring a personal invite.</p>
            <img src={devLondonSlack} alt="Dev London slack form"/>
            <h2>Feature: Code cleanliness</h2>
            <p>To maintain linting automatically while working on the site, the repo is equipped with a small <a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">Husky</a> pre-commit git hook for running the <a href="https://github.com/prettier/prettier" target="_blank" rel="noreferrer">Prettier</a> SCSS and Javascript linters before new code is pushed up.</p>

            <pre className="language-json"><code>
            {`
              {
                "husky": {
                  "hooks": {
                    "pre-commit": "lint-staged"
                  }
                },
                "lint-staged": {
                  "src/**/*.{js,jsx,json}": [
                    "prettier --single-quote --write",
                    "git add"
                  ],
                  "*.js": "eslint",
                  "*.scss": "stylelint"
                }
              }
            `}
            </code></pre>

            <p>To ensure stable and consistent styling, the site also uses a <a href="https://gist.github.com/LadyCarni/0eee4b69f54c615d70597d54c075830a" target="_blank" rel="noreferrer">practical SCSS lint config</a> I have curated and maintained over the years, paired with <a href="https://github.com/stylelint/stylelint" target="_blank" rel="noreferrer">Stylelint</a>.</p>
            <h2>The results</h2>
            <p>In collaboration with the local economic development group (<a href="https://www.ledc.com/" target="_blank" rel="noreferrer">LEDC</a>), the Universities, heavy involvement on <a href="https://twitter.com/dev_ldn" target="_blank" rel="noreferrer">social media</a>, and engagement at networking events, the website saw significant traffic throughout 2018 and continued steadily through 2019 and into 2020. The slack community grew to over 800 members, and monthly events averaged 50 attendees. The community has since expanded into Discord, and remains active today.</p>
            <img src={devLondonSite} alt="Dev London website" className="shadow"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevLondon;
