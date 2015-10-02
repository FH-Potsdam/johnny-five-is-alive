button
======

Simple example using a servo attached to pin 10 and socket.io to communicate with the client side.  
usage:  

    npm install && npm start  

- Wait for the REPL to be initialized.
- Open [http://localhost:3000](http://localhost:3000)  
- use the knob to turn the servo

Known issues:  

- When the browser window already has the site [http://localhost:3000](http://localhost:3000) loaded the socket connection tries to establish before the board is initialized.  
