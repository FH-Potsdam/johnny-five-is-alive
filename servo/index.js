var express = require('express');
var app = express();
var server = require('http').createServer(app);
var five = require('johnny-five');
var io = require('socket.io');
var socket = io.listen(server);
var board = new five.Board();
var port = 3000;
// setup the app
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
// setup the board
board.on("ready", function() {
  var servo = new five.Servo(10);
  servo.center();
  // now build the connection via socket
  socket.on('connection', function(client) {
    // log what the client is sending
    // and turn the servo
    client.on('message', function(message) {
      console.log("Received value %d from socket.", message);
      servo.to(message);
    });
  });
});


// run the server
console.log("listening on port http://localhost:" + port);
server.listen(port);