// Exercise #4 Grouping Function with Objects

// Start coding here
// Exercise #3 Declaring Arrow Function
// Start coding here
let add = (a,b) => a + b;
console.log(add(10,5));

let subtract = (a,b) => a - b;
console.log(subtract(10,5));

let multiply = (a,b) => a * b;
console.log(multiply(10,5));

let divide = (a,b) => a / b;
console.log(divide(10,5));

let calculator = {};
calculator = {
    add,
    subtract,
    multiply,
    divide
};
let resultAdd;
resultAdd = calculator.add(10,20);
console.log(resultAdd);

let resultDivide;
resultDivide = calculator.divide(3000,10);
console.log(resultDivide);