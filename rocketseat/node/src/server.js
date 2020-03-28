import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import requireDir from 'require-dir';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/node-api', {
  useNewUrlParser: true,
});

requireDir('./models');

app.use('/api', require('./routes'));

app.listen(3001, () => {
  console.log('Node porta 3001');
});