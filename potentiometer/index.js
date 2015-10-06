var express = require('express');
var app = express();
var server = require('http').createServer(app);
var five = require('johnny-five');
var io = require('socket.io');
var socket = io.listen(server);
var board = new five.Board();
var port = 3000;
var sensor = null;
// setup the app
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname
  });
});
app.get('/color', function(req, res) {
  res.sendFile('public/color.html', {
    root: __dirname
  });
});
app.get('/scroll', function(req, res) {
  res.sendFile('public/scroll.html', {
    root: __dirname
  });
});
// setup the board
// see http://johnny-five.io/examples/sensor/
board.on("ready", function() {
  var sensor = new five.Sensor('A0');
  // now build the connection via socket
  socket.on('connection', function(client) {
    // log what the client is sending
    client.on('message', function(message) {
      console.log(message);
    });
    // When the sensor value changes, log the value
    sensor.on("change", function() {
      var message = this.value;
      client.send(message);
      console.log("Sensor value: %d", this.value);
    });

  });
});
// run the server
console.log('listening on port http://localhost:' + port + '/color or scroll');
server.listen(port);