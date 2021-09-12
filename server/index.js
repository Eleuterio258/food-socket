var express = require("express");
var app = express();

var http = require("http").createServer(app);
var io = require("socket.io")(http, {
  cors: { origin: "*", methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }
});

const port = 5000;

app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html') });


io.on('connection', (socket) => {
  console.log('new com', socket.id);
  socket.on('msg', (msg) => {
    console.log(msg);
    socket.broadcast.emit('msg', msg);
  });
});
io.on('disconnect', function (){
  var msg = 'CLIENTE DART SAIU';
  socket.emit('msg', msg);
  console.log('SERVIDOR OFFLINE');
});

http.listen(port, () => console.log('SERVIDOR INICIADO NA POTA', port))