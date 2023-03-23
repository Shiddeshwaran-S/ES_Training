/**************************************************************************
 * 
 *  Question: Create a function which executes linux command (eg: ifconfig)
 *            from nodejs and prints the result in console.
 * 
 *************************************************************************/

const exec = require('child_process').exec;
const os = require('os');

var command = 'ifconfig';

if (os.platform() === 'win32') {
    command = 'ipconfig';
}

const echild = exec(command, { shell: true });

echild.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

echild.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

echild.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
