import React from 'react';
import './styles.css';

function FileRow(props) {
  const mapping = {
    rb: 'ruby',
    py: 'python',
    java: 'jar',
  }
  const extension = props.file.name.split('.');
  const image = `/images/icons/file_type_${extension.length > 1 ? mapping[extension[1]] || extension[1] : ''}.svg`;
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