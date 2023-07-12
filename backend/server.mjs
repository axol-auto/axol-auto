import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import userController from './controllers/usersController.mjs';
import userRouter from './routes/apiusers.mjs'
import inventoryRouter from './routes/inventoryRouter.mjs';

dotenv.config();

const app = express();
let users = [];

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRouter);

app.use('/api/inventory', inventoryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export default app;
