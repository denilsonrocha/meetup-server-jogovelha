import express from 'express';
import routes from './routes';

import io from 'socket.io';
import http from 'http';

class App {

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);


    this.middleware();
    this.routes();

    this.connectedUsers = {};

    //this.socket();

  }

  socket() {
    this.io = io(this.server);

    console.log('teste ->');

    this.io.on('connection', socket => {

      console.log('New connection', socket)

      // const { user_id } = socket.handshake.query;


      // this.connectedUsers[user_id] = socket.id;

      // this.io.on('disconnect', () => {
      //   delete this.connectedUsers[user_id];
      // });
    });
  }

  middleware() {
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;
      console.log(req.connectedUsers);
      next();
    });

  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app