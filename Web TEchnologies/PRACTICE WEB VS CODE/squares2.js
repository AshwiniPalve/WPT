//finding even no in given array
function function1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const evenNumbers=[]
for(const number of numbers){
if(number % 2 == 0) {
    evenNumbers.push(number)
}
}
console.log(numbers)
console.log(evenNumbers)
}
function1()
//adding only evenno from squares array into array
function function2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    const squares=numbers.map((number)=>{
     return number
    })
    const evenNumbers=[]
    for(const number of squares){
        if((number**2) % 2 == 0){
        evenNumbers.push(number**2)
    }
}
console.log ('in function 2')
console.log(numbers)
console.log(squares)
console.log(evenNumbers)
}
function2()
//finding evenumbers from array using map will return booelan value i.e true false
function function3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
     const evenNumbers=numbers.map((number)=>{
        return (number%2==0)
       })
       console.log(numbers)
       console.log(evenNumbers)
    }
    function3()
    //finding evenumbers from array using filter will return evennumbers
function function4() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    //if the value of number%2==0 is true only then push no in array 
    //do nothing if condition is false
     const evenNumbers=numbers.filter((number)=>{
        return (number%2==0)
       })
       console.log(numbers)
       console.log(evenNumbers)
    }
    function4()

  function  function5() {

        const cars = [
            { model: 'i10', company: 'hyndai', price: '7.4', color: 'red' },
            { model: 'i20', company: 'neon', price: '6.4', color: 'black' },
            { model: 'u30', company: 'tata', price: '5.4', color: 'white' },
            { model: 'l40', company: 'skodA', price: '7.9', color: 'red' },
            { model: 'l50', company: 'hyndai', price: '9.0', color: 'red' },
    
        ]
        //select * from car where car color is red
        const new_cars = cars.filter((cars) => {
            return (cars.color ==='red')
        })
        console.log(new_cars)
    }

        function5()
    
    
    