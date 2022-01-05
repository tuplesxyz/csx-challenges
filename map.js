// ADD CODE HERE
const subtractTwo = (num) => num - 2;

const map = (array, callback) => {
  let arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(callback(array[i]));
  }
  return arr;
};
// Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
