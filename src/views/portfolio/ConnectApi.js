import React from "react";
// import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";
import usePrism from "hooks/usePrism";
import { Helmet } from "react-helmet";

import connectFeature from "assets/portfolio/connect-cover2.jpg";
import connectWireGuides from "assets/portfolio/connect-wires2.png";
import connectWireDocs from "assets/portfolio/connect-wires1.png";
import connectCover from "assets/portfolio/connect-cover.jpg";
import connectMenu from "assets/portfolio/connect-menu.png";
import connectOrder from "assets/portfolio/connect-order.png";
import connectSticky from "assets/portfolio/connect-sticky.gif";
import connectClipboard from "assets/portfolio/connect-clipboard.gif";

const ConnectApi = () => {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage={connectFeature}
        // routes={PortfolioRoutes}
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
      <Helmet>
        <title>Portfolio | Caryn Farvour</title>
        <meta property="og:title" content="Portfolio | Caryn Farvour" />
        <meta property="og:description" content="A professional UX portfolio." />
        <meta property="og:image" content={connectFeature} />
        <meta property="og:url" content="https://carynfarvour.design/portfolio/connect-api" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="feature feature-width">
        <div className="content flex column">
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
            <p>Using <a href="https://miro.com/" target="_blank" rel="noreferrer">Miro</a> (with an iPad Pro and Apple Pencil) as a virtual whiteboard, I was able to work live with my remote team while planning this project. I designed a series of wireframes and user flows to rapidly iterate over potential layouts and interaction concepts.</p>

            <h3>Guides</h3>
            <p>To alleviate the complexity of the integration concept, I designed a section of the docs dedicated to step-by-step walkthroughs of how the user would write their own integration.</p>

            <div className="flex columns">
              <div className="fit">
                <p>Features of the guides would include:</p>
                <ul>
                  <li>Prerequesite reminders</li>
                  <li>Helpful illustrations of the concepts</li>
                  <li>Readable, simple steps to follow</li>
                  <li>Examples of what to expect</li>
                </ul>
              </div>
              <div className="fill">
                <img src={connectWireGuides} alt="Connect API wireframe guides"/>
              </div>
            </div>

            <h3>Docs</h3>
            <p>To aim toward the ultimate goal of a self-serve experience, I designed the experience of the API documentation to pro-actively answer questions before being asked; making them as simple as posible.</p>

            <div className="flex columns">
              <div className="fit">
                <p>Features of the docs would include:</p>
                <ul>
                  <li>Syntax highlighted code blocks</li>
                  <li>Sticky-scrolling payload examples</li>
                  <li>Anchors for bookmarking</li>
                </ul>
              </div>
              <div className="fill">
                <img src={connectWireDocs} alt="Connect API wireframe docs"/>
              </div>
            </div>

            <h2>Feature: Integration Diagrams</h2>
            <p>From when a menu is ready on a Point of Sale system to the point that a customer is accepting their delivered food order, there are a number of steps involved. I put together a set of simple diagrams to illustrate the steps, and how the user of the API documentation would be involved for each part of the integration.</p>
            <img src={connectMenu} alt="Illustrated diagram of menu integration" className="shadow"/>
            <img src={connectOrder} alt="Illustrated diagram of order integration" className="shadow"/>

            <h2>Feature: Sticky Payloads</h2>
            <p>In order to make the payload requirements as accessible as possible, the code blocks were contained in context with the description. Interactively, this was acentuated with a <code>position: sticky</code> effect so that the user could scroll through the document and not lose the context.</p>
            <img src={connectSticky} alt="Sticky payload interaction" className="shadow"/>

            <h2>Feature: Custom Code Blocks</h2>
            <p>The syntax of the required payloads needed to be exact, so in order to ensure full clarity of the expected code, custom code blocks with syntax highlighting were included in the final product. The custom code blocks also included color-blind accessible language-specific syntax highlighting and a copy-to-clipboard function.</p>
            <p></p>
            <img src={connectClipboard} alt="Payload interactions"/>

            <h2>The Results</h2>
            <p>After launch, the <a href="https://connect-api.flyt.io/" target="_blank" rel="noreferrer">Connect API</a> docs were given to three new clients within the first week. The average time to live went from 18 hours of support required to just under 6. Each new brand was able to launch on time, with accuracy, with minimal operational support needed.</p>
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
