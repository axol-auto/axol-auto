import inventoryModel from '../models/Inventory.mjs';

const test = (_req, _res, next) => {
  inventoryModel.test();
  return next();
};

export default {
  test,
};
