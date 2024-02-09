let buf1=Buffer.from("Heaven");
let buf2=Buffer.from("Hell");

let buf3=Buffer.concat([buf1,buf2],20);

console.log("The contents are "+ buf3.toString());