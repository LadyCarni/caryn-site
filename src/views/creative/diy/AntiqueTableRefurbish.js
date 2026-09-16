import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import CreativeDivider from 'components/creativeDivider';
import { CreativeRoutes } from "../index";
import { Helmet } from 'react-helmet';
import tableCover from 'assets/creative/diy/side-table-update11.jpg';
import table2 from 'assets/creative/diy/antique-table-refurbish/table2.jpg';
import table3 from 'assets/creative/diy/antique-table-refurbish/table3.jpg';
import table4 from 'assets/creative/diy/antique-table-refurbish/table4.jpg';
import table5 from 'assets/creative/diy/antique-table-refurbish/table5.jpg';
import table6 from 'assets/creative/diy/antique-table-refurbish/table6.mp4';
import table7 from 'assets/creative/diy/antique-table-refurbish/table7.jpg';
import table8 from 'assets/creative/diy/antique-table-refurbish/table8.jpg';
import tableVideo from 'assets/creative/diy/antique-table-refurbish/table-video.mp4';

const MaterialsList = ({ media }) => {
  return (
    <div className={`${media} materials`}>
      <div className="diy-materials">
        <h3>Materials &amp; finishing</h3>
        <ul>
          <li>Chalk paint</li>
          <li>Tinted wax</li>
          <li>Polyurethane (for sealing)</li>
        </ul>
      </div>
    </div>
  )
};

const AntiqueTableRefurbish = () => {
  return (
    <div className="creative full-height">
      <Helmet>
        <title>Antique Table Refurbish</title>
        <meta property="og:title" content="Antique Table Refurbish" />
        <meta property="og:description" content="Stripping, sanding, and sealing an antique table to let the natural wood grain shine, with a freshly painted base." />
        <meta property="og:image" content={tableCover} />
        <meta property="og:url" content="https://carynfarvour.design/creative/diy/antique-table-refurbish" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="diy-body">
            <h1>Antique Table Refurbish</h1>
            <div className="prep-info">
              <div className="prep-info-detail">
                <strong>Tool(s)</strong>
                <ul>
                  <li>Paint &amp; varnish remover</li>
                  <li>Putty knife</li>
                  <li>Dremel</li>
                  <li>Dremel wire brush (for fine details)</li>
                  <li>Rotary sander</li>
                  <li>Sandpaper (various grits)</li>
                  <li>Paint brushes &amp; sponges</li>
                </ul>
              </div>
            </div>
            <img src={tableCover} alt="refinished antique table" />

            <MaterialsList media="mobile" />

            <div className="diy-instructions">
              <CreativeDivider />

              <p><span className="instruction-step">Step 1. Strip</span> The first thing I do with an old piece is attempt to strip any old sealer, paint, etc. Thankfully, this piece cooperated beautifully! Forgive the silliness of recording with one hand and doing the work with the other.</p>
              <video className="half-width" controls src={tableVideo} alt="antique table refurbish step 9" />

              <p><span className="instruction-step">Step 2. Sand</span> With the old varnish removed, the state of the top shows itself. So it's time to take the rotary sander to it to take the bulk of the mess down. The key with a rotary sander is to remember it's very strong, so you need to make sure you're moving a lot so you don't end up with an uneven surface.</p>
              <img src={table2} alt="antique table refurbish sand" />

              <p>To remove the rest of the old varnish and stain from the routed edges, I like to use a dremel with a wire brush. I will admit, I went through three brushes by the time I was finished, and those little bristled went everywhere!</p>
              <img src={table3} alt="antique table refurbish sand" />

              <p>With the top fully cleaned up, I was finally able to see how pretty this wood was! I made the decision not to stain it, but instead I was going to seal it and let the natural wood color and grain shine.</p>
              <img src={table4} alt="antique table refurbish sand" />

              <p><span className="instruction-step">Step 3. Paint the base</span> I didn't end up taking a lot of pictures of the process of painting the base, but it was pretty straight forward. Sand all the surfaces to remove any old junk. Paint in as thin of layers as you can manage so it doesn't bulk up, sanding between the layers. Brush on some tinted wax, wiping away any excess.</p>
              <img src={table5} alt="antique table refurbish base before" />
              <img src={table8} alt="antique table refurbish paint base" />

              <p><span className="instruction-step">Step 4. Seal the top</span> The first few bits of polyurethane were the big payoff in this project. I knew the wood on the top was pretty, but I had no idea just how nice it was until this step. Needless to say I was incredibly pleased with how this turned out.</p>
              <video className="half-width" controls src={table6} alt="antique table refurbish step 6" />
              <img src={table7} alt="antique table refurbish seal top" />

            </div>
          </div>

          <MaterialsList media="desktop" />
        </div>
      </div>
    </div>
  );
}

export default AntiqueTableRefurbish;
