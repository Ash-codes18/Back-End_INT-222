const { Console } = require('console');
const express=require('express');
const app=express();
const http=require('http').createServer(app);
const io=require('socket.io')(http);

app.get('/', function(req,res){
    res.sendFile(__dirname+"/"+"broadcast.html");
})

var clients = 0;
io.on('connection',function(socket){

    clients++;
    socket.broadcast.emit('broadcast',{msg: clients + 'clients connected!'});
    socket.on('disconnect',function(){

        clients--;
        socket.broadcast.emit('broadcast',{msg:clients + 'clients connected!' })

    });
});

http.listen(2000,function(){
    console.log('listening on port 2000');
})