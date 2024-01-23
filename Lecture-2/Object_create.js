let studentPrototype={ 
    cgpa:6.9  
}

let student = Object.create(studentPrototype);

student.name="Rakesh";
student.roll=13;
student.section='YP';
student.marks=54;

console.log(student.name);
console.log(student.roll);
console.log(student.section);
console.log(student.marks);
console.log(student.cgpa);