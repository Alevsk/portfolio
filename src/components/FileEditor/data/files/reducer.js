import { SELECT } from './actions';

const initialState = [
  { id: 0, file: 'index.js', folder: '.../TextEditor', selected: true, content: `I will imagine that b = 3 and end = 10 if I run your code and print the variables here is what I will get:

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
  },
  { id: 1, file: 'index.js', folder: '.../Navigation', content: `You will be able to get the current iteration index for the map API through its 2nd parameter.

See also: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Parameters

callback - Function that produces an element of the new Array, taking three arguments:

1) currentValue
The current element being processed in the array.

2) index
The index of the current element being processed in the array.

3) array
The array map was called upon.

Example:

var list = [ 'h', 'e', 'l', 'l', 'o'];
list.map((currElement, index) => {
  console.log("The current iteration is: " + index);
  console.log("The current element is: " + currElement);
  console.log("\n");
  return 'X';
});
Output:

The current iteration is: 0 
The current element is: h

The current iteration is: 1 
The current element is: e

The current iteration is: 2 
The current element is: l

The current iteration is: 3 
The current element is: l

The current iteration is: 4 
The current element is: o`
  },
  { id: 2, file: 'styles.css', folder: '.../TextEditor', content: `I have a React component called <SensorList /> that has many child <SensorItem />s (another React component). I want to be able to declare an onClick event on each <SensorItem /> from within <SensorList />. I have tried doing the following:

sensorSelected: function(sensor) {
    console.log('Clicked!');
},

render: function() {
    var nodes = this.state.sensors.map(function(sensor) {
        return (
            <SensorItem onClick={ this.sensorSelected } />
        );
    }.bind(this));

    return (
        <div className="sensor-list">
            { nodes }
        </div>
    );
}
Needless to say, I do not get any "Clicked!" coming up in my console. The React inspector in Chrome indicates that an onClick event is registered, with the above function body as it should be.

I conclude, therefore, that I can't register onClick events on the actual <SensorItem /> tags (I'm not sure why this is, however). How do I go about achieving this otherwise?`
},
  { id: 3, file: 'index.rb', folder: '.../Ruby', content: `This also works:

I just changed with this.state.color==='white'?'black':'white'.

You can also pick the color from drop-down values and update in place of 'black';

(CodePen)` },
{ id: 4, file: 'database.go', folder: '.../DataSource', content: `This works

var Box = React.createClass({
    getInitialState: function() {
        return {
            color: 'white'
        };
    },

    changeColor: function() {
        var newColor = this.state.color == 'white' ? 'black' : 'white';
        this.setState({ color: newColor });
    },

    render: function() {
        return (
            <div>
                <div
                    className='box'
                    style={{background:this.state.color}}
                    onClick={this.changeColor}
                >
                    In here already
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Box />, document.getElementById('div1'));
ReactDOM.render(<Box />, document.getElementById('div2'));
ReactDOM.render(<Box />, document.getElementById('div3'));
and in your css, delete the styles you have and put this

.box {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  float: left;
}
You have to style the actual div you are calling onClick on. Give the div a className and then style it. Also remember to remove this block where you are rendering App into the dom, App is not defined

ReactDOM.render(<App />,document.getElementById('root'));`
},
];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		// case ADD:
    // 	return [...state, action.payload];
    case SELECT:
    	return state.map((file) => ({ ...file, selected: file.id === action.payload.id }));
		default:
			return state;
	}
}

export const getOpenFiles = state => {
	return [...state];
}

export const getSelectedFile = state => {
  const selected = state.filter(file => file.selected);
	return selected.length > 0 ? selected[0] : null;
}

// export const getRating = state =>
// 	state.reduce((prev, current) => ({
// 		...prev,
// 		[current.rating]: (prev[current.rating] || 0) + 1,
// 	}), {})