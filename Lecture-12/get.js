let express = require('express');
const { extend } = require('jquery');
let app = express();
let bodyParser = require('body-parser');
let fs = require('fs');
app.use(bodyParser.urlencoded({extended:false}));


app.get('/' , function(req,res){

    res.sendFile(__dirname + '/form.html');

});

app.post('/apply', function(req,res){

    response={
        username:req.body.uname,
        password:req.body.pass,
        contact:req.body.num,
        address:req.body.addr
    }

    console.log(response);
    // res.send(response);

    res.write(`

    <table style="border : 1px solid black;">
    
    <tr style="border : 1px solid black;">
    <th style="border : 1px solid black;">S.No.</th>
    <th style="border : 1px solid black;">Username</th>
    <th style="border : 1px solid black;">Password</th>
    <th style="border : 1px solid black;">Contact No.</th>
    <th style="border : 1px solid black;">Address</th>
    </tr>


    <tr style="border : 1px solid black;">
    <td style="border : 1px solid black;">1.</td>
    <td style="border : 1px solid black;">${response.username}</td>
    <td style="border : 1px solid black;">${response.password}</td>
    <td style="border : 1px solid black;">${response.contact}</td>
    <td style="border : 1px solid black;">${response.address}</td>
    </tr>


    </table>

    `)
    res.end();


    fs.writeFile('Form_Data.json',JSON.stringify(response),function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Data written to the file successfully");
        }
    });


});


app.listen(3000);