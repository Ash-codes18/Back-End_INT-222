const { Console } = require('console');
const express=require('express');
const app=express();
const http=require('http').createServer(app);
const io=require('socket.io')(http);

app.get('/', function(req,res){
    res.sendFile(__dirname+"/"+"socket.html");
})
io.on('connect',function(socket){
    console.log('A user is connected');
    setInterval(mess,10000);
    setInterval(() => {
        io.emit('myevent', { message: 'Hey client' });
      }, 3000);
    socket.on('disconnect',function(){
        console.log("Disconnected");
    });
})
function mess(){
    console.log('user is still connected');
}
http.listen(2000);