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
  board_ready = true;
  button = new five.Button({
    pin: 2,
    isPullup: true
  });
});

// now build the connection via socket
socket.on('connection', function(client) {
  if (button !== null && board_ready === true) {
    // log what the client is sending
    client.on('message', function(message) {
      console.log(message);
    });
    // on press send something to the client
    button.on('down', function(value) {
      var message = "Hello client";
      client.send(message);
      console.log("button down");
    });
  }
});
// run the server
console.log("listening on port http://localhost:" + port);
server.listen(port);