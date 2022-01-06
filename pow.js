function pow(base, exponent) {
  if(exponent === 1){
    return base;
  }
	return base * pow(base, exponent - 1)
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243