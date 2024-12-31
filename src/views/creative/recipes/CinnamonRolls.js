import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import CinnamonRollFrosted from 'assets/creative/recipes/cinnamon-rolls-frosted.jpg';
import CinnamonRollBaking from 'assets/creative/recipes/cinnamon-rolls-baking.jpg';
import CinnamonRollBaked from 'assets/creative/recipes/cinnamon-rolls-baked.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Dough</h3>
      <ul>
        <li><span className="amount">3/4 cups</span>warm milk (100°F)</li>
        <li><span className="amount">2 1/4 tsp</span>quick rise or active yeast (1 package)</li>
        <li><span className="amount">1/4 cup</span>granulated sugar</li>
        <li><span className="amount">1</span>egg plus 1 egg yolk, room temperature</li>
        <li><span className="amount">1/4 cup</span>unsalted butter, melted</li>
        <li><span className="amount">3 cups</span>bread flour, plus more for dusting</li>
        <li>3/4 tsp</li>salt
      </ul>
      
      <h3>Filling</h3>
      <ul>
        <li><span className="amount">2/3 cups</span>dark brown sugar, lightly packed</li>
        <li><span className="amount">1 1/2 Tbsp</span>ground cinnamon</li>
        <li><span className="amount">1/4 cup</span>salted butter, softened</li>
      </ul>

      <h3>Cream cheese frosting</h3>
      <ul>
        <li><span className="amount">4 oz</span>cream cheese, softened (1/2 package)</li>
        <li><span className="amount">3 Tbsp</span>salted butter, softened</li>
        <li><span className="amount">3/4 cups</span>powdered sugar</li>
        <li><span className="amount">1/2 tsp</span>vanilla extract</li>
      </ul>
    </div>
  )
};

const CinnamonRolls = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Cinnamon Rolls Recipe</title>
        <meta property="og:title" content="Cinnamon Rolls Recipe" />
        <meta property="og:description" content="Delicious homemade cinnamon rolls recipe." />
        <meta property="og:image" content={CinnamonRollFrosted} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/cinnamon-rolls" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Classic Cinnamon Rolls</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>2 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>2 hours 20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Makes</strong>
                <p>9 cinnamon rolls</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={CinnamonRollFrosted} alt="cinnamon rolls"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step stir-step">Step 1.</span> Warm milk to 110°F. You can do this by placing the milk in a microwave-safe bowl and microwaving for 40-45 seconds. Transfer warm milk to the bowl of a stand mixer and sprinkle yeast on top. Add in sugar, egg, egg yolk and melted butter. Mix until well combined. Next stir in flour and salt with a wooden spoon until a dough begins to form.</p>

              <p><span className="instruction-step stir-step">Step 2.</span> Place dough hook on stand mixer and knead dough on low-medium speed for 8 minutes. Dough should form into a ball and be slightly sticky.</p>

              <p><span className="instruction-step stir-step">Step 3.</span> Transfer dough ball to a well-oiled bowl, cover with plastic wrap and a warm towel. If you have a proofing option on your oven, use with care. Allow dough to rise for 1 hour to 1 1/2 hours, or until doubled in size. This may more or less time depending the humidity and temperature in your home.</p>

              <p><span className="instruction-step stir-step">Step 4.</span> After dough has doubled in size, transfer dough to a well-floured surface and roll out into a 14x9 inch rectangle. Spread softened butter over dough, leaving a 1/4 inch margin at the far side of the dough.</p>

              <p><span className="instruction-step stir-step">Step 5.</span> In a small bowl, mix together brown sugar and cinnamon. Manually sprinkle mixture over the buttered dough, then rub the brown sugar mixture into the butter.</p>

              <p><span className="instruction-step stir-step">Step 6.</span> Tightly roll dough up, starting from the 9-inch side and place seam side down making sure to seal the edges of the dough as best you can.</p>

              <p className="tip">You may need to cut off an inch or so off the ends of the dough as the ends may not be as full of the filling.</p>

              <p><span className="instruction-step stir-step">Step 7.</span> Cut into 1 inch sections with a serrated knife. You should get 9 large pieces.</p>

              <img src={CinnamonRollBaking} alt="cinnamon rolls baking"/>

              <p><span className="instruction-step stir-step">Step 8.</span> Place cinnamon rolls in a greased 9x9 inch baking pan. You may also line the pan with parchment paper. Cover with plastic wrap and a warm towel and let rise again for 30-45 minutes.</p>

              <img src={CinnamonRollBaked} alt="cinnamon rolls baked"/>

              <p><span class="instruction-step cook-step">Step 9.</span> Preheat oven to 350°F. Remove plastic wrap and towel and bake cinnamon rolls for 20-25 minutes or until just slightly golden brown on the edges. Do your best to under-bake them slightly so they stay soft in the middle.</p>

              <img src={CinnamonRollFrosted} alt="cinnamon rolls"/>

              <p><span class="instruction-step serve-step">Step 10.</span> Allow them to cool for 5-10 minutes before frosting. In the bowl of an electric mixer, combine cream cheese, butter, powdered sugar and vanilla extract. Beat until smooth and fluffy. Spread over cinnamon rolls and serve immediately. Makes 9 cinnamon rolls.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default CinnamonRolls;
