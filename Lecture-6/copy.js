var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('HELLO');


buf2.copy(buf1, 2, 0, 2);
console.log(buf1.toString()); 
buf2.copy(buf1, 5);
console.log(buf1.toString()); 

