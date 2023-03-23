/********************************************************************
 * 
 *  Question:  Create a event for several key presses, mouse curser 
 *             movement, and handle that events.
 * 
 *******************************************************************/

const mouseEvents = require("global-mouse-events");
const keypress = require('keypress');
process.stdin.setRawMode(true);
keypress(process.stdin);

process.stdin.on('keypress', (str, key) => {
  if (key != undefined && key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    console.log(`${key === undefined ? 'undefied' : key.name} Key pressed!`,key);
  }
});

mouseEvents.on("mouseup", event => {
  console.log(event);
});

mouseEvents.on("mousedown", event => {
  console.log(event); 
});

mouseEvents.on("mousemove", event => {
  console.log(event);
});

mouseEvents.on("mousewheel", event => {
  console.log(event);
});