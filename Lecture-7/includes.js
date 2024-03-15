let buf=Buffer.from('this is a buffer');

console.log(buf.includes('this'));
console.log(buf.includes('is'));
console.log(buf.includes(Buffer.from('a buffer')));
console.log(buf.includes(97));


    