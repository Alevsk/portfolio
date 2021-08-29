import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import createElement from 'react-syntax-highlighter/dist/esm/create-element';
import get from 'lodash/get';

import './styles.css';

const rowRenderer = ({
  rows,
  stylesheet,
  useInlineStyles
}) => {
  return rows.map((node, i) => {
    node.children = node.children.map((children) => {
      const text = get(children, 'children.[0].value', '');
      if (typeof text === 'string' && text.startsWith('"http')) {
        return {
          ...children,
          tagName: 'a',
          properties: {
            ...children.properties,
            href: text.slice(1, -1),
            target: '_blank',
          },
        };
      }
      return children;
    });
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: `code-segement-${i}`,
    });
  });
}


const Content = (props) => {
  return (
    <SyntaxHighlighter
      language={props.file.language}
      style={atomOneDark}
      showLineNumbers
      className="Content"
      wrapLines
      lineProps={
        {
          style: {
            whiteSpace: 'pre-wrap',
          }
        }
      }
      renderer={rowRenderer}
      lineNumberStyle={{
        float: 'left',
        padding: '0px 15px',
        textAlign: 'right',
        color: 'rgb(77, 80, 89)',
      }}
      lineNumberContainerStyle={
        {
          float: 'left',
          padding: '0px 15px',
          textAlign: 'right',
          color: '#4D5059',
        }
      }
    >
      {props.file.content || ''}
    </SyntaxHighlighter>
  );
}

export default Content;