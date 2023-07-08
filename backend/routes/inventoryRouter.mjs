import { Router } from 'express';
import inventoryController from '../controllers/inventoryController.mjs';

const router = Router();

router.get('/', inventoryController.test, (req, res) => res.end());

export default router;
