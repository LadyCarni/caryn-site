import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import Taquitos from 'assets/creative/recipes/recipe-buffalo-taquitos.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3></h3>
      <ul>
        <li><span className="amount">1 8oz package</span>cream cheese, softened</li>
        <li><span className="amount">1/2 cup</span>ranch dressing</li>
        <li><span className="amount">1/2 cup</span>buffalo sauce</li>
        <li><span className="amount">1</span>rotisserie chicken, shredded</li>
        <li><span className="amount">1 cup</span>shredded cheddar cheese</li>
        <li><span className="amount">24</span>flour tortillas, fajita size</li>
        <li>non-stick spray</li>
      </ul>
    </div>
  )
};

const TaquitoRecipe = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Buffalo Chicken Taquitos</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>15 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>35 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Servings</strong>
                <p>24-48 servings</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={Taquitos} alt="finished buffalo chicken taquitos"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat the oven to 450°F.</p>

              <p><span className="instruction-step prep-step">Step 2.</span> Spray a baking sheet with non-stick cooking spray and set aside.</p>

              <p><span className="instruction-step stir-step">Step 3.</span> Mix softened cream cheese, ranch dressing, and buffalo sauce until well combined in a large bowl. The mixture should be smooth.</p>

              <p><span className="instruction-step stir-step">Step 4.</span> Mix the shredded rotisserie chicken and shredded cheese into the cream cheese mixture.</p>

              <p><span className="instruction-step prep-step">Step 5.</span> For each Taquito, spoon a large tablespoon of the chicken mixture onto each flour tortilla. Spread in a thin line from one side to the other.</p>

              <p><span className='instruction-step prep-step'>Step 6.</span> Roll each tortilla up tightly around the chicken mixture and place seam side down on the baking sheet.</p>

              <p><span className='instruction-step prep-step'>Step 7.</span> Continue assembling each taquito one at a time until you’re done.</p>

              <p><span className='instruction-step prep-step'>Step 8.</span> Once all taquitos have been assembled and placed on the baking sheet, generously spray the tops with non-stick cooking spray.</p>

              <p><span className='instruction-step cook-step'>Step 9.</span> Bake for 10 minutes. Pull from oven and flip taquitos over. Bake for an additional 5 minutes or until golden brown.</p>

              <p><span className='instruction-step serve-step'>Step 10.</span> Let stand 10 minutes before serving. You may cut each taquito in half for smaller portion sizes.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default TaquitoRecipe;
