import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import CreativeDivider from 'components/creativeDivider';
import { CreativeRoutes } from "../index";
import { Helmet } from 'react-helmet';
import buffetCover from 'assets/creative/diy/buffet23.jpg';
import buffet1 from 'assets/creative/diy/buffet-refurbish/buffet1.jpg';
import buffet2 from 'assets/creative/diy/buffet-refurbish/buffet2.jpg';
import buffet3 from 'assets/creative/diy/buffet-refurbish/buffet3.jpg';
import buffet4 from 'assets/creative/diy/buffet-refurbish/buffet4.jpg';
import buffet5 from 'assets/creative/diy/buffet-refurbish/buffet5.jpg';
import buffet6 from 'assets/creative/diy/buffet-refurbish/buffet6.jpg';
import buffet7 from 'assets/creative/diy/buffet-refurbish/buffet7.jpg';
import buffet8 from 'assets/creative/diy/buffet-refurbish/buffet8.jpg';
import buffet9 from 'assets/creative/diy/buffet-refurbish/buffet9.jpg';
import buffet10 from 'assets/creative/diy/buffet-refurbish/buffet10.jpg';
import buffet11 from 'assets/creative/diy/buffet-refurbish/buffet11.jpg';
import buffet12 from 'assets/creative/diy/buffet-refurbish/buffet12.jpg';
import buffet13 from 'assets/creative/diy/buffet-refurbish/buffet13.jpg';
import buffet14 from 'assets/creative/diy/buffet-refurbish/buffet14.jpg';
import buffet15 from 'assets/creative/diy/buffet-refurbish/buffet15.jpg';
import buffet16 from 'assets/creative/diy/buffet-refurbish/buffet16.jpg';
import buffet17 from 'assets/creative/diy/buffet-refurbish/buffet17.jpg';
import buffet18 from 'assets/creative/diy/buffet-refurbish/buffet18.jpg';
import buffet20 from 'assets/creative/diy/buffet-refurbish/buffet20.jpg';

const MaterialsList = ({ media }) => {
  return (
    <div className={`${media} materials`}>
      <div className="diy-materials">
        <h3>Materials &amp; finishing</h3>
        <ul>
          <li>Solid wood buffet</li>
          <li>Drawer &amp; cupboard pulls</li>
          <li>Hinges</li>
          <li>Polyurethane</li>
          <li>Chalk paint</li>
          <li>Tinted wax</li>
        </ul>
      </div>
    </div>
  )
};

