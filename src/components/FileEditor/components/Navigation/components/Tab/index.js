import React from 'react';
import './styles.css';

function Tab(props) {
  const mapping = {
    rb: 'ruby',
  }
  const extension = props.tab.file.split('.');
  const image = `/images/icons/file_type_${extension.length > 1 ? mapping[extension[1]] || extension[1] : ''}.svg`;
  return (
    <li
      onClick={props.onClick}
      className={`Tab ${props.tab.selected ? 'active' : ''}`}
    >
      <span className="icon"><img src={image} alt=""/></span>
      <span className="file">{props.tab.file}</span>
      <span className="folder">{props.tab.folder}</span>
    </li>
  );
}

export default Tab;