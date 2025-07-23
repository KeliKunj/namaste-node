const crypto = require("crypto");

console.log("Hello World!");

var a = 7893021;
var b = 23467;

// Sync : Password Based Key Derivative Function
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512"); // 50000 -> 500000 ----In sync No Cb fn-----Block Main thread DON'T USE
console.log("First Key is generated-Sync");
// Async : Password Based Key Derivative Function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key)=>{
    console.log("Key is generated");
});

function multiplyFn(a, b){
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: " + c);

// OUTPUT:
// Hello World - sync
// Multiplication result is: 185225523807
// Key is generated

// Sync OUTPUT2:
// Hello World - sync
// First Key is generated-Sync
// Multiplication result is: 185225523807
// Key is generated

