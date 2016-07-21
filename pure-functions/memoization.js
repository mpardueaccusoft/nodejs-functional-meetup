'use strict';

let equation = (a, b) => 
  Math.pow(Math.cos(Math.sqrt(Math.log(a) * Math.log(b) / (a * b))), 100);

let prepare = (f, ...args) => {
  let result;
  return () => 
    result === undefined 
      ? result = f(...args) 
      : result;
}

let execEquation = prepare(equation, 99999, 99999);

let test = f => {
  let start = Date.now();
  console.log(f(), (Date.now() - start) / 1000);
}

test(execEquation);
test(execEquation);
