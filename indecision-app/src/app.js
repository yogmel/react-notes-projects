import validator from 'validator'

console.log('is email', validator.isEmail('test'))

import isSenior, {canDrink, isAdult} from './person.js'
// import {canDrink, isAdult, isSenior as default} from './person.js'

console.log('app is running!')

console.log(canDrink(18))
console.log(isAdult(18))
console.log(isSenior(18))