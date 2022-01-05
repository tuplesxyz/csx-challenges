// ADD CODE HERE
const majority = (array, callback) => {
  let t = 0;
  let f = 0;
  
	array.forEach((x) => {
    if(callback(x)) {
      t++
    } else {
      f++
    }
  })
                   
  return t > f
}
// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false