// Let's create a new socket and assign it to a local variable.
$(document).ready(function() {
var socket = new io();
var toggle = true;

// Establish a connection back to the server from the browser.
socket.connect('http://localhost:3000', { autoConnect: true});


  // Attach an event to the click event of document's body.

    $('#sendit').click(function(){
    var message = 'The time is now ' + new Date();
    // console.log('Sending the message "' + message + '"');
    socket.send(message);

    });
    // Come up with some kind of stupid message.

    // Send the message to the server.



// Create a handler for when a message arrives from the server.
socket.on('message', function(message) {
  // When a message arrives, replace the body of the document with the message.
  console.log(message);
  if(toggle === true){
  $('body').css('background-color','black');
  toggle = !toggle;
}else{
  $('body').css('background-color','white');
  toggle = !toggle;
}
});

// $( document ).ready(function() {
//     console.log( "ready!" );
// $('#on').click(function() {
//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/on'
//     });
// });
// $('#off').click(function() {
//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/off'
//     });
// });
// });

});

