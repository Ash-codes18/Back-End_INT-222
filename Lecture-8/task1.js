// Write a Node js program that prompts users to input data, writes the input to a file named "test.txt", and then reads the content of the same file to display it back to the user. Your solution should handle errors appropriately. Use createReadStream and createWriteStream for the same


let inp=require('prompt-sync')();
let fs=require('fs');

let data=inp("Enter data to write into the file : ");
let writer = fs.createWriteStream('task1.txt');


writer.write(data, function(err) {
    if (err) {
        console.error('Error writing to file:', err);
    }
    else {
        console.log('Data written to test.txt');
        writer.close();

        let reader = fs.createReadStream('task1.txt');

        reader.on('data', function(chunk) {
            console.log(chunk.toString());
        });

        reader.on('error', (err) => {
            console.error('Error reading file:', err);
        });
    }
});
