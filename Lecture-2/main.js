let Student={
    name:"Ash",
    class:"k'22",
    marks:54
}   


let StudentMethod={
    intro:function() {
        console.log(`${this.name} of class ${this.class} has obtained ${this.marks} out of 60 in INT-222`);
    }
}


let studenet= Object.assign(StudentMethod);
console.log(studenet)


