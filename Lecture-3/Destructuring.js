let arr=["Ash","Jack","Bob","Oggy"];

// let human=arr[0];
// let soldier=arr[1];
// let dog=arr[2];
// let cat=arr[3];

//Destructuring allows us to create an array of variables which we can directly access
let [human,soldier,dog,cat]=arr;
console.log(dog);
console.log(cat);
//We can take any name no matter what the property name is in the array


//The no. of commas plus current index will the the elements that will be skipped and using the rest operator the remaining values will be given to the rest variable
let[one,,two,...three]=['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN'];
console.log(one);
console.log(two);
console.log(three);
console.log();
console.log();


let obj1={
    name:"Ash",
    clas:"2",
    section:"K22YP",
    roll:49,
    age:32
}


//We can only take the same variable names as the property names in the object
console.log("Using the same variable names as the property names : ")
let{name,clas,...details}=obj1;
console.log(name);
console.log(clas);
console.log(details);
console.log();


console.log("Without using the same names as property name : ");
let{naam,kaksha,...val}=obj1;
console.log(naam);
console.log(kaksha);
console.log(val);
console.log();

//If we want to use different variable names, we can do it like this 
console.log("Using different names from property name : ");
let{name:kon,clas:kisme,...kitna}=obj1;
console.log(kon);
console.log(kisme);
console.log(kitna);
