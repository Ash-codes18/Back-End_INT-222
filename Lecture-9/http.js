let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res){
    if(req.url == '/lpuadmissions'){
        fs.readFile('form.html', function (err, data){
            if(err){
                res.write("Can't read the HTML file");
                res.end();
            }
            else{
                res.write(data);
                res.end();
            }
        });
    }
    else{
        res.write("Page not found");
        res.end();
    }

    console.log("Request Made");
});

server.listen(2000, function () {
    console.log("Listening on port 2000");
});
