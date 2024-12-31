import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import dryRub from 'assets/creative/recipes/dry-rub.jpg'
import { Helmet } from 'react-helmet';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Portions</h3>
      <ul>
        <li><span className="amount">8 Tbsp</span>light brown sugar, tightly packed</li>
        <li><span className="amount">3 Tbsp</span>kosher salt</li>
        <li><span className="amount">1 Tbsp</span>chili powder</li>
        <li><span className="amount">1/2 tsp</span>ground black pepper</li>
        <li><span className="amount">1/2 tsp</span>cayenne pepper</li>
        <li><span className="amount">1/2 tsp</span>jalapeno seasoning</li>
        <li><span className="amount">1/2 tsp</span>old bay seasoning</li>
        <li><span className="amount">1/2 tsp</span>rubbed thyme</li>
        <li><span className="amount">1/2 tsp</span>onion powder</li>
      </ul>
    </div>
  )
};

const DryRub = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Dry Rub Recipe</title>
        <meta property="og:title" content="Dry Rub Recipe" />
        <meta property="og:description" content="Step by step all-purpose dry rub recipe." />
        <meta property="og:image" content={dryRub} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/dry-rub" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Best-Ever Dry Rub</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>10 minutes</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={dryRub} alt="Best-ever dry rub"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step stir-step">Step 1.</span> Measure all ingredients into a bowl.</p>

              <p><span className="instruction-step stir-step">Step 2.</span>Whisk till fully incorporated.</p>
              
              <p><span className="instruction-step stir-step">Step 3.</span>Use liberally, on anything (ribs, wings, chicken, fish, etc.) Store in an air-tight container.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default DryRub;
