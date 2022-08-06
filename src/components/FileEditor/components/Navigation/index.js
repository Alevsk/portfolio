import React from 'react';
import Tab from './components/Tab'
import { useNavigate } from "react-router-dom";

import './styles.css';

function Navigation(props) {
  let navigate = useNavigate();
  const files = props.files;
  return (
    <div className="Navigation">
      <ul className="list">
        {
          files.map((file) => (<Tab
            key={file.id}
            onClick={() => {
                navigate(`/${file.page}`);
                props.selectFile(file)
            }}
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