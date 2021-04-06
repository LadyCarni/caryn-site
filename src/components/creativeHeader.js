import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faHammer, faHatChef, faPalette } from '@fortawesome/pro-light-svg-icons';

function CreativeHeader( { headerImage, imageAlt } ) {
  return (
    <div className="creative-header">
      <div className="header-image">
        <img src={headerImage} alt={`${imageAlt}`}/>
      </div>
      <h1><span className="pop">Creativity</span> in the wild</h1>
      <ul>
        <li><NavLink to={`/creative/crafts`}><FontAwesomeIcon icon={faPalette} />Crafts</NavLink></li>
        <li><NavLink to={`/creative/recipes`}><FontAwesomeIcon icon={faHatChef} />Recipes</NavLink></li>
        <li><NavLink to={`/creative/diy`}><FontAwesomeIcon icon={faHammer} />DIY</NavLink></li>
        <li><NavLink to={`/creative/photography`}><FontAwesomeIcon icon={faCameraRetro} />Photography</NavLink></li>
      </ul>
    </div>
  )
}

export default CreativeHeader;
