const express = require('express');
const http = require('http'); // Require HTTP module explicitly for creating the server
const socket = require('socket.io');
const app = express();
const server = http.createServer(app); // Create HTTP server with Express app
const io = socket(server);

app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

let count = 0;

io.on('connection', (socket) => {
    console.log(`New socket connection: ${socket.id}`);

    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message); // Broadcast message to all clients
        socket.emit('messageReceived', { messageId: message }); // Emit to sender
        console.log('Message received from client:', message);
    });
});
