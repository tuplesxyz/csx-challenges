// ADD CODE HERE
const multiplyAll = (...nums) => {
  return nums.reduce((a, b) => a * b, 1);
};
// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)); // should log: 375
