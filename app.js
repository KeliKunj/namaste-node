// ----------------------------- if common js modules ----cjs------------------------------
// require('./test.js'); //ReferenceError: sumOf2Numbers is not defined
const {var1, sumOf2Numbers} = require('./test');
var name = 'Namaste NodeJS';

var a = 10;

var b = 20;

console.log(name);
// console.log(a + b);
// console.log(global);
// console.log(this); // {} - Empty Object
// console.log(globalThis);
// console.log(globalThis === global); //true

sumOf2Numbers(a,b);
console.log(var1);
console.log(module.exports);
// const {var1, sumOf2Numbers} = require('./test'); Output: 30 and 'from test file'

// ----------------------------- else ES modules ----esm---mjs---------------------------

// import { sumOf2Numbers } from "./test.js";

// var a = 3;
// var b = 4;
// sumOf2Numbers(a, b);
// // Output: 
// // test file executed.
// // 7