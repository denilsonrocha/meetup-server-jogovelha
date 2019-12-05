require("dotenv").config();

const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http)

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

  });
});

http.listen(process.env.PORT || 3333, function () {

  console.log('listening on port 3333')

});



