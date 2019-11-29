const app = require('express')()

const http = require('http').createServer(app)

const io = require('socket.io')(http)

app.get('/', (req, res) => {

  res.json({ nome: 'teste' })

})

let messages = [];

let matriz = [
  ["a", "y", "y"],
  ["y", "y", "y"],
  ["y", "y", "y"],
]

io.on('connection', (socket) => {

  console.log('New connection', socket.id);

  io.sockets.emit('receivedMessage', matriz);

  socket.on('sendMessage', data => {
    console.log(data);
    messages.push(data);

    //io.sockets.emit('sendMessage', data);
    socket.broadcast.emit('receivedMessage', data);

  });

})

http.listen(3334, function () {

  console.log('listening on port 3334')

})


// import app from './app';

// app.listen(3334);