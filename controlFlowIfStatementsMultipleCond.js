function greetings(hour) {
  return hour < 12
    ? "Good Morning!"
    : hour < 15
    ? "Good Afternoon!"
    : hour >= 15
    ? "Good Night!"
    : false;
}

// Uncomment these to check your work!
// console.log(greetings(8)); // expected log 'Good Morning!'
// console.log(greetings(12)); // expected log 'Good Afternoon!'
// console.log(greetings(14)); // expected log 'Good Afternoon!'
// console.log(greetings(15)); // expected log 'Good Night!'
// console.log(greetings(18)); // expected log 'Good Night!'
