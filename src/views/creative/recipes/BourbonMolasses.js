import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { Helmet } from 'react-helmet';
import { CreativeRoutes } from "../index";
import BourbonMolassesDone from 'assets/creative/recipes/bourbon-molasses-done.jpg';
import BourbonMolassesPrep from 'assets/creative/recipes/bourbon-molasses-prep.jpg';

const Ingredients = ( {media} ) => {
  return (
    <div className={`${media} recipe-card`}>
      <h2>Ingredients</h2>
      <h3></h3>
      <ul>
        <li><span className="amount">4 2/3 cups</span>all-purpose flour</li>
        <li><span className="amount">1 Tbsp</span>baking soda</li>
        <li><span className="amount">1 1/2 Tbsp</span>ground ginger</li>
        <li><span className="amount">1 1/2 tsp</span>ground cinnamon</li>
        <li><span className="amount">1 tsp</span>ground cloves</li>
        <li><span className="amount">1/2 tsp</span>ground allspice</li>
        <li><span className="amount">1 TINY pinch</span>finely ground black pepper</li>
        <li><span className="amount">1/2 tsp</span>salt</li>
        <li><span className="amount">12 ounces (1 1/2 cups)</span>unsalted butter, room temperature</li>
        <li><span className="amount">2 1/4 cups</span>light brown sugar, packed</li>
        <li><span className="amount">1 tsp</span>vanilla extract</li>
        <li><span className="amount">1/2 tsp</span>finely grated orange zest</li>
        <li><span className="amount">2</span>large eggs, room temperature</li>
        <li><span className="amount">1/2 cup</span>molasses</li>
        <li><span className="amount">3 Tbsp</span>bourbon</li>
        <li><span className="amount">1/2 cup</span>granulated sugar (for coating)</li>
      </ul>
    </div>
  )
};

const BourbonMolassesCookie = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Bourbon Molasses Cookies Recipe</title>
        <meta property="og:title" content="Bourbon Molasses Cookies Recipe" />
        <meta property="og:description" content="Step by step bourbon molasses cookies recipe." />
        <meta property="og:image" content={BourbonMolassesDone} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/bourbon-molasses-cookie" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="recipe-body">
            <h1>Bourbon Molasses Cookies</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Prep Time</strong>
                <p>20 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Wait Time</strong>
                <p>4 hours</p>
              </div>
              <div className="prep-info-detail">
                <strong>Cook Time</strong>
                <p>10 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>4 hours 30 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Servings</strong>
                <p>2 dozen</p>
              </div>
            </div>

            <div className="recipe-cover">
              <img src={BourbonMolassesDone} alt="bourbon molasses cookies"/>
            </div>

            <Ingredients media="mobile" />

            <div className="recipe-instructions">
              <h2>Instructions</h2>

              <p className="tip">The cookie dough in this recipe needs to chill for at least 4 hours, so prepare accordingly! You can also chill them for up to 72 hours, or you can scoop and freeze them for up to 2 months!</p>

              <p><span className="instruction-step stir-step">Step 1.</span> In a medium bowl, whisk together flour, baking soda, ground ginger, cinnamon, cloves, allspice, black pepper, and salt. Set aside.</p>

              <p><span className="instruction-step stir-step">Step 2.</span> In the bowl of a stand mixer fitted with the paddle attachment, or in a large bowl using a handheld electric mixer, beat together the butter and brown sugar on medium-high speed until the mixture is light and fluffy, about 2 minutes, scraping down the sides as needed. Add in the vanilla and orange zest and beat until combined. Reduce the mixer speed to medium-low. Add in the eggs, one at a time, beating well after each addition. Add in the molasses and bourbon and beat until combined. Gradually add in the dry ingredients and beat until it's evenly incorporated.</p>

              <p><span className="instruction-step prep-step">Step 3.</span> Cover the bowl and refrigerate for at least 4 hours, and up to 3 days.</p>

              <h2>When you're ready to bake</h2>

              <p><span className="instruction-step prep-step">Step 1.</span> Preheat the oven to 350°F.</p>

              <p><span className="instruction-step prep-step">Step 2.</span> Prepare two of your favorite cookie sheets.</p>

              <p><span className="instruction-step stir-step">Step 3.</span> Roll the dough into 3 Tablespoon sized balls. Fill a small and shallow bowl with granulated sugar. Roll each ball in the sugar until it's completely coated. Place the sugar coated cookie dough balls on the prepared baking sheets, leaving 2 inches between each ball for spreading.</p>

              <img src={BourbonMolassesPrep} alt="preparing bourbon molasses cookies"/>

              <p><span className="instruction-step cook-step">Step 4.</span> Bake, one tray at a time, for 8 to 10 minutes, or until the cookies have puffed up and have begun to slightly crack on top. (They will crack more as they cool, so don't over bake!)</p>

              <p><span className="instruction-step prep-step">Step 5.</span> Remove from the oven and place the pan on a cooling rack. Cool cookies for 5 minutes on the baking sheet, then carefully transfer the cookies to a separate cooling rack to cool completely.</p>

              <p><span className='instruction-step serve-step'>Step 6.</span> Serve cookies warm, or completely cool them and store them in an airtight container for up to 4 days.  Cookies may also be frozen for up to 3 months.</p>
            </div>
          </div>

          <Ingredients media="desktop sticky" />
        </div>
      </div>
    </div>
  )
}

export default BourbonMolassesCookie;
