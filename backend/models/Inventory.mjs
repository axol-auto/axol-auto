import query from './query.mjs';

const test = async () => {
  const result = await query('select id from categories limit 1', []);
  console.log(result);
};

const addNewItem = async (
  name,
  price,
  category,
  subcategory,
  description = '',
  imgurl = '',
  quantity = 0
) => {
  const categoryResult = await query(
    'select id from categories where name ilike $1',
    [category]
  );
  const categoryId = categoryResult.rows[0]?.id || null;
  const subcategoryResult = await query(
    'select id from categories where name ilike $1',
    [subcategory]
  );
  const subcategoryId = subcategoryResult.rows[0]?.id || null;

  const sql =
    'insert into inventory (name, price, category, subcategory, description, imgurl, quantity) values ($1, $2, $3, $4, $5, $6, $7)';
  const result = await query(sql, [
    name,
    price,
    categoryId,
    subcategoryId,
    description,
    imgurl,
    quantity,
  ]);

  return result;
};

const updateItem = () => {};

const incrementInventoryQuantity = () => {};

const decrementInventoryQuantity = () => {};

const addCategory = () => {};

const updateCategory = () => {};

const getCategories = () => {};

const getItemsByCategory = () => {};

export default {
  test,
  addNewItem,
  updateItem,
  incrementInventoryQuantity,
  decrementInventoryQuantity,
  addCategory,
  updateCategory,
  getCategories,
  getItemsByCategory,
};
