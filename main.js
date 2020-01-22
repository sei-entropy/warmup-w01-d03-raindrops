// Initialize variables
result = "";
number = 19;
// Check for the conditions and concatenate
if (number % 3 === 0) {
  result = result + "Pling";
}
if (number % 5 === 0) {
  result += "Plang";
}
if (number % 7 === 0) {
  result += "Plong";
}
// Shorthand Expression that checks if result is true (not empty),
// then print out result. else print out the number.
console.log(result || number);
if (result) {
  console.log(result);
} else {
  console.log(number);
}