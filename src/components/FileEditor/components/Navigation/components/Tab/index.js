import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

function Tab(props) {
  const mapping = {
    rb: 'ruby',
    py: 'python',
    java: 'jar',
    asc: 'binary',
  }
  const extension = props.tab.name.split('.');
  const image = `/images/icons/file_type_${extension.length > 1 ? mapping[extension[1]] || extension[1] : ''}.svg`;
  return (
    <li
      onClick={props.onClick}
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
          onClick={props.onClickClose}
        />
      </span>
    </li>
  );
}

export default Tab;