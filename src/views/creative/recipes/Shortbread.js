import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import ShortbreadCookie from 'assets/creative/recipes/recipe-shortbread.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Shortbread ingredients</h3>
      <ul>
        <li><span className="amount">1 1/3 cups</span>all purpose flour</li>
        <li><span className="amount">3 Tbsp</span>cornstarch</li>
        <li><span className="amount">1 cup</span>saled butter, softened</li>
        <li><span className="amount">3/4 cup</span>icing sugar</li>
        <li><span className="amount">2 Tbsp</span>milk</li>
        <li><span className="amount">1 tsp</span>vanilla extract</li>
      </ul>
    </div>
  )
};

const Shortbread = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Shortbread cookies</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>15 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>10 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>25 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Makes</strong>
                <p>2-3 dozen cookies</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={ShortbreadCookie} alt="shortbread cookies"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat the oven to 350°F and line a baking sheet with parchment paper, or use your favorite silicone baking mat.</p>

              <p><span className="instruction-step stir-step">Step 2.</span> In a small bowl, whisk flour and cornstarch together.</p>

              <p><span className="instruction-step stir-step">Step 3.</span> In a large bowl (or in a stand mixer), beat butter and sugar together until fluffy and combined, about 2 minutes. Add milk and vanilla and beat again for 3 minutes.</p>

              <p><span className="instruction-step stir-step">Step 4.</span> Using a spatula, fold in half of the flour mixture into the butter mixture. Repeat with the other half of the flour mixture.</p>

              <p><span className="instruction-step prep-step">Step 5.</span> When the dough forms together from crumbly, the dough is ready.</p>

              <p><span className="instruction-step decorate-step">Step 6.</span> Either use your favorite cookie press or make balls two inches round and place 2 inches apart on the sheet. Press down on the balls with a fork or flatten using the bottom of a cup. Add sprinkles if you want before placing in the oven.</p>

              <p className="tip">These cookies can be decorated with sprinkles, or adorned with chocolate kisses, glace cherries, or any other of your favorite cookie toppings!</p>

              <p><span className="instruction-step cook-step">Step 7.</span> Bake for 7-10 minutes or until the edges of the cookies start to turn a golden color on the edges.</p>

              <p><span className="instruction-step prep-step">Step 8.</span> Remove from oven and cool on a wire rack. Once cooled, cookies may be stored in an air-tight container up to 1 week, or frozen to last longer!</p>

              <p className="tip">This is the cookie press I use: <a target="_blank" href="https://www.amazon.ca/gp/product/B00ABH0PYI" rel="noreferrer">https://www.amazon.ca/gp/product/B00ABH0PYI</a></p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default Shortbread;
