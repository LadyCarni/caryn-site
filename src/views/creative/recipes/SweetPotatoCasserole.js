import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { Helmet } from 'react-helmet';
import { CreativeRoutes } from "../index";
import Casserole from 'assets/creative/recipes/recipe-sweet-potato-casserole1.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Casserole</h3>
      <ul>
        <li><span className="amount">4 1/2 pounds</span>sweet potatoes</li>
        <li><span className="amount">1 cup</span>granulated sugar</li>
        <li><span className="amount">1/2 cup</span>butter, softened</li>
        <li><span className="amount">1/4 cup</span>milk</li>
        <li><span className="amount">2</span>large eggs</li>
        <li><span className="amount">1 tsp</span>vanilla extract</li>
        <li><span className="amount">1/4 tsp</span>salt</li>
      </ul>
      <h3>Topping</h3>
      <ul>
        <li><span className="amount">1 1/4 cups</span>cornflakes cereal, crushed</li>
        <li><span className="amount">1/4 cup</span>chopped pecans</li>
        <li><span className="amount">1 Tbsp</span>brown sugar</li>
        <li><span className="amount">1 Tbsp</span>butter, melted</li>
        <li><span className="amount">1 1/2 cups</span>miniature marshmallows</li>
      </ul>
    </div>
  )
};

const SweetPotatoCasserole = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Sweet Potato Casserole Recipe</title>
        <meta property="og:title" content="Sweet Potato Casserole Recipe" />
        <meta property="og:description" content="Step-by-step sweet potato casserole recipe." />
        <meta property="og:image" content={Casserole} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/sweet-potato-casserole" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Sweet Potato Casserole</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>2 hours 20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>2 hours 40 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Servings</strong>
                <p>8-12 servings</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={Casserole} alt="sweet potato casserole"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <p><b>Note:</b> The base of this casserole can be made up to two days ahead, then reheated before adding the topping.</p>

              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat the oven to 400°F.</p>

              <p><span className="instruction-step cook-step">Step 2.</span> Bake sweet potatoes at 400°F for 1 hour or until tender. Let stand until cool to touch (about 20 minutes); peel and mash sweet potatoes. Reduce oven temperature to 350°.</p>

              <p><span className="instruction-step stir-step">Step 3.</span> Beat mashed sweet potatoes, granulated sugar, butter, milk, eggs, vanilla, and salt at medium speed with a hand or stand mixer until smooth. Spoon potato mixture into a greased 11 x 7 inch baking dish.</p>

              <p><span className="instruction-step stir-step">Step 4.</span> Prep the topping. Combine cornflakes, pecans, brown sugar, and butter in a small bowl.</p>

              <p><span className="instruction-step prep-step">Step 5.</span> Sprinkle cereal mixture over the casserole in diagonal rows two inches apart.</p>

              <p><span className='instruction-step cook-step'>Step 6.</span> Bake at 350° for 30 minutes.</p>

              <p><span className='instruction-step prep-step'>Step 7.</span> Remove from oven; let stand 10 minutes.</p>

              <p><span className='instruction-step prep-step'>Step 8.</span>Sprinkle marshmallows in alternate rows between cornflake mixture; bake 10 minutes.</p>

              <p><span className='instruction-step serve-step'>Step 9.</span> Let stand 10 minutes before serving.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default SweetPotatoCasserole;
