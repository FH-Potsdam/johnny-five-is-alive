potentiometer
=============

Simple example using a poti attached as analog input and socket.io to communicate with the client side.  

![](fritzing/button_pullup.png)  

usage:  

    npm install && npm start  

- Wait for the REPL to be initialized.
- Open [http://localhost:3000/color](http://localhost:3000/color) or [http://localhost:3000/scroll](http://localhost:3000/scroll)
- turn the potentiometer and see what happens  
  

Known issues:  

- When the browser window already has the site [http://localhost:3000](http://localhost:3000) loaded the socket connection tries to establish before the board is initialized. (sometimes)  
- the scroll example is a bit buggy 