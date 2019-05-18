import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles/hljs'

import './styles.css';

function Content(props) {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={atomOneDark}
      showLineNumbers
      className="Content"
      customStyle={{
        padding: '0px',
      }}
      lineNumberContainerStyle={{
        float: 'left',
        paddingRight: '15px',
        textAlign: 'right',
        color: '#4D5059',
      }}
    >
      {props.content}
    </SyntaxHighlighter>
  );
}

export default Content;