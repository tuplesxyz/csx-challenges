// ADD CODE HERE
const multiMap = (arrVals, arrCBs) => {
  const obj = {}
  
  arrVals.map((x) => {
    obj[x] = arrCBs.map((y) => y(x))
  })
  return obj
}
// Uncomment these to check your work!
 function uppercaser(str) { return str.toUpperCase(); }
 function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
 function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer']; const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }