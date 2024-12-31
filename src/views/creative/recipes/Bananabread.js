import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import bananaBread1 from 'assets/creative/recipes/banana-bread1.jpg'
import bananaBread2 from 'assets/creative/recipes/banana-bread2.jpg'
import bananaBread3 from 'assets/creative/recipes/banana-bread3.jpg'
import { Helmet } from 'react-helmet';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Banana Bread</h3>
      <ul>
        <li><span className="amount">1 2/3 cups</span>overripe bananas</li>
        <li><span className="amount">1 3/4 cups</span>all-purpose flour</li>
        <li><span className="amount">1/2 tsp</span>salt</li>
        <li><span className="amount">2 tsp</span>baking powder</li>
        <li><span className="amount">1/4 tsp</span>baking soda</li>
        <li><span className="amount">1/3 cup</span>shortening</li>
        <li><span className="amount">2/3 cup</span>sugar</li>
        <li><span className="amount">2</span>eggs</li>
      </ul>

      <h3>French Toast</h3>
      <ul>
        <li>French toast, sliced thick</li>
        <li><span className="amount">4</span>eggs, beaten</li>
        <li><span className="amount">1/4 tsp</span>cinnamon (optional)</li>
      </ul>

      <h3>Cinnamon Butter</h3>
      <ul>
        <li><span className="amount">2 sticks (1 cup)</span>butter, softened</li>
        <li><span className="amount">1/4 cup</span>honey</li>
        <li><span className="amount">1 tsp</span>ground cinnamon</li>
        <li><span className="amount">1 tsp</span>kosher salt</li>
        <li><span className="amount">1/2 tsp</span>vanilla extract</li>
      </ul>
    </div>
  )
};

const BananaBread = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Banana Bread French Toast Recipe</title>
        <meta property="og:title" content="Banana Bread French Toast Recipe" />
        <meta property="og:description" content="Step by step banana bread french toast recipe." />
        <meta property="og:image" content={bananaBread1} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/french-toast" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Banana Bread French Toast</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>30 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Wait Time</strong>
                <p>1 hour</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>50 - 60 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>~ 2.5 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Serves</strong>
                <p>4</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={bananaBread2} alt="Banana Bread french toast"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat oven to 350°F. Grease a loaf pan and set aside.</p>

              <p><span className="instruction-step stir-step">Step 2.</span>Cream bananas, shortening, and eggs till smooth.</p>
              
              <p><span className="instruction-step stir-step">Step 3.</span>Stir in the rest till just combined.</p>
              
              <p><span className="instruction-step cook-step">Step 4.</span>Pour into loaf pan. Bake for 50-60 minutes, or till a toothpick in the middle comes out clean. Let cool (~1 hour), slice into 12 equal pieces.</p>

              <img src={bananaBread1} alt="banana bread"/>

              <p><span className="instruction-step stir-step">Step 5.</span>Heat a wide frying pan or griddle on medium. Grease with your preferred ingredient (butter, shortening, coconut oil).</p>

              <p><span className="instruction-step stir-step">Step 6.</span>In a wide, shallow bowl or dish, beat french toast eggs till combined. If desired, add cinnamon for some extra flavor.</p>

              <p><span className="instruction-step stir-step">Step 7.</span>Dip a slice of banana bread into the egg, flipping gently to coat both sides.</p>

              <p><span className="instruction-step stir-step">Step 8.</span>Fry till golden brown on both sides. Meanwhile, prepare the cinnamon butter.</p>

              <p><span className="instruction-step stir-step">Step 9.</span>In a large bowl, using a hand mixer, beat all ingredients until fully combined and butter is slightly whipped.</p>

              <img src={bananaBread3} alt="cinnamon butter"/>

              <p><span className="instruction-step stir-step">Step 10.</span>Place butter in a ramekin and garnish with a sprinkle of cinnamon. Slather on everything.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default BananaBread;
