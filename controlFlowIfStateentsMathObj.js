function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  return player1 - theMark > player2 - theMark
    ? "Player 1 is closest"
    : "Player 2 is closest";
}

// Uncomment the line below to check your work!
// console.log(closestToTheMark(25, 75));
