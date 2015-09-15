var express = require("express");
var app = express();
var j5 = require("./app/j5");
var port = 3000;

app.use('/', express.static(__dirname + '/public'));


app.get('/', function(req, res){
      res.sendfile('index.html');
  // res.send('hello j5');
});

app.post('/on', function(req, res){
  j5.on();
});

app.post('/off', function(req, res){
  j5.off();
});

// app.get("/on", function(req, res) {
//   j5.on();
//   res.send("on");
// });

// app.get("/off", function(req, res) {
//   j5.off();
//   res.send("off");
// });
console.log("listening on port http://localhost:" + port);
app.listen(port);