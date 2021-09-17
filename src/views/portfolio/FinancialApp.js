import React from 'react';
import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";
import financialCover from "assets/portfolio/financial-cover.jpg";
import financialCart from "assets/portfolio/financial-cart.png";
import financialCheckout from "assets/portfolio/financial-checkout.jpg";
import financialMarketPrice from "assets/portfolio/financial-market-price.png";
import financialPayment from "assets/portfolio/financial-payment-options.png";

const Financial = () => {
  return (
    <>
      <PortfolioHeader
        headerImage={financialCover}
        routes={PortfolioRoutes}
        imageAlt="Financial app"
        headerTitle="Financial app"
        headerSubtitle="An approachable app for a complex industry"
        headerDescription="An application designed to make the complexities of trading in precious metals user-friendly and simple."
        headerDisciplines={["UX Research & Planning", "Web App Design"]}
      />
      <div className="feature feature-width">
        <div className="content flex column">
          <div className="article">
            <h2>The Challenge</h2>
            <p>Complex industry, constantly changing (market price), tax implicatinos</p>
            <h3>Primary Goals</h3>
            <ul>
              <li>Approachable, secure, usable</li>
              <li>transparency</li>
              <li>flexibility</li>
              <li>helpful, thorough (market, taxes, etc.)</li>
            </ul>
            <h2>The Results</h2>
            <p>Results...</p>
            <img src={financialCart} alt="Financial app shopping cart"/>
            <img src={financialCheckout} alt="Financial app shopping cart"/>
            <img src={financialMarketPrice} alt="Financial app shopping cart"/>
            <img src={financialPayment} alt="Financial app shopping cart"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Financial;
