let c = require('fs');

c.copyFile('Testwrite.md','copied.md',function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("\nFile data copied to copied.md Successfully!");
        }
    }
)