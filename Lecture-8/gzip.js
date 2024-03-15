let zlib = require('zlib');
let data = "This is node js class";
zlib.gzip(data, function(err,buffer){
    if(err){
        console.log("Some error");
        return;
    }
    console.log(buffer.toString());

    zlib.gunzip(buffer,function(err, buffer){
        if(err){
            console.log("Encountered an error");
            return;
        }
        console.log(buffer.toString());
    })

});