function imAboutToExplodeWithExcitement(n) {
  // ADD CODE HERE
  const arr = [];
  while (n > 0) {
    if (n === 5) {
      n--;
      console.log("Oh wow, I can't handle the anticipation!");
    } else if (n === 3) {
      n--;
      console.log("I'm about to explode with excitement!");
    } else {
      console.log(n);
      n--;
    }
  }
  return "That was kind of a let down";
}

imAboutToExplodeWithExcitement(10);
