let express = require('express');
let app = express();
let expressSession = require('express-session');

app.use(expressSession({

    secret:'key',
    resave:true,
    saveUninitialized:true

}));


app.get('/',function(req,res){
    res.sendFile(__dirname+"/task.html");
})



app.get('/login',function(req,res){
    
    if(req.session.uname=="Ash" || req.session.pass=='123'){
        res.send("Login Successfull");
    }
    else{
        res.send("Login Failed");
    }

});


app.get('/logout',function(req,res){

    req.session.destroy();
    res.send("Logged out successfully");

})


app.get('/profile',function(req,res){
    res.send("This is Your profile which is only visible while you are logged in.");
})


app.listen(3345);