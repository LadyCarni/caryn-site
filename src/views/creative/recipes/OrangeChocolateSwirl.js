import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import ChocolateOrange from 'assets/creative/recipes/recipe-chocolate-orange1.jpg';
import ChocolateOrange2 from 'assets/creative/recipes/recipe-chocolate-orange2.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3>Cookie dough</h3>
      <ul>
        <li><span className="amount">1 cup</span>butter, softened</li>
        <li><span className="amount">1 cup</span>sugar</li>
        <li><span className="amount">1</span>large egg</li>
        <li><span className="amount">1 tsp</span>vanilla extract</li>
        <li><span className="amount">3 cups</span>all purpose flour</li>
        <li><span className="amount">1.5 tsp</span>baking powder</li>
        <li><span className="amount">1/4 tsp</span>salt</li>
        <li><span className="amount">1/4 tsp</span>grated orange rind</li>
        <li><span className="amount">1.5 tsp</span>orange extract</li>
        <li><span className="amount">2 x 1oz squares</span>semi-sweet chocolate, melted and cooled</li>
      </ul>
    </div>
  )
};

const ChocolateOrangeSwirl = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Chocolate Orange Swirl Cookies</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>40 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Wait Time</strong>
                <p>2 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>10-12 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>~ 3 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Makes</strong>
                <p>2 dozen cookies</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={ChocolateOrange} alt="Chocolate orange cookies"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step stir-step">Step 1.</span> Beat butter at medium speed with a stand or hand mixer. Add egg and vanilla; beat well.</p>

              <p className="tip">For the best softened butter, leave out at room temperature for approximately 2 hours before you intend to begin.</p>

              <p><span className="instruction-step stir-step">Step 2.</span> Combine flour, baking powder, and salt; stir well. Add flour mixture to butter mixture, beating at low speed.</p>

              <p className="tip">Add the dry mixture slowly by scooping in 1/2 cup increments until fully incorporated.</p>
              
              <p><span className="instruction-step stir-step">Step 3.</span> Remove half of dough from bowl. Add orange rind and orange extract to dough in bowl and mix well (hands work best for this step). Remove orange dough from bowl and set aside. Return plain dough to bowl; add melted chocolate, mixing well (start with a spoon, finish with hands). Cover and chill both portions of dough for 1 hour.</p>

              <p><span className="instruction-step prep-step">Step 4.</span> Roll each half of dough to a 15" x 8" rectangle on floured wax paper. Place orange dough on top of chocolate dough; peel off top wax paper. Tightly roll dough, jellyroll fashion, starting at short side and peeling wax paper from dough while rolling. Cover and chill for 1 hour.</p>

              <p className="tip">To avoid any flat sides on the roll, turn the roll half way through the second chilling time.</p>

              <p><span className="instruction-step cook-step">Step 5.</span> Using a sharp knife, slice the dough into 1/4" slices; place on ungreased cookie sheets. Bake at 350°F for 10-12 minutes. Remove to wire racks to cool.</p>

              <img src={ChocolateOrange2} alt="Chocolate orange on cookie sheet"/>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default ChocolateOrangeSwirl;
