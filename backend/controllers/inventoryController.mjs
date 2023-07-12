import inventoryModel from '../models/Inventory.mjs';

const getAllItems = async (_req, res, next) => {
  const result = await inventoryModel.getAllItems();
  if (result) {
    res.locals.data = result;
    return next();
  }
  return next({ message: { err: 'Failed to get items' } });
};

const newItem = async (req, res, next) => {
  const result = await inventoryModel.addNewItem(req.body);

  if (typeof result === 'number') {
    console.log('Added new item to inventory');
    return next();
  }

  console.log('Failed to add item to inventory.', result);
  return next({ message: { err: 'Failed to add item to inventory' } });
};

const updateItem = async (req, res, next) => {
  const result = await inventoryModel.updateItem(req.body);

  if (result) {
    console.log('Updated item');
    return next();
  }

  console.log('Failed to update item');
  return next({ message: { err: 'Failed to update item' } });
};

const addCategory = async (req, res, next) => {
  const result = await inventoryModel.addCategory(req.body);

  if (typeof result === 'number') {
    console.log('Added new category');
    return next();
  }

  console.log('Failed to add new category.', result.message);
  return next({ message: { err: 'Failed to add new category' } });
};

const updateCategory = async (req, res, next) => {
  const result = await inventoryModel.updateCategory(req.body);

  if (result) {
    console.log('Updated category');
    return next();
  }

  console.log('Failed to update category');
  return next({ message: { err: 'Failed to add new category' } });
};

const getCategories = async (req, res, next) => {
  const result = await inventoryModel.getCategories();

  if (result) {
    console.log(`Retrieved ${result.length} categories`);
    res.locals.data = result;
    return next();
  }

  console.log('Failed to retrieve categories');
  return next({ message: { err: 'Failed to retrieve categories' } });
};

const getCategoryById = async (req, res, next) => {
  // console.log(req.params);
  const result = await inventoryModel.getItemsByCategory(req.params);
  // console.log(result);
  if (result.length) {
    console.log(`Retrieved ${result.length} items from category`);
    res.locals.data = result;
    return next();
  }

  console.log('Failed to retrieve items from category');
  return next({ message: { err: 'Failed to retrieve items from category' } });
};

export default {
  getAllItems,
  newItem,
  updateItem,
  getCategories,
  addCategory,
  updateCategory,
  getCategoryById,
};
