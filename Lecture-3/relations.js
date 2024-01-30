let names=["Ash","Jack","Bob","Oggy"];
//in operator -> Returns a boolean value
console.log(2 in names);
console.log(4 in names);
console.log("Ash" in names);
console.log();
console.log();

let person={
    age:12,
    height:5.3,
    weight:44
}

console.log("age" in person);
console.log("address" in person);
console.log();
console.log();



let myString = new String(); 
let myDate = new Date(); 

console.log(myString instanceof Object); 
console.log(myString instanceof Date); 
console.log(myString instanceof String); 
console.log(myDate instanceof Date); 
console.log(myDate instanceof Object); 
console.log(myDate instanceof String);
console.log();
console.log();
