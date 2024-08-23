// definition : aysnchronous code are codes that run indepedentantly of the main program flow. It allows program to run other task while waiting for it's operation to complete
// => Mainly used when operations take unpredictable time. It's used mostly in network request, like client requesting data from server and etc.
// => There are 3 types of asynchronous way of writing code which will be discussed below

/*
 sample: Example scenario that we are going to use
 - We are going to fake a login system using pre meditated data
 - Step 0: We pass in few information into the callback functions
 - Step 1: Simulate checking credentials
 - Step 2: Simulate fetching user data
 - Step 3: Verify if the username is correct
 - Step 4: Verify if the password is correct
 - Step 5: Simulate checking as complete
 - Step 6: Simulate login as successful
*/

// * Constants
const USER_INFO = {
  username: "Arun_Alag",
  password: "12345678",
};

// * Trackers
let timer = trackTime();

// * DOM
let process_box = document.querySelector("#process_box");
let callback_btn = document.querySelector("[data-callback]");
let promise_btn = document.querySelector("[data-promise]");

// * Define function defintion

// => Method 1: regular callback code
function traditionalCallback(username, password) {
  timer.start();
  setTimeout(() => {
    displayProcess("Checking for creditials", timer.timeStamp());

    setTimeout(() => {
      displayProcess("Fetching user data", timer.timeStamp());

      setTimeout(() => {
        displayProcess("Verifying username", timer.timeStamp());

        setTimeout(() => {
          displayProcess("Verifying password", timer.timeStamp());

          setTimeout(() => {
            displayProcess("Checking Complete", timer.timeStamp());

            setTimeout(() => {
              displayProcess("Login Successful", timer.timeStamp());

              console.log(`Total time taken: ${timer.end()}`);
            }, 500);
          }, 1000);
        }, 1500);
      }, 1500);
    }, 1000);
  }, 2000);
}

// => Method 2: promise callback code
function promiseCallback(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

// * Trigger the DOM
callback_btn.addEventListener("click", () => {
  traditionalCallback();
});

promise_btn.addEventListener("click", () => {
  timer.start();
  promiseCallback(2000)
    .then(() => {
      displayProcess("Checking for creditials", timer.timeStamp());

      return promiseCallback(1000);
    })
    .then(() => {
      displayProcess("Fetching user data", timer.timeStamp());

      return promiseCallback(1500);
    })
    .then(() => {
      displayProcess("Verifying username", timer.timeStamp());

      return promiseCallback(1500);
    })
    .then(() => {
      displayProcess("Verifying password", timer.timeStamp());

      return promiseCallback(1500);
    })
    .then(() => {
      displayProcess("Checking complete", timer.timeStamp());

      return promiseCallback(1500);
    })
    .then(() => {
      displayProcess("Login Successful", timer.timeStamp());

      return promiseCallback(1500);
    });
});

// => Helper functions
function trackTime() {
  let startTime = null;
  let lastTimeStamp = null;

  function formatDuration(duration) {
    return (duration / 1000).toFixed(1);
  }

  return {
    start() {
      startTime = Date.now();
      lastTimeStamp = startTime;
    },
    timeStamp() {
      const now = Date.now();
      const duration = now - lastTimeStamp;

      lastTimeStamp = now;
      return formatDuration(duration);
    },
    end() {
      const endTime = Date.now();
      // This is the total duration it took
      const totalDuration = endTime - startTime;
      lastTimeStamp = null;
      startTime = null;
      return formatDuration(totalDuration);
    },
  };
}

function displayProcess(information, duration) {
  let div = document.createElement("div");
  div.classList.add("flex", "my-4", "w-full", "justify-between");

  let process = document.createElement("p");
  process.classList.add("text-green_acc", "font-bold", "font-lg", "ml-16");
  process.innerText = information;

  let timestamp = document.createElement("p");
  timestamp.classList.add("text-green_acc", "font-bold", "font-lg", "mr-16");
  timestamp.innerText = `${duration} sec(s)`;

  div.append(process, timestamp);
  process_box.appendChild(div);
}
