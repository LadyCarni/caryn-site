import React from "react";
import header from 'assets/creative/craft-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";


const Placeholder = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <CreativeHeader
        headerImage={header}
        imageAlt="Sewing project"
      />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="creative-thumbs">
            <div className="item large-square">
              <p>String Art</p>
            </div>
            <div className="item">
              <p>UV Painting</p>
            </div>
            <div className="item">
              <p>Vinyl Elephant</p>
            </div>
            <div className="item rectangle">
              <p>Branded Swag</p>
            </div>
            <div className="item">
              <p>Sewing Math Mat</p>
            </div>
            <div className="item">
              <p>Dollhouse Bricks</p>
            </div>
            <div className="item">
              <p>Taylored Shirts</p>
            </div>
            <div className="item large-square">
              <p>Vinyl Room Signs</p>
            </div>
            <div className="item">
              <p>Vinyl Wine Label</p>
            </div>
            <div className="item">
              <p>Quilt Stencil</p>
            </div>
            <div className="item rectangle">
              <p>Blue Quilt</p>
            </div>
            <div className="item">
              <p>Vinyl Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
