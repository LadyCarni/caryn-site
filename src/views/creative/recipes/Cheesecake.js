import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import cheesecakeCover from 'assets/creative/recipes/recipe-cheesecake4.jpg'


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
                <p>50 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Total Time</strong>
                <p>65 minutes</p>
              </div>
              <div className="prep-info-detail">
                <strong>Serves</strong>
                <p>12-16</p>
              </div>
            </div>
            <div className="recipe-cover">
              <img src={cheesecakeCover} alt="cheesecake"/>
            </div>
          </div>
          <div className="recipe-card sticky">
            <h2>Ingredients</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cheesecake;
