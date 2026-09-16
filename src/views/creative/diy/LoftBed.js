import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import CreativeDivider from 'components/creativeDivider';
import { CreativeRoutes } from "../index";
import loftBedCover from 'assets/creative/diy/loft-bed6.jpg';
import sanding from 'assets/creative/diy/loft-bed/sanding.jpg';
import stairs from 'assets/creative/diy/loft-bed/stairs.jpg';
import deckEndFrame from 'assets/creative/diy/loft-bed/stairs2.jpeg';
import deckStressTest from 'assets/creative/diy/loft-bed/deck.jpeg';
import stain1 from 'assets/creative/diy/loft-bed/stain.jpg';
import stain2 from 'assets/creative/diy/loft-bed/stain2.jpg';
import finishedLoftBed from 'assets/creative/diy/loft-bed/loft-bed.jpg';
import { Helmet } from 'react-helmet';

const MaterialsList = ({ media }) => {
  return (
    <div className={`${media} materials`}>
      <div className="diy-materials">
        <h3>Cut List</h3>
        <ul>
          <li>2x4 @ 65½" x 4</li>
          <li>2x6 @ 37½" x 2</li>
          <li>2x4 @ 37½" x 5</li>
          <li>2x4 @ 75" x 4</li>
          <li>2x6 @ 75" x 2</li>
          <li>2x2 @ 75" x 2</li>
          <li>2x4 @ 30½" x 2</li>
          <li>2x4 @ 37½" x 2</li>
          <li>2x4 @ 41½" x 1</li>
          <li>2x4 @ 20½" x 2</li>
          <li>2x4 @ 22" x 12</li>
          <li>2x6 @ 43" (45° cuts both ends) x 2</li>
          <li>1x2 @ 7¾" (45° cuts) x 6</li>
          <li>2x4 @ 20½" x 6</li>
        </ul>
      </div>
      <div className="diy-materials">
        <h3>Materials &amp; finishing</h3>
        <ul>
          <li>Varathane Sun Bleached whitewash stain</li>
          <li>Foam brushes</li>
          <li>220-grit sandpaper</li>
          <li>Curtain rod</li>
          <li>Fabric shower curtain</li>
          <li>String of fairy LED lights</li>
        </ul>
      </div>
    </div>
  )
};

const LoftBed = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Loft Bed</title>
        <meta property="og:title" content="Loft Bed" />
        <meta property="og:description" content="Building a DIY loft bed with stairs, from cut list to finished fort underneath." />
        <meta property="og:image" content={loftBedCover} />
        <meta property="og:url" content="https://carynfarvour.design/creative/diy/loft-bed" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="diy-body">
            <h1>Loft Bed</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Tool(s)</strong>
                <ul>
                  <li>Circular saw or miter saw</li>
                  <li>Rigid 5" random orbital sander</li>
                  <li>Black &amp; Decker Mouse detail sander</li>
                  <li>Foam brushes</li>
                </ul>
              </div>
            </div>
            <img src={loftBedCover} alt="finished loft bed" />

            <MaterialsList media="mobile" />

            <div className="diy-instructions">
              <CreativeDivider />

              <p><span className="instruction-step">Step 1. Cut the lumber</span> This build follows Ana White's <a href="https://www.ana-white.com/woodworking-projects/camp-loft-bed-stairs" target="_blank" rel="noreferrer">Camp Loft Bed with Stairs</a> plan — cut all pieces to the cut list before starting assembly.</p>
              {/* TODO: photo - fetching/hauling the lumber */}

              <p><span className="instruction-step">Step 2. Sand every piece</span> Go over every cut piece with an orbital sander, then a detail sander to catch the tight spots, until everything is smooth enough for kids to climb on.</p>
              <img src={sanding} alt="sanding wood pieces for the loft bed" />

              <p><span className="instruction-step">Step 3. Build the staircase</span> Assemble the stair section first — it's the most fiddly part, so getting it done early makes the rest of the build feel more manageable.</p>
              <img src={stairs} alt="loft bed staircase assembly" />

              <p><span className="instruction-step">Step 4. Build the deck end frames</span> Assemble the deck end frames next, then join them with the long rails to form the bed frame.</p>
              <img src={deckEndFrame} alt="finished deck end frame" />

              <p><span className="instruction-step">Step 5. Test structural integrity</span> Before moving on to finishing, stress test the deck to make sure everything is solid.</p>
              <p className="tip">Better to find a wobble now, on the garage floor, than after it's upstairs and assembled.</p>
              <img src={deckStressTest} alt="stress testing the deck of the loft bed" />

              <p><span className="instruction-step">Step 6. Stain and finish</span> Move all the pieces to the garage and finish them assembly-line style: apply Varathane Sun Bleached stain with a foam brush, let dry, then hand-sand with 220-grit paper and wipe away the dust.</p>
              <div className="image-row">
                <img src={stain1} alt="staining loft bed pieces" />
                <img src={stain2} alt="staining loft bed pieces" />
              </div>

              <p><span className="instruction-step">Step 7. Assemble in the room</span> Once everything is stained and dry, move the pieces upstairs and put the bed together in its final spot. Mount a curtain rod along one side and hang a fabric shower curtain to close off a fort space underneath, then add a string of fairy lights for ambiance.</p>
              <img src={finishedLoftBed} alt="finished loft bed" />
            </div>
          </div>

          <MaterialsList media="desktop" />
        </div>
      </div>
    </div>
  );
}

export default LoftBed;
