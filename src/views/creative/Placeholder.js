import React from "react";
import header from 'assets/creative/craft-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";


const Placeholder = () => {
  return (
    <div className="creative full-height">
      <CreativeHeader
        headerImage={header}
        imageAlt="Sewing project"
      />
      <div className="creative-body-container">
        <Breadcrumb routes={CreativeRoutes} className="creative" />
        <div className="creative-body">
          <div className="creative-nav">
            <ul>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
          </div>
          <div className="creative-thumbs">
            Project directory
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
