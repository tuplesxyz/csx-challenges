// ADD CODE HERE
function findWaldo(obj) {
  return obj["Waldo"] !== undefined ? obj["Waldo"] : "Where's Waldo?";
}

const DC = { Bruce: "Wayne", Harley: "Quinn" };
const supernatural = {
  Sam: "Winchester",
  Dean: "Winchester",
  Waldo: "unknown",
};
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
