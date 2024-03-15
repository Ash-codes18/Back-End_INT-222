let student = {
    name : "bunty",
    cgpa : 6.4,
    address : "lpu"
};

console.log();
console.log(student);
console.log(JSON.stringify(student));

//replacer
console.log(JSON.stringify(student,['name']));
console.log(JSON.stringify(student,['name' , 'cgpa']));

//Space - for better formatting
console.log(JSON.stringify(student,['name' , 'cgpa'],3));


//for using spaces without replacer we need to pass NULL as replacer
console.log(JSON.stringify(student,null,10));



console.log();


