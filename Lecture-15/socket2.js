const { Console } = require('console');
const express=require('express');
const app=express();
const http=require('http').createServer(app);
const io=require('socket.io')(http);

app.get('/', function(req,res){
    res.sendFile(__dirname+"/"+"socket2.html");
})
io.on('connect',function(socket){
    socket.on('myevent',(data)=>{
        console.log(data);
    });
});
http.listen(2000);