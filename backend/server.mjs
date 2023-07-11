import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import inventoryRouter from './routes/inventoryRouter.mjs';
import { fileURLToPath } from 'url';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/inventory', inventoryRouter);

// JP - set up server-side request handling for React Router endpoints?
/*
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/public/index.html'));
});
*/


app.use((err, _req, res) => {
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
