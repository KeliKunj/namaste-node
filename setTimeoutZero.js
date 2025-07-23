console.log("Hello World!");

var a = 7893021;
var b = 23467;

setTimeout(()=>{
    console.log("Execute it immediately!!");
},0);


function multiplyFn(a, b){
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: "+ c);

// OUTPUT:
// Hello World - sync
// Multiplication result is: 185225523807
// Execute it immediately!!

