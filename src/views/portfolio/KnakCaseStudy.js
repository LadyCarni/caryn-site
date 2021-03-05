import React from "react";
import PortfolioHeader from "../../components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import usePrism from "hooks/usePrism";
import knakApp from "assets/portfolio/knak-app.jpg";
import knakLayout from "assets/portfolio/knak-layout.png";
import knakWires1 from "assets/portfolio/knak-wires1.jpg";
import knakWires2 from "assets/portfolio/knak-wires2.jpg";
import knakWires3 from "assets/portfolio/knak-wires3.jpg";
import knakLayoutAfter from "assets/portfolio/knak-layout-proposal.png";
import knakColors from "assets/portfolio/knak-colors.png";
import knakColorsUi from "assets/portfolio/knak-colors-ui.png";
import knakTypography from "assets/portfolio/knak-type.png";
import knakPattern1 from "assets/portfolio/knak-pattern1.png";
import knakPattern2 from "assets/portfolio/knak-pattern2.png";
import knakTax from "assets/portfolio/knak-tax.png";
import knakNav from "assets/portfolio/knak-nav.gif";
import knakForms from "assets/portfolio/knak-forms.png";

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
            <h2>The Challenge</h2>
            <p><a href="https://knak.io/" target="_blank" rel="noreferrer">Knak</a> grew and developed their platform in a rapid fashion common with successful software companies. As a result of their rapid growth, and by prioritizing customer needs, various areas of their platform were beginning to experience divergent designs among some areas of the app. In addition, they began to accumulate technical debt in their front-end code.</p>
            <h3>Areas of Concern</h3>
            <ul>
              <li>Inconsistent interfaces</li>
              <li>Front-end technical debt</li>
              <li>Lack of design patterns</li>
            </ul>
            <h3>Primary Goals</h3>
            <ul>
              <li>Create a consistent interface for all areas of the app</li>
              <li>Update and streamline the front-end code to pay technical debt</li>
              <li>Create a set of design patterns for consistent branding</li>
            </ul>

            <h2>Usability</h2>
            <p>As an ongoing part of the interface updates for Knak’s platform, I tested each new feature against a set of <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank" rel="noreferrer">usability heuristics</a> as defined by Neilson Norman Group*. To assist with this work, I used the browser extension <a href="http://www.uxcheck.co/" target="_blank" rel="noreferrer">UX Check</a> to evaluate each area as well as the <a href="https://www.deque.com/axe/" target="_blank" rel="noreferrer">aXe browser extension</a> to test against <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noreferrer">WCAG</a> usability compliance requirements.</p>

            <h2>Code Quality</h2>
            <p>Writing good code helps ensure maintainability as well as scalability for the future. As a part of the refactoring work I did, I chose to apply a strict CSS Linter through <a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint.io</a>, using a <a href="https://gist.github.com/LadyCarni/0eee4b69f54c615d70597d54c075830a" target="_blank" rel="noreferrer">custom configuration</a> designed for readability, consistency, and rapid writing of styles (example shown below).</p>

            <pre className="language-json"><code>
            {`
              .stylelintrc

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

            <h2>User Research</h2>
            <p>Working closely with the Knak team throughout this project helped give insight into the customers and their perspectives while using the product. The research I gathered provided knowledge that drove the interface updates, enabled me to consider their context while building interactions, and highlighted the problems they had that the product was designed to solve.</p>
            <p>What I learned about the users:</p>
            <p className="ah-ha">Some features were only available to a limited set of customers. This meant I would need to <i>design an experience that would work with or without some features</i> appearing.</p>
            <p className="ah-ha">Most users were moderately technically savvy with marketing apps. Keeping this in mind, I would need to design <i>interactions for power users</i>, while enabling a <i>usable experience for less savvy users</i>.</p>
            <p className="ah-ha">Users spanned a wide breadth of business requirements. With so many feature needs, I would be required to offer <i>flexibility alongside stability and consistency</i> while considering each feature throughout the platform.</p>

            <h2>Layout Redesign</h2>
            <h3>Goals: Familiar, navigable, discoverable</h3>
            <p>The first high-level issue I noted was an inconsistent layout for different parts of the app. As you can see in the simplified breakdown below, the experience for Customers (layout A) was inconsistent from Admins (layout B). This was identified as a maintainability issue that was a known area of technical debt for Knak’s tech team.</p>
          </div>

          <div className="full-width">
            <img src={knakLayout} alt="Knak app layout before the redesign"/>
          </div>

          <div className="article">
            <p>Having one layout with consistent patterns and identifiable architectural areas would give all users a consistent experience as well as enable Knak’s team to continue to create new, stable features for their customers.</p>
            <p>The redesign began with quick, simple wireframes (shown below). This pen-on-paper format allowed me to generate multiple ideas and communicate their intent with Knak’s team without investing too much time or energy into options.</p>

            <div className="image-collection">
              <div className="item col1">
                <img src={knakWires1} alt="Knak layout wireframe"/>
                <span className="caption">List view wireframe concept</span>
              </div>
              <div className="item col2">
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

            <p>In order to create a familiar layout, I aligned both areas of the divergent design into one traditional, dashboard-style layout. This included a sticky sidebar and a scrollable content area (see below).</p>

          </div>

          <div className="full-width">
            <img src={knakLayoutAfter} alt="new Knak app layout proposal"/>
          </div>

          <div className="article">
            <h2>Color palette consistency</h2>
            <h3>Goals: recognizable, intentional</h3>
            <p>Identifying the key brand colors and the theme for the application enabled the creation of a palette of accessibility-tested and reusable colors. These identifiers in the SCSS allowed me to organize styles based on state, response, and behavior.</p>
            <img src={knakColors} alt="Knak color palette"/>
            <p>Colors derived from the brand were selectively used for focused call-to-action behaviors and interactive states. While the palette of colors chosen purely for the app elements reflected a sense of consistency and predictability based on the hierarchy of the element in the interface.</p>

            <div className="flex columns">
              <div className="fill">
                <pre className="language-css"><code>
                  {`
                    variables.scss

                    /* Main brand color */
                    $brand-color: #219DFA;
                    $brand-color2: #9ec905;

                    /* Copy text color */
                    $text-color: #59636a;

                    /* Greys */
                    $background-grey: #f2f6fa;
                    $mid-dark-grey: #6e6e6e;
                    $dark-grey: #444;
                  `}
                </code></pre>
              </div>
              <div className="fill">
                <img src={knakColorsUi} alt="Knak color in the UI" className="shadow"/>
                <span className="caption">The new colors in action</span>
              </div>
            </div>

            <h2>Typography</h2>
            <h3>Goals: readable, usable</h3>
            <p>The primary goal of font family choices is readability across all expected screen sizes. The naming convention chosen would match architectural choices. This meant choosing class names based on what the element is versus what it looks like. This standard of naming helps with discoverability for designers and developers to easily maintain and create styles.</p>
            <p>Once the standards were identified for typography, each repeated interface section with prominent text (such as the title area for each content view) were evaluated, refactored into components and redesigned for reusability and consistency. This redesign occurred alongside the stylesheet refactor that happened behind-the-scenes.</p>
            <p>Standardizing the typographic styles helped during the cleanup of the stylesheets as a means of identifying unused classes, inconsistencies for similar elements, and unnecessary specificity for non-unique text. Cleaning up the SCSS files included combining duplicate styles, removing unused classes, and simplifying unneeded complex styles.</p>

            <div className="flex columns">
              <div className="fill">
                <pre className="language-css"><code>
                  {`
                    global.scss

                    .title {
                      font-size: 2.5em;
                      font-weight: 200;
                      color: $brand-color;
                    }

                    .breadcrumbs {
                      list-style-type: none;

                      li {
                        display: inline-block;

                        a {
                          text-decoration: none;
                        }
                      }
                    }
                  `}
                </code></pre>
              </div>
              <div className="fill">
                <img src={knakTypography} alt="Knak typography example" className="shadow"/>
                <span className="caption">Updated typography</span>
              </div>
            </div>

            <h2>Design Patterns</h2>
            <h3>Goals: consistency, maintainability, scalability</h3>
            <p>A strategy for ensuring consistency is creating a style guide. Without adding overhead to an already busy project, using a SCSS variables file can achieve the same purpose.</p>
            <p>To ensure patterns were easy to find and to encourage their use, naming conventions were chosen in plain language with full words (no acronyms or shortened names).</p>

            <div className="flex columns">
              <div className="fill">
                <pre className="language-css"><code>
                  {`
                    layout.scss

                    .material-card {
                      background: $white;
                      border-radius: $radius;
                      border: 1px solid $grey;
                      box-shadow: $shadow;
                      padding: $standard-space;

                      .card-title {
                        align-items: flex-start;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                      }

                      .card-row {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                      }
                    }
                  `}
                </code></pre>
              </div>
              <div className="fill">
                <pre className="language-css"><code>
                  {`
                    layout.scss

                    .detailed-card {
                      .detailed-header {
                        align-items: center;
                        background: $grey;
                        border: 1px solid $mid-grey;
                        border-top-left-radius: $radius;
                        border-top-right-radius: $radius;
                        display: flex;
                        justify-content: space-between;
                      }

                      .detailed-body {
                        border-bottom-left-radius: $radius;
                        border-bottom-right-radius: $radius;
                      }
                    }
                  `}
                </code></pre>
              </div>
            </div>

            <p>The inspiration for the design patterns chosen for Knak were drawn from Material Design. The components for the app and their associated styles were derived from Material Design’s standards for consistent, clean, and intuitive interface elements.</p>

          </div>

          <div className="full-width">
            <div className="flex columns">
              <div className="fill">
                <img src={knakPattern1} alt="Knak card pattern" className="shadow"/>
                <span className="caption">Material Card</span>
              </div>
              <div className="fill">
                <img src={knakPattern2} alt="Knak detailed card pattern" className="shadow"/>
                <span className="caption">Detailed Card</span>
              </div>
            </div>
          </div>

          <div className="article">
            <h2>Design Highlight: Navigation</h2>
            <p>The navigation in this application was originally grouped by user type (Customer and Admin). Once the layout had been consolidated into one experience, the navigation was similarly aligned.</p>
            <p>Three areas of the navigation that needed attention:</p>
            <ul>
              <li>Taxonomy</li>
              <li>Interaction Design</li>
              <li>Usability Testing</li>
            </ul>

            <h3>Taxonomy</h3>

            <div className="flex columns">
              <div className="fit">
                <img src={knakTax} alt="Knak menu organization" className="shadow"/>
                <span className="caption">Knak's updated menu</span>
              </div>
              <div className="fill">
                <p>Taxonomies are systems used to classify and organize things. A taxonomy for web apps classifies items and features based on similarities and differences in the concepts within those features. Information is organized based on how users interpret and search for content.</p>
                <p>Iconography was evaluated based on patterns widely understood in modern applications. Recall and recognition were both concerns while choosing to upgrade the icons to Font Awesome’s Pro icon library.</p>
              </div>
            </div>

            <h3>Interaction Design</h3>
            <div className="flex columns">
              <div className="fit">
                <img src={knakNav} alt="Knak menu interactions" className="shadow"/>
                <span className="caption">Knak's menu interactions</span>
              </div>
              <div className="fill">
                <p>Knak’s users would be welcomed to the redesigned application with little to no tours, introductions, or hand-holding. As such, the navigation in particular needed to be predictable and easy to understand.</p>
                <p>All active, passive, and interactive states were designed to follow conventional patterns of recognition for all user types. Transitions and animations were designed to be subtle, without interfering with the user's task.</p>
              </div>
            </div>

            <h2>Design Highlight: Forms</h2>
            <p>Forms are one area of an application that can be easy to overlook during an evaluation of the efficacy of the interface. In Knak’s case, the forms suffered the common pitfall of disorganization.</p>
            <p>This lack of an organized layout resulted in the following areas of concern:</p>
            <ul>
              <li>Poor visibility with information grouping</li>
              <li>Visually distracting</li>
            </ul>
            <p>Once the redesigned content area was finished, the final step for a polished title area was to update sub-page titles to display where in the app the user would be while viewing the form. This included state-related titles (for example, the Edit Customer sub-page, seen below), as well as clear, concise breadcrumb navigation to allow the user to return to previous views.</p>
          </div>

          <div className="full-width">
            <img src={knakForms} alt="Knak forms redesign"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnakCaseStudy
