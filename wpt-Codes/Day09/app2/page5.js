// named
function add(p1, p2) {
    return p1 + p2
}

// anonymous
const subtract = function(p1, p2) {
    return p1 - p2
}

// arrow function
const multiply = (p1, p2) => {
    return p1 * p2
}

// arrow function
const divide = (p1, p2) => p1 / p2

// check if a number is even
const isEven = n => n % 2 == 0 ? 'Even' : 'Odd'