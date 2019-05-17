import React from 'react';
import './styles.css';

function Content(props) {
  return (
    <div className="Content">
      {props.content}
    </div>
  );
}

export default Content;