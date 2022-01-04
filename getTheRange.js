function getTheRange(arr) {
  // ADD CODE HERE
  let sortedArr = arr.sort((a, b) => a - b);
  const lowest = sortedArr[0];
  const highest = sortedArr[sortedArr.length - 1];

  return [lowest, highest, highest - lowest];
}
// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
