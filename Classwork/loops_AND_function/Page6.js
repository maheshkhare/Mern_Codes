// named
function add(p1, p2) {
  return p1 + p2;
}
console.log(add(10, 20));

// anonymous
const subtract = function (p1, p2) {
  return p1 - p2;
};
console.log(subtract(20, 10));

// arrow function
const multiply = (p1, p2) => {
  return p1 * p2;
};
console.log(multiply(20, 10));

// arrow function
const divide = (p1, p2) => p1 / p2;
console.log(divide(20, 10));

// check if a number is even
const isEven = (n) => (n % 2 == 0 ? "Even" : "Odd");
console.log(isEven(10));
