'use strict';

function handleSomething(req, res) {
  // f(x, g(ex, y))
  getSomething(req.params.id, (error, result) => {
    res.end(result);
  });
}

function handleSomethingPromisified(req, res) {
  // f(x) -> y
  getSomething(req.params.id)
    .then(result => res.end());
}