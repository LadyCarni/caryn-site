import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import SparklyPumpkin from 'assets/creative/recipes/recipe-pumpkin-pie.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Pie filling</h3>
      <ul>
        <li><span className="amount">2</span>large eggs</li>
        <li><span className="amount">1</span>large egg yolk</li>
        <li><span className="amount">1/2 cup</span>packed dark brown sugar</li>
        <li><span className="amount">1/3 cup</span>white sugar</li>
        <li><span className="amount">1/2 tsp</span>salt</li>
        <li><span className="amount">2 tsp</span>cinnamon</li>
        <li><span className="amount">1 tsp</span>ground ginger</li>
        <li><span className="amount">1/4 tsp</span>ground nutmeg</li>
        <li><span className="amount">1/4 tsp</span>ground cloves</li>
        <li><span className="amount">1/8 tsp</span>cardamom</li>
        <li><span className="amount">1/2 tsp</span>finely grated lemon zest</li>
        <li><span className="amount">2 cups</span>pumpkin puree from a sugar pumpkin OR 1 (15oz can) pumpkin puree.</li>
        <li><span className="amount">1.5 cups</span>heavy cream OR 1 (12oz) can evaporated milk</li>
      </ul>
      <h3>Crust</h3>
      <ul>
        <li><span className="amount">1</span>homemade pie crust, chilled or frozen, or 2 pre-made pie shells (plus extra for optional crust decorations).</li>
      </ul>
    </div>
  )
};

const PumpkinPie = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Sparkly Pumpkin Pie</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>10 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>60 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>70 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Servings</strong>
                <p>8-12 servings</p>
              </div>
              <div className="prep-info-detail">
                <strong>Yield</strong>
                <p>1 deep dish pie, or 2 shallow pies baked in pre-made crusts</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={SparklyPumpkin} alt="pumpkin pie"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <p><b>Note:</b> This recipe makes a generous amount of filling. Use either one homemade deep-dish crust, or two shallow or frozen premade pie shells.</p>

              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat the oven to 425°F.</p>

              <p><span className="instruction-step stir-step">Step 2.</span> Beat the eggs in a large bowl, or stand mixer. Mix in the brown sugar, white sugar, salt, and spices (cinnamon, ground ginger, nutmeg, ground cloves, cardamom, and lemon zest).</p>

              <p><span className="instruction-step stir-step">Step 3.</span> Mix in the pumpkin puree. Stir in the cream. Beat together until everything is well mixed.</p>

              <p><span className="instruction-step cook-step">Step 4.</span> Pour the filling into an uncooked chilled or frozen pie shell. Bake at a high temperature of 425°F for 15 minutes.</p>

              <p className="tip">To add some fun to your pie, use extra pie crust to cut out shapes for the top of your pie!</p>

              <p><span className="instruction-step cook-step">Step 5.</span> After 15 minutes, lower the temperature to 350°F. Bake for 45-55 minutes more. You'll know when the pie is done when a tooth pick or knife tip inserted in the center comes out wet but relatively clean. The center should be just barely jiggly.</p>

              <p className="tip">About half way through baking, check on the edges of the pie crust for browning too quickly. You can slow down the browning by putting foil around the crust or using your favorite silicone pie protector (like <a href="https://www.amazon.ca/gp/product/B005FYC9XM" target="_blank" rel="noreferrer">this one</a>).</p>

              <p><b>Note:</b> The pumpkin will come out of the oven puffed up (you can see this slightly in the image above). This is expected! It will flatten as it cools.</p>

              <p className='instruction-step serve-step'>Cool the pie on a wire rack for 2 hours. Serve with whipped cream.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default PumpkinPie;
