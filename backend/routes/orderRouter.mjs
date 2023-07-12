import { Router } from 'express';
import orderController from '../controllers/orderController.mjs';

const router = Router();

router.post('/', orderController.createOrder, (_req, res) => {
  res
    .status(200)
    .json({ status: 'Order created', orderId: res.locals.orderId });
});

router.put('/', orderController.cancelOrder, (_req, res) => {
  res.status(200).json({ status: 'Order cancelled' });
});

export default router;
