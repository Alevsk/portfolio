import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

function Tab(props) {
  const image = `/images/icons/${props.tab.icon}`;
  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        props.onClick()
      }}
      className={`Tab ${props.tab.selected ? 'active' : ''}`}
    >
      <span className="icon"><img src={image} alt=""/></span>
      <span className="file">{props.tab.name}</span>
      <span className="folder">{props.tab.folder}</span>
      <span className="close">
        <FontAwesomeIcon
          icon={faTimes}
          color="#FFFFFF"
          fixedWidth
          className="icon"
          onClick={(e) => {
            e.stopPropagation();
            props.onClickClose()
          }}
        />
      </span>
    </li>
  );
}

export default Tab;