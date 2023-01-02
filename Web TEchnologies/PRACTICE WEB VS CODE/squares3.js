function function1(){
    const numbers=[1,2,3,4,5,6,7,8,9,10]

    const evenNumbers=numbers.filter((number)=>number % 2== 0)
    const squares=evenNumbers.map((number)=>number**2)

console.log(numbers)
console.log(evenNumbers)
console.log(squares)
}
function1()