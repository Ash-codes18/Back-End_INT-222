let fs=require('fs');
let reader=fs.createReadStream('test.txt');
let writer=fs.createWriteStream('test1.txt');
reader.pipe(writer);
