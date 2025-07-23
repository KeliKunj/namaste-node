const fs = require("node:fs");
const https = require("https");

console.log("Hello World - sync");

var a = 7893021;
var b = 23467;

// API Call
https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("Fetched data successfully!")
});//200ms

// setTimeout
setTimeout(()=>{
    console.log("setTimeout called after 5 seconds.");
}, 5000) //5000ms

// 
fs.readFileSync("./file.txt", "utf-8"); //100ms
console.log("This will execute only after file");

// readFile
fs.readFile("./file.txt", "utf-8", (err, data)=>{
    console.log("File Data : " + data);
});//100ms

//sync - fn
function multiplyFn(a, b){
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: " + c);

// OUTPUT:
// Hello World - sync
// Multiplication result is: 185225523807
// File Data : This is file data.
// Fetched data successfully!
// setTimeout called after 5 seconds.

// Blocking OUTPUT2:
// Hello World - sync
// This will execute only after file
// Multiplication result is: 185225523807
// File Data : This is file data.
// Fetched data successfully!
// setTimeout called after 5 seconds.


