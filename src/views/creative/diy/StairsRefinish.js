import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import CreativeDivider from 'components/creativeDivider';
import { CreativeRoutes } from "../index";
import { Helmet } from 'react-helmet';
import stairsCover from 'assets/creative/diy/stairs19.jpg';
import stairsBefore from 'assets/creative/diy/stairs-refinish/stairs-before.jpg';
import stairsBeforeState from 'assets/creative/diy/stairs-refinish/stairs-before-state.jpg';
import stairsRaw from 'assets/creative/diy/stairs-refinish/stairs-raw.jpg';
import stairsWalls from 'assets/creative/diy/stairs-refinish/stairs-walls.jpg';
import stairsStaples from 'assets/creative/diy/stairs-refinish/stairs-staples.jpg';
import stairsPadding from 'assets/creative/diy/stairs-refinish/stairs-padding.jpg';
import stairsProtection from 'assets/creative/diy/stairs-refinish/stairs-protection.jpg';
import stairsStripTools from 'assets/creative/diy/stairs-refinish/stairs-strip-tools.jpg';
import stairsStripTools2 from 'assets/creative/diy/stairs-refinish/stairs-strip-tools2.jpg';
import stairsStripBefore from 'assets/creative/diy/stairs-refinish/stairs-strip-before.jpg';
import stairsStripBeforeAfter from 'assets/creative/diy/stairs-refinish/stairs-strip-before-after.jpg';
import stairsBeforeProgress from 'assets/creative/diy/stairs-refinish/stairs-before-progress.jpg';
import stairsCornerBefore from 'assets/creative/diy/stairs-refinish/stairs-corner-before.jpg';
import stairsCornerPrep from 'assets/creative/diy/stairs-refinish/stairs-corner-prep.jpg';
import stairsCornerStrip from 'assets/creative/diy/stairs-refinish/stairs-corner-strip.jpg';
import stairsCornerPieces from 'assets/creative/diy/stairs-refinish/stairs-corner-pieces.jpg';
import stairsStainAccident from 'assets/creative/diy/stairs-refinish/stairs-stain-accident.jpg';
import stairsStain from 'assets/creative/diy/stairs-refinish/stairs-stain.jpg';
import stairsStainAlternating from 'assets/creative/diy/stairs-refinish/stairs-stain-alternating.jpg';
import stairsStepStain from 'assets/creative/diy/stairs-refinish/stairs-step-stain.jpg';
import stairsStainLanding from 'assets/creative/diy/stairs-refinish/stairs-stain-landing.jpg';
import stairsStainLanding2 from 'assets/creative/diy/stairs-refinish/stairs-stain-landing2.jpg';
import stairsStainDone from 'assets/creative/diy/stairs-refinish/stairs-stain-done.jpg';
import stairsCap from 'assets/creative/diy/stairs-refinish/stairs-cap.jpg';
import stairsCapsDone from 'assets/creative/diy/stairs-refinish/stairs-caps-done.jpg';
import stairsCapped from 'assets/creative/diy/stairs-refinish/stairs-capped.jpg';
import stairsTrim from 'assets/creative/diy/stairs-refinish/stairs-trim.jpg';
import stairsRailing from 'assets/creative/diy/stairs-refinish/stairs-railing.jpg';
import stairsRiserFace from 'assets/creative/diy/stairs-refinish/stairs-riser-face.jpg';
import stairsLandingProgress from 'assets/creative/diy/stairs-refinish/stairs-landing-progress.jpg';
import stairsDad from 'assets/creative/diy/stairs-refinish/stairs-dad.jpg';
import stairsDone from 'assets/creative/diy/stairs-refinish/stairs-done.jpg';
import stairsBeforeAfter from 'assets/creative/diy/stairs-refinish/before-after.jpg';

const MaterialsList = ({ media }) => {
  return (
    <div className={`${media} materials`}>
      <div className="diy-materials">
        <h3>Materials &amp; finishing</h3>
        <ul>
          <li>Construction adhesive</li>
          <li>Stain</li>
          <li>Paint</li>
          <li>Polyurethane</li>
          <li>Stair caps with noses</li>
          <li>Hardwood for landings &amp; corner pieces</li>
        </ul>
      </div>
    </div>
  )
};

