// Let's create a new socket and assign it to a local variable.
$(document).ready(function () {
  var socket = new io();
  var toggle = true;
  // Establish a connection back to the server from the browser.
  socket.connect('http://localhost:3000', {
    autoConnect: true
  });
  // Attach an event to the click event of document's button.
  $('#sendit').click(function () {
    var message = 'The time is now ' + new Date();
    // console.log('Sending the message "' + message + '"');
    socket.send(message);
  });
  // Create a handler for when a message arrives from the server.
  socket.on('message', function (message) {
    // When a message arrives, toggle the body color.
    console.log(message);
    if (toggle === true) {
      $('body').css('background-color', 'black');
      toggle = !toggle;
    } else {
      $('body').css('background-color', 'white');
      toggle = !toggle;
    }
  });
});