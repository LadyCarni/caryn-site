import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "../index";
import pipeDesk from 'assets/creative/diy/pipe-desk14.jpg';

const PipeDesk = () => {
  return (
    <div className="creative full-height">
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
                  <li>Router</li>
                  <li>Sander</li>
                  <li>Pipe Wrench</li>
                </ul>
              </div>
            </div>
            <img src={pipeDesk} alt="pipe desk"/>

            <div className="diy-instructions">
              <p><span className="instruction-step">Step 1.</span> Cut your wood lengths based on a pattern you like to be placed on a base layer for your desk top. We used a Russian Birch plywood for the 3/4" tongue and groove hardwood flooring we found at Timeless Materials. The base would give us needed stability and structural integrity.</p>
            </div>

          </div>
          <div className="materials">
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
              <h3>Materials for 3/4" plumbing pipe table frame</h3>
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
        </div>
      </div>
    </div>
  );
}

export default PipeDesk;
