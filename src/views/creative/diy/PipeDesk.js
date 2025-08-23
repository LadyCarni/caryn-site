import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import pipeDesk from 'assets/creative/diy/pipe-desk14.jpg';
import pipeDesk2 from 'assets/creative/diy/pipe-desk2.jpg';
import pipeDesk3 from 'assets/creative/diy/pipe-desk3.jpg';
import pipeDesk4 from 'assets/creative/diy/pipe-desk4.jpg';
import pipeDesk5 from 'assets/creative/diy/pipe-desk5.jpg';
import pipeDesk6 from 'assets/creative/diy/pipe-desk6.jpg';
import pipeDesk7 from 'assets/creative/diy/pipe-desk7.jpg';
import pipeDesk8 from 'assets/creative/diy/pipe-desk8.jpg';
import pipeDesk9 from 'assets/creative/diy/pipe-desk9.jpg';
import pipeDesk10 from 'assets/creative/diy/pipe-desk10.jpg';
import pipeDesk11 from 'assets/creative/diy/pipe-desk11.jpg';
import pipeDeskBase from 'assets/creative/diy/pipe-desk-schematic.png';
import pipeDesk12 from 'assets/creative/diy/pipe-desk12.jpg';
import pipeDesk13 from 'assets/creative/diy/pipe-desk13.jpg';
import pipeDesk14 from 'assets/creative/diy/pipe-desk14.jpg';
import pipeDesk15 from 'assets/creative/diy/pipe-desk15.jpg';
import pipeDesk16 from 'assets/creative/diy/pipe-desk16.jpg';
import { Helmet } from 'react-helmet';

