let rn = require('fs');

rn.rename('ren.md','renamed.md',function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("\nFile Renamed Successfully!");
        }
    }
)