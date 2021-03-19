import React from 'react';
import PortfolioHeader from "components/portfolioHeader";
import { PortfolioRoutes } from "./index";
import lunaCover from "assets/portfolio/luna-cover.png";

const LunaNova = () => {
  return (
    <>
      <PortfolioHeader
        headerImage={lunaCover}
        routes={PortfolioRoutes}
        imageAlt="Luna Nova website"
        headerTitle="Luna Nova"
        headerSubtitle="An approachable dog breeder website"
        headerDescription="Luna Nova is a Portuguese Water Dog breeder operating from a home-based business in Cambridge, Ontario"
        headerDisciplines={["Web Design", "Front-end Development (React)"]}
      />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="article">
            <p className="external-link"><a href="https://www.lunanovaportuguesewaterdogs.com/" target="_blank" rel="noreferrer">Luna Nova</a></p>
            <h2>The Challenge</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla, aliquid, animi eligendi optio aliquam doloremque deleniti laboriosam quasi soluta nostrum ea nihil quia deserunt nisi inventore, architecto natus error.</p>
            <h3>Primary Goals</h3>
            <ul>
              <li>thing</li>
              <li>another thing</li>
              <li>yet another</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default LunaNova;
