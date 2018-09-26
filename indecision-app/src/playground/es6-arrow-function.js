const square = function (x) {
    return x * x
}

// arrow functions are always anonymous
const squareArrow = (x) => {
    return x * x
}

const squareArrowSingle = (x) => x * x

console.log(squareArrowSingle(4))


const firstName = function(fullName){
    return fullName.split(' ')[0]
}

const firstNameArrow = (fullName) => {
    return fullName.split(' ')[0]
}

const firstNameArrowSingle = (fullName) => fullName.split(' ')[0]

console.log(firstNameArrowSingle('Mellina Y.'))