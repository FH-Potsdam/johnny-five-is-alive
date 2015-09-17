// Let's create a new socket and assign it to a local variable.
var mapper = function (val, in_min , in_max , out_min , out_max ) {
  return ( val - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
};

$(document).ready(function () {
  var socket = new io();
  // Establish a connection back to the server from the browser.
  socket.connect('http://localhost:3000', {
    autoConnect: true
  });
  // Attach an event to the click event of document's button.
  // $('#sendit').click(function () {
  //   var message = 'The time is now ' + new Date();
  //   // console.log('Sending the message "' + message + '"');
  //   socket.send(message);
  // });
  // Create a handler for when a message arrives from the server.
  socket.on('message', function (message) {
    // When a message arrives, toggle the body color.
    var h = $(document).height(); //returns window height;
    var p = Math.floor(mapper(message,0, 1023,0,h));
    console.log(p);
    $("html, body").animate({ scrollTop: p+"px" });
      // $('body').scrollTo(p);

  });
});