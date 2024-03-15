let zlib = require('zlib');
let fs = require('fs');

let gunzip=zlib.createGunzip();
let reader=fs.createReadStream('test.txt.gz');
let writer=fs.createWriteStream('output.txt');
reader.pipe(gunzip).pipe(writer);

