import React from "react";
import { PortfolioRoutes } from "./index";
import PortfolioHeader from "../../components/portfolioHeader";
import usePrism from "hooks/usePrism";

import connectFeature from "assets/portfolio/connect-feature.png";
import connectWireGuides from "assets/portfolio/connect-wires2.png";
import connectWireDocs from "assets/portfolio/connect-wires1.png";
import connectCover from "assets/portfolio/connect-cover.jpg";

function ConnectApi() {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage={connectFeature}
        routes={PortfolioRoutes}
        imageAlt="placeholder"
        headerTitle="Connect API"
        headerSubtitle="Restaurant delivery operations"
        headerDescription="Connect API connects Point of Sale (POS) systems with orders, menus, and stock technology through a universal API designed for Just Eat Takeaway.com group"
        headerDisciplines={[
          "Front-end Development (Vue)",
          "Web Design",
          "UX",
        ]}
      />
      <div className="feature feature-width">
        <div className="project-content flex column">
          <div className="article">
            <p className="external-link"><a href="https://connect-api.flyt.io/" target="_blank" rel="noreferrer">Connect API</a></p>
            <h2>Context</h2>
            <p>Restaurant clients or their Point of Sale (POS) providers can choose to convert and send their restaurant data through an API that utilizes a universal menu format. This enables them to self-serve launching their business with a <a href="https://www.justeattakeaway.com/" target="_blank" rel="noreferrer">Just Eat Takeaway.com</a> delivery partner (Skip the Dishes, Just Eat, etc.).</p>

            <h2>The Challenge</h2>
            <p>With a growing demand for food delivery, restaurant brands around the world needed to be able to move at their own pace to provide their customers with delivery through the top delivery providers. With this increased demand, as the integrations provider for Just Eat Takeaway.com group, the <a href="https://flyt.io/" target="_blank" rel="noreferrer">Flyt</a> team needed to be able to provide a more self-serve experience for restaurant brands who were interested in bringing brands online with food delivery.</p>

            <h3>User Research</h3>
            <p>After conducting research on the existing POS integration experience, I also gathered user feedback both from our internal technical operations team members and the external clients who we supported while they used our existing API docs. The result of the research indicated the following key pain areas:</p>
            <p className="ah-ha">Unclear, vague, or <i>outdated API docs</i></p>
            <p className="ah-ha">Too much time to get a new integration live; taking an average of <i>6 weeks</i> and <i>18 hours of support</i></p>

            <h3>Primary Goals</h3>
            <p>It was identified that the primary goal would be to provide a better self-serve experience for the integration process. To achieve this, we would need to provide:</p>
            <ul>
              <li>Clear definitions of the requirements for an integration</li>
              <li>Step-by-step instructions for completing an integration</li>
              <li>Answers to common questions and caveats</li>
            </ul>

            <h2>The Plan</h2>
            <p>Using Miro (with an iPad Pro and Apple Pencil) as a virtual whiteboard, I was able to work live with my remote team while planning this project. I designed a series of wireframes and user flows to rapidly iterate over potential layouts and interaction concepts.</p>

            <div className="flex columns">
              <div className="fit">things</div>
              <div className="fill">
                <img src={connectWireGuides} alt="Connect API wireframe guides"/>
              </div>
            </div>

            <div className="flex columns">
              <div className="fit">wires description</div>
              <div className="fill">
                <img src={connectWireDocs} alt="Connect API wireframe docs"/>
              </div>
            </div>

            <h2>Feature: Integration Diagrams</h2>
            <p>Explain the complexity of what integration is and where these docs come into play</p>
            <p>Integration illustrations explaining the flow</p>

            <h2>Feature: Sticky Payloads</h2>
            <p>Talk about lessons with stickiness; how to start it, stop it, how to interact with the relevant content</p>
            <p>Show code block of how it was fixed?</p>
            <p>Gif before?</p>
            <p>Gif after?</p>

            <h2>Feature: Custom Code Blocks</h2>
            <p>color blind accessible syntax highlighting theme, copy to clipboard functionality</p>
            <p>Gif</p>

            <h2>The Results</h2>
            <p>Summary of results</p>
            <h3>Guides</h3>
            <div className="flex columns">
              <div className="fit">guides results</div>
              <div className="fill">image</div>
            </div>

            <h3>Docs</h3>
            <div className="flex columns">
              <div className="fit">docs results</div>
              <div className="fill">image</div>
            </div>
          </div>


          <div className="full-width">
            <img src={connectCover} alt="Connect API docs"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectApi;
