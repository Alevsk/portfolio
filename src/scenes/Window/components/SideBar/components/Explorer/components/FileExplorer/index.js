import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import FileRow from './components/FileRow'


import './styles.css';

function FileExplorer(props) {
  const files = props.files;
  const displayFileTree = props.displayFileTree;
  const selectedFile = props.selectedFile || {};
  return (
    <div className="FileExplorer">
      <div className="divider" onClick={props.toggleDisplayFileTree}>
        <FontAwesomeIcon
            icon={displayFileTree ? faCaretDown : faCaretRight }
            color="#FFFFFF"
            fixedWidth
            className="icon"
          />
        <span className="title">{props.title}</span>
      </div>
      <ul className={`files ${!displayFileTree ? 'hidden' : ''}`}>
        { files.map(file => 
          <FileRow
            selected={file.id === selectedFile.id}
            key={file.id}
            onClick={() => props.dispatchSelectFile(file)}
            file={file}
          />)
        }
      </ul>
    </div>
  );
}

export default FileExplorer;
