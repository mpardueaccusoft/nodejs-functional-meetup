'use strict'

let request = () => new Promise((resolve) => setTimeout(() => {
  resolve({ statusCode: Math.round(Math.random()) ? 200 : 500 });
}, 250)),
  amIAwesome = request,
  areYouAwesome = request,
  areWeAwesome = request;

const I_AM_AWESOME = 1,
  YOU_ARE_AWESOME_TOO = 2,
  WE_ARE_AWESOME = 3,
  NO_ONE_IS_AWESOME = 0;

let checkIsAwesome = (res) => 
  res.statusCode === 200;

let checkIfIAmAwesome = (state, res) => 
  checkIsAwesome(res) ? Promise.resolve(I_AM_AWESOME) : Promise.reject();
let checkIfYouAreAwesome = (state, res) => 
  checkIsAwesome(res) && state === I_AM_AWESOME ? Promise.resolve(YOU_ARE_AWESOME_TOO) : Promise.reject();
let checkIfWeAreAwesome = (state, res) => 
  checkIsAwesome(res) && state === YOU_ARE_AWESOME_TOO ? Promise.resolve(WE_ARE_AWESOME) : Promise.reject();

function doSomethings() {
  amIAwesome()
    .then((res) => checkIfIAmAwesome(0, res))
    .then(state => {
      return areYouAwesome()
        .then((res) => checkIfYouAreAwesome(state, res))
    })
    .then(state => {
      return areWeAwesome()
        .then((res) => checkIfWeAreAwesome(state, res))
    })
    .then(() => console.log("We are awesome"))
    .catch((e) => console.log("Awwwww"));
}

for (let i = 1; i < 50; ++i)
  doSomethings();