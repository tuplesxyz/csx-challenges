function gradeCalculator(grade) {
  if (grade >= 90) {
    return "A";
  }

  if (grade >= 80 && grade <= 89) {
    return "B";
  }

  if (grade >= 70 && grade <= 79) {
    return "C";
  }

  if (grade >= 60 && grade <= 69) {
    return "D";
  }

  if (grade <= 59) {
    return "F";
  }
}

// Uncomment the lines below to test your code
// console.log(gradeCalculator(92)); // => "A"
// console.log(gradeCalculator(84)); // => "B"
// console.log(gradeCalculator(70)); // => "C"
// console.log(gradeCalculator(61)); // => "D"
// console.log(gradeCalculator(43)); // => "F"
