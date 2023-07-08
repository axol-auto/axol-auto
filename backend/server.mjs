import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import userController from './controllers/usersController.mjs';
import userRouter from './routes/apiusers.mjs'

dotenv.config();

const app = express();
let users = [];

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRouter);


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export default app;
