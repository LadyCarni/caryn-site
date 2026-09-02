import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import TwicePotatoes from 'assets/creative/recipes/recipe-double-spuds.jpg';
import { Helmet } from 'react-helmet';

const Ingredients = ({ media }) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <ul>
        <li><span className="amount">4</span>large baking potatoes</li>
        <li><span className="amount">8 strips</span>bacon</li>
        <li><span className="amount">1 cup</span>sour cream</li>
        <li><span className="amount">1 cup</span>shredded Cheddar cheese, divided</li>
        <li><span className="amount">8</span>green onions, sliced, divided</li>
        <li><span className="amount">1/2 cup</span>milk</li>
        <li><span className="amount">4 Tbsp</span>butter</li>
        <li><span className="amount">1/2 tsp</span>salt</li>
        <li><span className="amount">1/2 tsp</span>ground black pepper</li>
      </ul>
    </div>
  )
};

const TwiceBakedPotatoesRecipe = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Twice Baked Potatoes Recipe</title>
        <meta property="og:title" content="Twice Baked Potatoes Recipe" />
        <meta property="og:description" content="Ultimate twice baked potatoes loaded with sour cream, cheddar, green onion, and bacon." />
        <meta property="og:image" content={TwicePotatoes} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/twice-baked-potatoes" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Twice Baked Potatoes</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>15 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>1 hour 15 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>1 hour 30 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Servings</strong>
                <p>8 servings</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={TwicePotatoes} alt="twice baked potatoes" />
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat the oven to 350°F.</p>

              <p><span className="instruction-step cook-step">Step 2.</span> Bake the potatoes until tender, about 1 hour, then set aside until cool enough to handle. Meanwhile, cook the bacon in a large, deep skillet over medium-high heat until evenly browned. Drain, crumble, and set aside.</p>

              <p><span className="instruction-step prep-step">Step 3.</span> Slice the potatoes in half lengthwise and scoop the flesh into a large bowl, reserving the skins.</p>

              <p><span className="instruction-step stir-step">Step 4.</span> Add the sour cream, half the cheese, half the green onions, the milk, butter, salt, and pepper to the potato flesh. Mix with a hand mixer until well blended and creamy.</p>

              <p><span className="instruction-step decorate-step">Step 5.</span> Spoon the potato mixture back into the reserved skins. Top with the remaining cheese, remaining green onions, and the bacon.</p>

              <p><span className="instruction-step cook-step">Step 6.</span> Bake until the cheese is melted, about 15 minutes.</p>

              <p><span className="instruction-step serve-step">Step 7.</span> Serve hot!</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default TwiceBakedPotatoesRecipe;
