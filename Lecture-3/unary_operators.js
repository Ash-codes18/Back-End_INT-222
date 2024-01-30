let arr=[21,33,2324,43212,213,234,33,3];
console.log(arr);
delete arr[3]; //Unary operator
console.log(arr);


//Does not work on symbols
let  a=Symbol("Tester");
console.log(a);
delete a;
console.log(a);

let b=4;
console.log();
console.log(typeof(delete b)); //Unary operator typeof4

let objaf={
    name:"Ash",
    roll:44
}

console.log(objaf);
delete objaf.roll;
console.log(objaf);

