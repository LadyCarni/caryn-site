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
            <p>With so many competing breeders, my client needed to stand out and make her customers feel secure knowing they were adopting from a registered, safe, and loving home. Her website needed to be informative, transparent, and a showcase for the caliber of dogs she breeds. Many users would be non technically savvy, and would require an intuitive, smooth experience using and browsing the site.</p>
            <h3>Primary Goals</h3>
            <ul>
              <li>Familiar</li>
              <li>Intuitive to use</li>
            </ul>

            <h2>Design Features</h2>
            <img src={lifestyleCover} alt="Features of the app videos" className="shadow"/>
            <img src={lifestyleEdit} alt="Editing the title of a video" className="shadow"/>
            <img src={lifestyleVisibility} alt="Editing the visibility settings" className="shadow"/>
            <img src={lifestyleTags} alt="Viewing the tags of a video" className="shadow"/>
          </div>
        </div>
      </div>
    </>
  )
};

export default Lifestyle;
