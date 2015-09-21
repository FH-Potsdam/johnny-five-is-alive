var express = require('express');
var app = express();
var server = require('http').createServer(app);
var five = require('johnny-five');
var io = require('socket.io');
var socket = io.listen(server);
var board = new five.Board();
var port = 3000;
var led = null;
// setup the app
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
// setup the board
board.on("ready", function() {
  board_ready = true;
  // Initialize the RGB LED
  led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });
  led.on();
  led.color('#000000');

});

// now build the connection via socket
socket.on('connection', function(client) {
  if (led !== null && board_ready === true) {
    // log what the client is sending
    client.on('message', function(message) {
      console.log(message);
      led.color('#'+ message);
    });
  }
});
// run the server
console.log("listening on port http://localhost:" + port);
server.listen(port);