'use strict'

var async = (callback) => setTimeout(callback, 100);

function doSomething() {
  function increment(n, i = 0) {
    if (i < n) {
      console.log(i);
      async(() => increment(n, i + 1));
    }
  }

  async(() => increment(10));
  async(() => increment(10));
  async(() => increment(10));
}
doSomething();