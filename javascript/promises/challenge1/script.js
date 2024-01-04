// # Delayed inc/dec

// 1. Create a function called `delayedIncDec(n, mode, timeout)`
  // - n: Initial number
  // - mode: A string - either "inc" or "dec"
  // - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
  //   `delayedIncDec` returns a promise that resolves to the initial number increment or decremented - think about what might cause this promise to reject

// 2. Call this function three times with different values of n, modes, and timeouts
// 3. Log each value to the console.

delayedIncDec = (n, mode, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mode === "inc") {
        resolve(n + 1);
      } else if (mode === "dec") {
        resolve(n - 1);
      } else {
        reject(new Error("Invalid mode."));
      }
    })
  }, timeout)
}

delayedIncDec(1, "hello")
  .then((result) => {console.log(result)})
  .catch((error) => console.warn(error.message));

delayedIncDec(5, "inc")
  .then((result) => {console.log(result)})
  .catch((error) => console.warn(error.message));

delayedIncDec(0, "dec")
  .then((result) => {console.log(result)})
  .catch((error) => console.warn(error.message));