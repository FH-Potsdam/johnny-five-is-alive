// Let's create a new socket and assign it to a local variable.
$(document).ready(function () {
  var socket = new io();
  // Establish a connection back to the server from the browser.
  socket.connect('http://localhost:3000', {
    autoConnect: true
  });


      var knob = $('.dial').knob({
        'min':0,
        'max':180,
        'angleOffset':270,
        'angleArc':180,
        'fgColor':'#000',
        'thickness':0.6,
        'change':function(v){
          // console.log(v);
          socket.send(v);

        }
      });


  // Attach an event to the click event of document's button.
  // $('#sendit').click(function () {
  // });
  // Create a handler for when a message arrives from the server.
  // socket.on('message', function (message) {
  //   // When a message arrives, toggle the body color.
  //   console.log(message);
  //   if (toggle === true) {
  //     $('body').css('background-color', 'black');
  //     toggle = !toggle;
  //   } else {
  //     $('body').css('background-color', 'white');
  //     toggle = !toggle;
  //   }
  // });
});