import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import CreativeDivider from 'components/creativeDivider';
import { CreativeRoutes } from "../index";
import quiltCover from 'assets/creative/crafts/tan-quilt1.jpg';
import halfSquareTriangles from 'assets/creative/crafts/sarah-quilt/DSC_4307m.jpg';
import flyingGeese from 'assets/creative/crafts/sarah-quilt/DSC_4309m.jpg';
import blockAssemblySteps from 'assets/creative/crafts/sarah-quilt/sarahs_choice_steps.jpg';
import finishedBlock from 'assets/creative/crafts/sarah-quilt/DSC_4311m.jpg';
import blocksLaidOut1 from 'assets/creative/crafts/sarah-quilt/DSC_5071.jpg';
import blocksLaidOut2 from 'assets/creative/crafts/sarah-quilt/DSC_5072.jpg';
import sashingExample from 'assets/creative/crafts/sarah-quilt/quilt-sashing-example.jpg';
import quiltFront from 'assets/creative/crafts/sarah-quilt/DSC_5081.jpg';
import sprayBasting from 'assets/creative/crafts/sarah-quilt/DSC_5101.jpg';
import machineQuilting2 from 'assets/creative/crafts/sarah-quilt/DSC_5100.jpg';
import { Helmet } from 'react-helmet';

const MaterialsList = ({ media }) => {
  return (
    <div className={`${media} materials`}>
      <div className="diy-materials">
        <h3>Quilt Details</h3>
        <ul>
          <li>Quilt Block Pattern: <a href="https://www.rileyblakedesigns.com/assets/images/sewalongs/BuildingBlocks/2022/SarahsChoice.pdf" target="_blank" rel="noreferrer">Sarah's Choice</a></li>
          <li>Approximate Finished Quilt Size: King Size (100" x 100")</li>
          <li>Blocks: 14" x 14" (x36)</li>
        </ul>
      </div>
      <div className="diy-materials">
        <h3>Fabric</h3>
        <ul>
          <li>Dark brown: 2 yards</li>
          <li>Blue: 2 yards</li>
          <li>Cream: 4.5 yards</li>
        </ul>
      </div>
      <div className="diy-materials">
        <h3>Batting, backing & finishing</h3>
        <ul>
          <li>Warm &amp; Natural cotton batting: 3 meters</li>
          <li>Wide backing fabric: 3 meters</li>
          <li>Thread (5+ spools)</li>
          <li>Temporary adhesive spray</li>
        </ul>
      </div>
    </div>
  )
};

const SarahsChoiceQuilt = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Sarah's Choice Quilt</title>
        <meta property="og:title" content="Sarah's Choice Quilt" />
        <meta property="og:description" content="Piecing, assembling, and machine quilting a king-size Sarah's Choice quilt." />
        <meta property="og:image" content={quiltCover} />
        <meta property="og:url" content="https://carynfarvour.design/creative/crafts/sarahs-choice-quilt" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="craft-body">
            <h1>Sarah's Choice Quilt</h1>
            <div className="prep-info-detail">
              <strong>Tool(s)</strong>
              <ul>
                <li>Sewing machine (Janome 2030 QC)</li>
                <li>Walking foot</li>
                <li>Rotary cutter &amp; mat</li>
                <li>Quilting gloves (Fons &amp; Porter)</li>
              </ul>
            </div>
            <img src={quiltCover} alt="Sarah's Choice quilt" />
            {/* TODO: swap in a real in-progress/finished photo set from the king quilt Drive folder */}

            <MaterialsList media="mobile" />

            <div className="craft-instructions">
              <CreativeDivider />

              <p><span className="instruction-step">Step 1. Piece the half-square triangles</span> Using the sandwich method, sew a dark brown square to a blue square (starting from 4 1/4" squares of each), then trim and press open into half-square triangle units.</p>
              <img src={halfSquareTriangles} alt="half-square triangle units" />

              <p><span className="instruction-step">Step 2. Piece the flying geese units</span> Using the quick flying geese method, combine 4 x 7" cream rectangles with dark brown and blue squares to make the flying geese units with contrasting triangle ends.</p>
              <img src={flyingGeese} alt="flying geese units" />

              <p><span className="instruction-step">Step 3. Assemble the blocks</span> Arrange the pieced units and background squares into three rows per block, then sew the rows together, pressing seam allowances as you go. Repeat for all 36 blocks.</p>
              <p className="tip">Getting the corners to line up perfectly takes practice on the first few blocks — press seams consistently and it gets easier.</p>
              <img src={blockAssemblySteps} alt="Sarah's Choice block assembly steps" />
              <img src={finishedBlock} alt="finished quilt block" />

              <p><span className="instruction-step">Step 4. Lay out the quilt</span> Lay all the blocks out (the living room floor works well) alternating pieced blocks with plain pinwheel blocks, and double check the arrangement before sewing anything together.</p>
              <div className="image-row">
                <img src={blocksLaidOut2} alt="quilt blocks laid out" />
                <img src={blocksLaidOut1} alt="quilt blocks laid out" />
              </div>

              <p><span className="instruction-step">Step 5. Sew rows with sashing and cornerstones</span> Sew blocks into rows with sashing strips between them. Separately, sew sashing and cornerstones into their own rows. Join everything together, keeping a consistent 1/4" seam allowance throughout, to complete the quilt front.</p>
              <img src={sashingExample} alt="quilt sashing example" />
              <img src={quiltFront} alt="finished quilt front" />

              <p><span className="instruction-step">Step 6. Baste the quilt sandwich</span> Layer the backing, batting, and pieced top using a temporary adhesive spray instead of safety pins — it doesn't gum up needles, and it washes out in a normal wash cycle.</p>
              <img className="half-width" src={sprayBasting} alt="spray basting the quilt sandwich" />

              <p><span className="instruction-step">Step 7. Machine quilt</span> Using a walking foot and quilting gloves for grip, quilt through all three layers. Keep a few extra spools of thread on hand — a project this size can run through five or more.</p>
              <img src={machineQuilting2} alt="machine quilting setup" />
            </div>
          </div>

          <MaterialsList media="desktop" />
        </div>
      </div>
    </div>
  );
}

export default SarahsChoiceQuilt;
