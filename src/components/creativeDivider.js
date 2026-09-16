import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammerBrush } from '@fortawesome/pro-light-svg-icons';

const CreativeDivider = () => (
  <div className="creative-divider">
    <span className="divider-line" />
    <FontAwesomeIcon icon={faHammerBrush} />
    <span className="divider-line" />
  </div>
);

export default CreativeDivider;
