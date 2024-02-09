let buf1=Buffer.from("Hello");
let buf2=Buffer.from("Hell");
let buf3=Buffer.from("Hello");

console.log(buf1.compare(buf2));
console.log(buf1.compare(buf3));
console.log(buf2.compare(buf3));

console.log();
console.log();

let buf=Buffer.from("ABCD",'hex');
let buff=Buffer.from("ABCD");
let buffe=Buffer.from("41424344",'hex');
console.log(buf.compare(buff));
console.log(buf.compare(buffe));
console.log(buff.compare(buffe));



