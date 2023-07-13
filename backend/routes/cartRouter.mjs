import { Router } from 'express';
import cartController from '../controllers/cartController.mjs';

const router = Router();

router.post('/', cartController.syncCart, (req, res) => {
  res.status(200).json(res.locals.cart);
});

export default router;