const BuffetRefurbish = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Buffet Refurbish</title>
        <meta property="og:title" content="Buffet Refurbish" />
        <meta property="og:description" content="Refinishing a solid wood buffet with chalk paint, tinted wax, and a polished walnut top." />
        <meta property="og:image" content={buffetCover} />
        <meta property="og:url" content="https://carynfarvour.design/creative/diy/buffet-refurbish" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="diy-body">
            <h1>Buffet Refurbish</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Tool(s)</strong>
                <ul>
                  <li>3M Respirator</li>
                  <li>Safety glasses</li>
                  <li>Orbital sander</li>
                  <li>Mouse sander (for fine details)</li>
                  <li>Wire brush</li>
                  <li>Sandpaper (various incremental grits)</li>
                  <li>Sanding sponge</li>
                </ul>
              </div>
            </div>
            <img src={buffetCover} alt="refinished buffet" />

            <MaterialsList media="mobile" />

            <div className="diy-instructions">
              <CreativeDivider />

              <p><span className="instruction-step">Step 1. Acquire furniture</span> I found this buffet for sale by the owner online, and immediately saw the potential in it. Walnut top, solid wood base, cabinets, and drawers. I did end up learning a hard little lesson about wood veneer when refinishing the top but more about that later!</p>
              <img src={buffet1} alt="buffet to refurbish" />

              <p><span className="instruction-step">Step 2. Sand, sand, sand!</span> Once I got the piece in the garage, and got the cabinet doors uninstalled, the drawers removed, and the piece completely cleaned, I did a ton of investigation on the nooks and crannies I was working with.</p>
              <img src={buffet6} alt="buffet refurbish sand" />
              <img src={buffet2} alt="buffet refurbish sand" />

              <p>The trick I eventually learned for the fine details was a combination of sponge sanding block and wire brush. I initially did try to strip off the old seal and stain with a few different chemicals, but the limits of my chemical stripping experience quickly showed itself, so I went the route of good old elbow grease!</p>
              <img src={buffet3} alt="buffet refurbish details" />

              <p>Initially when I started this project, I was sure what I was going to end up doing when I got the refinish stage itself. But when I looked closer at the top of this piece, I realized how pretty the grain was. After giving it a good sand, I decided that I was going to end up keeping the wood grain on top and just seal it up to protect it.</p>

              <img src={buffet4} alt="buffet refurbish sand" />
              <img src={buffet5} alt="buffet refurbish sand" />

              <p><span className="instruction-step">Step 4. Buffet Top</span> I polished and did several coats of poly to bring out the life of the walnut veneer top.</p>
              <img src={buffet20} alt="buffet refurbish walnut top" />

              <p className="tip">To test whether a surface is veneer or solid wood, examine the edges to see if the wood grain continues, or look for damage on its surface to see if a thin layer may be lifting from a different material base. You can still sand and refinish veneer, but you have to be very careful to not over-sand or you'll go right through that thin layer of wood.</p>

              <p><span className="instruction-step">Step 5. Cabinet doors</span> Once everything was sanded down, I started painting the cabinet doors. I chose a cream colored chalk paint for the outside, and a vibrant blue for the inside for something fun and different. To accentuate the details, I used a tinted wax in the crevices, then dry brushed back over the high areas.</p>
              <img src={buffet7} alt="buffet refurbish doors" />

              <p>I distressed the piece to give it that (albeit trendy) 'shabby chic' look.</p>
              <img src={buffet8} alt="buffet refurbish doors" />

              <p>Once everything was painted and resealed, I installed the new hardware and hinges and gave it a test run to get a preview!</p>
              <img src={buffet9} alt="buffet refurbish doors" />

              <p>The hardware I chose was a hammered black traditional set of cabinet and drawer pulls.</p>
              <img src={buffet10} alt="buffet refurbish hardware" />

              <p><span className="instruction-step">Step 6. Drawers</span> For the drawers, I followed the same steps as the cabinets. Sand, chalk paint, wax, dry brush, seal. With the same vibrant blue for the inner pieces of the drawers.</p>
              <img src={buffet11} alt="buffet refurbish drawers" />
              <img src={buffet12} alt="buffet refurbish drawers" />
              <img src={buffet13} alt="buffet refurbish drawers" />

              <p><span className="instruction-step">Step 7. Base Paint</span> Painting the base was certainly the most challenging and most detailed part of the entire project.</p>
              <img src={buffet14} alt="buffet refurbish step 14" />

              <p>I wanted to make sure I wasn't filling in all the shallow carved details with the chalk paint (which is quite thick!).</p>
              <img src={buffet15} alt="buffet refurbish step 15" />

              <p>Once everything was painted, and I got the wax on to pull out the details of the carvings, the whole piece really came to life!</p>
              <img src={buffet16} alt="buffet refurbish step 16" />

              <p><span className="instruction-step">Final Results</span>Back in the house, all completed, this buffet came out exactly how I was envisioning when I first saw it posted online!</p>
              <img src={buffet17} alt="buffet refurbish step 17" />

              <p>The pops of blue inside the drawers and cabinets were such a fun little addition.</p>
              <img src={buffet18} alt="buffet refurbish step 18" />

              <p>Just a reminder of the before/after!</p>
              <img src={buffet1} alt="buffet to refurbish" />
              <img src={buffet17} alt="buffet refurbish step 17" />
            </div>
          </div>

          <MaterialsList media="desktop" />
        </div>
      </div>
    </div>
  );
}

export default BuffetRefurbish;
