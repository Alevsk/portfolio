import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';

function BarIcon(props) {
  return (
    <FontAwesomeIcon
      icon={props.icon.icon}
      size="2x"
      color={`${props.icon.selected ? '#FFFFFF' : '#909398'}`}
      fixedWidth
      className="BarIcon"
      onClick={() => props.selectButton(props.icon)}
    />
  );
}

export default BarIcon;