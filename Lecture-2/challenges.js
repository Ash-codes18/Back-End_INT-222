//Challenge 1
console.log("Challenge-1 : Create an array")
let myFavSuperheros=['FangYuan','Anos Voldigoad','Saitama','Megumin','Light Yagami'];
console.log(myFavSuperheros[0]);
console.log()

//Challenge-2
console.log("Challenge-2 : Use toString to Print the array")
console.log(myFavSuperheros);
console.log(myFavSuperheros.toString());
console.log()


//Challenge-3
console.log("Challenge-3 : Use at() to print an element of the array")
console.log(myFavSuperheros.at(1));
console.log()


//Challenge-4
console.log("Challenge-4 : Use join() with * seperator to print the elements of the array")
console.log(myFavSuperheros.join(' || '));
console.log(myFavSuperheros.join('*'));
console.log()


//Challenge-5
console.log("Challenge-5 :  Print the first element of the array")
console.log(myFavSuperheros[0]);
console.log()


//Challenge-6
console.log("Challenge-6 : Print the Length of the array")
console.log(myFavSuperheros.length);
console.log()


//Challenge-7
console.log("Challenge-7 :  Update the 2nd last element of the array and prints its updated value.")
myFavSuperheros[myFavSuperheros.length-2]="Ashmit";
console.log(myFavSuperheros[myFavSuperheros.length-2]);
console.log()


//Challenge-8
console.log("Challenge-8 : add an Element at the starting of the array");
myFavSuperheros.unshift("NewElement");
console.log(myFavSuperheros);
console.log();


//Challenge-9
console.log("Challenge-9 : Add an element at the end of the array")
myFavSuperheros[myFavSuperheros.length]="Adarsh";
console.log(myFavSuperheros);
console.log();


//Challenge-10
console.log("Challege-10 : Remove the last element of the array");
console.log(myFavSuperheros);
myFavSuperheros.pop();
console.log(myFavSuperheros);
console.log();


//Challenge-11
console.log("Challege-11 : Remove the name added in challenge-7");
console.log();


//Challenge-12
console.log("Challege-12 : Add an element at the 3rd positon of the array without removing any element using Splice method");
myFavSuperheros.splice(2,0,"3rd pos new ele");
console.log(myFavSuperheros);
console.log();


//Challenge-13
console.log("Challege-13 : Remove the 4th and 5th element and add an element at the 4th position using Splice method");
myFavSuperheros.splice(3,2,"New element");
console.log(myFavSuperheros)

console.log();


//Challenge-14
console.log("Challege-14 : Create a Nested Array superheroUniverse and add 2 arrays to it, where 1st array = marvel superheroes, 2nd array= DC superheroes");

let superheroUniverse=[['IronMan','BlackWidow','Captain America','Hulk','Hawkeye','Gamora','Nebula'],['Batman','GreenLantern','Arrow','Flash','WonderWoman','Wolverine']];

console.log(superheroUniverse) ; 
console.log()


//Challenge-15
console.log("Challege-15 : Print one of the marvel superhero name")
console.log(superheroUniverse[0][3]);
console.log()


// Challenge-16
console.log("Challege-16 : Print one of the Dc superhero name");

console.log(superheroUniverse[1][3]);
console.log();


// Challenge-17
console.log("Challege-17 : Flatten the array superheroUniverse using flat() method");

let flattened=superheroUniverse.flat();
console.log(flattened);
console.log();
console.log();


// Challenge-18
console.log("Challege-18 : Concatenate the 2 array marvelsuperheroes and dcsuperheroes into one array name superheroworld using concat method");

let superheroworld=superheroUniverse[0].concat(superheroUniverse[1]);
console.log(superheroworld);
console.log();
console.log();


// Challenge-19
console.log("Challege-19 : Now slice out the array superheroworld starting from element 1");

let sliced = superheroworld.slice(1);
console.log(sliced);
console.log();


