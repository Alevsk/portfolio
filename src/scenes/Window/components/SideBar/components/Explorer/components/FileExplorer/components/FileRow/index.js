import React from 'react';
import './styles.css';

function FileRow(props) {
  const image = `/images/icons/${props.file.icon}`;
  return (
    <li
      onClick={props.onClick}
      className={`FileRow ${props.selected ? 'active' : ''}`}
    >
      <span className="icon"><img src={image} alt=""/></span>
      <span className="name">{props.file.name}</span>
    </li>
  );
}

export default FileRow;