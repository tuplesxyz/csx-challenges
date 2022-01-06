let str = []
function repeater(char) {
	if(str.length === 5){
    return str.join('')
  }
  str.push(char)
  return repeater(char);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g'));
// console.log(repeater('j'));

