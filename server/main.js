/**
 * Created by stefan on 11.01.17.
 */


var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

app.use(express.static('../client'));
server.listen(8080);