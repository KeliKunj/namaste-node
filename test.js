console.log("test file executed.");
x ="from test file";

// export function sumOf2Numbers (a,b) {
function sumOf2Numbers (a,b) {
    const sum = a + b;
    console.log(sum);
}

// module.exports = {x, sumOf2Numbers}
module.exports = {
    var1: x,
    sumOf2Numbers: sumOf2Numbers
}
