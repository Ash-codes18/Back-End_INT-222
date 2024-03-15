// Write a Node js program that reads the content of a file named "input.txt", converts the text to uppercase and writes the modified content to a new file named "output.txt". Use createReadStream and createWriteStream for the same

let fs=require('fs');

let reader=fs.createReadStream('task1.txt');
let readData='';

reader.on('data',function(chunk){
    readData=chunk.toString();

    readData=readData.toUpperCase();

    let writer=fs.createWriteStream('output.txt');
    
    writer.write(readData);


});

