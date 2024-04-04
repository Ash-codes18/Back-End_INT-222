const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
app.use(cookieSession({
    name : 'session',
    keys : ['key1','key2'],
    // secret : 'key1',
    maxAge :15000
}));
app.get('/',(req,res)=>{
    if(req.session.views){
        req.session.views++;
        res.send("You have visited for "+req.session.views+" times.");
    }else{
        req.session.views=1;
        res.send("You have visited the site for the first time.");
    }
})
app.listen(3000);
