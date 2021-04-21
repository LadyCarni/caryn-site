import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import cheesecakeCover from 'assets/creative/recipes/recipe-cheesecake4.jpg'
import cheesecake1 from 'assets/creative/recipes/recipe-cheesecake1.jpg'
import cheesecake2 from 'assets/creative/recipes/recipe-cheesecake2.jpg'
import cheesecake3 from 'assets/creative/recipes/recipe-cheesecake3.jpg'


const Cheesecake = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>World's Best Cheesecake</h1>
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
                <strong>Wait Time</strong>
                <p>4 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>5 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Serves</strong>
                <p>12-16</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={cheesecakeCover} alt="cheesecake"/>
            </div>

            <div className="recipe-instructions">
              <h2>Instructions</h2>
              <p><span className="instruction-step prep-step">Step 1.</span> Preheat oven to 475°F. Place a cookie sheet or pan filled with 1/2 inch water in oven on the center rack.</p>

              <p className="tip">Place the pan in the oven, then fill with water using a large measuring cup or pitcher. This will prevent spilling while carrying the pan to the oven with water in it.</p>

              <p><span className="instruction-step stir-step">Step 2.</span>Make crust: Mix graham cracker crumbs and cinnamon; add butter. Press crust onto bottom and up the sides of a 9-inch springform pan lined with parchment. Wrap a large piece of foil around bottom of the outside of the pan. Freeze until filling is prepared.</p>

              <img src={cheesecake1} alt="cheesecake"/>

              <p className="tip">Use a straight-edged cup or a muddler to uniformly press the crust into the pan.</p>

              <img src={cheesecake2} alt="cheesecake"/>
              
              <p><span className="instruction-step stir-step">Step 3.</span>Make filling: Use an electric mixer or stand mixer to mix cream cheese, sugar, sour cream and vanilla. Blend until smooth and creamy. Scrape down sides of bowl. Whisk eggs in a bowl; add to cream cheese mixture. Blend just until eggs are incorporated.</p>

              <p><span className="instruction-step cook-step">Step 4.</span>Remove crust from freezer and pour in filling. Carefully place cheesecake into preheated water bath. Bake for 12 minutes; turn oven down to 350°F and bake until top of cheesecake turns golden, 50 to 60 minutes. Remove cake to a wire rack to cool.</p>

              <img src={cheesecake3} alt="cheesecake"/>
              
              <p><span className="instruction-step decorate-step">Step 5.</span>Make topping: Combine sour cream and sugar; spread over cake. Cover and refrigerate at least 4 hours.</p>

              <img src={cheesecakeCover} alt="cheesecake"/>

              <p><span className="instruction-step serve-step">Step 6.</span>Cut into 12-16 pieces with a wet knife to prevent crumbling. Serve chilled.</p>
            </div>
          </div>

          <div className="recipe-card sticky">
            <h2>Ingredients</h2>
            <h3>Crust</h3>
            <ul>
              <li><span className="amount">3 cups</span>graham cracker crumbs</li>
              <li><span className="amount">1/2 tsp</span>ground cinnamon</li>
              <li><span className="amount">2/3 cup</span>unsalted butter, melted</li>
            </ul>

            <h3>Filling</h3>
            <ul>
              <li><span className="amount">4 (8oz) packages</span> cream cheese, softened</li>
              <li><span className="amount">1 1/4 cups</span>granulated sugar</li>
              <li><span className="amount">1/2 cup</span>sour cream</li>
              <li><span className="amount">2 tsp</span>vanilla extract</li>
              <li><span className="amount">5</span>large eggs</li>
            </ul>

            <h3>Topping</h3>
            <ul>
              <li><span className="amount">1/2 cup</span>sour cream</li>
              <li><span className="amount">2 tsp</span>granulated sugar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cheesecake;
