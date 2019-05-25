import React from 'react';
import Content from './components/Content';
import './styles.css';

function TextEditor(props) {
  const file = props.selectedFile || { content: '' };
  return (
    <div className="TextEditor">
      <Content file={file}/>
    </div>
  );
}

export default TextEditor;