import React from "react";
import header from 'assets/creative/photography-header.jpg';
import CreativeHeader from 'components/creativeHeader';
import Breadcrumb from 'components/breadcrumb';
import { CreativeRoutes } from "./index";


const Photography = () => {
  return (
    <div className="creative full-height">
      <Breadcrumb routes={CreativeRoutes} className="creative-view" />
      <CreativeHeader
        headerImage={header}
        imageAlt="Sewing project"
      />
      <div className="creative-body-container">
        <div className="creative-body">
          <div className="creative-nav">
            <ul>
              <li>New Home Adventures</li>
              <li>London UK 2019</li>
              <li>Costa Rica 2018</li>
              <li>Hawaii 2018</li>
              <li>Fall 2017</li>
              <li>Laracon US 2017</li>
              <li>2017 Detroit Auto Show</li>
              <li>Amsterdam 2016</li>
              <li>Gaylord Opryland July 2016</li>
              <li>Nashville</li>
              <li>519 Meets</li>
              <li>Toronto Zoo 2016</li>
              <li>Ripley's Aquarium 2016</li>
              <li>Detroit International Auto Show 2016</li>
              <li>November 2015</li>
              <li>Fall 2015</li>
              <li>August 2015</li>
              <li>Amsterdam</li>
              <li>August 2013</li>
              <li>July 2012</li>
              <li>New York City</li>
            </ul>
          </div>
          <div className="creative-thumbs">
            <div className="item">
              <p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="item rectangle">
              <p>2 Lorem ipsum dolor adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente sunt riores accusantium vitae reiciendis qui deserunt natus, minima.</p>
            </div>
            <div className="item">
              <p>3 Lorem ipsum dolor</p>
            </div>
            <div className="item rectangle">
              <p>4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis veniam adipisci commodi esse, rem mollitia doloribus velit neque.</p>
            </div>
            <div className="item">
              <p>5 Lorem ipsum dolor</p>
            </div>
            <div className="item large-square">
              <p>6 Lorem ipsum dolor sit amet, ccimus, fuga itaque accusamus voluptate consequuntur, temporibus reiciendis! Dolore neque, molestias.</p>
              <ul>
                <li>Lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
                <li>sit</li>
                <li>amet</li>
                <li>consectetur</li>
                <li>adipisicing</li>
                <li>elit</li>
                <li>Et</li>
              </ul>
            </div>
            <div className="item">
              <p>7 Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="item large-square">
              <p>8 Lorem ipsum dolor sit amet, ccimus, fuga itaque accusamus voluptate consequuntur, temporibus reiciendis! Dolore neque, molestias.</p>
              <ul>
                <li>Lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
                <li>sit</li>
                <li>amet</li>
                <li>consectetur</li>
                <li>adipisicing</li>
                <li>elit</li>
                <li>Et</li>
              </ul>
            </div>
            <div className="item rectangle">
              <p>9 Lorem ipsum dolor sit amet, lit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eriores accusantium vitae reiciendis qui deserunt natus, minima.</p>
            </div>
            <div className="item">
              <p>10 Lorem ipsum dolor sit amet, consecutetur admlg no scope</p>
            </div>
            <div className="item">
              <p>11 Lorem ipsum dolor sit amet,</p>
            </div>
            <div className="item">
              <p>12 Lorem ipsum dolor</p>
            </div>
            <div className="item">
              <p>13 Lorem ipsum dolor sit amet,. Et odit, esse. Officiis, </p>
            </div>
            <div className="item">
              <p>14 Lorem ipsum dolor sit</p>
            </div>
            <div className="item rectangle">
              <p>9 Lorem ipsum dolor sit amet, lit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eriores accusantium vitae reiciendis qui deserunt natus, minima.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
