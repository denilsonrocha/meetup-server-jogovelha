import express from 'express';
import routes from './routes';

import io from 'socket.io';
import http from 'http';

class App {

  constructor() {
    this.app = express();
    this.server = http.Server(this.app);

    this.socket();
    this.middleware();
    this.routes();

    this.connectedUsers = {};

  }

  socket() {
    this.io = io(this.server);

    this.io.on('connection', socket => {

      const { user_id } = socket.handshake.query;

      this.connectedUsers[user_id] = socket.id;

      this.io.on('disconnect', () => {
        delete this.connectedUsers[user_id];
      });
    });
  }

  middleware() {
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;

      next();
    });

  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app