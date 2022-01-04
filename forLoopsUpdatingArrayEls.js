function addN(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
}

// Uncomment these to check your work!
// console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
// console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]
