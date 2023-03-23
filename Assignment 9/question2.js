/********************************************************************
 * 
 *  Question: Explain difference ways in which child process can be 
 *            created and difference b/w them.
 * 
 *  Answer:   There are four ways to create child process in Node.js
 *             1. fork()
 *             2. spawn()
 *             3. exec()
 *             4. execFile()
 * 
 *           1. fork() - This method is used to create child process
 *                       and it is used to create child process with
 *                       communication channel.
 *           2. spawn() - This method is used to create child process
 *                        and it is used to create child process without
 *                        communication channel.
 *           3. exec() - This method creates a shell first and then 
 *                       executes the command.
 *           4. execFile() - This method does not spawn a shell by default.
 *                       It is slightly more efficient than child_process.exec()
 *                       as the specified executable file is spawned directly as
 *                       a new process.
 * 
 *******************************************************************/

// fork() example
const fchild = require('child_process').fork('child.js');

fchild.on('message', (msg) => {
  console.log('Message from child', msg);
}); 

fchild.send({ hello: 'world' });

fchild.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    console.log('\n=========================================================================================================\n');
});

// spawn() example
const spawn = require('child_process').spawn;
const schild = spawn('dir', { shell: true });

schild.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

schild.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

schild.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    console.log('\n=========================================================================================================\n');
});

// exec() example
const exec = require('child_process').exec;
const echild = exec('dir', { shell: true });

echild.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

echild.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

echild.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    console.log('\n=========================================================================================================\n');
});

// execFile() example
const execFile = require('child_process').execFile;
const efchild = execFile('dir', { shell: true });

efchild.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

efchild.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

efchild.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    console.log('\n=========================================================================================================\n');
});

