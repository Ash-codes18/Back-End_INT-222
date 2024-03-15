let buf1=Buffer.from("Hello darkness");
let buf2=buf1.slice(0,7);
let buf3=buf1.slice(0,-5);
console.log(buf2.toString());
console.log(buf3.toString());