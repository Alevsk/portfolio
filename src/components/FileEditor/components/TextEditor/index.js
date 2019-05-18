import React from 'react';
import Content from './components/Content';
import './styles.css';

function TextEditor(props) {
  const file = props.selectedFile || { content: '' };
  return (
    <div className="TextEditor">
      <Content content={file.content}/>
    </div>
  );
}

export default TextEditor;