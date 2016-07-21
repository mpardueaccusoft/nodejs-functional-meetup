'use strict';

let lessThan10 = x => x < 10;
let result = [1, 2, 3, 10, 20, 30].filter(lessThan10);
// [ 1, 2, 3 ]

console.log(result);