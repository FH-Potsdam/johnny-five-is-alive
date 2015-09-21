RGBLED
======

Simple example using a RGBLED and socket.io to communicate with the client side.  

usage:  

    npm install && npm start  

- Wait for the REPL to be initialized.
- Open [http://localhost:3000](http://localhost:3000)  
- use the sliders to adjust the color  
Known issues:  

- When the browser window already has the site [http://localhost:3000](http://localhost:3000) loaded the socket connection tries to establish before the board is initialized.  
