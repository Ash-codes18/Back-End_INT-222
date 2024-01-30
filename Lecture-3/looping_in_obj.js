let stu={name:'ash',age:34,section:'k22yp'};

for(let a in stu){ 
    console.log(a+" - "+stu[a]); 
}
console.log();


//Using for loop

let keys=Object.keys(stu);
console.log(keys);
console.log();
//Object.keys creates an array of the keys present in the object

for(let i=0;i<keys.length;i++) {
    let key=keys[i];
    console.log(key+" - "+ stu[key]);
}
