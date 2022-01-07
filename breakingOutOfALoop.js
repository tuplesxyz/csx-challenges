function holidays(arr) {
  // Do not use a variable to store your result
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "October") {
      return "Happy Halloween";
    }
  }
  return "Have a great day!";
}

// Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"
