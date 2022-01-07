function arrayBuilder(obj) {
  // ADD CODE HERE
  let arr = [];
  for (let k in obj) {
    while (obj[k] > 0) {
      arr.push(k);
      obj[k] -= 1;
    }
  }
  return arr;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
