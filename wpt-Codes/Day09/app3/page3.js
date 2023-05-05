function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // square of every even number

    // step 1: find even numbers
    const evenNumbers = numbers.filter(n => n % 2 == 0)

    // step 2: get the square of even numbers
    const squares = evenNumbers.map(n => n ** 2)

    console.log(squares)
}

// function1()

function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // step 2: get the square of even numbers
    const squares = 
        numbers
            .filter(n => n % 2 == 0)
            .map(n => n ** 2)

    console.log(squares)
}

// function2()