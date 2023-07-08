import query from './query.mjs';

async function getCategoryId(name) {
  const result = await query('select id from categories where name ilike $1', [
    name,
  ]);
  return result.rows?.[0]?.id || null;
}

const test = async () => {
  const result = await query('select id from categories limit 1', []);
  console.log(result);
};

const addNewItem = async ({
  name,
  price,
  category,
  subcategory,
  quantity,
  description = '',
  imageurl = '',
}) => {
  const categoryId = await getCategoryId(category);
  const subcategoryId = await getCategoryId(subcategory);

  const sql =
    'insert into inventory (name, price, category_id, subcategory_id, description, imageurl, quantity) values ($1, $2, $3, $4, $5, $6, $7)';
  const result = await query(sql, [
    name,
    price,
    categoryId,
    subcategoryId,
    description,
    imageurl,
    quantity,
  ]);

  return result.rowCount || result.message;
};

const updateItem = async ({
  id,
  name,
  price,
  category,
  subcategory,
  quantity,
  description,
  imageurl,
}) => {
  const categoryId = await getCategoryId(category);
  const subcategoryId = await getCategoryId(subcategory);

  const sql =
    'update inventory set name = $1, price = $2, category_id = $3, subcategory_id = $4, quantity = $5, description = $6, imageurl = $7 where id = $8';
  const result = await query(sql, [
    name,
    price,
    categoryId,
    subcategoryId,
    quantity,
    description,
    imageurl,
    id,
  ]);

  // console.log(result.rowCount);
  return result.rowCount > 0;
};

// const incrementInventoryQuantity = () => {};

// const decrementInventoryQuantity = () => {};

const addCategory = async ({ name, imageurl }) => {
  const categoryId = await getCategoryId(name);
  if (categoryId) return new Error('Duplicate category');

  const sql = 'insert into categories (name, imageurl) values ($1, $2)';
  const result = await query(sql, [name, imageurl]);

  return result.rowCount || result.message;
};

const updateCategory = async ({ id, name, imageurl }) => {
  const sql = 'update categories set name = $1, imageurl = $2 where id = $3';
  const result = await query(sql, [name, imageurl, id]);

  return result.rowCount > 0;
};

const getCategories = async () => {
  const result = await query('select * from categories', []);
  return result.rows;
};

const getItemsByCategory = async ({ id }) => {
  const result = await query('select * from inventory where category_id = $1', [
    id,
  ]);
  return result.rows;
};

export default {
  test,
  addNewItem,
  updateItem,
  // incrementInventoryQuantity,
  // decrementInventoryQuantity,
  addCategory,
  updateCategory,
  getCategories,
  getItemsByCategory,
};
