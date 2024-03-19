let express = require('express');
let fs = require('fs');
let app = express();


app.get('/', function(req,res){
    res.sendFile(__dirname + '/task.html');
});

app.get('/apply',function(req,res){

    response={
        val1:req.query.val1,
        val2:req.query.val2
    }


    let sum = parseInt(response.val1)+parseInt(response.val2);

    console.log(response);

    res.write(`
    
        <p>The sum of the two numbers = ${sum}</p>
    
    `)

    res.end();

    

    fs.writeFile('task.json',JSON.stringify(response),function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Data written to the file successfully");
        }
    });

});

app.listen(2000);