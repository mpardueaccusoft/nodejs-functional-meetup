'use strict'

var request = (callback) => setTimeout(() => callback(null, { statusCode: Math.round(Math.random()) ? 200 : 500 }, 250)),
  amIAwesome = request,
  areYouAwesome = request,
  areWeAwesome = request;

const I_AM_AWESOME = 1,
  YOU_ARE_AWESOME_TOO = 2,
  WE_ARE_AWESOME = 3,
  NO_ONE_IS_AWESOME = 0;

function doSomethings() {
  var state = NO_ONE_IS_AWESOME;

  amIAwesome((error, res) => {
    if (res.statusCode === 200) {
      state = I_AM_AWESOME;
    } else {
      state = NO_ONE_IS_AWESOME;
    }

    areYouAwesome((error, res) => {
      if (res.statusCode === 200 && state === I_AM_AWESOME) {
        state = YOU_ARE_AWESOME_TOO;
      } else {
        state = NO_ONE_IS_AWESOME;
      }

      areWeAwesome((error, res) => {
        if (res.statusCode === 200 && state === YOU_ARE_AWESOME_TOO) {
          state = WE_ARE_AWESOME;
        } else {
          state = NO_ONE_IS_AWESOME;
        }

        console.log(state ? "We are awesome!" : "Awwwww");
      });
    });
  });
}

for (let i = 1; i < 50; ++i)
  doSomethings();