import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrumb = ( { parentUrl, parentTitle, currentTitle } ) => {
  return (
    <div className="breadcrumb feature-width">
      <ul>
        <li>
          <NavLink to={`${parentUrl}`} aria-label="go back">{parentTitle}</NavLink>
        </li>
        <li>{currentTitle}</li>
      </ul>
    </div>
  )
}

export default Breadcrumb
