import React from 'react';
import LineNumber from './components/LineNumber';
import Content from './components/Content';
import './styles.css';

function TextEditor(props) {
  const lines = (props.content.match(/\n/g) || '').length + 1
  return (
    <div className="TextEditor">
      <LineNumber lines={lines}/>
      <Content content={props.content}/>
    </div>
  );
}

export default TextEditor;