// console.log('Hello World!');

// global object
// console.log(global);

// Common core modules
// CommonJS modules instead of ES6 modules
const os = require('os');
const path = require('path');

// requiring math module
const {add, subtract, multiply, divide} = require('./math');

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);


// console.log('')
// console.log('*** path module **')
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// performing mathematical operations
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// Node.js missing some JS API like fetch