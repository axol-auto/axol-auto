import { Router } from 'express';
import cartController from '../controllers/cartController.mjs';

const router = Router();

router.get('/', cartController.getCart, (req, res) => {
  res.status(200).json(res.locals.cart);
});

router.post('/', cartController.syncCart, (req, res) => {
  res.status(200).json(res.locals.cart);
});

export default router;
