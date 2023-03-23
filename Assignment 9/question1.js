/********************************************************************
 * 
 *  Question:  Create a event for several key presses, mouse curser 
 *             movement, and handle that events.
 * 
 *******************************************************************/

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