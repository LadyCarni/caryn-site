import React from "react";
import PortfolioHeader from "components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import wireframeHeader from "assets/caryn5.jpg";
import devLondonSlack from "assets/portfolio/dev-london-slack.gif";
import devLondonPlans from "assets/portfolio/dev-london-plans.jpg";
import devLondonSite from "assets/portfolio/dev-london-site.png";
import usePrism from "hooks/usePrism";

const WireframeCoaching = () => {
  usePrism();

  return (
    <>
      <PortfolioHeader
        headerImage={wireframeHeader}
        routes={PortfolioRoutes}
        imageAlt="a scene of a live Dev London event"
        headerTitle="Wireframe coaching"
        headerSubtitle="Getting just comfortable enough to throw it away!"
        headerDescription="With just a pen and paper, anybody can learn to wireframe. This simple skill will enable you to visualize a feature or interface and communicate it to others."
        headerDisciplines={["Coaching & Mentorship", "Community"]}
      />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="article">
            <p className="external-link"><a href="http://slides.com/ladycarni/how-to-wireframe" target="_blank" rel="noreferrer">Wireframe coaching deck</a></p>
            <h2>Coaching Workshops</h2>
            <p>Wireframing is one of those simple but great skills to have on any software team, regardless of role or responsibility. Over the years I've run my wireframing workshop for small teams in an intimate setting, large teams over the course of an afternoon, at Universities for students studying HCI, and at various software user groups.</p>
            
            <h2>Why does it matter?</h2>
            <p>Wireframing is the part of the UX process where you begin to visualize the landscape of the interface you’ll be designing. Being able to quickly sketch out ideas will help you come up with ideas as well as communicate those ideas more effectively to other people.</p>

            <p>Wireframing answers key questions before a design begins:</p>

            <ul>
              <li>How will the pieces of the interface be structured and work together?</li>
              <li>What content will be displayed?</li>
              <li>How will information be organized and displayed in the hierarchy?</li>
              <li>How will the functionality of the interface work?</li>
              <li>How will the user interact with the interface, and how will the interface behave and respond?</li>
            </ul>

            <h2>Getting started</h2>
            <p>The most popular response to the idea of wireframing is: <i>"But I can't draw!"</i> To which I always respond: <i>"You don't need to be able to draw to wireframe."</i>.</p>

            <p>To get participants comfortable with UX as a whole, I start each workshop going through some basic UX terminology and jargon UX professionals like to use. This is intended to break down some of the barriers around UX that makes it seem magical and out of reach.</p>

            <p><b>Wireframe:</b> A plan for how an interface is put together</p>
            <p><b>Hi-fidelity:</b> High detail, often referring to prototyping; interactive and as close to the visuals of the real app as possible</p>
            <p><b>Low-fidelity:</b> Simple detail, usually a basic sketch with implied detail</p>
            <p><b>Rapid prototyping:</b> Quick concepts created to be thrown away after testing and feedback</p>
            <p><b>Card sorting:</b> Organizing cards with bits of content on them to find potential groupings of information</p>
            <p><b>Taxonomy:</b> The system used to identify content types and relationships</p>
            <p><b>Information Architecture:</b> The organization of content in an app</p>
            <p><b>CxD:</b> Customer Experience Design; design focused on the customer experience</p>
            <p><b>IxD:</b> Interactive Experience Design; designing the way a user will interact with an interface; time, typography, visuals, animations, behaviors, etc.</p>
            <p><b>Copywriting:</b> Writing the content using intentional language, tone, and sentence structure, including <i>microcopy</i>; the wording used in buttons, labels, titles, etc.</p>

            <h2>What tools are needed?</h2>
            <p>For each workshop, I provide all the participants with everything they need: sticky notes, graph paper, pens, and markers. I explain that if you use a pencil for temporary things like wireframing you’ll be tempted to erase mistakes. Using a pen forces you to get used to how disposable these are intended to be.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WireframeCoaching;
