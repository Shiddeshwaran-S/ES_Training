process.on('message', (msg) => {
    console.log('message from parent process: ', msg);

    process.send('hello from child process');

    process.disconnect();

    console.log(process.arch);

    process.exit(0);
});