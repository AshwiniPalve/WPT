function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const squares = []
    for (const number of numbers) {
        // console.log(`number=${number} and square=${number**2}`)
        const square = number ** 2
        squares.push(square)


    }

    console.log(numbers)
    console.log(squares)
}
function1()
//square using foreach loop
function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numbers.forEach((value) => {
        console.log(`${value}=${value ** 2}`)
    })

}
function2()
//square using map
function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const squares = numbers.map((value) => {
        return value ** 2
    })
    console.log(numbers)
    console.log(squares)
}
function3()
//cubes using a for loop
function function4() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const cubes = []
    for (number of numbers) {
        cubes.push(number ** 3)
    }
    console.log(numbers)
    console.log(cubes)
}
function4()
//cube using map function
function function5() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const cubes = numbers.map((value) => {
        return value ** 3
    })
    console.log(numbers)
    console.log(cubes)
}
function5()

//object array
function function6() {
    const cars = [
        { model: 'i10', company: 'hyndai', price: '7.4', color: 'red' },
        { model: 'i20', company: 'neon', price: '6.4', color: 'black' },
        { model: 'u30', company: 'tata', price: '5.4', color: 'white' },
        { model: 'l40', company: 'skodA', price: '7.9', color: 'gray' },

    ]
    //select car on basis of model and price
    const new_cars = cars.map((cars) => {
        return { model: cars.model, price: cars.price }


    })
    console.log(new_cars)
    }
    function6()

    