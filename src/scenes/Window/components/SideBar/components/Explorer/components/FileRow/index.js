import React from 'react';
import './styles.css';

function FileRow(props) {
  const mapping = {
    rb: 'ruby',
  }
  const extension = props.file.file.split('.');
  const image = `/images/icons/file_type_${extension.length > 1 ? mapping[extension[1]] || extension[1] : ''}.svg`;
  return (
    <li
      onClick={props.onClick}
      className={`FileRow ${props.file.selected ? 'active' : ''}`}
    >
      <span className="icon"><img src={image} alt=""/></span>
      <span className="name">{props.file.file}</span>
      {/* <span className="folder">{props.file.folder}</span> */}
    </li>
  );
}

export default FileRow;