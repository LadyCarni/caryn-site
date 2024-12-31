import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import vinylElephant from 'assets/creative/crafts/vinyl-elephant.jpg';
import vinylElephant2 from 'assets/creative/crafts/vinyl-elephant2.jpg';
import vinylElephant3 from 'assets/creative/crafts/vinyl-elephant3.jpg';
import { Helmet } from 'react-helmet';

const VinylElephant = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Vinyl Elephant</title>
        <meta property="og:title" content="Vinyl Elephant" />
        <meta property="og:description" content="How to make and hang this vinyl elephant." />
        <meta property="og:image" content={vinylElephant} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/vinyl-elephant" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="craft-body">
            <h1>Vinyl Elephant</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Tool(s)</strong>
                <ul>
                  <li>Vector editing software</li>
                  <li>Cricut Maker</li>
                  <li>Scraper & Weeder</li>
                  <li>Vinyl</li>
                  <li>Transfer Tape</li>
                  <li>12" Cricut LightGrip (blue) Machine Mat</li>
                </ul>
              </div>
            </div>

            <img src={vinylElephant} alt="vinyl elephant"/>

            <p>This wall vinyl was created as a feature in a bathroom refresh.</p>

            <div className="craft-instructions">
              <p><span className="instruction-step">Step 1.</span> First, create a custom SVG in (using Illustrator or some other SVG editing tool) as the path for the Cricut. Standard Cricut mats are 12" square. To get the vinyl to the size I wanted (24" square), I divided the design into four 12" sections that I would visually align during installation using a laser level.</p>

              <p><span className="instruction-step">Step 2.</span> Using a standard cutting mat, and matte black permanent vinyl, I set the Cricut to cut each of the four sections of the Elephant, then carefully weeded each section.</p>
              <img src={vinylElephant3} alt="vinyl elephant section"/>

              <p><span className="instruction-step">Step 3.</span> After carefully transferring each vinyl to medium-adhesion transfer tape, installation is relatively simple. I run over each section with the small scraper until I'm confident the vinyl has adhered to the wall. Then, starting from a corner, I pull the transfer tape on a 45 degree angle away from the wall, going down; being sure to keep the pressure as close to the wall as possible to avoid accidentally tearing or stretching the vinyl.</p>
              <img src={vinylElephant2} alt="vinyl elephant transfer"/>

              <p>Vinyls are a fun way to add something interesting to your wall, in a non-permanent way.</p>
              <img src={vinylElephant} alt="vinyl elephant"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VinylElephant;
