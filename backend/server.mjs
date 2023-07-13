import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import inventoryRouter from './routes/inventoryRouter.mjs';
import orderRouter from './routes/orderRouter.mjs';
import cartRouter from './routes/cartRouter.mjs';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/inventory', inventoryRouter);
app.use('/api/order', orderRouter);
app.use('/api/cart', cartRouter);

app.use((err, _req, res, _next) => {
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
