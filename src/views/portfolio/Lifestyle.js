import React from 'react';
import PortfolioHeader from "components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import lifestyleCover from "assets/portfolio/lifestyle-video.jpg";
import lifestyleEdit from "assets/portfolio/lifestyle-video-edit.jpg";
import lifestyleVisibility from "assets/portfolio/lifestyle-video-visibility.jpg";
import lifestyleTags from "assets/portfolio/lifestyle-video-tags.jpg";


const Lifestyle = () => {

  return (
    <>
      <PortfolioHeader
        headerImage={lifestyleCover}
        routes={PortfolioRoutes}
        imageAlt="Design for a lifestyle app"
        headerTitle="Lifestyle app"
        headerSubtitle="Greenfield app design"
        headerDescription="This app was designed for an ambitious startup dedicated to changing how we connect with technology and capture memories."
        headerDisciplines={["Web Design"]}
      />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="article">
            <h2>The Challenge</h2>
            <p>The client my team was working with for this project was a startup that had created an innovative new product they were aiming to introduce to the market at CES that year. The product was essentially a beefed up video capture device. To support the product, they needed an app that would encourage the growth of a community of users around the videos produced by the product. The business proposition was unique enough that the design of the app needed to be intuitive and compelling to overcome the possible barrier to entry for the market.</p>
            <h3>Primary Goals</h3>
            <ul>
              <li>Familiar</li>
              <li>Intuitive to use</li>
              <li>Intriguing and compelling</li>
            </ul>

            <h2>Design Features</h2>
            <p>The heart of the app would be handling the videos the device captured. The user would need to be able to view and manage their videos as simply as possible.</p>

            <h3>Video Editor</h3>
            <p>While viewing a video page, the user could view the footage as well as the GPS location where the video took place. They would also be able to manage the data surrounding their videos. With this much control, the users would begin building a history of detailed video 'memories'.</p>
          </div>
          <div className="full-width">
            <img src={lifestyleCover} alt="Features of the app videos" className="shadow"/>
          </div>

          <div className="article">
            <h3>Inline Editing</h3>
            <p>Simple inline editing functionality was designed so that the user wouldn't need to navigate away from the page.</p>
          </div>
          <div className="full-width">
            <img src={lifestyleEdit} alt="Editing the title of a video" className="shadow"/>
          </div>

          <div className="article">
            <h3>Privacy</h3>
            <p>We knew from usability interviews early on that users would want the ability to customize the visibility options for videos they captured.</p>
          </div>
          <div className="full-width">
            <img src={lifestyleVisibility} alt="Editing the visibility settings" className="shadow"/>
          </div>

          <div className="article">
            <h3>Video Tags</h3>
            <p>Planning for scalability, we designed a tagging system that would allow the user to create customized organization for their video memories.</p>
          </div>
          <div className="full-width">
            <img src={lifestyleTags} alt="Viewing the tags of a video" className="shadow"/>
          </div>
        </div>
      </div>
    </>
  )
};

export default Lifestyle;
