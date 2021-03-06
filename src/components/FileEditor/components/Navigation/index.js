import React from 'react';
import Tab from './components/Tab'
import './styles.css';

function Navigation(props) {
  const files = props.files;
  return (
    <div className="Navigation">
      <ul className="list">
        {
          files.map((file) => (<Tab
            key={file.id}
            onClick={() => props.selectFile(file)}
            onClickClose={() => props.closeFile(file)}
            tab={file}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default Navigation;