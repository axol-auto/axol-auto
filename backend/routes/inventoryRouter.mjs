import { Router } from 'express';
import inventoryController from '../controllers/inventoryController.mjs';

const router = Router();

router.get('/', inventoryController.test, (req, res) => res.end());

router.post('/item', inventoryController.newItem, (_req, res) => res.end());

router.put('/item', inventoryController.updateItem, (_req, res) => res.end());

router.get('/category', inventoryController.getCategories, (req, res) =>
  res.end()
);

router.post('/category', inventoryController.addCategory, (_req, res) =>
  res.end()
);

router.put('/category', inventoryController.updateCategory, (req, res) =>
  res.end()
);

router.get('/category/:id', inventoryController.getCategoryById, (req, res) => {
  res.end();
});

export default router;
