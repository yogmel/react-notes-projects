// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments) // in arrow functions, this doesn't work
    return a + b
}
console.log(add(55, 1, 1000))

// this keywork - no longer bound
const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city)
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
}

console.log(user.printPlacesLived())


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply())