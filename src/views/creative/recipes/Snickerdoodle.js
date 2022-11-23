import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import Snickerdoodle from 'assets/creative/recipes/recipe-snickerdoodle3.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3></h3>
      <ul>
        <li><span className="amount">2 3/4 cups</span>sifted all-purpose flour</li>
        <li><span className="amount">2 tsp</span>cream of tartar</li>
        <li><span className="amount">1 tsp</span>baking soda</li>
        <li><span className="amount">1/4 tsp</span>salt</li>
        <li><span className="amount">1 cup</span>butter, softened</li>
        <li><span className="amount">1 3/4 cup</span>granulated sugar</li>
        <li><span className="amount">2</span>eggs</li>
        <li><span className="amount">1 Tbsp</span>RumChata liqueur</li>
        <li><span className="amount">2 tsp</span>ground cinnamon</li>
      </ul>
    </div>
  )
};

const SnickerdoodleCookie = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Snickerdoodle Cookies</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>10 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>30 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Servings</strong>
                <p>2 dozen</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={Snickerdoodle} alt="sweet potato casserole"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat the oven to 375°F.</p>

              <p><span className="instruction-step prep-step">Step 2.</span> Prepare your favorite cookie sheet.</p>

              <p><span className="instruction-step stir-step">Step 3.</span> In a medium bowl, combine flour, cream of tartar, baking soda, and salt; set aside.</p>

              <p><span className="instruction-step stir-step">Step 4.</span> In a large bowl, beat butter and sugar with electric mixer or stand mixer on medium speed until light and fluffy. Add eggs and RumChata, mix well. Add flour mixture to the butter mixture; mix only until incorporated.</p>

              <p><span className="instruction-step prep-step">Step 5.</span> In a small bowl, combine remaining 1/4 cup sugar and cinnamon.</p>

              <p><span className='instruction-step prep-step'>Step 6.</span> Roll dough into 1 inch balls. Rolls balls in sugar and cinnamon mixture to coat.</p>

              <p><span className='instruction-step prep-step'>Step 7.</span> Place dough balls 2 inches apart on your cookie sheet.</p>

              <p><span className='instruction-step cook-step'>Step 8.</span> Bake 8-10 minutes or until lightly browned, but still soft. Cool 3 minutes on the pan. Remove to cooling rack to cool completely.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default SnickerdoodleCookie;
