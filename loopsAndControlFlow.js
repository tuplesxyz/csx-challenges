function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
  return array1.map((x, i) => {
    if (x % 3 === 0 || x % 5 === 0) {
      x += array2[i];
      return x;
    } else {
      return x;
    }
  });
}

// Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
