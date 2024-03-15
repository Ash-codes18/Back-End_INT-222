let http = require('http');
let fs = require('fs');



let server = http.createServer(function (req, res){
   
    fs.readFile('task.json', function(err, data){
        
        if(err){
            res.write("Can't read the JSON file");
            res.end();
        }
        
        else{
            let obj = JSON.parse(data);    
            res.write("<table style='border : 1px solid black'>");
            res.write(`<tr>
                <td style='border : 1px solid black'>First Name</td>
                <td style='border : 1px solid black'>Last Name</td>
            </tr>`);

            for (let i=0;i<obj.Students.length;i++) {
                
                res.write(`<tr><td style='border : 1px solid black'>${obj.Students[i].firstName}</td><td style='border : 1px solid black'>${obj.Students[i].lastName}</td></tr>`)

            }
            res.write("</table>");
            res.end();
        }

        // console.log(obj);
        // console.log(obj.Students[1].firstName + " " + obj.Students[1].lastName);
        console.log("Request Made");
        
    });

});

server.listen(2000, function () {
    console.log("Listening on port 2000");
});    







