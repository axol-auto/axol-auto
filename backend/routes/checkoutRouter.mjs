import { Router } from 'express';
import checkoutController from '../controllers/checkoutController.mjs';

const router = Router();

router.post('/', checkoutController.checkout);

export default router;
