import React from 'react';
import Tab from './components/Tab'
import './styles.css';

function Navigation(props) {
  const tabs = [
    { file: 'index.js', folder: '.../TextEditor', active: true},
    { file: 'index.js', folder: '.../Navigation'},
    { file: 'styles.css', folder: '.../TextEditor'},
    { file: 'index.rb', folder: '.../Ruby'},
    { file: 'database.go', folder: '.../DataSource'},
  ];
  return (
    <div className="Navigation">
      <ul className="list">
        {
          tabs.map(tab => (<Tab tab={tab}/>))
        }
      </ul>
    </div>
  );
}

export default Navigation;