'use strict';

let fibonacci = (n, first = 0, second = 1) =>
  (n === 0)
    ? null
    : fibonacci(n - 1, second, first + second) || first;
    
console.log(fibonacci(10));