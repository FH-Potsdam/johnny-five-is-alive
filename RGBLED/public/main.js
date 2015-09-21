// Let's create a new socket and assign it to a local variable.
//
// convert 0..255 R,G,B values to a hexidecimal color string
var RGBToHex = function(r,g,b){
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return new Array(7-h.length).join("0")+h;
    })(bin.toString(16).toUpperCase());
};

$(document).ready(function() {
  var socket = new io();
  var r = 0;
  var g = 0;
  var b = 0;
  // Establish a connection back to the server from the browser.
  socket.connect('http://localhost:3000', {
    autoConnect: true
  });
  // Attach an event to the click event of document's button.

  $('#red').on('change', function() {
    r = this.value;
    $('#redval').text("R: " + r);
    socket.send(RGBToHex(r,g,b));
  });
  $('#green').on('change', function() {
    g = this.value;
    $('#greenval').text("G: " + g);
    socket.send(RGBToHex(r,g,b));


  });
  $('#blue').on('change', function() {
    b = this.value;
    $('#blueval').text("B: " + b);
    socket.send(RGBToHex(r,g,b));
  });
});