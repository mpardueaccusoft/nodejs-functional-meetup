'use strict';

let add = (a, b) => a + b;

let prepare = (f, ...args) => () => f(...args);

let execute = prepare(add, 1, 2);
let result = execute();
// 3

console.log(result);