import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { Helmet } from 'react-helmet';
import { CreativeRoutes } from "../index";
import BaileysFudge from 'assets/creative/recipes/recipe-baileys-fudge.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Fudge ingredients</h3>
      <ul>
        <li><span className="amount">3 1/2 cups</span>milk chocolate chips</li>
        <li><span className="amount">1 cup</span>sweetened condensed milk</li>
        <li><span className="amount">1/4 cup</span>Bailey's</li>
        <li><span className="amount">1 tsp</span>vanilla extract</li>
        <li><span className="amount">1/2 cup</span>candy topping (e.g. butterscotch chips)</li>
      </ul>
    </div>
  )
};

const Fudge = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Bailey's Fudge Recipe</title>
        <meta property="og:title" content="Bailey's Fudge Recipe" />
        <meta property="og:description" content="Step by step Bailey's fudge recipe." />
        <meta property="og:image" content={BaileysFudge} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/fudge" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Bailey's Fudge</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>15 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>60 - 72 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cool Time</strong>
                <p>4 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Serves</strong>
                <p>25</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={BaileysFudge} alt="baileys fudge"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Line an 8 by 8 inch pan with aluminum foil</p>

              <p><span className="instruction-step stir-step">Step 2.</span> In a large bowl combine the chocolate chips and sweetened condensed milk. Microwave for one minute, stir, and microwave for 30 seconds.</p>

              <p><span className="instruction-step stir-step">Step 3.</span> Stir in the Baileys and the vanilla extract until smooth. Pour into the prepared pan and top with your topping of choice. Press in slightly.</p>

              <p><span className="instruction-step cook-step">Step 4.</span> Cover and refrigerate for four hours until firm. For firmer fudge store in the refrigerator.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default Fudge;
