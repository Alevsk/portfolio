import React from 'react';
import Tab from './Tab'
import './styles.css';

function Navigation(props) {
  const tabs = [
    { file: 'index.js', folder: '.../TextEditor', active: true},
    { file: 'index.js', folder: '.../Navigation'},
    { file: 'styles.css', folder: '.../TextEditor'},
  ];
  return (
    <div className="Navigation">
      <ul className="list">
        {
          tabs.map(tab => (<Tab tab={tab}/>))
        }
        {/* <li className="active">
          <span className="fileName">index.js</span>
          <span className="folderName"> .../TextEditor</span>
        </li>
        <li>
          <span className="fileName">index.js</span>
          <span className="folderName"> .../Navigation</span>
        </li>
        <li>
          <span className="fileName">styles.js</span>
          <span className="folderName"> .../Navigation</span>
        </li> */}
      </ul>
    </div>
  );
}

export default Navigation;