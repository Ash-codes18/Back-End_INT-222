let zlib = require('zlib');
let fs = require('fs');

let gzip=zlib.createGzip();
let r=fs.createReadStream('test.txt');
let w=fs.createWriteStream('ans.txt');
r.pipe(gzip).pipe(w);

