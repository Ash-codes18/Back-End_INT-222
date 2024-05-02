let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/task")


app.use(express.static('public'));

app.get('/' , function(req,res){

    res.sendFile(__dirname + '/task.html');

});

app.post('/apply', function(req,res){

    response={
        name:req.body.uname,
        marks:req.body.num,
    }

    console.log(response);

    const StudSchema = new mongoose.Schema({
        name:String,
        marks:Number
    });

    const Student = mongoose.model('Students', StudSchema);

    let data = new Student({Name:"req.body.uname",Marks:req.body.num})
    data.save()

    .then(doc=>{
        console.log(doc);
    })

    .catch(err=>{
        console.error(err);
    })

});


app.listen(3000);