const StairsRefinish = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Stairs Refinish</title>
        <meta property="og:title" content="Stairs Refinish" />
        <meta property="og:description" content="TODO: one-sentence description" />
        <meta property="og:image" content={stairsCover} />
        <meta property="og:url" content="https://carynfarvour.design/creative/diy/stairs-refinish" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="diy-body">
            <h1>Stairs Refinish</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Tool(s)</strong>
                <ul>
                  <li>Hammer</li>
                  <li>Pry bar</li>
                  <li>Nail puller pliers</li>
                  <li>Rotary sander</li>
                  <li>Mouse sander</li>
                  <li>Sandpaper</li>
                  <li>Heat gun</li>
                  <li>Nail gun &amp; air compressor</li>
                  <li>Reciprocating saw (for cutting off the stair noses)</li>
                </ul>
              </div>
            </div>
            <img src={stairsBeforeAfter} alt="stairs before and after" />

            <MaterialsList media="mobile" />

            <div className="diy-instructions">
              <CreativeDivider />

              <p>One day in November 2017, we were eating dinner and suddenly it was decided that the carpet on the stairs had to go. We finished dinner and immediately started tearing the carpet up. The year is important, because we didn't know at the time just how much work stairs are, and therefore we didn't know that this project was going to end up taking almost two full years to complete.</p>

              <p><span className="instruction-step">Step 1. Remove old carpet</span> The first uh-oh moment was the very first stair. The state of the underpad, the amount of dust and debris under it all, and the sheer quantity of staples were unreal. But once we started, there was no going back.</p>
              <img className="half-width" src={stairsBefore} alt="stairs before" />
              <img src={stairsPadding} alt="stairs old carpet" />
              <img src={stairsStaples} alt="stairs old staples" />

              <p>The stairs underneath were made up of pieces of plywood that werent't even flush or straight in spots. Assorted screws, drywall pieces, and small rocks and other debris were jammed up in between the pieces of plywood.</p>
              <img src={stairsBeforeState} alt="gaps and mess on stairs" />

              <p>Once we had enough of the carpet off, we were able to start assessing the integrity of the stairs themselves.</p>
              <img src={stairsRaw} alt="stairs construction" />

              <p>This moment of truth was when we decided we likely wouldn't be able to simply refinish and stain or paint the stairs. We were going to need another plan.</p>
              <img className="half-width" src={stairsBeforeProgress} alt="removed carpet" />

              <p><span className="instruction-step">Step 2. Remove old stair noses</span> We decided that we'd need to get caps to go over the existing stairs, that included their own bullnose. So that meant we needed to cut off the existing nose of each stair. The reciprocating saw and a chisel were the brute force tools for this job.</p>
              <img src={stairsTrim} alt="removing old stair noses" />

              <p><span className="instruction-step">Step 3. New stair caps and risers</span> We picked up some stair caps and riser kits that could be secured over the existing stairs. This enabled us to refinish the stairs without having to get them completely rebuilt.</p>
              <img src={stairsCap} alt="capping old stairs" />
              <img src={stairsCornerPrep} alt="new stair riser caps" />
              <img className="half-width" src={stairsCapped} alt="finished capped stairs" />

              <p><span className="instruction-step">Step 4. Hardwood landing and corners</span> For the big landing at the bottom and the corner steps, we laid down hardwood.</p>
              <img src={stairsLandingProgress} alt="landing hardwood" />

              <p>One of the many lessons we learned is how tricky it is to get hardwood cut at the right angle to sit flush. Thankfully my dad (who's a general contractor) was able to fly out and help with this part of the project so it was professionally done!</p>
              <img className="half-width" src={stairsDad} alt="dad helping with stairs" />

              <p>At this point, it had been almost two years since we started. We realized throughout this project that there's a good reason refinishing stairs runs at such a high price tag when you get quotes from contracting companies!</p>
              <img className="half-width" src={stairsCornerBefore} alt="hardwood corner stair" />

              <p>Once the last of the stairs had its hardwood, we were able to see the light at the end of this very long tunnel!</p>
              <img className="half-width" src={stairsCornerPieces} alt="finished corner steps" />
              <img src={stairsCapsDone} alt="finished capped and hardwood stairs" />

              <p><span className="instruction-step">Step 5. Strip hardwood</span> Initially, I had tried to find unfinished hardwood so we could stain it and seal it the same color as the rest of the stairs, but I couldn't find any so I ended up just sanding and stripping the wood myself. This was very tedious and took much longer than I'd have preferred! I only realized after the first step how much easier it was to strip the finish off the hardwood pieces before they were installed, so the final two corner steps were a lot less work.</p>
              <img src={stairsStripTools2} alt="stripping hardwood tools" />
              <img src={stairsStripBefore} alt="hardwood landing being stripped" />
              <img src={stairsCornerStrip} alt="hardwood stripping progress" />
              <img src={stairsStripTools} alt="stripping hardwood tools" />
              <img src={stairsStripBeforeAfter} alt="wood stripping close up" />

              <p><span className="instruction-step">Step 6. Paint stair risers</span> Painting the risers to  bring a bright look to the stairs was next on my list.</p>
              <img className="half-width" src={stairsRiserFace} alt="stair riser painting" />

              <p><span className="instruction-step">Step 7. Stain steps</span> I chose a deep, dark stain for the steps to bring out the wood grain and to create a depth of character for the stairs.</p>
              <img src={stairsStain} alt="step stain" />

              <p>Several thin layers of the stain were necessary to achieve the depth of color I wanted to achieve.</p>
              <img className="half-width" src={stairsStainLanding} alt="landing step stain layer 1" />

              <p>Once the first step and the landing were finished, I could see the vision coming to life.</p>
              <img className="half-width" src={stairsStainLanding2} alt="landing step stain layer 2" />

              <p>I knew early on that staining the steps themselves was going to be a challenge while still needing to access the top floor, especially with kids and pets running around. Even with all the precautions I could devise, our bengal cat, Nyx, managed to run right through it to create this memorable photo!</p>
              <img className="half-width" src={stairsStainAccident} alt="cat tracks in stain" />

              <p>The first trick I tried was a small section of foam propped up to block the stair currently being stained. However that wasn't entirely practical and didn't stay in place.</p>
              <img className="half-width" src={stairsProtection} alt="step protection attempt" />

              <p>I ended up cutting a section of paper from a large roll I had and taped it over the wet step. This proved to be the best method, and both kids and cat had no issues avoiding the step while it dried.</p>
              <img className="half-width" src={stairsStepStain} alt="step protection with paper" />

              <p>A tip I used was to work on alternating steps, and do our best to walk on the unfinished stairs while the finished ones dried and cured.</p>
              <img src={stairsStainAlternating} alt="staining alternating steps" />

              <p><span className="instruction-step">Step 8. Stain railings</span> It was around this time that I also painted the stairwell a fresh neutral color; getting away from the unpleasant taupe it had been previously. We also replaced the light fixture with something more modern and playful.</p>
              <img className="half-width" src={stairsWalls} alt="railing stain progress" />

              <p>Staining the railing was relatively painless, after all the trials of the stairs, so thankfully this went smoothly and quickly.</p>
              <img className="half-width" src={stairsStainDone} alt="railing stain progress" />

              <p><span className="instruction-step">Results</span> In 2020 we finished the stairs, and they were as beautiful as I'd imagined when we started in 2017. I was pleased with the result, but we also admitted that refinishing stairs was a project neither of us would ever take on again!</p>
              <img src={stairsRailing} alt="finished stairs view from above" />
              <img className="half-width" src={stairsDone} alt="finished stairs from below" />
            </div>
          </div>

          <MaterialsList media="desktop" />
        </div>
      </div>
    </div>
  );
}

export default StairsRefinish;
