let d = require('fs');

d.unlink('delete.md', function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("\nFile Deleted Successfully!");
        }
    }
)
