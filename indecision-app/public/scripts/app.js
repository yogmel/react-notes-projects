'use strict';

var square = function square(x) {
    return x * x;
};

// arrow functions are always anonymous
var squareArrow = function squareArrow(x) {
    return x * x;
};

var squareArrowSingle = function squareArrowSingle(x) {
    return x * x;
};

console.log(squareArrowSingle(4));

var firstName = function firstName(fullName) {
    return fullName.split(' ')[0];
};

var firstNameArrow = function firstNameArrow(fullName) {
    return fullName.split(' ')[0];
};

var firstNameArrowSingle = function firstNameArrowSingle(fullName) {
    return fullName.split(' ')[0];
};

console.log(firstNameArrowSingle('Mellina Y.'));
