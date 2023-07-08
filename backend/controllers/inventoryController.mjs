import inventoryModel from '../models/Inventory.mjs';

const test = (_req, _res, next) => {
  inventoryModel.test();
  return next();
};

const newItem = async (req, res, next) => {
  const result = await inventoryModel.addNewItem(req.body);

  if (typeof result === 'number') {
    console.log('Added new item to inventory');
    return next();
  }

  console.log('Failed to add item to inventory.', result);
  return next({});
};

const updateItem = async (req, res, next) => {
  const result = await inventoryModel.updateItem(req.body);

  if (result) {
    console.log('Updated item');
    return next();
  }

  console.log('Failed to update item');
  return next({});
};

const addCategory = async (req, res, next) => {
  const result = await inventoryModel.addCategory(req.body);

  if (typeof result === 'number') {
    console.log('Added new category');
    return next();
  }

  console.log('Failed to add new category.', result.message);
  return next();
};

const updateCategory = async (req, res, next) => {
  const result = await inventoryModel.updateCategory(req.body);

  if (result) {
    console.log('Updated category');
    return next();
  }

  console.log('Failed to update category');
  return next({});
};

const getCategories = async (req, res, next) => {
  const result = await inventoryModel.getCategories();

  if (result) {
    console.log(`Retrieved ${result.length} categories`);
    return next();
  }

  console.log('Failed to retrieve categories');
  return next({});
};

const getCategoryById = async (req, res, next) => {
  console.log(req.params);
  const result = await inventoryModel.getItemsByCategory(req.params);

  if (result.length) {
    console.log(`Retrieved ${result.length} items from category`);
    return next();
  }

  console.log('Failed to retrieve items from category');
  return next({});
};

export default {
  test,
  newItem,
  updateItem,
  getCategories,
  addCategory,
  updateCategory,
  getCategoryById,
};
