import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import LocoMoco from 'assets/creative/recipes/recipe-loco-moco.jpg';
import { Helmet } from 'react-helmet';

const Ingredients = ({ media }) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Rice</h3>
      <ul>
        <li><span className="amount">2 cups</span>long grain rice</li>
        <li><span className="amount">3 1/2 cups</span>low-sodium chicken broth</li>
      </ul>

      <h3>Burgers</h3>
      <ul>
        <li><span className="amount">1 pound</span>ground beef (80/20 blend)</li>
        <li><span className="amount">1/4 cup</span>diced Maui onion</li>
        <li>Kosher salt and freshly cracked black pepper</li>
        <li>canola oil</li>
      </ul>

      <h3>Gravy</h3>
      <ul>
        <li><span className="amount">1 Tbsp</span>unsalted butter</li>
        <li><span className="amount">1/4 cup</span>roughly chopped cremini mushrooms</li>
        <li><span className="amount">1/4 cup</span>diced Maui onion</li>
        <li><span className="amount">1 1/2 cups</span>low-sodium beef broth</li>
        <li><span className="amount">1 tsp</span>Worcestershire sauce</li>
        <li><span className="amount">1 Tbsp</span>cornstarch</li>
      </ul>

      <h3>Eggs & Garnish</h3>
      <ul>
        <li>canola oil</li>
        <li><span className="amount">4</span>large eggs</li>
        <li><span className="amount">2-3 Tbsp</span>chopped fresh flat-leaf parsley (optional)</li>
        <li><span className="amount">1/4 cup</span>seeded and diced Roma tomato (optional)</li>
      </ul>
    </div>
  )
};

const LocoMocoRecipe = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Loco Moco Recipe</title>
        <meta property="og:title" content="Loco Moco Recipe" />
        <meta property="og:description" content="Guy Fieri's loco moco: rice topped with a seasoned beef patty, mushroom gravy, and a fried egg." />
        <meta property="og:image" content={LocoMoco} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/loco-moco" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Loco Moco</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>40 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Servings</strong>
                <p>2 servings</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={LocoMoco} alt="loco moco" />
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step cook-step">Step 1.</span> Rinse the rice under cold water until it runs clear. Bring the chicken broth to a boil, add the rice, cover, and reduce heat to low. Cook for 15 minutes, then remove from heat and let stand 5 minutes. Fluff with a fork and keep warm.</p>

              <p><span className="instruction-step stir-step">Step 2.</span> Combine the ground beef, diced onion, salt, and pepper. Form into 4 medium patties.</p>

              <p><span className="instruction-step cook-step">Step 3.</span> Heat a cast-iron pan over high heat with a splash of canola oil. Add the patties and cover to seal in moisture. Cook until browned on the first side, 3-4 minutes, then flip, cover again, and cook to desired doneness, about 3 more minutes for medium-rare. Remove and keep warm.</p>

              <p><span className="instruction-step cook-step">Step 4.</span> Add the butter to the same pan with the drippings. Sauté the mushrooms and onion until golden brown, about 5 minutes. Add the beef broth and Worcestershire sauce, bring to a boil, and reduce for 2-3 minutes.</p>

              <p className="tip">Cooking the gravy in the same pan as the burgers picks up all the browned bits left behind for extra flavor.</p>

              <p><span className="instruction-step stir-step">Step 5.</span> Mix the cornstarch with 1 tablespoon of water to form a slurry. Slowly stir it into the gravy until thickened. Season with salt and pepper and keep warm.</p>

              <p><span className="instruction-step cook-step">Step 6.</span> Heat canola oil in a nonstick pan over medium heat. Crack in the eggs and cook sunny-side up, 3-4 minutes. Remove and keep warm.</p>

              <p><span className="instruction-step serve-step">Step 7.</span> Plate the rice, top with a burger patty, then an egg, then a generous ladle of gravy. Garnish with parsley and diced tomato, if desired.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default LocoMocoRecipe;
