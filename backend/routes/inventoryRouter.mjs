import { Router } from 'express';
import inventoryController from '../controllers/inventoryController.mjs';

const router = Router();

router.get('/', inventoryController.getAllItems, (req, res) =>
  res.json(res.locals.data)
);

router.post('/item', inventoryController.newItem, (_req, res) =>
  res.send('Added item to inventory')
);

router.put('/item', inventoryController.updateItem, (_req, res) =>
  res.send('Updated item in inventory')
);

router.get('/category', inventoryController.getCategories, (req, res) =>
  // get an array
  res.json(res.locals.data)
);

router.post('/category', inventoryController.addCategory, (_req, res) =>
  res.send('Added category')
);

router.put('/category', inventoryController.updateCategory, (req, res) =>
  res.send('Updated category')
);

router.get('/category/:id', inventoryController.getCategoryById, (req, res) => {
  // get an array
  res.json(res.locals.data);
});

export default router;
