let e = require('events');  //class of Event emitter
let a=new e(); //Instance of the event emitter


//Registering the event emitter
a.on("Ash",function(){
    console.log("An event has occured");
    let p=10;
    let q=1;
    console.log(p+q-0.1);
})

a.on("table",function(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
})


//firing or publishing the event emitter
a.emit("Ash");


for(let i=1;i<20;i++){
    if(i%2==0 && i%3==0){
        a.emit("table",i);
    }
}