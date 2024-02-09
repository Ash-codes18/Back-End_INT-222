//From
let buf1=Buffer.from("hello halua");
let buf2=Buffer.from(buf1);
console.log("buf1 : " + buf1.toString());
console.log("buf2 : " + buf2.toString());

let buf3=Buffer.from('This');
let buf4=Buffer.from('54686973','hex');
let buf5=Buffer.from('54686973');
console.log(buf3.toString('hex'));
console.log(buf4.toString());
console.log(buf5);
