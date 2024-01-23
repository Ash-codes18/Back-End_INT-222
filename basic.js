
let a = null;
console.log(typeof(a));
let b;
console.log(typeof(b));
let c = null;
console.log(typeof(c));
let d = 24.4;
console.log(typeof(d));
let e = 24n
console.log(typeof(e));



function func(){
    console.log("Inside the function");
}

func();

let z="variable outside the object";

// let student = {
//     name : "Ash",
//     roll : 49,
//     marks : 18,
//     val : function(){
//         console.log(student.name);
//         console.log(student.roll);
//         console.log(student.marks);
//         console.log(z);
//     }

// }

// student.val();
// console.log(student.name);
// console.log(student.roll);
// console.log(student.marks);
// console.log("The name of the student is :" + "student.name");
// console.log(`His roll no. is : ${student.roll}`);


// let section= {};

// section.name="K22YP";
// section.students=72;
// section.year=2;
// section.printer = function(){
//     console.log(section.name);
//     console.log(section.students);
//     console.log(section.year);
// }


// section.printer();


// let section= new Object();

// section.name="K22YP";
// section.students=72;
// section.year=2;
// section.printer = function(){
//     console.log(section.name);
//     console.log(section.students);
//     console.log(section.year);
// }


// section.printer();




function Student(name, roll, marks){
    Student.name = name;
    Student.roll = roll;
    Student.marks = marks;
}


let student = new Student("ash",121,2);

console.log(student.name);
console.log(student.roll);
console.log(student.marks);



class tester{
    
    constructor(salary,exp,age){
            this.salary=salary;
            this.exp=exp;
            this.age=age;
    }  

};














