import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import userController from './controllers/usersController.js'

dotenv.config();

const app = express();
let users = [];

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/api/createaccount', userController.createAccount, (req, res, next) => {
  res.send('User created')
});

app.post('/api/login', userController.findUser, (req, res, next) => {
  res.send('Successful login')
});


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export default app;
