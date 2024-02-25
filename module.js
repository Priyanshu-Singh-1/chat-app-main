//create socket io server and connection
// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors());

const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //tells to host server on localhost:3000


//Playing variables:
app.use(express.static('public')); //show static files in 'public' directory
console.log('Server is running');
const io = socket(server);

var count = 0;


//Socket.io Connection------------------
//check if io.on is working
// if (io) {
//     console.log("Socket.io server is running", io)
// }

//check if io.on('connection') is working
io.on('connection', (socket) => {
    console.log("New socket connection: " + socket.id)
})
io.on('connection', (socket) => {
    //check if socket is connected
    if (socket.connected) {
        console.log("Socket connected: " + socket.id)
    }
    console.log("New socket connection: " + socket.id)

    // socket.on('counter', () => {
    //     count++;
    //     console.log(count)
    //     io.emit('counter', count);
    // })

    socket.on('sendMessage', (message) => {

        io.emit('receiveMessage', message); // Broadcast message to all clients
        socket.emit('messageReceived', { messageId: message});
        console.log('Message received from client:', message); // Add logging

        res.send(message)
    });
})