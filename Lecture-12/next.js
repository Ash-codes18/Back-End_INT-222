let express = require('express');
let app = express();


let myLogger = function(req, res, next){
    console.log('Before logging');
    next();
    console.log('After logging');
}

app.use(myLogger);

app.get('/', function(req,res){
    console.log('hemlo');
    res.send('Hello World!');
})

app.listen(3000);