let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();

app.use(cookieParser);

app.get('/',function(req,res){
    res.cookie('course','NodeJs');
    res.send('Our Website uses cookies for better user experience');
    console.log(req.cookies.course);
});

app.get('/clear',function(req,res)w{
    res.clearCookie('course');
    res.send("The cookie has been deleted");
})

app.listen(2000,function(){
    console.log("Live at port 2000");
});