import express from 'express';
import environment from './config/environment';
import logger from 'morgan';

const app = express();

app.use(logger('dev', { skip: (req, res) => environment.env === 'test' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('hello world');
});

export default app;
