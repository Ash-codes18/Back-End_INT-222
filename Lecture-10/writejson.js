let fs = require('fs');

let obj = {
    Name : "Ash",
    Credits : 3,
    Hours : 4
}

let json = JSON.stringify(obj);


fs.writeFile('data.json', json, function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Data written to file successfully");
    }
});

