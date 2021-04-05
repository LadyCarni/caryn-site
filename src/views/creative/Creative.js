import React from 'react';
import header from 'assets/creative/creative-header.jpg';

const Creative = () => {
  return (
    <div className="creative full-height">
      <div className="creative-header">
        <div className="header-image">
          <img src={header} alt="Blueberry lemon cake"/>
        </div>
        <h1><span className="pop">Creativity</span> in the wild</h1>
        <ul>
          <li>Crafts</li>
          <li>Recipes</li>
          <li>DIY</li>
          <li>Photography</li>
        </ul>
      </div>
    </div>
  )
}

export default Creative;
