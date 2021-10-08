import React from 'react';
import { PortfolioRoutes } from "./index";
import PortfolioHeader from "components/portfolioHeader";
import financialCover from "assets/portfolio/financial-cover.png";
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
            <p>To design an intuitive, transparent, and highly controllable ecommerce user experience for a unique, challenging industry.</p>
            <h3>Primary Goals</h3>
            <ul>
              <li>An approachable platform for new customers to the precious metals market</li>
              <li>Efficient interactions for experienced customers</li>
              <li>Assurance and security through transparency of information</li>
              <li>Thorough information provided to assist the customer in purchasing decisions</li>
            </ul>
            <h2>Research & Planning</h2>
            <p>Before design began, signficant domain research was needed to understand the market, the user base, and the existing competitors. Through a series of in-person interviews and thorough competitive analysis conducted at the head office in New York City, it was discovered that users both with and without buying and selling experience were going to be the target customer. Some key characteristics of the user base included:</p>
            <ul>
              <li>Easily visible current market price of metals (allowing strategic buying & selling)</li>
              <li>A secure, insured process while handling precious metals</li>
              <li>Storage options for purchased precious metals</li>
            </ul>
            <h2>Design Features</h2>
            <p>Given the complexity of the industry, and the need for a seamless, efficient user experience, each feature for the app needed to be designed with transparency and simplicity in mind.</p>
            <h3>Vault Location</h3>
            <p>Customers would have the option to either have their precious metals shipped to themselves or stored in a vault. To give the customer a sense of transparency and and security, the checkout would show the specific location of the vault as well as the logo of the reputed, secure provider of the vault (hidden in this example for privacy purposes).</p>
            <img src={financialVault} alt="Financial app vault location"/>

            <h3>Market Price Lock</h3>
            <p>Providing adequate information and context around the purchase of precious metals was an important part of the control we wanted to give the customer during their experience. One way we provided this control was by showing the market price at the time the customer placed the item in their cart, and locking that price for a limited time to allow them to complete their purchase.</p>
            <img src={financialMarketPrice} alt="Financial app market price lock"/>

            <h3>Order Summary</h3>
            <p>The design of the order summary intentionally followed familiar ecommerce patterns for a shopping experience. The interface was designed to draw the user's eye to the elements that required their attention. Testing the usability of this flow validated the assumption that the user needed to know what actions to take to see an accurate summary of the cost of their purchase.</p>
            <img src={financialCart} alt="Financial app shopping cart"/>

            <h3>Payment</h3>
            <p>The customer was provided an efficient, clear, and concise way to select payment methods. Both by selecting a previously saved payment method, and selecting a new method. The business choice to provide a discount based on certain payment methods impacted the choice to display the benefts in as clear a way as possible to help them make the choice that best suited them.</p>
            <img src={financialPayment} alt="Financial app shopping cart"/>

            <h3>Checkout Experience</h3>
            <p>This client represented a unique industry with specific usability and interface challenges. The resulting checkout experience was researched and designed to be familiar and intuitive despite the challenging industry.</p>
            <img src={financialCheckout} alt="Financial app shopping cart"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Financial;
