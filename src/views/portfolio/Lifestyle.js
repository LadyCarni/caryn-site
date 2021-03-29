import React from 'react';
import PortfolioHeader from "components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import lifestyleCover from "assets/portfolio/lifestyle-video.jpg";


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
          </div>
        </div>
      </div>
    </>
  )
};

export default Lifestyle;
