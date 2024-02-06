let r=require('fs');

r.readFile('TestRead.md',(err,data)=>{
    if(err){
        throw err;
    }

    console.log("Using an Asynchronous Function : ");
    console.log("\nThe data inside the file : ");
    console.log(data.toString());
    console.log();
})

let data=r.readFileSync('TestRead.md')
console.log("Using a Synchronous Function : ");
console.log("\nThe data inside the file : ");
console.log(data.toString());