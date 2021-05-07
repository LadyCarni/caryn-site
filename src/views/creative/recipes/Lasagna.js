import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
// import Lasagna1 from 'assets/creative/recipes/lasagna1.jpg';
import Lasagna2 from 'assets/creative/recipes/lasagna2.jpg';
import Lasagna3 from 'assets/creative/recipes/lasagna3.jpg';
import Lasagna4 from 'assets/creative/recipes/lasagna4.jpg';
import Lasagna5 from 'assets/creative/recipes/lasagna5.jpg';
import Lasagna6 from 'assets/creative/recipes/lasagna6.jpg';
import Lasagna7 from 'assets/creative/recipes/lasagna7.jpg';
import Lasagna8 from 'assets/creative/recipes/lasagna8.jpg';
import Lasagna9 from 'assets/creative/recipes/lasagna9.jpg';
import Lasagna10 from 'assets/creative/recipes/lasagna10.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Meat layers</h3>
      <ul>
        <li><span className="amount">6</span>lasagna sheets (or 12 cooked, drained lasagna noodles)</li>
        <li><span className="amount">2 cans</span>(14oz each) diced tomatoes, drained</li>
        <li><span className="amount">3 cans</span>(6oz each) tomato paste</li>
        <li><span className="amount">2 cups</span>fresh mushrooms, sliced</li>
        <li><span className="amount">1/3 cup</span> onion, chopped</li>
        <li><span className="amount">4 1/2 tsp</span> dried basil</li>
        <li><span className="amount">3/4 tsp</span> salt</li>
        <li><span className="amount">1/8 tsp</span>garlic powder</li>
        <li><span className="amount">4 cups</span>cooked chicken, shredded</li>
      </ul>

      <h3>Cheese layers</h3>
      <ul>
        <li><span className="amount">2</span>large eggs, lightly beaten</li>
        <li><span className="amount">4 cups</span>ricotta cheese</li>
        <li><span className="amount">1 tsp</span> salt</li>
        <li><span className="amount">3/4 tsp</span>black pepper</li>
        <li><span className="amount">3 cups</span>mozzarella cheese, shredded</li>
        <li><span className="amount">1/2 cup</span>fresh parsley, chopped</li>
        <li><span className="amount">3/4 cup</span>Parm cheese, grated</li>
      </ul>
    </div>
  )
};

const Lasagna = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Chicken Lasagna</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>50 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>60 - 72 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Bake Time</strong>
                <p>40 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Serves</strong>
                <p>12</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={Lasagna9} alt="chicken lasagna"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> In a large saucepan, combine tomatoes, tomato paste, mushrooms, onion, basil, 3/4 tsp salt, and garlic powder. Bring to a boil. Reduce heat; cover and simmer 25 minutes so the flavors blend together.</p>
              <img src={Lasagna2} alt="tomato mixture"/>
              
              <p>Add chicken and heat through.</p>
              <img src={Lasagna4} alt="chicken mixture"/>

              <p><span className="instruction-step prep-step">Step 2.</span> Preheat oven to 375°F. In a large bowl, combine eggs, ricotta cheese, parmigiano cheese, parsley, pepper, and remaining 1 tsp salt.</p>
              <img src={Lasagna3} alt="cheese mixture"/>

              <p><span className="instruction-step prep-step">Step 3.</span> Place noodles in a 13x9 inch baking dish coated with cooking spray. Layer with a third of the cheese mixture, then chicken mixture, and top with mozzarella cheese. Repeat layers twice, for a total of three layers.</p>
              <img src={Lasagna5} alt="cheese layer"/>
              <img src={Lasagna6} alt="meat layer"/>
              <img src={Lasagna7} alt="cheese layer"/>

              <p>Top with parmigiano cheese and more parsley.</p>
              <img src={Lasagna8} alt="layered lasagna"/>

              <p><span className="instruction-step prep-step">Step 4.</span> Cover with foil and bake 30 minutes. Uncover, bake 10-15 minutes longer, or until bubbly and top is lightly browned. Let stand 15 minutes before cutting.</p>
              <img src={Lasagna9} alt="finished lasagna"/>
              <p className="tip">To prevent overspill into the oven while baking, place a cookie sheet on the bottom rack to catch any drips.</p>

              <p>Pairs great with garlic bread and caesar salad.</p>
              <img src={Lasagna10} alt="lasagna dinner"/>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default Lasagna;
