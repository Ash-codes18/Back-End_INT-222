//Factory function method to declare a object

function Student(name,roll,marks){
    return{
        name:name,
        roll:roll,
        marks:marks
    }
}

let student= Student('Ash',61,98)
console.log(student.name);
console.log(student.roll);
console.log(student.marks);