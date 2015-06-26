var express = require("express");
var app = express();
var j5 = require("./j5");
var port = 3000;
app.get('/', function(req, res){
  res.send('hello j5');
});

app.get("/on", function(req, res) {
  j5.on();
  res.send("on");
});

app.get("/off", function(req, res) {
  j5.off();
  res.send("off");
});
console.log("listening on port http://localhost:" + port);
app.listen(3000);