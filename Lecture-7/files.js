let fs = require('fs');


//Opening the file

fs.open('copied.md', 'r+', (err, fd) => {
    if (err) {
        console.log("Error opening the file");
    }
    else{
        console.log("File opened successfully");
    }


//Reading data from the file
    fs.read(fd,function(err,bytesread,buffer){
        if(err){
            console.log("Error reading file contents");
        }
        else{
            console.log(buffer.toString());
            console.log(bytesread);
        }
    })

    let buff=Buffer.from("Writing content to the file\n");


//Writing data to the file
    fs.write(fd,buff,0,buff.length,function(err,writtenbytes){
        if(err){
            console.log("Error writing data to the file");
        }
        else{
            console.log(writtenbytes+" bytes of data successfully written to the file");
        }
    })



//Closing the file
    fs.close(fd,function(err){
        if(err){
            console.log("Error closing the file");
        }
        else{
            console.log("File closed successfully");
        }
    })

});