const MaterialsList = ( {media} ) => {
  return (
    <div className={`${media} materials`}>
      <div className="diy-materials">
        <h3>Materials for 46"x24" desk top</h3>
        <ul>
          <li>7.67 ft² of 3/4" wood</li>
          <li>46 x 24" plywood</li>
          <li>Foam brushes</li>
          <li>Sandpaper</li>
          <li>Stain</li>
          <li>Polyurethane</li>
          <li>(optional) epoxy</li>
          <li>(optional) wood filler</li>
        </ul>
      </div>
      <div className="diy-materials">
        <h3>Materials for 3/4" plumbing pipe frame</h3>
        <ul>
          <li>3/4" flanges x 8</li>
          <li>3/4" tees x 6</li>
          <li>3/4" pipe at 38" x 1 (cross brace/foot rest)</li>
          <li>3/4" pipe at 20.5" x 4 (top of the legs)</li>
          <li>3/4" pipe at 13.5" x 2 (front of the side braces)</li>
          <li>3/4" pipe at 4.5" x 6 (four for the bottom of the legs, two for the back of the side braces)</li>
          <li>Steel wool (for 'sanding' the pipes and scrubbing off any paint or stamps)</li>
          <li>Cleaning supplies (the pipes often come with a bit of oil on them you'll need to clean off)</li>
        </ul>
      </div>
    </div>
  )
};

const PipeDesk = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Pipe Desk</title>
        <meta property="og:title" content="Pipe Desk" />
        <meta property="og:description" content="Step-by-step instructions for making and finishing this wood and pipe desk." />
        <meta property="og:image" content={pipeDesk} />
        <meta property="og:url" content="https://carynfarvour.design/creative/recipes/pipe-desk" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="diy-body">
            <h1>Pipe Desk</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Tool(s)</strong>
                <ul>
                  <li>Table Saw</li>
                  <li>Pipe Wrench</li>
                  <li>Clamps</li>
                  <li>Level</li>
                  <li>Plunge Router (optional)</li>
                  <li>Sander (optional)</li>
                </ul>
              </div>
            </div>
            <img src={pipeDesk} alt="pipe desk"/>

            <MaterialsList media="mobile" />

            <div className="diy-instructions">
              <p><span className="instruction-step">Step 1. Cut the wood</span> Cut your hardwood floor lengths based on a pattern you like, and place on a base layer for your desk top. We used a Russian Birch plywood for the 3/4" tongue and groove hardwood flooring we found at <a href="https://www.timelessmaterials.com/" target="_blank" rel="noreferrer">Timeless Materials</a>. Take your time cutting and figuring out your pattern in this step.</p>
              <img src={pipeDesk2} alt="russian birch plywood"/>

              <p><span className="instruction-step">Step 2. Secure the wood</span>Use a construction adhesive like No More Nails and clamps to place and secure the wood sections you've measured out.</p>
              <img src={pipeDesk4} alt="tools for securing the wood"/>
              <img src={pipeDesk3} alt="using adhesive"/>

              <p>As you place each row, make sure your joints are still nice and tight and you're still flush with the base of your desk top.</p>
              <img src={pipeDesk5} alt="placing the planks"/>

              <p>And of course: always make sure your desk is level!</p>
              <img src={pipeDesk6} alt="checking the level"/>

              <p>In addition to gluing each of the planks down, I also flipped the desk over and put two screws into every board from the bottom. It may not have been totally necessary, but we wanted very strong desks that would stand the test of time.</p>

              <p><span className="instruction-step">Step 3. Prep for finishing</span>I decided to route the edges to give it a nice rounded look. Then sand, sand, sand!</p>
              <img src={pipeDesk7} alt="routered edge"/>

              <p>The picture above shows Jesse routing the bottom of the desk top before we flipped it over and did the top as well, so the whole thing had nice round edges. You can also see the gaps from the tongue-and-groove hardwood planks. I didn't choose to fill those or do anything with them, but you could certainly put some wood filler in there mixed with any sawdust you've got so far (you've kept that, right?!), then you'd have some really clean ends.</p>

              <p className="tip">Fill and hide gaps in the ends of tongue-and-groove with a mixture of wood glue and sawdust. Sand till smooth.</p>

              <p>I just used my little Black and Decker Detail Mouse Sander, and gave the whole thing a few passes until everything was as smooth as I wanted.</p>

              <p><span className="instruction-step">(Optional) Step 4. Epoxy the knots</span>I had this idea of filling in the substantial knots with some clear epoxy. Why? Well my theory was that you'd be able to see right into the knots and how cool would that look?!</p>

              <p>It turns out that filling knot holes with epoxy is a little tricky when the bottom of the planks you're filling are tongue-and-groove... because there's gaps everywhere for the epoxy to drain right into! So what I did was prep the knots that went all the way through the planks by packing a little bit of wood filler and sawdust into the bottom of each. Once that was dry, I filled the holes with epoxy and let those set. Once they're set, you can sand them down to flush with the rest of the desk.</p>

              <p><i>Don't worry about scuffing up the epoxy with sanding, when you seal with the polyurethane, they'll polish right up.</i></p>
              <img src={pipeDesk8} alt="taped off epoxy fill"/>

              <p className="tip">To contain the epoxy, tape as best you can around the knot. Once cured, you can remove the tape and sand everything to flush.</p>

              <p><span className="instruction-step">Step 5. Stain and seal</span>This is where the foam brushes come in handy. You may need two coats for the stain, but I only used one and thought it was plenty (I also never wipe off stain the way you're supposed to). I let the stain completely set for about 24 hours, then I went over both the bottom and top of the desk in two coats of <b>satin finish polyurethane</b>.</p>

              <p>I didn't want something too glossy and as you can see from the pictures below, I got a nice semi-matte finish that came out very smooth and easy on the eyes. And even the knots came out beautifully.</p>
              <img src={pipeDesk9} alt="matte finish"/>
              <img src={pipeDesk10} alt="matte finish"/>
              <img src={pipeDesk11} alt="coated knots"/>

              <p><span className="instruction-step">Step 6. Construct the base</span>You can really do this step at any point during the drying or curing times of your desk top. Using the diagram below, put together the pieces of the base, and secure each with a pipe wrench.</p>
              <img src={pipeDeskBase} alt="pipe desk base schematic"/>

              <p>This step takes a fair bit of patience, as you'll need to tighten each section, while also getting it all level and the right height you want.</p>
              <img src={pipeDesk12} alt="pipe desk base"/>

              <p>We also decided to add some <a href="https://www.ikea.com/gb/en/p/signum-cable-trunking-horizontal-silver-colour-30200253/" target="_blank" rel="noreferrer">Ikea cable management trays</a> underneath.</p>
              <img src={pipeDesk13} alt="pipe desk base"/>

              <h2>Final Result</h2>
              <p>In the end, the desk turned out beautifully! It did exactly what I needed it to do, and fit exactly where I wanted it.</p>
              <img src={pipeDesk14} alt="pipe desk finished"/>
              <img src={pipeDesk15} alt="pipe desk finished"/>
              <img src={pipeDesk16} alt="pipe desk finished"/>
            </div>
          </div>

          <MaterialsList media="desktop" />
        </div>
      </div>
    </div>
  );
}

export default PipeDesk;
