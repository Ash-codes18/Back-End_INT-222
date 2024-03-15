let reader=require('fs')

var reader=fs.createReadStream('test.txt');
reader.setEncoding('UTF-8');
reader.open('data',function(chunk){
    data=chunk;
});

reader.open('end',function(){
    console.log(data);
});

reader.open('error',function(err){
    console.error(err);
});