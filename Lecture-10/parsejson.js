let fs = require('fs');

fs.readFile('test.json', function(err, data){
    if(err){
        throw err;
    }

    let obj = JSON.parse(data);
    console.log(obj);

});