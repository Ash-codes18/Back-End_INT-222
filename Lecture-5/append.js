let a = require('fs');

let add="Oh! I love it and I hate it at the same time...."

a.appendFile('copied.md',add,function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("\nData added to the file succesfully");
        }
    }
)