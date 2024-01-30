let courses1=["Node js","React js","Django","Flask"];
let courses2=["PHP","Laravel"];

let webcourses=[courses1,courses2];
console.log(webcourses);
console.log();

let webc=[...courses1,...courses2];  //Using the spread operator
console.log(webc);


let arr1=[1,2,3];
let arr2=arr1;

console.log("Copying without using the Spread operator");
console.log(arr1);
console.log(arr2);
console.log()
console.log("arr2 After pushing an element to arr1");
arr1.push(5);
console.log(arr1);
console.log(arr2);
console.log("Arr2 is affected");
console.log();

//We can use the spread operator to make it such that changing the value of 1 will not effect the other 

console.log("Copying using the Spread operator");
let arr3=[...arr1];
console.log(arr1);
console.log(arr3);
console.log()
console.log("arr3 After pushing an element to arr1");
arr1.push(5);
console.log(arr1);
console.log(arr3);
console.log("Arr3 remains unaffected");
console.log();


let obj1={
    name:"Ash",
    class:"K22YP"
}
let obj2=obj1;

console.log("Copying without using the Spread operator");
console.log(obj1);
console.log(obj2);
console.log()
console.log("After adding an element to obj1");
obj1.roll=5;
console.log(obj1);
console.log(obj2);
console.log("Obj2 gets affected");
console.log();


let obj3={...obj1};

console.log("Copying using the Spread operator");
console.log(obj1);
console.log(obj3);
console.log()
console.log("After adding an element to obj1");
obj1.marks=75;
console.log(obj1);
console.log(obj3);
console.log("Obj3 is not affected");
console.log();


let names=["Ash","Jack","Olive","Bobby"];
let marks=[44,3,21,12];
let result=[...names,...marks];
console.log(result);