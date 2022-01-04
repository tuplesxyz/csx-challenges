function addingAllTheWeirdStuff(array1, array2) {
  // ADD CODE HERE
  let sumOdd = array2.filter((x) => x % 2 === 1).reduce((a, b) => a + b, 0);
  let sumEven = array2.filter((x) => x % 2 === 0).reduce((a, b) => a + b, 0);

  array1 = array2.some((x) => x > 20)
    ? (array1 = [...array1.map((x) => x + 1)])
    : array1;

  return array1.map((x) => {
    if (x > 10) {
      x += sumEven;
      return x;
    } else if (x < 10) {
      x += sumOdd;
      return x;
    } else {
      return x;
    }
  });
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
