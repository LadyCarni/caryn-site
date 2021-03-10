import React from "react";
import { PortfolioRoutes } from "./index";
import PortfolioHeader from "../../components/portfolioHeader";
import usePrism from "hooks/usePrism";

import connectFeature from "assets/portfolio/connect-feature.png";
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
            <p>Restaurant clients or their Point of Sale (POS) providers can choose to convert and send their restaurant data through an API that utilizes a universal menu format. This enables them to self-serve launching their business with a Just Eat Takeaway.com delivery partner (Skip the Dishes, Just Eat, etc.).</p>
            <h2>The Goal</h2>
            <p>The technical documents needed to include:</p>
            <ul>
              <li>Clear definitions of integration requirements</li>
              <li>Step-by-step instructions for sending data</li>
              <li>Answers to common questions and caveats</li>
            </ul>
            <h2>The Plan</h2>
            <p>guide wires description</p>

            <div className="flex columns">
              <div className="fit">wires description</div>
              <div className="fill">image</div>
            </div>

            <div className="flex columns">
              <div className="fit">wires description</div>
              <div className="fill">image</div>
            </div>

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
