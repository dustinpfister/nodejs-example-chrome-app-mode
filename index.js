#!/usr/bin/env node
// using exec
let exec = require('child_process').exec,
path = require('path');
// getting a post and appURL string
let port = process.argv[2] || 8000,
appURL = 'http://localhost:' + port;
// start express app
let express = require('express'),
app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// public js folder
app.use('/js', express.static('public/js'));
// root path
app.get('/', (req, res) => {
    res.render('index',{});
});
app.use(require('body-parser').json());
app.post('/', (req, res) => {
    console.log('post request');
    console.log(req.body);

    if(req.body){
       if(req.body.action === 'kill'){
           process.exit(0);
       }
    }

    res.json({
        action: 'okay'
    });
});
// start express app on port and start chrome child process
app.listen(port, function () {
    console.log('nodejs express app is up on port: ' + port);
    // start chrome in app mode
    let com = 'chromium-browser --app=' + appURL + ' --new-window --incognito';
    console.log('starting chrome in app mode');
    console.log(com);
    // the chrome child
    let chromeChild = exec(com, {
        cwd: process.cwd()
    });
    chromeChild.stdout.on('data', (data) => {
        console.log(data);
    });
    chromeChild.on('message', (data) => {
        console.log('message');
    });
    // on exit of chrome child kill this process
    chromeChild.on('exit', () => {
        console.log('cromeChild exit');
        //process.exit();
    })
});
