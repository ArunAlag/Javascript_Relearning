/* 
    => This file is to only faciliatate additional methods that exist in promises
*/

/*
    definition: Promise.all allows to process multiple processes all at once. It takes an iterable (array/map/set) as an input and returns a single promise
    => It will only proceed to .then() if all the promises resolve
    => If any one of the promises reject, it will go to .catch, it will throw the first reject's error message in, like literally stops proceedings after that
    => The .then() output will be an array of values
*/

Promise.all([Promise.resolve("pass_1"), Promise.resolve("pass_2"), Promise.reject("pass_3")])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.error(error);
  });

/*
    definition: Promise.any allows to process multiple processes all at once. It takes an iterable (array/map/set) as an input and returns the result of the very first promise that succeeds
    => It will only output 1 message, the very first promise to resolve
    => If all of the promises reject, then only will go .catch()
*/
Promise.any([Promise.resolve("pass_1"), Promise.resolve("pass_2"), Promise.reject("pass_3")])
  .then((messages) => {
    console.log(`Promise.any: ${messages}`);
  })
  .catch((error) => {
    console.error(error);
  });

/*
    definition: Promise.race allows to process multiple processes all at once. It takes an iterable (array/map/set) as an input and returns any of the promises that finish first, regardless it succeed or not
    => It will only output 1 message, the very first promise that finish
*/

Promise.race([
  new Promise((resolve) => {
    setTimeout(() => resolve("Message 1"), 1500);
  }),
  new Promise((_, reject) => {
    setTimeout(() => reject("Message 2"), 1600);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve("Message 3"), 1200);
  }),
])
  .then((messages) => {
    console.log(`Promise.race: ${messages}`);
  })
  .catch((error) => {
    console.error(`Error Promise.race: ${error}`);
  });

/*
    definition: Promise.allSettled allows to process multiple processes all at once. It takes an iterable (array/map/set) as an input and returns any of the promises that finish first, regardless it succeed or not
    => Does not need .reject() because it will return an array of object in which the object contains the status, and value from each promises
        => Resolved promises will have status as `fulfilled`
        => Rejected promises will have status as `rejected`
*/

Promise.allSettled([Promise.resolve("pass_1"), Promise.resolve("pass_2"), Promise.reject("pass_3")]).then(
  (messages) => {
    console.log(messages);
  }
);
/*
    definition: .finally() is a third on chain method for promises after .then(), .catch() which takes in no parameter. It act as an indicator that all the promises have completed
*/

const promise = Promise.resolve("Resolved to test finally");

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Message from Finally: Promise completed");
  });
