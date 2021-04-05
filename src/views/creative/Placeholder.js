import React from "react";
import craftHeader from 'assets/creative/craft-header.jpg';
import { NavLink } from 'react-router-dom';


const Placeholder = () => {
  return (
    <div className="creative full-height">
      <div className="creative-header">
        <div className="header-image">
          <img src={craftHeader} alt="sewing machine"/>
        </div>
        <h1><span className="pop">Creativity</span> in the wild</h1>
        <ul>
          <li><NavLink to={`/creative/crafts`}>Crafts</NavLink></li>
          <li><NavLink to={`/creative/recipes`}>Recipes</NavLink></li>
          <li><NavLink to={`/creative/diy`}>DIY</NavLink></li>
          <li><NavLink to={`/creative/photography`}>Photography</NavLink></li>
        </ul>
      </div>
      <div className="creative-body">
        <div className="creative-nav">

        </div>
        <div className="creative-thumbs">

        </div>
      </div>
    </div>
  );
};

export default Placeholder;
