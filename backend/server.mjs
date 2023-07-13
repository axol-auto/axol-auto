import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcrypt';
import userController from './controllers/usersController.mjs';
import userRouter from './routes/apiusers.mjs'
import inventoryRouter from './routes/inventoryRouter.mjs';
import orderRouter from './routes/orderRouter.mjs';
<<<<<<< HEAD
import cartRouter from './routes/cartRouter.mjs';
=======
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

>>>>>>> a8813f7427947c801d3524f9625214dd2cb132c9

dotenv.config();

const app = express();
let users = [];

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/api/users', userRouter);

app.use('/api/inventory', inventoryRouter);
app.use('/api/order', orderRouter);
app.use('/api/cart', cartRouter);

<<<<<<< HEAD
app.use((err, _req, res, _next) => {
=======
app.use('/', (req, res) => {  
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.use((err, _req, res, next) => {
>>>>>>> a8813f7427947c801d3524f9625214dd2cb132c9
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.message.err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export default app;
