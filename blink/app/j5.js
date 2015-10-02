var exports = module.exports = {};
var five = require("johnny-five");
var board = new five.Board();
var board_ready = false;
var led = null;

// this is just for test porpuse
// when there is no board
// var led = {
//   on: function(){
//     console.log("on");
//   },
//   off:function(){
//     console.log("off");
//   }
// };

board.on("ready", function() {
  board_ready = true;
  led = new five.Led(13);
    this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      led.on();
      return 1;
    },
    off: function() {
      led.off();
      return 0;
    }
  });
});

exports.on = function() {
  if (led !== null && board_ready === true) {
    led.on();
    return 1;
  }
};

exports.off = function() {
  if (led !== null && board_ready === true) {
    led.off();
    return 0;
  }
};