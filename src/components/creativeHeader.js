import React from 'react';
import { NavLink } from 'react-router-dom';

function CreativeHeader( { headerImage, imageAlt } ) {
  return (
    <div className="creative-header">
      <div className="header-image">
        <img src={headerImage} alt={`${imageAlt}`}/>
      </div>
      <h1><span className="pop">Creativity</span> in the wild</h1>
      <ul>
        <li><NavLink to={`/creative/crafts`}>Crafts</NavLink></li>
        <li><NavLink to={`/creative/recipes`}>Recipes</NavLink></li>
        <li><NavLink to={`/creative/diy`}>DIY</NavLink></li>
        <li><NavLink to={`/creative/photography`}>Photography</NavLink></li>
      </ul>
    </div>
  )
}

export default CreativeHeader;
