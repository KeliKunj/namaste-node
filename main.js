
// const { calculateMultiply } = require('./calculate/multiply');
// const { calculateSum } = require('./calculate/sum');

// Making calculate folder module - index.js
const {calculateSum, calculateMultiply} = require('./calculate');

var a = 7;
var b = 5;

calculateMultiply(a, b);
calculateSum(a,b);

const data = require('./data.json');
console.log(data);
console.log(JSON.stringify(data));
