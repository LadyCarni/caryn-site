import React from "react";
import PortfolioHeader from "../../components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import usePrism from "hooks/usePrism";
import knakApp from "assets/portfolio/knak-app.jpg";
import knakLayout from "assets/portfolio/knak-layout.png";
import knakWires1 from "assets/portfolio/knak-wires1.jpg";
import knakWires2 from "assets/portfolio/knak-wires2.jpg";
import knakWires3 from "assets/portfolio/knak-wires3.jpg";

function KnakCaseStudy() {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage={knakApp}
        routes={PortfolioRoutes}
        imageAlt="Knak user interface"
        headerTitle="Knak UX Case Study"
        headerSubtitle="A UX evaluation, interface redesign, and front-end refactor"
        headerDescription="Knak is an enterprise email creation platform built to help large teams build on-brand emails faster and more efficiently than ever before."
        headerDisciplines={["UX research", "Front-end Development (Vue)", "Web Design"]}
      />
      <div className="feature feature-width">
        <div className="project-content flex column">
          <div className="article">
            <h3>The Challenge</h3>
            <p><a href="https://knak.io/" target="_blank" rel="noreferrer">Knak</a> grew and developed their platform in a rapid fashion common with successful software companies. As a result of their rapid growth, and by prioritizing customer needs, various areas of their platform were beginning to experience divergent designs among some areas of the app. In addition, they began to accumulate technical debt in their front-end code.</p>
            <h4>Areas of Concern</h4>
            <ul>
              <li>Inconsistent interfaces</li>
              <li>Front-end technical debt</li>
              <li>Lack of design patterns</li>
            </ul>
            <h4>Primary Goals</h4>
            <ul>
              <li>Create a consistent interface for all areas of the app</li>
              <li>Update and streamline the front-end code to pay technical debt</li>
              <li>Create a set of design patterns for consistent branding</li>
            </ul>

            <h3>Usability</h3>
            <p>As an ongoing part of the interface updates for Knak’s platform, I tested each new feature against a set of <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" rel="noreferrer">usability heuristics</a> as defined by Neilson Norman Group*. To assist with this work, I used the browser extension <a href="http://www.uxcheck.co/" target="_blank" rel="noreferrer">UX Check</a> to evaluate each area as well as the <a href="https://www.deque.com/axe/" target="_blank" rel="noreferrer">aXe browser extension</a> to test against <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noreferrer">WCAG</a> usability compliance requirements.</p>

            <h3>Code Quality</h3>
            <p>Writing good code helps ensure maintainability as well as scalability for the future. As a part of the refactoring work I did, I chose to apply a strict CSS Linter through <a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint.io</a>, using a <a href="https://gist.github.com/LadyCarni/0eee4b69f54c615d70597d54c075830a" target="_blank" rel="noreferrer">custom configuration</a> designed for readability, consistency, and rapid writing of styles (example shown below).</p>

            <pre className="language-json"><code>
            {`
              {
                "rules": {
                  "at-rule-empty-line-before": "always",
                  "at-rule-name-case": [
                    "lower",
                    {
                      "message": "Lowercase letters are easier to distinguish from numbers"
                    }
                  ],
                  "at-rule-name-space-after": "always",
                  "at-rule-no-unknown": true,
                  "at-rule-no-vendor-prefix": [
                    true,
                    {
                      "message": "Looks like you are trying to prefix. Consider an auto prefixer.",
                      "severity": "warning"
                    }
                  ]
                }
              }
            `}
            </code></pre>

            <h3>User Research</h3>
            <p>Working closely with the Knak team throughout this project helped give insight into the customers and their perspectives while using the product. The research I gathered provided knowledge that drove the interface updates, enabled me to consider their context while building interactions, and highlighted the problems they had that the product was designed to solve.</p>
            <p>What I learned about the users:</p>
            <p className="ah-ha">Some features were only available to a limited set of customers. This meant I would need to <i>design an experience that would work with or without some features</i> appearing.</p>
            <p className="ah-ha">Most users were moderately technically savvy with marketing apps. Keeping this in mind, I would need to design <i>interactions for power users</i>, while enabling a <i>usable experience for less savvy users</i>.</p>
            <p className="ah-ha">Users spanned a wide breadth of business requirements. With so many feature needs, I would be required to offer <i>flexibility alongside stability and consistency</i> while considering each feature throughout the platform.</p>

            <h3>Layout Redesign</h3>
            <h4>Goals: Familiar, navigable, discoverable</h4>
            <p>The first high-level issue I noted was an inconsistent layout for different parts of the app. As you can see in the simplified breakdown below, the experience for Customers (layout A) was inconsistent from Admins (layout B). This was identified as a maintainability issue that was a known area of technical debt for Knak’s tech team.</p>
            <img src={knakLayout} alt="Knak app layout before and after"/>
            <p>Having one layout with consistent patterns and identifiable architectural areas would give all users a consistent experience as well as enable Knak’s team to continue to create new, stable features for their customers.</p>
            <p>The redesign began with quick, simple wireframes (shown below). This pen-on-paper format allowed me to generate multiple ideas and communicate their intent with Knak’s team without investing too much time or energy into options.</p>

            <div className="image-collection">
              <div className="item item-tall">
                <img src={knakWires1} alt="Knak layout wireframe"/>
                <span className="caption">List view wireframe concept</span>
              </div>
              <div className="item item-tall2">
                <div className="stacked">
                  <img src={knakWires2} alt="Knak sticky nav wireframe"/>
                  <span className="caption">Sticky side nav wireframe</span>
                </div>
                <div className="stacked">
                  <img src={knakWires3} alt="Knak slide behavior wireframe"/>
                  <span className="caption">Behavior concept wireframe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnakCaseStudy
