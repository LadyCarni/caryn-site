import React from 'react';
import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";
import financialCover from "assets/portfolio/financial-cover.jpg";
import financialCart from "assets/portfolio/financial-cart.png";
import financialCheckout from "assets/portfolio/financial-checkout.jpg";
import financialMarketPrice from "assets/portfolio/financial-market-price.png";
import financialPayment from "assets/portfolio/financial-payment-options.png";
import financialVault from "assets/portfolio/financial-vault.png";

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
            <h2>Research & Planning</h2>
            <p>Domain knowledge; market price, security and insurance, storing precious metals user needs and behavior research; what they need to make the decision to buy or sell precious metals</p>
            <h2>Design Features</h2>
            <p>Given the complexity of the industry, and the need for a seamless, efficient user experience, each feature for the app needed to be designed with transparency and simplicity in mind.</p>
            <h3>Vault Location</h3>
            <p>Customers would have the option to either have their precious metals shipped to themselves or stored in a vault. To give the customer a sense of transparency and and security, the checkout would show the specific location of the vault as well as the logo of the reputed, secure provider of the vault (hidden in this example for privacy purposes).</p>
            <img src={financialVault} alt="Financial app vault location"/>

            <h3>Market Price Lock</h3>
            <p>Providing adequate information and context around the purchase of precious metals was an important part of the control we wanted to give the customer during their experience. One way we provided this control was by showing the market price at the time the customer placed the item in their cart, and locking that price for a limited time to allow them to complete their purchase.</p>
            <img src={financialMarketPrice} alt="Financial app market price lock"/>

            <h3>Order Summary</h3>
            <img src={financialCart} alt="Financial app shopping cart"/>

            <h3>Payment</h3>
            <img src={financialPayment} alt="Financial app shopping cart"/>

            <h3>Checkout Experience</h3>
            <img src={financialCheckout} alt="Financial app shopping cart"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Financial;
