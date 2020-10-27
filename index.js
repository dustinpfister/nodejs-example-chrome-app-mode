#!/usr/bin/env node
// using exec
let exec = require('child_process').exec;
// getting a post and appURL string
let port = process.argv[2] || 8000,
appURL = 'http://localhost:' + port;
// start express app
let express = require('express'),
app = express();
// root path
app.get('/', (req, res) => {
   res.send('foo');
});
// start express app on port and start chrome child process
app.listen(port, function () {
 
    console.log('nodejs express app is up on port: ' + port);

    // start chrome in app mode
    let com = 'chromium-browser --app=' + appURL + ' --new-window';
    console.log('starting chrome in app mode');
    console.log(com);
    let chromeChild = exec(com, {
        cwd: process.cwd()
    });
});
