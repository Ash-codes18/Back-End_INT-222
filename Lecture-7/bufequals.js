let buf1 = Buffer.from('ABC');
let buf2 = Buffer.from('414243','hex');
let buf3 = Buffer.from('ABCD');

console.log(buf1.equals(buf2));
console.log(buf1.equals(buf3));
