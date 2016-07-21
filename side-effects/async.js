'use strict'

var async = (callback) => setTimeout(callback, 100);

function doSomething() {
  let i = 0;

  function increment(n) {
    if (i < n) {
      console.log(i);
      ++i;
      async(() => increment(n));
    }
  }

  async(() => increment(10));
  async(() => increment(10));
  async(() => increment(10));
}
doSomething();