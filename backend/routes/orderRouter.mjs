import { Router } from 'express';
import orderController from '../controllers/orderController.mjs';
import userController from '../controllers/usersController.mjs';

const router = Router();

router.post('/', userController.checkSession, userController.createSession, orderController.createOrder, (_req, res) => {
  res
    .status(200)
    .json({ status: 'Order created', orderId: res.locals.orderId });
});

router.put('/', userController.checkSession, userController.createSession, orderController.cancelOrder, (_req, res) => {
  res.status(200).json({ status: 'Order cancelled' });
});

export default router;
