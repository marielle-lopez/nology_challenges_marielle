// # Delayed filter

// 1. Create a function called `delayedFilter(array, callback, timeout)`

// - n: Initial Array
// - callback: a filter function
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedFilter` returns a promise that resolves to the filtered array- think about what might cause this promise to reject

// 2. Call this function three times with different values of array, callback, timeout
// 3. Log each result to the console.


// delayedFilter = (array, callback, timeout = 2500) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (timeout < 0) {
//         reject(new Error("Timeout cannot be less than 0."));
//       }

//       resolve(array.filter(callback));
//     }, timeout)
//   })
// }

// delayedFilter([1, 2, 3], (number) => {return number !== 1})
//   .then((result) => console.log(result))
//   .catch((error) => console.warn(error.message));

// delayedFilter(["mango", "kiwi", "peach"], (fruit) => {return fruit === "kiwi"}, 1000)
//   .then((result) => console.log(result))
//   .catch((error) => console.warn(error.message));

// delayedFilter(["Apple", "Microsoft", "Google"], (company) => {return company === "Google"}, -1)
//   .then((result) => console.log(result))
//   .catch((error) => console.warn(error.message));

const delayedFilter = (arr, cb, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    if (typeof cb !== 'function') {
      reject(new Error('cb must be of type function.'));
    }

    if (!Array.isArray(arr)) {
      reject(new Error('arr must be of type array.'));
    }

    if (timeout < 0) {
      reject(new Error('timeout must be a positive value.'));
    }

    setTimeout(() => {
      const filtered = arr.filter(cb);
      resolve(filtered);
    })
  }, timeout)
}

const isEven = (n) => n % 2 === 0;

// delayedFilter([1, 2, 3], (n) => n % 2 === 0, 500)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));

delayedFilter([1, 2, 3], isEven, 500)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));