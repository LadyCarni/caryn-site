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
          <div className="creative-nav">
            <ul>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
            </ul>
          </div>
          <div className="creative-thumbs">
            <div className="item">
              <p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="item span-2">
              <p>2 Lorem ipsum dolor adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sapiente sunt riores accusantium vitae reiciendis qui deserunt natus, minima.</p>
            </div>
            <div className="item">
              <p>3 Lorem ipsum dolor</p>
            </div>
            <div className="item span-2">
              <p>4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis veniam adipisci commodi esse, rem mollitia doloribus velit neque.</p>
            </div>
            <div className="item">
              <p>5 Lorem ipsum dolor</p>
            </div>
            <div className="item span-2-tall">
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
            <div className="item span-2-tall">
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
            <div className="item span-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
