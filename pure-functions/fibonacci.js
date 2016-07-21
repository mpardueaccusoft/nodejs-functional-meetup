'use strict';

let fibonacci = (n, first = 0, second = 1) =>
  (n === 0)
    ? []
    : [ first, ...fibonacci(n - 1, second, first + second) ];
    
console.log(fibonacci(10));