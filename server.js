const express = require('express');
const app = express();
const http = require("http");
const path = require("path");
const socketio = require('socket.io');
const parseArgs = require("minimist");


const layouts = require('express-ejs-layouts'),
    morgan = require('morgan'),
    router = require('./routes/index');

const server = http.createServer(app);
const io = socketio(server);
const args = parseArgs(process.argv.slice(2));
const {name = 'default', port = '8080'} = args;

//app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
//
app.use(express.static('public'));
app.use(morgan('combined'));

app.use(express.json());
app.use(layouts);
app.use(express.urlencoded({
    extended: false
}));


app.use("/", router);


// app.listen(app.get('port'), () => {
//
//     console.log(`...server started  http://localhost:${app.get(`port`)}`)
// })
io.on('connection', (sock) => {
    console.log('Client connected');

    sock.on('heartbeat', (payload) => {
        payload.nodeName = name;
        sock.emit('heartbeat', payload);
    });

    sock.on('disconnect', () => {
        console.log('Socket Disconnected');
    });
});

server.listen(+port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err.stack);
        return;
    }

    console.log(`Node [${name}] listens on http://127.0.0.1:${port}.`);
});



console.log("...no issues so far 😐")