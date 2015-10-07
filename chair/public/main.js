// Let's create a new socket and assign it to a local variable.
$(document).ready(function () {
  var socket = new io();
  var toggle = true;
  // Establish a connection back to the server from the browser.
  socket.connect('http://localhost:3000', {
    autoConnect: true
  });
  // Attach an event to the click event of document's button.
  // Create a handler for when a message arrives from the server.
  socket.on('message', function (message) {

    if(message === 0) {
      $('body').removeClass('down');
    } else {
      $('body').addClass('down');
    }
    
  });
});