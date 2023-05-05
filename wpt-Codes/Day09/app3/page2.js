// find even numbers

function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    for (const number of numbers) {
        if (number % 2 == 0) {
            console.log(number)
        }
    }
}

// function1()

function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const evenNumbers = []
    for (const number of numbers) {
        // if criteria matches then add the original value to the array
        if (number % 2 == 0) {
            evenNumbers.push(number)
        }
    }

    console.log(numbers)
    console.log(evenNumbers)
}

// function2()

function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const evenNumbers = numbers.filter(n => n % 2 == 0)
    console.log(numbers)
    console.log(evenNumbers)
}

// function3()


function function4() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const oddNumbers = numbers.filter(n => n % 2 != 0)
    console.log(numbers)
    console.log(oddNumbers)
}

function4()