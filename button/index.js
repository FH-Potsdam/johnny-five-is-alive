var express = require('express');
var app = express();
var server = require('http').createServer(app);
var five = require('johnny-five');
var io = require('socket.io');
var board = new five.Board();
// var j5 = require("./app/j5");
var port = 3000;

app.use('/', express.static(__dirname + '/public'));


app.get('/', function(req, res){
      res.sendfile('index.html');
  // res.send('hello j5');
});


board.on("ready", function() {
  board_ready = true;
button = new five.Button({
    pin: 2,
    isPullup: true
  });
});


console.log("listening on port http://localhost:" + port);
server.listen(3000);

var socket = io.listen(server);

socket.on('connection', function(client){
   if (button !== null && board_ready === true) {

    client.on('message', function(message) {
      console.log(message);
    });
    button.on('down',function(value){
      var message = "Hello client";
      client.send(message);
      console.log("button down");
    });
  }
  // client.on('message', function(message){
  //   console.log(message);
  // });

});