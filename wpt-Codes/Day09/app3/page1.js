// get square of every number and store that in another array
// get an array of squares of all the numbers

function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (const number of numbers) {
        console.log('square = ', (number ** 2))
    }
}

// function1()

function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // to collect square of each number
    const squares = []
    for (const number of numbers) {
        squares.push(number ** 2)
    }

    console.log(numbers)
    console.log(squares)
}

// function2()

function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function square(n) {
        console.log('inside square n = ', n)
        return n ** 2
    }

    // const squares = []
    // for (const number of numbers) {
    //     squares.push(square(number))
    // }

    const squares = numbers.map(square)

    console.log(numbers)
    console.log(squares)
}

// function3()


function function4() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function cube(number) {
        console.log('inside cube, number = ', number)
        return number ** 3
    }

    const cubes = numbers.map(cube)
    console.log(numbers)
    console.log(cubes)
}

// function4()

function function5() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const square = n => n ** 2
    const squares = numbers.map(square)
    console.log(numbers)
    console.log(squares)
}

// function5()

function function6() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const cubes = numbers.map(n => n ** 3)
    console.log(numbers)
    console.log(cubes)
}

// function6()

function function7() {
    // temp in F
    const temperatures_f = [90, 98, 92, 93, 95, 96, 97]

    // temp in C
    const temperatures_c = temperatures_f.map(t => (t - 32) * (5/9))
    console.log(temperatures_f)
    console.log(temperatures_c)
}

// function7()

