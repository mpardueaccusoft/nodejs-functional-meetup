'use strict';

let incrementCountOfThe = (total, word) => total + (word.toLowerCase() === 'the' ? 1 : 0);
let result = 'The quick brown fox jumps over the lazy dog'
  .split(' ')
  .reduce(incrementCountOfThe, 0);
// 2

console.log(result); 