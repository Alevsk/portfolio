import React from 'react';
import './styles.css';

function Tab(props) {
  const extension = props.tab.file.split('.');
  const image = `/images/icons/file_type_${extension.length > 1 ? extension[1] : ''}.svg`;
  return (
    <li className={`Tab ${props.tab.active ? 'active' : ''}`}>
      <span className="icon"><img src={image} alt=""/></span>
      <span className="file">{props.tab.file}</span>
      <span className="folder">{props.tab.folder}</span>
    </li>
  );
}

export default Tab;