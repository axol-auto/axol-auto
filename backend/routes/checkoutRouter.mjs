import { Router } from 'express';
import checkoutController from '../controllers/checkoutController.mjs';

const router = Router();

router.post('/', checkoutController.checkout, (req, res) => {
  res.send(res.locals.redirect);
});

// router.post('/', (req, res) => res.send('hi'));

export default router;
