import React from "react";
import header from 'assets/creative/diy-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";


const Diy = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <CreativeHeader
        headerImage={header}
        imageAlt="Refinished table"
      />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="creative-thumbs">
            <div className="item rectangle">
              <p>Buffet Refurbish</p>
            </div>
            <div className="item">
              <p>Floating Desk</p>
            </div>
            <div className="item large-square">
              <p>Gardening</p>
            </div>
            <div className="item rectangle">
              <p>Bookshelf Update</p>
            </div>
            <div className="item">
              <p>Air Conditioner Cover</p>
            </div>
            <div className="item">
              <p>Antique Chair Refurbish</p>
            </div>
            <div className="item">
              <p>Side Table Update</p>
            </div>
            <div className="item">
              <p>Coffee Table Update</p>
            </div>
            <div className="item large-square">
              <p>Stairs Refinish</p>
            </div>
            <div className="item">
              <p>Tree Garden</p>
            </div>
            <div className="item rectangle">
              <p>Planter</p>
            </div>
            <div className="item">
              <p>Modern Paint</p>
            </div>
            <div className="item">
              <p>Solar Light Update</p>
            </div>
            <div className="item rectangle">
              <p>Loft Bed</p>
            </div>
            <div className="item">
              <p>Vanity Update</p>
            </div>
            <div className="item rectangle">
              <p>Antique Table Refurbish</p>
            </div>
            <div className="item">
              <p>Workbench</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diy;
