import React from "react";
import PortfolioHeader from "components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import wireframeHeader from "assets/caryn5.jpg";
import wireframeTools from "assets/portfolio/wireframe-tools.jpg";
import trollfood from "assets/portfolio/troll-food.png";
import roadrate from "assets/portfolio/road-rate.png";
import geriatricks from "assets/portfolio/geria-tricks.png";
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
            
            <h2>Why wireframe?</h2>
            <h3>Communication, collaboration, efficient planning</h3>
            <p>Wireframing is the part of the UX process where you begin to visualize the landscape of the interface you’ll be designing. You can quickly craft ideas and communicate them to others by sketching them out in a wireframe.</p>

            <p>Wireframing answers important questions before a design begins:</p>

            <ul>
              <li>How will the pieces of the interface be structured and work together?</li>
              <li>What content will be displayed?</li>
              <li>How will information be organized and displayed in the hierarchy?</li>
              <li>How will the functionality of the interface work?</li>
              <li>How will the user interact with the interface, and how will the interface behave and respond?</li>
            </ul>

            <h2>Getting started</h2>
            <h3>Mindset and terminology</h3>
            <p>The most popular response to the idea of wireframing is: <i>"But I can't draw!"</i> To which I always respond: <i>"You don't need to be able to draw to wireframe."</i>.</p>

            <p>To get participants comfortable with UX as a whole, I start each workshop going through some basic UX terminology and jargon UX professionals like to use. This is intended to break down some of the barriers around UX that makes it seem mysterious or out of reach.</p>

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

            <div className="flex columns">
              <div className="fill">
                <p>For each workshop, participants are provided with everything they need:</p>
                <ul>
                  <li>sticky notes</li>
                  <li>graph paper</li>
                  <li>pens</li>
                  <li>markers</li>
                </ul>
                <p>It's explained that if you use a pencil for temporary things like wireframing you’ll be tempted to erase mistakes. Using a pen forces you to get used to how disposable these are intended to be.</p>
              </div>
              <div className="fill">
                <img src={wireframeTools} alt="pen and paper" className="shadow"/>
              </div>
            </div>

            <h2>Wireframing basics</h2>
            <h3>Boxes and lines</h3>
            <p>At its core, wireframing can be done with simple boxes and lines. It's for this reason that graph paper can be such a help. Just about everything needed for wireframing can be achieved with these simple shapes.</p>

            <p>Examples</p>

            <h2>Concept set up</h2>
            <h3>Time to pick and idea and start drawing</h3>
            <p>To bring some fun to the workshop, I offer the participants three fictional app idea options to choose from. I give them some basic concepts, the media (web or mobile) that it will be designed for, and a few key requirements to get the ideas flowing.</p>

            <h3>Option 1: Troll Food</h3>
            <div className="flex columns">
              <div className="fill">
                <img src={trollfood} alt="Troll Food logo"/>
              </div>
              <div className="fit">
                <p><b>Platform:</b> web and/or mobile</p>
                <p><b>Description:</b> A random polarizing topic generator to assist in starting online debates.</p>
                <p><b>Requirements:</b></p>
                <ul>
                  <li>Pre-generates hashtags</li>
                  <li>Passive aggressive tone settings</li>
                  <li>Generates tweets</li>
                </ul>
              </div>
            </div>

            <h3>Option 2: GeriaTricks</h3>
            <div className="flex columns">
              <div className="fit">
                <img src={geriatricks} alt="GeriaTricks logo"/>
              </div>
              <div className="fill">
                <p><b>Platform:</b> mobile</p>
                <p><b>Description:</b> For people to hand off troubleshooting their parent's computer issues to an app.</p>
                <p><b>Requirements:</b></p>
                <ul>
                  <li>Common problems and solution suggestions</li>
                  <li>Remote access to restart PC</li>
                </ul>
              </div>
            </div>

            <h3>Option 3: Road Rate</h3>
            <div className="flex columns">
              <div className="fit">
                <img src={roadrate} alt="Road Rate logo"/>
              </div>
              <div className="fill">
                <p><b>Platform:</b> mobile</p>
                <p><b>Description:</b> Up-voting/Down-voting other drivers</p>
                <p><b>Requirements:</b></p>
                <ul>
                  <li>App has access to and displays closest 5 vehicles</li>
                  <li>Actions for up-vote/down-vote</li>
                  <li>Displays your driver rating</li>
                </ul>
              </div>
            </div>

            <h2>Planning the app</h2>
            <p>Once participants choose which app idea they're going to design, they're asked to follow a series of steps.</p>

            <h3>Step 1: Brainstorm</h3>
            <p>Participants are given a set amount of time to brainstorm some features of the main requirements for their app on some sticky notes.</p>

            <h3>Step 2: Prioritize features</h3>
            <p>A few minutes are spent rearranging the stickies into groups, then stacked by most valuable priority.</p>

            <h3>Step 3: Prepare the wireframes</h3>
            <p>Participants get started on their first wireframes by taking some time to sketch out the media screens (mobile, web, etc.) that will frame their design ideas.</p>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default WireframeCoaching;
