const http = require('http');
const express = require('express');
const path = require("path");
//const socketIo = require('socket.io');
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//socket.io
io.on('connection', (socket) => {
  socket.on("user-message", (message) => {
    console.log("A new user message",message);
    io.emit('message',message);
  })
});

app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html");
})

// Use the environment's port or default to 3000
const port = process.env.PORT || 3000;

server.listen(3000, () => 
console.log(`Server started at ${port}`)
);
