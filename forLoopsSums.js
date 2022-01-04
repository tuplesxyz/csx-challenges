function getTheSum(arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Uncomment these to check your work!
//console.log(getTheSum([3, 6, 9])); // expected log 18
//console.log(getTheSum([10, 11, 12])); // expected log 33
