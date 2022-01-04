function droids(arr) {
  let result = "";
  // ADD CODE HERE
  arr.forEach((el) => {
    if (el === "Droids") {
      result = "Found Droids!";
    } else {
      result = `These are not the droids you're looking for.`;
    }
  });
  return result;
}

// Uncomment these to check your work!
// const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"]
// const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"]
// console.log(droids(starWars)) // should log: "Found Droids!"
// console.log(droids(thrones)) //should log: "These are not the droids you're looking for."
