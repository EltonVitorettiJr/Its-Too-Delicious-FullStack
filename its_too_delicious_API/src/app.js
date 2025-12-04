import express from 'express';
import './database/index.js';
import routes from './routes.js';
import { resolve } from 'node:path';
import cors from 'cors';

class App {
  constructor() {
    this.app = express();
    this.app.use(cors('http://localhost:3000'));

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/products-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
