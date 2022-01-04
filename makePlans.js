let friendsAvailable = true;

function makePlans(name) {
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  return `${
    bool ? `Plans made with ${name}` : `Everyone is busy`
  } this weekend`;
}

// Uncomment these to check your work!
// console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
// friendsAvailable = false;
// console.log(makePlans("James")) //should return: "Everyone is busy this weekend."
