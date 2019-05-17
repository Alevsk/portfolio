import React from 'react';
import range from 'lodash/range'
import './styles.css';

function LineNumber(props) {
  const lines = props.lines + 1;
  const lineElements = range(1, lines).map((current, index, range) => 
    <div key={index} className="item">
      {current}
    </div>
  );
  return (
    <div className="LineNumber">
      {lineElements}
    </div>
  );
}

export default LineNumber;