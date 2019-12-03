const app = require('express')()

const http = require('http').createServer(app)

const io = require('socket.io')(http)

app.get('/', (req, res) => {

  res.json({ nome: 'teste' })

})

io.on('connection', (socket) => {

  console.log('New connection', socket.id);

  //io.sockets.emit('receivedMessage', matriz);

  socket.on('sendTabuleiro', data => {
    console.log(data);

    socket.broadcast.emit('recebeTabuleiro', data);

  });

  socket.on('sendJogadorAtual', jogador => {

    console.log(jogador);

    socket.broadcast.emit('recebeJogadorAtual', jogador);

  })

})

http.listen(3333, function () {

  console.log('listening on port 3333')

})



// app.listen(3334);