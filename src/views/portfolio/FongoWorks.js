import React from 'react';
import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";
import fongoCover from "assets/portfolio/fongo-cover.png";
import fongoWire1 from "assets/portfolio/fongo-wire1.jpg";
import fongoSignIn from "assets/portfolio/fongo-signin.png";
import fongoWire2 from "assets/portfolio/fongo-wire2.jpg";
import fongoQuickstart from "assets/portfolio/fongo-quickstart.png";
import fongoWire3 from "assets/portfolio/fongo-wire3.jpg";
import fongoSetup from "assets/portfolio/fongo-setup.png";
import fongoWire4 from "assets/portfolio/fongo-wire4.jpg";
import fongoMembers from "assets/portfolio/fongo-members.png";


const FongoWorks = () => {
  return (
    <>
      <PortfolioHeader
        headerImage={fongoCover}
        routes={PortfolioRoutes}
        imageAlt="Fongo Works web app"
        headerTitle="Fongo Works"
        headerSubtitle="A mobile-friendly web app"
        headerDescription="Fongo Works is a cloud-based phone system designed to replace physical phones for small teams."
        headerDisciplines={["UX Research & Design", "Front-end Development (Angular)", "Web Design"]}
      />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="article">
            <h2>The Challenge</h2>
            <p>My team at Vehikl was tasked with building a greenfield, end-to-end web app. The requirements included an accessible user experience design with front and back-end development.</p>
            <h3>Primary Goals</h3>
            <ul>
              <li>Replicating the familiarity of physical phone systems</li>
              <li>Streamlining a complex set up process</li>
              <li>Enabling new set ups in one session</li>
            </ul>
            <h2>The Results</h2>
            <p>By facilitating whiteboarding sessions with our cross-functional team, I was able to plan and design each section of the app in a series of wireframes and user flows. These collaborative sessions helped us design, build, test, and iterate in rapid succession so that the entire app end-to-end maximized the time and skills of our small team of three (2 back-end developers, and myself as a front-end developer and designer).</p>

            <h3>Splash page</h3>
            <p>This view required careful consideration as far as what the minimum necessary fields should be to encourage new users.</p>
            <div className="flex columns">
              <div className="fit">
                <p>Features:</p>
                <ul>
                  <li>Simple information architecture</li>
                  <li>Essential copy & benefits statements</li>
                  <li>Intuitive interactions</li>
                </ul>
              </div>
              <div className="fill">
                <img src={fongoWire1} alt="Fongo Works splash page wireframe"/>
              </div>
            </div>
          </div>

          <div className="full-width">
            <img src={fongoSignIn} alt="Fongo Works splash page"/>
          </div>

          <div className="article">
            <h3>Quickstart</h3>
            <p>Careful consideration of the copywriting throughout this part of the project was articulated even at the wireframe phase of the design. What the user would be setting up could quickly become an overwhelming task. Simplicity and clarity were a top priority. As we designed and developed the entire quickstart flow, we ran multiple usability tests to refine the steps, eliminate questions, and speed up the process to get the time to set up as short as possible. We were thrilled to get the time down to an average of 10 minutes even for non-technically savvy users.</p>
            <div className="flex columns">
              <div className="fit">
                <p>Features:</p>
                <ul>
                  <li>The steps to be expected</li>
                  <li>The (short!) time required</li>
                  <li>Clear data pre-requisites</li>
                </ul>
              </div>
              <div className="fill">
                <img src={fongoWire2} alt="Fongo Works quickstart intro wireframe"/>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img src={fongoQuickstart} alt="Fongo Works quickstart intro"/>
          </div>

          <div className="article">
            <h3>New Account set up</h3>
            <p>Many initial decisions are made during wireframing about structure, status, and design patterns that will be used. With this particular screen, after several iterations, the UI developed into a more comprehensive version of what was originally planned.</p>
            <div className="flex columns">
              <div className="fit">
                <p>Features:</p>
                <ul>
                  <li>Simple, visual groups of forms</li>
                  <li>Helpful copy where relevant</li>
                </ul>
              </div>
              <div className="fill">
                <img src={fongoWire3} alt="Fongo Works set up wireframe"/>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img src={fongoSetup} alt="Fongo Works set up"/>
          </div>

          <div className="article">
            <h3>New Team set up</h3>
            <p>Wireframing often produces ideas for more detailed elements of the interface being designed. I will frequently sketch these ideas right beside the wireframe that sparked the idea so that I can revisit it later once I've begun coding the interface.</p>
            <div className="flex columns">
              <div className="fit">
                <p>Features:</p>
                <ul>
                  <li>Status state (success/fail)</li>
                  <li>Actions required; expected response</li>
                  <li>Detailed instructions & help copy</li>
                </ul>
              </div>
              <div className="fill">
              <img src={fongoWire4} alt="Fongo Works members wireframe"/>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img src={fongoMembers} alt="Fongo Works new members"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default FongoWorks;
