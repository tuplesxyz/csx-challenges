// ADD CODE HERE
const prioritize = (arr, callback) => {
  let arrT = [];
  let arrF = [];
  
  arr.forEach((x) => {
    	if(callback(x)){
        arrT.push(x);
      } else {
        arrF.push(x)
      }
  })
  
  return [...arrT, ...arrF]
}
// Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']