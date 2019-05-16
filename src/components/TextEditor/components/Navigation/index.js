import React from 'react';
import './styles.css';

function Navigation(props) {
  return (
    <div className="Navigation">
      <ul className="list">
        <li className="active"><span className="fileName">index.js</span><span className="folderName"> .../TextEditor</span></li>
        <li><span className="fileName">index.js</span><span className="folderName"> .../Navigation</span></li>
        <li><span className="fileName">styles.js</span><span className="folderName"> .../Navigation</span></li>
      </ul>
    </div>
  );
}

export default Navigation;