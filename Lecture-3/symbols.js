// Though a and b both contain the same description, they are different.
let a = Symbol('hello');
let b = Symbol('hello');

console.log(a === b);
console.log(a);
console.log(a.description);

// Symbols are not included in for...in Loop

let fn=Symbol("First name");
let ln=Symbol("Last name");
let mystu={};
console.log(mystu);
mystu.fn="Ashmit"; //Not a good practice
console.log(mystu);
mystu[ln]="Mehta"; //The correct method
console.log(mystu);


