import React from 'react';
import Navigation from './components/Navigation';
import LineNumber from './components/LineNumber';
import Content from './components/Content';
import './styles.css';

function TextEditor() {
  const content = `I will imagine that b = 3 and end = 10 if I run your code and print the variables here is what I will get:

    var b = 3;
    var end = 10;

    for (var start = b, i = 0; start < end; ++i, ++start) {
      console.log(start, i);
    }

    > 3 0
    > 4 1
    > 5 2
    > 6 3
    > 7 4
    > 8 5
    > 9 6
    To perform this with lodash (or underscore) I will first generate an array with range then iterate over it and gets the index on each iteration.

    Here is the result

    var b = 3;
    var end = 10;

    // this will generate an array [ 3, 4, 5, 6, 7, 8, 9 ]
    var array = _.range(b, end); 

    // now I iterate over it
    _.each(array, function (value, key) {
      console.log(value, key);
    });
    And you will get the same result. The complexity is the same as the previous one (so no performance issue).
    
    You can use lodash range
    https://lodash.com/docs/4.17.4#range

    _.range(5, 10).forEach((current, index, range) => {
        console.log(current, index, range)
    })

    // 5, 0, [5, 6, 7, 8, 9, 10]
    // 6, 1, [5, 6, 7, 8, 9, 10]
    // 7, 2, [5, 6, 7, 8, 9, 10]
    // 8, 3, [5, 6, 7, 8, 9, 10]
    // 9, 4, [5, 6, 7, 8, 9, 10]
    // 10, 5, [5, 6, 7, 8, 9, 10]

    It seems there is no lodash way for writing loose for loops (those not iterating over a collection), but here is a simplified version of it:

    for (var i = 0; i < end - b; i++) {
          var start = i + b;
          // code goes here
    }`
  const lines = (content.match(/\n/g) || '').length + 1
  return (
    <div>
      <Navigation files={null}/>
      <div className="TextEditor">
        <LineNumber lines={lines}/>
        <Content content={content}/>
      </div>
    </div>
  );
}

export default TextEditor;